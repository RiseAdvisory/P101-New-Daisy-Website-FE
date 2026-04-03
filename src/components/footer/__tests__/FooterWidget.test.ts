import * as fs from 'fs';
import * as path from 'path';

describe('Footer widget integration', () => {
  it('does not import FreshChat', () => {
    const footerSource = fs.readFileSync(
      path.join(process.cwd(), 'src/components/footer/Footer.tsx'),
      'utf-8',
    );
    expect(footerSource).not.toContain('FreshChat');
    expect(footerSource).not.toContain('freshChatWidget');
  });

  it('does not contain deferred chat loading state', () => {
    const footerSource = fs.readFileSync(
      path.join(process.cwd(), 'src/components/footer/Footer.tsx'),
      'utf-8',
    );
    expect(footerSource).not.toContain('shouldLoadChat');
  });
});
