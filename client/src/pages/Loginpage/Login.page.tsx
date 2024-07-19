import React, { useState } from 'react';
import {styled} from "@mui/material/styles"

import { Typography, TextField, Button } from '@mui/material';
import { FullScreenContainer, StyledPaper, StyledTypography, StyledForm, StyledInput, StyledText, StyledTextField, StyledBottomText, StyledLink, StyledButton ,ErrorStyles} from "../common/loginsignupstyles";
import { useNavigate } from 'react-router-dom';
const ErrorMessage = styled(Typography)(({ theme }) => ({
  color: theme.palette.error.main,
  marginTop: theme.spacing(1),
}));
export const Login = () => {
  const nav = useNavigate();
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');

  const onClick = async () => {
    if (!number) {
   
      setError('Please fill this field');
    
      
      return;
    }

    try {
      const response = await fetch('http://localhost:8000/api/v1/users/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ PhoneNumber: number }),
      });
      const data = await response.json();
      if (data.success) {
        nav('/verify', { state: { PhoneNumber: number } });
      } else {
        setError(data.message || 'Wrong phone number');
      }
    } catch (error) {
      console.error('Error:', error);
      setError('An error occurred. Please try again later.');
    }
  };

  return (
    <FullScreenContainer>
      <StyledPaper>
        <StyledTypography>
          Log in
        </StyledTypography>
        <StyledForm>
          <StyledInput>
            <StyledText>
              Email or Mobile Number
            </StyledText>
            <StyledTextField
              variant='outlined'
              placeholder='Email or Mobile Number'
              onChange={(e) => {
                setNumber(e.target.value);
                setError(''); // Clear error on input change
              }}
              error={!!error}
              helperText={error}
            />
          </StyledInput>
          <StyledBottomText>
            By clicking Continue, you agree to our
            <StyledLink to="/terms">Terms & Conditions</StyledLink> and{' '}
            <StyledLink to="/terms">Privacy Policy</StyledLink>.
          </StyledBottomText>
          <StyledButton onClick={onClick}>
            Continue
          </StyledButton>
        </StyledForm>
        <StyledBottomText>
          Don't have an Account?
          <StyledLink to='/signup'>Sign up instead</StyledLink>
        </StyledBottomText>
      </StyledPaper>
    </FullScreenContainer>
  );
};
