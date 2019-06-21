import Main from './Main';
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { withRouter } from "react-router-dom";
import { signUpUser, signInUser } from "../../store/reducers/currentUser";

function mapStateToProps(state: AppState) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    {
      signInUser,
      signUpUser,
    }
  )(Main) as any
);

