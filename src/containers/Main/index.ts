import Main from './Main';
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { withRouter } from "react-router-dom";
import { signUpUser, signInUser, CurrentUserState } from "../../store/reducers/currentUser";
import { clearError } from '../../store/reducers/errors';

const mapStateToProps = (state: AppState): {
  currentUser: CurrentUserState;
  errorMessage?: string;
} => ({
  currentUser: state.currentUser,
  errorMessage: state.errors.message
});

export default withRouter(
  connect(
    mapStateToProps,
    {
      signInUser,
      signUpUser,
      clearError,
    }
  )(Main) as any
);

