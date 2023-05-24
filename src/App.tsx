import Desktop from './components/Desktop';
import Taskbar from './components/Taskbar/Taskbar.component';

import './styles/reset.scss';

const App = (): JSX.Element => (
  <Desktop>
    <Taskbar />
  </Desktop>
);

export default App;
