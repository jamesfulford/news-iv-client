import { ErrorType, ErrorAction } from './actions';

export interface ErrorState {
  message?: string;
}

const initialState: ErrorState = {
  message: undefined
};

export default (state: ErrorState = initialState, action: ErrorAction): ErrorState => {
  switch (action.type) {
    case ErrorType.SET:
      return { ...state, message: action.error };
    case ErrorType.CLEAR:
      return { ...state, message: undefined };
    default:
      return state;
  }
};
