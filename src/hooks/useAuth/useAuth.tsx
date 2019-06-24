import { useSelector } from "react-redux";
import { AppState } from "../../store/reducers";
import useThunkDispatch from "../useThunkDispatch";
import { setError } from "../../store/reducers/errors";
import { ErrorCodes } from "../../models/error";



const useAuth = (history: any, message?: string) => {
  // Redirects user to signin page if not logged in.
  // Use this to protect rendering auth-required components.
  const { isAuthenticated } = useSelector((state: AppState) => ({ isAuthenticated: Boolean(state.currentUser.user) }));
  const dispatch = useThunkDispatch();

  if (!isAuthenticated) {
    history.push('/signin');
    setError({
      code: ErrorCodes.BAD_LOGIN,
      message: message || "Please sign in first."
    })(dispatch);

  }
}

export default useAuth;
