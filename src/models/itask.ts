export interface ITask {
  id: string;
  description: string;
  startTime: Date;
  startMs: number;
  currentMs: number;
  progressedTime: number;
  milliseconds: number;
  active: boolean;
}
