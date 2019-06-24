import MessageForm from './MessageForm';
import { connect } from 'react-redux';
import { AppState } from '../../store/reducers';
import { postMessage } from '../../store/reducers/messages';

const mapStateToProps = (state: AppState): {
    errorText?: string,
} => ({
    errorText: state.errors.message,
});

export default connect(
    mapStateToProps,
    {
        postMessage,
    }
)(MessageForm);
