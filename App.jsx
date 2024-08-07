// App.jsx
import { useState } from 'react';
import LoginPage from './component/Login';
import RegistrationForm from './component/Register';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showRegistration, setShowRegistration] = useState(false);

  const handleLogin = (token) => {
    // Here, you would typically store the token in the browser's localStorage or a cookie
    console.log('Logged in with token:', token);
    setIsLoggedIn(true);
  };

  const handleRegister = () => {
    setShowRegistration(false);
    console.log('Registered successfully');
  };

  const handleRegisterClick = () => {
    setShowRegistration(true);
  };

  const handleLoginClick = () => {
    setShowRegistration(false);
  };

  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome, user!</h1>
      ) : showRegistration ? (
        <RegistrationForm onRegister={handleRegister} onLoginClick={handleLoginClick} />
      ) : (
        <LoginPage onLogin={handleLogin} onRegisterClick={handleRegisterClick} />
      )}
    </div>
  );
}

export default App;