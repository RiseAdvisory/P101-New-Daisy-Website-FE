import { render } from '@testing-library/react';
import { SoftwareApplicationSchema } from '../SoftwareApplicationSchema';

describe('SoftwareApplicationSchema', () => {
  it('renders a script tag with application/ld+json type', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');

    expect(scriptTag).toBeInTheDocument();
  });

  it('contains valid JSON-LD structure', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const jsonContent = scriptTag?.innerHTML;

    expect(() => JSON.parse(jsonContent || '')).not.toThrow();

    const schema = JSON.parse(jsonContent || '');
    expect(schema['@context']).toBe('https://schema.org');
    expect(schema['@type']).toBe('SoftwareApplication');
  });

  it('contains correct application metadata', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema.name).toBe('The Daisy');
    expect(schema.applicationCategory).toBe('BusinessApplication');
    expect(schema.applicationSubCategory).toBe('Booking & Scheduling Software');
    expect(schema.operatingSystem).toBe('Web browser, iOS, Android');
    expect(schema.url).toBe('https://jointhedaisy.com');
  });

  it('contains all 6 subscription plan offers', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema.offers).toBeDefined();
    expect(schema.offers['@type']).toBe('AggregateOffer');
    expect(schema.offers.offerCount).toBe('6');
    expect(schema.offers.offers).toHaveLength(6);
  });

  describe('Professional Plans', () => {
    let schema: Record<string, unknown>;
    let offers: Array<Record<string, unknown>>;

    beforeEach(() => {
      const { container } = render(<SoftwareApplicationSchema />);
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      schema = JSON.parse(scriptTag?.innerHTML || '');
      offers = (schema.offers as Record<string, unknown>).offers as Array<
        Record<string, unknown>
      >;
    });

    it('contains Starter Plan with correct pricing (Free)', () => {
      const starterPlan = offers.find((o) =>
        (o.name as string).includes('Starter')
      );

      expect(starterPlan).toBeDefined();
      expect(starterPlan?.price).toBe('0');
      expect(starterPlan?.priceCurrency).toBe('USD');
      expect((starterPlan?.description as string)).toContain('First 100 bookings free');
    });

    it('contains Professional Plan with correct pricing ($50/month)', () => {
      const professionalPlan = offers.find(
        (o) => o.name === 'Professional Plan'
      );

      expect(professionalPlan).toBeDefined();
      expect(professionalPlan?.price).toBe('50');
      expect(professionalPlan?.priceCurrency).toBe('USD');

      const priceSpec = professionalPlan?.priceSpecification as Record<
        string,
        unknown
      >;
      expect(priceSpec?.billingDuration).toBe('P1M');
    });

    it('contains Elite Plan with correct pricing ($100/month)', () => {
      const elitePlan = offers.find((o) =>
        (o.name as string).includes('Elite')
      );

      expect(elitePlan).toBeDefined();
      expect(elitePlan?.price).toBe('100');
      expect((elitePlan?.description as string)).toContain('2 workspaces');
      expect((elitePlan?.description as string)).toContain('2 countries');
    });
  });

  describe('Business Plans', () => {
    let schema: Record<string, unknown>;
    let offers: Array<Record<string, unknown>>;

    beforeEach(() => {
      const { container } = render(<SoftwareApplicationSchema />);
      const scriptTag = container.querySelector('script[type="application/ld+json"]');
      schema = JSON.parse(scriptTag?.innerHTML || '');
      offers = (schema.offers as Record<string, unknown>).offers as Array<
        Record<string, unknown>
      >;
    });

    it('contains Basic Business Plan with correct pricing ($50/month)', () => {
      const basicPlan = offers.find((o) =>
        (o.name as string).includes('Basic')
      );

      expect(basicPlan).toBeDefined();
      expect(basicPlan?.price).toBe('50');
      expect((basicPlan?.description as string)).toContain('5 users/calendars');
      expect((basicPlan?.description as string)).toContain('14-day trial');
    });

    it('contains Growth Business Plan with correct pricing ($150/month)', () => {
      const growthPlan = offers.find((o) =>
        (o.name as string).includes('Growth')
      );

      expect(growthPlan).toBeDefined();
      expect(growthPlan?.price).toBe('150');
      expect((growthPlan?.description as string)).toContain('10 users/calendars');
      expect((growthPlan?.description as string)).toContain('2 workspaces');
    });

    it('contains Business Plan with correct pricing ($250/month)', () => {
      const businessPlan = offers.find((o) => o.name === 'Business Plan');

      expect(businessPlan).toBeDefined();
      expect(businessPlan?.price).toBe('250');
      expect((businessPlan?.description as string)).toContain('15 users/calendars');
      expect((businessPlan?.description as string)).toContain('4 workspaces');
    });
  });

  it('contains required feature list', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema.featureList).toBeDefined();
    expect(Array.isArray(schema.featureList)).toBe(true);
    expect(schema.featureList.length).toBeGreaterThan(0);
    expect(schema.featureList).toContain('Online appointment booking');
    expect(schema.featureList).toContain('Client management and CRM');
  });

  it('contains correct price range in aggregate offer', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema.offers.lowPrice).toBe('0');
    expect(schema.offers.highPrice).toBe('250');
    expect(schema.offers.priceCurrency).toBe('USD');
  });

  it('contains audience information', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema.audience).toBeDefined();
    expect(schema.audience['@type']).toBe('BusinessAudience');
    expect(schema.audience.audienceType).toContain('Salons');
    expect(schema.audience.audienceType).toContain('Spas');
  });

  it('matches snapshot for JSON-LD schema structure', () => {
    const { container } = render(<SoftwareApplicationSchema />);
    const scriptTag = container.querySelector('script[type="application/ld+json"]');
    const schema = JSON.parse(scriptTag?.innerHTML || '');

    expect(schema).toMatchSnapshot();
  });
});
