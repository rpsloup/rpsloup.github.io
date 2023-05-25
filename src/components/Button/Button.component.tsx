import './Button.styles.scss';

export type ButtonVariation = 'start';

interface Props {
  variation?: ButtonVariation;
  onClick?: () => void;
  children: React.ReactNode;
}

const Button = ({ variation, onClick, children }: Props): JSX.Element => (
  <button
    className={`button${variation ? ` button--${variation}` : ''}`}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
