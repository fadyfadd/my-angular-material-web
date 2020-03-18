export interface IProcess {
  id: number,
  basePriority: number,
  machineName: string,
  exitDate: Date,
  mainWindowTitle: string,
  hasExisted:boolean
  sessionId : number
}
