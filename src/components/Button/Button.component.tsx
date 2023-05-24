import './Button.styles.scss';

export type ButtonVariation = 'start';

interface Props {
  variation?: ButtonVariation;
  children: React.ReactNode;
}

const Button = ({ variation, children }: Props): JSX.Element => (
  <button className={`button${variation ? ` button--${variation}` : ''}`}>
    {children}
  </button>
);

export default Button;
