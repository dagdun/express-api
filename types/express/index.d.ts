declare namespace Express {
  export interface Request {
    [x: string]: any;
  }
  export interface Response {
    sendFormat: (data: any, message?: string, status?: number) => void;
  }
}
