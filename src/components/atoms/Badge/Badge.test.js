import { render, screen } from '@testing-library/react';
import Badge from './Bagde';

// it shuold be proper label
test('ckeck label', () => {
  render(<Badge label="Some bagde" />);
  expect(screen.getByText(/Some/i)).toBeInTheDocument();
});

test('it shuold be proper class with class_prefi prop', () => {
  const { container } = render(
    <Badge label="Some badge" class_prefix="table" />
  );
  expect(container.firstChild).toHaveClass(
    `table__badge--rectangular--medium--primary`
  );
});

// it should be proper class with shape prop
describe('it should be proper class with shape prop', () => {
  test(`it shuld be "rectangular" in class string without shape prop `, () => {
    const { container } = render(<Badge label="Some badge" />);
    expect(container.firstChild).toHaveClass(
      `badge--rectangular--medium--primary`
    );
  });

  const shapes = ['rectangular', 'circle'];

  for (let shape of shapes) {
    test(`it shuld be "${shape}" in class string `, () => {
      const { container } = render(<Badge label="Some badge" shape={shape} />);
      expect(container.firstChild).toHaveClass(
        `badge--${shape}--medium--primary`
      );
    });
  }
});

// it shoud be proper class with size prop
describe('it shoud be proper class with size prop', () => {
  const sizes = ['small', 'medium', 'big'];
  for (let size of sizes) {
    test(`it shuld be "${size}" in class string `, () => {
      const { container } = render(<Badge label="Some badge" size={size} />);
      expect(container.firstChild).toHaveClass(
        `badge--rectangular--${size}--primary`
      );
    });
  }
});

// it shoud be proper class with color prop
describe('it shoud be proper class with color prop', () => {
  const colors = ['primary', 'secondary', 'success', 'danger'];
  for (let color of colors) {
    test(`it shuld be "${color}" in class string `, () => {
      const { container } = render(<Badge label="Some badge" color={color} />);
      expect(container.firstChild).toHaveClass(
        `badge--rectangular--medium--${color}`
      );
    });
  }
});
