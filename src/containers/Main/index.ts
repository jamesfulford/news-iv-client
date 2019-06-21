import Main from './Main';
import { connect } from "react-redux";
import { AppState } from "../../store/reducers";
import { withRouter } from "react-router-dom";

function mapStateToProps(state: AppState) {
  return {
    currentUser: state.currentUser
  };
}

export default withRouter(
  connect(
    mapStateToProps,
    null
  )(Main) as any
);

