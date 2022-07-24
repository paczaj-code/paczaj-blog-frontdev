import { render } from '@testing-library/react';
import Input from './Input';

const input_name = 'input_name';
const input_types = [
  'button',
  'checkbox',
  'color',
  'email',
  'hidden',
  'password',
  'radio',
  'range',
  'reset',
  'submit',
  'text',
  'url',
];
// it should be proper type with type prop and text type without
describe('tests for input attributes but class', () => {

  // test('it shuold be input type text with type prop ', () => {
  //   const { container } = render(<Input name={input_name} />);
  //   expect(container.firstChild).toHaveAttribute('type', 'text');
  // });

  for (let input_type of input_types) {
    test(`it shold be input type text with type ${input_type}  `, () => {
      const { container } = render(
        <Input type={input_type} name={input_name} onChange={() => { }} value="some_value" />
      );
      expect(container.firstChild).toHaveAttribute('type', input_type);
    });
  }


  // it should be proper name with name prop
  test('it should be proper name with name prop', () => {
    const { container } = render(<Input name={input_name} onChange={() => { }} value="some_value" />);
    expect(container.firstChild).toHaveAttribute('name', input_name);
  });

  // // it should be proper value with value prop
  test('it should be proper value with value prop', () => {
    const input_value = 'some_value';
    const { container } = render(<Input name={input_name} value={input_value} onChange={() => { }} />);
    expect(container.firstChild).toHaveAttribute('value', input_value);
  });

  // // it should be disabled  with disabled prop
  test('it should be disabled  with disabled prop', () => {
    const { container } = render(<Input name={input_name} disabled={true} onChange={() => { }} value="some_value" />);
    expect(container.firstChild).toHaveAttribute('disabled');
  });

  // // it should not be disabled  without disabled prop
  test(' it should not be disabled  without disabled prop', () => {
    const { container } = render(<Input name={input_name} disabled={false} onChange={() => { }} value="some_value" />);
    expect(container.firstChild).not.toHaveAttribute('disabled');
  });


});

describe('tests for input classes', () => {
  // it should be deafult class withou any class related props
  test(' it should  be default input--medium--primary class without any class related props', () => {
    const { container } = render(<Input name={input_name} disabled={false} onChange={() => { }} value="some_value" />);
    expect(container.firstChild).toHaveClass('input--medium--primary');
  });

  const sizes = ['small', 'medium', 'big'];
  for (let size of sizes) {
    test(`it should be input--${size}--primary class with  ${size} as size prop`, () => {
      const { container } = render(<Input name={input_name} size={size} value="some_value" onChange={() => { }} />);
      expect(container.firstChild).toHaveClass(`input--${size}--primary`);
    })
  }

  const colors = ['primary', 'secondary', 'success', 'danger'];
  for (let color of colors) {
    test(`it should be input--medium--${color} class with  ${color} as color prop`, () => {
      const { container } = render(<Input name={input_name} color={color} value="some_value" onChange={() => { }} />);
      expect(container.firstChild).toHaveClass(`input--medium--${color} `);
    })
  }

  test(`it should be  prefix with class_prefix prop`, () => {
    const { container } = render(<Input name={input_name} value="some_value" onChange={() => { }} class_prefix='login' />);
    expect(container.firstChild).toHaveClass(`login__input--medium--primary `);
  })
})