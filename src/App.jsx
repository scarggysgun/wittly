import React from 'react';
import { Routes ,Route } from 'react-router-dom';

import Message from "./components/signup/Message"
import Input from "./components/signup/Input"
import AccCheck from "./components/signup/AccCheck"
import Button from "./components/signup/Button"
import ForgotPassword from "./components/signup/ForgotPassword"
import AccCreation from './components/signup/AccCreation';

function App() {
  return (
    <>
     <div className="auth-container">
  <div className="auth-content">
    <div className="image-container">
      <img src='/images/imageAuth.svg'></img>
    </div>
    <div className="form-container">
      <div>
        <Message />
      </div>
      <div>
        <Input label={"Email"} placeholder={"Email"} />
      </div>
      <div>
        <Input label={"Mot de passe"} />
      </div>
      <div>
        <AccCheck label={" Se souvenir de moi"} />
      </div>
      <div>
        <Button text={"Connexion"} />
      </div>
      <div className="link-container">
        <Routes>
          <Route path="/" element={<ForgotPassword />} />
        </Routes>
        <AccCreation />
      </div>
    </div>
  </div>
</div>
    </>
  )
}

export default App
