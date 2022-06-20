import React from 'react';
import styled from 'styled-components';

const Login = () =>{
  return(
    <LoginContainer className='login'>
      <LoginText className="login-text">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
      </LoginText>
      <LoginForm className="login-form">
        <Form>
          <h1>Welcome to BitUnit</h1>
          <p>Login to access our services</p>

          <div className="form-group">
            <input type="text" placeholder='Username' />
          </div>

          <div className="form-group">
            <input type="password" placeholder='Password' />
          </div>
          <div className="form-actions">
            <p>Remember me</p>
            <p>Forgot password</p>
          </div>

          <div className="declarations">
            <p>By signing up, you agree to our</p>
              <p>Terms and Conditions & Privacy Policy</p>
          </div>
        </Form>
      </LoginForm>
    </LoginContainer>
  )
}


const LoginContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  padding: 100px;
  background-color: #1DA1F2;
`

const LoginText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  justify-content: flex-start;
  align-items: flex-start;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export default Login;