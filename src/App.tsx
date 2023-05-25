import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar/Taskbar.component';

import './styles/reset.scss';
import './styles/fonts.scss';
import './styles/main.scss';

const App = (): JSX.Element => (
  <Desktop>
    <Taskbar />
  </Desktop>
);

export default App;
