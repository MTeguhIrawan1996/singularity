import Welcome from '@/components/features/Welcome/Welcome';

import { render, screen } from '@/test-utils';

describe('Welcome component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Welcome />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/',
    );
  });
});
