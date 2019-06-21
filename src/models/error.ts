export enum ErrorCodes {
  BAD_LOGIN = 10000
}

export interface ErrorMessage {
  code: ErrorCodes;
  message: string;
}
