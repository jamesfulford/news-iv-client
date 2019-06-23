export enum ErrorCodes {
  BAD_LOGIN = 10000,
  ALREADY_TAKEN = 11000,
}

export interface ErrorMessage {
  code: ErrorCodes;
  message: string;
}
