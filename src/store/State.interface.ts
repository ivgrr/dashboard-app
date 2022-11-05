import { IPosition } from '../Position.interface';

export interface IState {
  positions: IPosition;
  filters: string[];
}
