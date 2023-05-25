import './Separator.styles.scss';

interface Props {
  verticalSpacing: number;
  horizontalSpacing: number;
}

const Separator = ({
  verticalSpacing,
  horizontalSpacing,
}: Props): JSX.Element => (
  <div
    className="separator"
    style={{
      margin: `${verticalSpacing}px ${horizontalSpacing}px`,
      width: `calc(100% - ${horizontalSpacing * 2}px)`,
    }}
  />
);

export default Separator;
