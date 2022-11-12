import PageNavigation from '../components/blocks/PageNavigation';

type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) =>
  (
    <>
      <PageNavigation />
      {children}
    </>
  );

export default DefaultLayout;
