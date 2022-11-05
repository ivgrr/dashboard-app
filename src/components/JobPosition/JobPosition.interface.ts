import { IPosition } from '../../Position.interface';
export interface JobPositionProps extends IPosition {
  handleAddFilter: (filter: string) => void;
}
