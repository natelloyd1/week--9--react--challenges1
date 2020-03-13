import React, { useState } from "react"; 
import Password from "./PasswordLift"; 

const SignupForm = ({ minLength }) => {
    const [password, setPassword] = useState('')
    const [passwordConfirmation, setPasswordConfirmation] = useState('')
    const [showPassword, setShowPassword] = useState(false)
    
    const isValid = () => {
      if (password === '' && passwordConfirmation === '') return true
      if (password !== passwordConfirmation) return false
      if (password.length < minLength) return false
      if (passwordConfirmation.length < minLength) return false
      
      return true
    }
    
    return <div>
      <h1>This is my form</h1>
      <Password valid={isValid()} showPassword={showPassword} label="Password" value={password} onChange={setPassword} />
      <Password valid={isValid()} showPassword={showPassword} label="Password Confirmation" value={passwordConfirmation} onChange={setPasswordConfirmation}/>
      <button onClick={(() => setShowPassword(!showPassword))}>{ showPassword ? 'hide me' : 'show me'}</button>
    </div>
  }
  
export default SignupForm
  