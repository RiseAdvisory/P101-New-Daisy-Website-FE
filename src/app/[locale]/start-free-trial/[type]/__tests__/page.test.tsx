import { render, screen } from '@testing-library/react';
import StartFreeTrialPage from '../page';

// Next.js redirect throws a special error to halt rendering
const REDIRECT_ERROR = new Error('NEXT_REDIRECT');

// Mock dependencies
jest.mock('next/navigation', () => ({
  redirect: jest.fn(() => {
    throw REDIRECT_ERROR;
  }),
  usePathname: jest.fn(() => '/en/start-free-trial/business'),
  useRouter: jest.fn(() => ({ push: jest.fn(), replace: jest.fn(), prefetch: jest.fn() })),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img alt="" {...props} />,
}));

jest.mock('@/components/seo/WebPageSchema', () => ({
  WebPageSchema: () => null,
}));

jest.mock('@/components/seo/PageBreadcrumbSchema', () => ({
  PageBreadcrumbSchema: () => null,
}));

jest.mock('@/components/formBusiness/FormBusiness', () => ({
  ProfileForm: ({ buttonText }: { buttonText?: string }) => (
    <div data-testid="profile-form">{buttonText || 'Submit'}</div>
  ),
}));

jest.mock('@/components/buttonApp/AppStoreButton', () => ({
  AppStoreButton: () => <div data-testid="app-store">App Store</div>,
}));

jest.mock('@/components/buttonApp/PlayMarketButton', () => ({
  PlayMarketButton: () => <div data-testid="play-market">Play Market</div>,
}));

describe('StartFreeTrialPage', () => {
  it('renders business variant with correct headline', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'business' }} />,
    );
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toHaveTextContent('Start Your 14-Day Free Trial');
  });

  it('renders professional variant with correct headline', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'professional' }} />,
    );
    expect(
      screen.getByRole('heading', { level: 1 }),
    ).toHaveTextContent('Start Your Free Trial');
  });

  it('renders the profile form', () => {
    render(
      <StartFreeTrialPage params={{ locale: 'en', type: 'business' }} />,
    );
    expect(screen.getByTestId('profile-form')).toBeInTheDocument();
    expect(screen.getByTestId('profile-form')).toHaveTextContent(
      'Start Your Free Trial',
    );
  });

  it('redirects invalid type to business', () => {
    const { redirect } = require('next/navigation');
    expect(() =>
      render(
        <StartFreeTrialPage params={{ locale: 'en', type: 'invalid' }} />,
      ),
    ).toThrow();
    expect(redirect).toHaveBeenCalledWith('/en/start-free-trial/business');
  });
});
