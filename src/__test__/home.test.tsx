import Home from '@/app/page';
import { render, screen } from '@/test-utils';

describe('Home component', () => {
  it('has correct Next.js theming section link', () => {
    render(<Home />);
    expect(screen.getByText('this guide')).toHaveAttribute(
      'href',
      'https://mantine.dev/guides/next/',
    );
  });
});
