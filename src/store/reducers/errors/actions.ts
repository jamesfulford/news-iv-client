import { ErrorMessage } from "../../../models/error";

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
const handleSetError = (error: string): SetErrorAction => ({
  type: ErrorType.SET,
  error
});

const handleClearError = (): ClearErrorAction => ({
  type: ErrorType.CLEAR
});

// Thunks
export function clearError() {
  return (dispatch: Function) => dispatch(handleClearError());
}
export function setError(e: ErrorMessage) {
  return (dispatch: Function) => dispatch(handleSetError(e.message));
}

// Helpers (pre-thunks?)
export function errorClearer(dispatch: Function) {
  return () => clearError()(dispatch);
}
export function errorHandler(dispatch: Function) {
  return (e: ErrorMessage) => setError(e)(dispatch);
}

// Aggregate
export type ErrorAction = SetErrorAction | ClearErrorAction;
