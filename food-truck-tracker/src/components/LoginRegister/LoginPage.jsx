import React from 'react';
import Loader from 'react-loader-spinner';

// Components
import LoginForm from './LoginForm';

const LoginPage = props => {

    return (
      <>
        {/* <Loader type="Rings" color="#00BFFF" height={200} width={200} /> */}
        <LoginForm />
      </>
    );
}
export default LoginPage;
