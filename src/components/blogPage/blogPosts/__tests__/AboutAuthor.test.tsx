import { render, screen } from '@testing-library/react';
import { AboutAuthor } from '../AboutAuthor';

jest.mock('@/store/post');

jest.mock('next/navigation', () => ({
  usePathname: jest.fn(() => '/en/resources/blog/business/test'),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

describe('AboutAuthor', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('renders author bio when author name matches authorBios', () => {
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'Dr. Elara Voss',
            },
          },
        },
      },
    }));

    render(<AboutAuthor />);

    expect(screen.getByText('Dr. Elara Voss')).toBeInTheDocument();
    expect(
      screen.getByText('Beauty Business Strategist & Growth Architect')
    ).toBeInTheDocument();
    expect(screen.getByText(/beauty business strategist based in Riyadh/i)).toBeInTheDocument();
    expect(screen.getByText('About the Author')).toBeInTheDocument();
    expect(screen.getByRole('img')).toHaveAttribute(
      'src',
      '/images/blog/author-elara-voss.webp'
    );
  });

  it('renders Arabic author bio on Arabic locale', () => {
    require('next/navigation').usePathname = jest.fn(() => '/ar/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'Dr. Elara Voss',
            },
          },
        },
      },
    }));

    render(<AboutAuthor />);

    expect(screen.getByText('د. إيلارا فوس')).toBeInTheDocument();
    expect(screen.getByText('عن الكاتب')).toBeInTheDocument();
  });

  it('renders correctly for Julian Moreau', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'Julian Moreau',
            },
          },
        },
      },
    }));

    render(<AboutAuthor />);

    expect(screen.getByText('Julian Moreau')).toBeInTheDocument();
    expect(
      screen.getByText(
        'Beauty Industry Growth Strategist & Digital Marketing Specialist'
      )
    ).toBeInTheDocument();
  });

  it('renders correctly for The Daisy Team', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'The Daisy Team',
            },
          },
        },
      },
    }));

    render(<AboutAuthor />);

    expect(screen.getByText('The Daisy Team')).toBeInTheDocument();
    expect(screen.getByText('Content Team')).toBeInTheDocument();
  });

  it('returns null when author name is not in authorBios', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'Unknown Author',
            },
          },
        },
      },
    }));

    const { container } = render(<AboutAuthor />);
    expect(container.innerHTML).toBe('');
  });

  it('returns null when post has no user data', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {},
    }));

    const { container } = render(<AboutAuthor />);
    expect(container.innerHTML).toBe('');
  });

  it('returns null when post is empty', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: null,
    }));

    const { container } = render(<AboutAuthor />);
    expect(container.innerHTML).toBe('');
  });

  it('falls back to post.user.name when data.attributes.name is missing', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          name: 'Ethan Cole',
        },
      },
    }));

    render(<AboutAuthor />);
    expect(screen.getByText('Ethan Cole')).toBeInTheDocument();
  });

  it('renders author image with correct alt text', () => {
    require('next/navigation').usePathname = jest.fn(() => '/en/resources/blog/business/test');
    require('@/store/post').usePostStore = jest.fn(() => ({
      post: {
        user: {
          data: {
            attributes: {
              name: 'Sofia Alvarez',
            },
          },
        },
      },
    }));

    render(<AboutAuthor />);

    const img = screen.getByRole('img');
    expect(img).toHaveAttribute('alt', 'Sofia Alvarez');
    expect(img).toHaveAttribute(
      'src',
      '/images/blog/author-sofia-alvarez.webp'
    );
  });
});
