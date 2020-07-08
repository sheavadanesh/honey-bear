import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/layout/signup_form.scss';

class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.clearedErrors = false;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.signedIn === true) {
            this.props.history.push('/login');
        }

        this.setState({ errors: nextProps.errors })
    }

    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        let user = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };

        this.props.signup(user, this.props.history);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = { email: 'honeybear@camp.com', password: '123456' };
        this.props.login(demoUser).then(() => this.props.history.push('/'));
    };

    renderErrors() {
        return (
            <ul>
                {Object.keys(this.state.errors).map((error, i) => (
                    <li className='each-error' key={`error-${i}`}>
                        {this.state.errors[error]}
                    </li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div className="signup-form-container">
                <form onSubmit={this.handleSubmit}>
                    <div className="signup-form">
                        <header className='signup-head'>Sign up</header>
                        <br />
                        <div className='signup-input-container'>
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="text"
                                    value={this.state.firstname}
                                    onChange={this.update('firstname')}
                                    placeholder="First Name"
                                    />
                                <input 
                                    className='two'
                                    type="text"
                                    value={this.state.lastname}
                                    onChange={this.update('lastname')}
                                    placeholder="Last Name"
                                    />
                            </div>
                            <br/>
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="text"
                                    value={this.state.username}
                                    onChange={this.update('username')}
                                    placeholder="Username"
                                    />
                                <input 
                                    className='two'
                                    type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    placeholder="Email"
                                    />
                            </div>
                            <br />
                            <div className='input-row'>
                                <input 
                                    className='one'
                                    type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    placeholder="Password"
                                    />
                                <input 
                                    className='two'
                                    type="password"
                                    value={this.state.password2}
                                    onChange={this.update('password2')}
                                    placeholder="Confirm Password"
                                    />
                            </div>
                            <br />
                            <span className='terms-cond'>By selecting <span className='create-button-terms'>Create your account</span> below, I agree to Honey Bear's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</span>
                            <input className='signup-submit-button' type="submit" value="Create your account" />
                            <div className='parent-demo'>
                                <span id='demo-signin'>Or, try our {<span id='demo-signin-link' onClick={this.handleDemoLogin}>demo user login</span>} instead.</span>
                            </div>
                            <ul className='errors'>
                                {this.renderErrors()}
                            </ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(SignupForm);