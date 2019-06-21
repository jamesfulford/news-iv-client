import reducer from "./reducer";
import { clearError, setError } from './actions';
import { ErrorMessage } from "../../../models/error";

export default reducer;
export * from "./actions";

// Shortcuts
export function errorClearer (dispatch: Function) {
    return () => {
        dispatch(clearError());
    }
}

export function errorHandler (dispatch: Function) {
    return (e: ErrorMessage) => {
        dispatch(setError(e.message));
    }
}
