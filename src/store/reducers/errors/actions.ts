export enum ErrorType {
    SET = "SET_ERROR_MESSAGE",
    CLEAR = "CLEAR_ERROR_MESSAGE",
}

// Actions
interface AddErrorAction {
  type: typeof ErrorType.SET;
  error: string;
}
interface RemoveErrorAction {
  type: typeof ErrorType.CLEAR;
}

// Aggregate
export type ErrorAction = (
    AddErrorAction
    | RemoveErrorAction
);
