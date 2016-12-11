export interface ITask {
  id: number;
  description: string;
  start: Date;
  oldTime: number;
  newTime: number;
  active: boolean;
  utcTime: Date;
}
