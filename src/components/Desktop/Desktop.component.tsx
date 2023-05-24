import Button from '../Button';

import './Desktop.styles.scss';

interface Props {
  children: React.ReactNode;
}

const Desktop = ({ children }: Props): JSX.Element => (
  <div className="desktop">
    <Button>My Button</Button>
    {children}
  </div>
);

export default Desktop;
