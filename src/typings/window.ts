import { WindowType } from '../utils/window';

export interface Window {
  id: string;
  active: boolean;
  elevation: number;
  type: WindowType;
}
