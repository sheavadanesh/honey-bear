import React from 'react';
import { withRouter } from 'react-router-dom';
import '../../scss/layout/login_form.scss';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            errors: {}
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoLogin = this.handleDemoLogin.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // when user has been authenticated, redirects to items for now.
    // will probably change to user home page or something later.
    componentWillReceiveProps(nextProps) {
        if (nextProps.currentUser === true) {
            this.props.history.push('/');
        }
        // Set or clear errors
        this.setState({ errors: nextProps.errors })
    }

    // Handle field updates (called in the render method)
    update(field) {
        return e => this.setState({
            [field]: e.currentTarget.value
        });
    }

    // Handle form submission
    handleSubmit(e) {
        e.preventDefault();

        let user = {
            email: this.state.email,
            password: this.state.password
        };

        this.props.login(user);
    }

    handleDemoLogin(e) {
        e.preventDefault();
        const demoUser = { email: 'honeybear@camp.com', password: '123456' };
        this.props.login(demoUser).then(() => this.props.history.push('/'));
    };

    // Render the session errors if there are any
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
            <div className='login-form-container'>
                <form onSubmit={this.handleSubmit}>
                    <div className='login-form'>
                        <header className='login-head'>Log in</header>
                        <br/>
                        <div className='login-input-container'>
                            <input 
                                className='single'
                                type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                placeholder="Email"
                                />
                            <br />
                            <input 
                                className='single'
                                type="password"
                                value={this.state.password}
                                onChange={this.update('password')}
                                placeholder="Password"
                                />
                            <br />
                            <input className='login-submit-button' type="submit" value="Log in" />
                            <div className='parent-demo'>
                                <span id='demo-signin'>Or, try our {<span id='demo-signin-link' onClick={this.handleDemoLogin}>demo user login</span>} instead.</span>
                            </div>
                            <ul className='errors'>{this.renderErrors()}</ul>
                        </div>
                    </div>
                </form>
            </div>
        );
    }
}

export default withRouter(LoginForm);