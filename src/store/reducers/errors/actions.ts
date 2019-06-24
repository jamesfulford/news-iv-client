import { ErrorMessage } from "../../../models/error";

export enum ErrorType {
  SET = "SET_ERROR_MESSAGE",
  CLEAR = "CLEAR_ERROR_MESSAGE"
}

// Set Error
interface SetErrorAction {
  type: typeof ErrorType.SET;
  error: string;
}
const handleSetError = (error: string): SetErrorAction => ({
  type: ErrorType.SET,
  error
});
export function setError(e: ErrorMessage) {
  return (dispatch: Function) => dispatch(handleSetError(e.message));
}
export function errorHandler(dispatch: Function) {
  return (e: ErrorMessage) => setError(e)(dispatch);
}

// Clear Error
interface ClearErrorAction {
  type: typeof ErrorType.CLEAR;
}
const handleClearError = (): ClearErrorAction => ({
  type: ErrorType.CLEAR
});
export function clearError() {
  return (dispatch: Function) => dispatch(handleClearError());
}
export function errorClearer(dispatch: Function) {
  return () => clearError()(dispatch);
}

// Aggregate
export type ErrorAction = SetErrorAction | ClearErrorAction;
