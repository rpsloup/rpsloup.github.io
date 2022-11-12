import PageNavigation from '../components/blocks/PageNavigation';
import PageFooter from '../components/blocks/PageFooter';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) =>
  (
    <>
      <PageNavigation />
      {children}
      <PageFooter />
    </>
  );

export default DefaultLayout;
