interface Props {
  // eslint-disable-next-line
  [x: string]: any;
}

const Input = ({ ...restProps }: Props): JSX.Element => (
  <input type="text" className="input" {...restProps} />
);

export default Input;
