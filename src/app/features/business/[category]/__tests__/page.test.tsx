import { notFound } from 'next/navigation';
import {
  generateStaticParams,
  generateMetadata,
} from '../page';
import Page from '../page';
import { render } from '@testing-library/react';

jest.mock('next/navigation', () => ({
  notFound: jest.fn(),
}));

jest.mock('@/components/featureDeepDive/FeatureDeepDiveClient', () => ({
  FeatureDeepDiveClient: ({
    userType,
    slug,
  }: {
    userType: string;
    slug: string;
  }) => (
    <div data-testid="feature-deep-dive-client">
      {userType}/{slug}
    </div>
  ),
}));

describe('Business Feature Deep-Dive Page', () => {
  describe('generateStaticParams', () => {
    it('returns array of objects with category property', () => {
      const params = generateStaticParams();
      expect(Array.isArray(params)).toBe(true);
      params.forEach((p) => {
        expect(p).toHaveProperty('category');
        expect(typeof p.category).toBe('string');
      });
    });

    it('includes known category slug', () => {
      const params = generateStaticParams();
      const slugs = params.map((p) => p.category);
      expect(slugs).toContain('ai-powered-intelligence');
    });
  });

  describe('generateMetadata', () => {
    it('returns title and description for valid slug', () => {
      const meta = generateMetadata({
        params: { category: 'ai-powered-intelligence' },
      });
      expect(meta.title).toBeTruthy();
      expect(meta.description).toBeTruthy();
    });

    it('includes keywords', () => {
      const meta = generateMetadata({
        params: { category: 'ai-powered-intelligence' },
      });
      expect(Array.isArray(meta.keywords)).toBe(true);
      expect((meta.keywords as string[]).length).toBeGreaterThan(0);
    });

    it('has correct canonical URL', () => {
      const meta = generateMetadata({
        params: { category: 'ai-powered-intelligence' },
      });
      expect((meta.alternates as any)?.canonical).toContain(
        '/features/business/ai-powered-intelligence',
      );
    });

    it('has correct OpenGraph URL', () => {
      const meta = generateMetadata({
        params: { category: 'ai-powered-intelligence' },
      });
      expect((meta.openGraph as any)?.url).toContain(
        '/features/business/ai-powered-intelligence',
      );
    });

    it('returns Not Found for invalid slug', () => {
      const meta = generateMetadata({
        params: { category: 'nonexistent' },
      });
      expect(meta.title).toBe('Not Found');
    });
  });

  describe('Page component', () => {
    it('calls notFound for invalid slug', () => {
      render(<Page params={{ category: 'nonexistent' }} />);
      expect(notFound).toHaveBeenCalled();
    });

    it('renders client component for valid slug', () => {
      const { getByTestId } = render(
        <Page params={{ category: 'ai-powered-intelligence' }} />,
      );
      expect(getByTestId('feature-deep-dive-client')).toBeInTheDocument();
      expect(getByTestId('feature-deep-dive-client').textContent).toBe(
        'business/ai-powered-intelligence',
      );
    });
  });
});
