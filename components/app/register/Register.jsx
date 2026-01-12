import React from 'react';
import { Page, Navbar } from 'framework7-react';

class Register extends React.Component {
    isValidEmail(value) {
        return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim());
    }

    render() {
        return (
            <Page id="register">
                <Navbar title="Register" backLink />
            </Page>
        );
    }
}

export default Register;
