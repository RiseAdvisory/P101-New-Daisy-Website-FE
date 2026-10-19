/**
 * @jest-environment node
 */
import { get } from '@vercel/global-config';
import { notFound, redirect } from 'next/navigation';
import WatchPage from '../page';

jest.mock('@vercel/global-config', () => ({ get: jest.fn() }));
jest.mock('next/navigation', () => ({
  redirect: jest.fn((url: string) => {
    throw new Error(`REDIRECT ${url}`);
  }),
  notFound: jest.fn(() => {
    throw new Error('NOT_FOUND');
  }),
}));

const mockGet = get as jest.Mock;

describe('/watch/[video]', () => {
  beforeEach(() => jest.clearAllMocks());

  it('redirects to the current upload of the video', async () => {
    mockGet.mockResolvedValue('AbCdEfGhI_-');
    await expect(
      WatchPage({ params: { video: 'block-time-on-your-calendar' } }),
    ).rejects.toThrow('REDIRECT https://www.youtube.com/watch?v=AbCdEfGhI_-');
    expect(mockGet).toHaveBeenCalledWith('block-time-on-your-calendar');
    expect(redirect).toHaveBeenCalled();
  });

  it('shows Not found for a video the store does not know', async () => {
    mockGet.mockResolvedValue(undefined);
    await expect(
      WatchPage({ params: { video: 'no-such-video' } }),
    ).rejects.toThrow('NOT_FOUND');
  });

  it('never redirects to a value that is not a YouTube id', async () => {
    mockGet.mockResolvedValue('https://evil.example/x');
    await expect(WatchPage({ params: { video: 'a' } })).rejects.toThrow(
      'NOT_FOUND',
    );
    expect(redirect).not.toHaveBeenCalled();
  });

  it('shows Not found for a malformed link, without reading the store', async () => {
    await expect(WatchPage({ params: { video: '../../etc' } })).rejects.toThrow(
      'NOT_FOUND',
    );
    expect(mockGet).not.toHaveBeenCalled();
  });

  it('shows Not found when the store cannot be read', async () => {
    mockGet.mockRejectedValue(new Error('No connection string provided'));
    await expect(WatchPage({ params: { video: 'a' } })).rejects.toThrow(
      'NOT_FOUND',
    );
  });
});
