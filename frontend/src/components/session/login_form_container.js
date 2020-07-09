import { connect } from 'react-redux';
import { login, logout } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = state => {
    return {
        // currentUser: state.session.user.id,
        errors: state.errors.session
    };
};

const mapDispatchToProps = dispatch => {
    return {
        login: user => dispatch(login(user)),
        logout: () => dispatch(logout())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);