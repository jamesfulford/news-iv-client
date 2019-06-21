export enum ErrorType {
  SET = "SET_ERROR_MESSAGE",
  CLEAR = "CLEAR_ERROR_MESSAGE"
}

// Actions
interface SetErrorAction {
  type: typeof ErrorType.SET;
  error: string;
}
interface ClearErrorAction {
  type: typeof ErrorType.CLEAR;
}

// Action creators
export const setError = (error: string): SetErrorAction => ({
  type: ErrorType.SET,
  error
});

export const clearError = (): ClearErrorAction => ({
  type: ErrorType.CLEAR,
});

// Aggregate
export type ErrorAction = SetErrorAction | ClearErrorAction;
