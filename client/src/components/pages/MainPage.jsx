import React, { useState } from 'react';
import SignInPage from './SignInPage';
import SignUpPage from './SignUpPage';
import '../CSS/FormsBtn.css';
import Button from 'react-bootstrap/Button';

export default function MainPage({ user, signInHandler, signUpHandler }) {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [isSignIn, setIsSignIn] = useState(true);

  const showSignInForm = () => {
    setIsSignIn(true);
    setIsFormVisible(true);
  };

  const showSignUpForm = () => {
    setIsSignIn(false);
    setIsFormVisible(true);
  };

  return (
    <div
      className="main-page"
      style={{
        backgroundImage: `url(/77.svg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '780px',
        color: 'white',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      {!user.data && (
        <div>
          <div>
            {!isFormVisible && (
              <>
                <Button
                  variant="outline-primary"
                  type="button"
                  className="submit-buttonIn"
                  onClick={showSignInForm}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline-primary"
                  type="button"
                  className="submit-buttonUp"
                  onClick={showSignUpForm}
                >
                  Sign Up
                </Button>
              </>
            )}
          </div>

          {isFormVisible && (
            <div>
              {isSignIn ? (
                <>
                  <SignInPage signInHandler={signInHandler} />
                </>
              ) : (
                <>
                  <SignUpPage signUpHandler={signUpHandler} />
                </>
              )}
              <Button
                variant="outline-secondary"
                type="button"
                onClick={() => {
                  setIsFormVisible(true); 
                  setIsSignIn(!isSignIn); 
                }}
              >
                Switch to {isSignIn ? 'Sign Up' : 'Sign In'}
              </Button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
