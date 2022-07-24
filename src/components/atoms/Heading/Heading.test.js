// import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Heading from './Heading';

const tags = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
describe('Test render proper tag and label', () => {
  for (let tag of tags) {
    test(`it should be HTML ${tag} tag`, () => {
      const { getByRole } = render(<Heading Tag={tag} label="Some heding" />);
      expect(
        getByRole('heading', { level: tags.indexOf(tag) + 1 })
      ).toBeInTheDocument();
    });
  }
  for (let tag of tags) {
    test(`it should be in label with ${tag}`, () => {
      render(<Heading Tag={tag} label={`This is heading`} />);
      expect(screen.getByText(/This is heading/i)).toBeInTheDocument();
    });
  }
});

describe('it shuld be proper classes without class_prefix props', () => {
  for (let tag of tags) {
    test(`it shuld be heading--${tag} class for ${tag}  `, () => {
      const { container } = render(
        <Heading Tag={tag} label={`This is heading ${tags}`} />
      );
      expect(container.firstChild).toHaveClass(`heading--${tag}`);
    });
  }
});

describe('it shuld be proper classes with class_prefix props', () => {
  const prefix = 'section';
  for (let tag of tags) {
    test(`it shuld be ${prefix}__heading--${tag} class for ${tag} `, () => {
      const { container } = render(
        <Heading
          Tag={tag}
          label={`This is heading ${tags}`}
          class_prefix={prefix}
        />
      );
      expect(container.firstChild).toHaveClass(`${prefix}__heading--${tag}`);
    });
  }
});
