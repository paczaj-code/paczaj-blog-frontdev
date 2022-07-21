import { render } from '@testing-library/react';
import Input from '../../../components/atoms/Input/Input';

const input_name = 'input_name';
// it should be proper type with type prop and text type without
describe('it should be proper input type with type prop and text type without', () => {
  const input_types = [
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week'
  ];
  test('it shuold be input type text with type prop ', () => {
    const { container } = render(<Input name={input_name} />);
    expect(container.firstChild).toHaveAttribute('type', 'text');
  });

  for (let input_type in input_types) {
    test(`it shold be input type text with type ${input_type}  `, () => {
      const { container } = render(
        <Input type={input_type} name={input_name} />
      );
      expect(container.firstChild).toHaveAttribute('type', input_type);
    });
  }
});

// it should be proper name with name prop
test('it should be proper name with name prop', () => {
  const { container } = render(<Input name={input_name} />);
  expect(container.firstChild).toHaveAttribute('name', input_name);
});

// it should be proper value with value prop
test('it should be proper value with value prop', () => {
  const input_value = 'some_value';
  const { container } = render(<Input name={input_name} value={input_value} />);
  expect(container.firstChild).toHaveAttribute('value', input_value);
});

// it should be disabled  with disabled prop
test('it should be disabled  with disabled prop', () => {
  const { container } = render(<Input name={input_name} disabled={true} />);
  expect(container.firstChild).toHaveAttribute('disabled');
});