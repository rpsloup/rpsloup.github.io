import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

import type { IconName, IconPrefix } from '@fortawesome/fontawesome-common-types';

type Props = {
  name: IconName;
  type: IconPrefix;
};

library.add(fas);
library.add(fab);

const Icon = ({ name, type }: Props): JSX.Element =>
  (
    <div>
      <FontAwesomeIcon icon={[type, name]} />
    </div>
  );

export default Icon;
