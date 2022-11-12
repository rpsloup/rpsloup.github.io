type Props = {
  children: React.ReactNode;
};

const DefaultLayout = ({ children }: Props) =>
  (
    <>
      {children}
    </>
  );

export default DefaultLayout;
