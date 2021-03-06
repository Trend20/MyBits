import React from 'react';
import styled from 'styled-components';

const Register = () =>{
  return(
    <RegisterContainer className='register'>
      <RegisterText className="register-text">
        <div className="logo">
          <img src="logo.png" alt="logo" />
        </div>
      </RegisterText>
      <RegisterForm className="register-form">
        <Form>
          <h1>Welcome to Bitunit</h1>
          <p>Register to access our services</p>

          {/* username */}
          <FormGroup className="form-group">
            <input type="text" placeholder='Username' />
          </FormGroup>

          {/* email address */}
          <FormGroup className="form-group">
            <input type="email" placeholder='Email' />
          </FormGroup>

          {/* password */}
          <FormGroup className="form-group">
            <input type="password" placeholder='Password' />
          </FormGroup>

          <Button>Register</Button>
          <Declarations className="declarations">
            <p>By signing up, you agree to our Terms and Conditions & Privacy Policy</p>
          </Declarations>
        </Form>
      </RegisterForm>
    </RegisterContainer>
  )
}


const RegisterContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  height: 100vh;
  padding: 100px;
  background-color: #1DA1F2;
`

const RegisterText = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`

const RegisterForm = styled.div`
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
  background-color: #fff;
  padding: 50px;
  border-radius: 10px;
  width: 50%;

  h1{
    display: flex;
    opacity: 0.8;
  }

  p{
    font-size: 0.9rem;
    margin-top: 20px;
  }
`

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 50px;
  width: 100%;

  input{
    padding: 15px;
    width: 100%;
    outline: none;
    border-radius: 10px;
    border: 1px solid grey;
  }
`

const Declarations = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;
  align-items: flex-start;

  p{
    font-size: 1rem;
  }
`

const Button = styled.button`
  display:: flex;
  background-color: #fab915;
  margin-top: 30px;
  padding: 20px;
  border: none;
  outline: none;
  color: #fff;
  width: 50%;
  cursor: pointer;
  border-radius: 10px;
  font-weight: 700;
  font-size: 1rem;
`
export default Register;