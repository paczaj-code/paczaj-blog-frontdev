import { render } from '@testing-library/react';
import Input from './Input';

const input_name = 'input_name';
const input_types = [
  'button',
  'checkbox',
  'color',
  // 'date',
  // 'datetime-local',
  'email',
  'file',
  'hidden',
  // 'image',
  // 'month',
  // 'number',
  'radio',
  'range',
  'reset',
  // 'search',
  'submit',
  // 'tel',
  'text',
  // 'time',
  'url'
  // 'week'
];
// it should be proper type with type prop and text type without
describe('it should be proper input type with type prop and text type without', () => {

  // test('it shuold be input type text with type prop ', () => {
  //   const { container } = render(<Input name={input_name} />);
  //   expect(container.firstChild).toHaveAttribute('type', 'text');
  // });

  // for (let input_type in input_types) {
  test(`it shold be input type text with type text  `, () => {
    const { container } = render(
      <Input type='text' name={input_name} onChange={() => { }} value="some value" />
    );
    expect(container.firstChild).toHaveAttribute('type', 'text');
  });
  // }
});

// it should be proper name with name prop
// test('it should be proper name with name prop', () => {
//   const { container } = render(<Input name={input_name} onChange={() => { }} />);
//   expect(container.firstChild).toHaveAttribute('name', input_name);
// });

// // it should be proper value with value prop
// test('it should be proper value with value prop', () => {
//   const input_value = 'some_value';
//   const { container } = render(<Input name={input_name} value={input_value} onChange={() => { }} />);
//   expect(container.firstChild).toHaveAttribute('value', input_value);
// });

// // it should be disabled  with disabled prop
// test('it should be disabled  with disabled prop', () => {
//   const { container } = render(<Input name={input_name} disabled={true} onChange={() => { }} />);
//   expect(container.firstChild).toHaveAttribute('disabled');
// });

// // it should not be disabled  without disabled prop
// test(' it should not be disabled  without disabled prop', () => {
//   const { container } = render(<Input name={input_name} disabled={false} onChange={() => { }} />);
//   expect(container.firstChild).not.toHaveAttribute('disabled');
// });
