import React, { useState } from "react";
import { Checkbox, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  FullScreenContainer,
  StyledPaper,
  StyledForm,
  StyledInput,
  StyledText,
  StyledTextField,
  StyledBottomText,
  StyledLink,
  StyledButton,
  SignupDoublegrid, 
  Signupleft,
  LeftImage,
  LeftText,
  SignupRight,
  StyledReffText,
  StyledCheck,
  StyledCheckbox,
  RefferalCodeDiv,
  RefferalInput,
  StyledReffIn,
  StyledCheckText
} from "../common/loginsignupstyles";
import { ReactComponent as Logo } from '../images/Logo_with_text.svg';
import { getCookie } from "../../utils/Cookies";

export const Signup = () => {
  const [phoneNo, setPhoneNo] = useState('');
  const [checked, setChecked] = useState(true);
  const [phoneError, setPhoneError] = useState(false);
  const nav = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  const handleRegister = async () => {
    if (!phoneNo || phoneNo.length !== 10) {
      setPhoneError(true);
      return;
    }
    setPhoneError(false);

    const user = {
      PhoneNumber: phoneNo,
    };

    try {
      const response = await axios.post("http://localhost:8000/api/v1/users/signup", user);
      if ((response.status === 201 || response.status === 200) && phoneNo.length === 10 ) {
        nav("/verify", { state: { PhoneNumber: phoneNo } });
      } else {
        alert("Registration failed: " + (response.data.message || "Unknown error"));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        if (error.response) {
          console.log("Error: " + (error.response.data.message || "Unknown error from server"));
        } else if (error.request) {
          console.log("Error: No response from server. Please try again later.");
        } else {
          alert("Error: " + error.message);
        }
      }
    }
  };

  return (
    <FullScreenContainer>
      <StyledPaper>
        <Typography sx={{ textAlign: "center", fontSize: "1.75rem", fontWeight: "800", fontFamily: "Baikal, Inter, sans-serif", letterSpacing: "-0.025em" }}>
          Get Started
        </Typography>
        <Typography sx={{ textAlign: "center", fontSize: "12px", paddingTop: "0.3rem", paddingBottom: "1rem" }}>
          Please enter your details to create your account
        </Typography>
        <StyledForm>
          <StyledInput>
            <StyledText>Phone No.</StyledText>
            <SignupDoublegrid>
              <Signupleft>
                <LeftImage src="https://tyke-assets.s3.amazonaws.com/flags/in-flag.jpg" />
                <LeftText>+91</LeftText>
              </Signupleft>
              <SignupRight>
                <StyledTextField
                  onChange={(e) => { setPhoneNo(e.target.value); }}
                  variant='outlined'
                  placeholder='Phone No.'
                  inputProps={{ maxLength: 10 }}
                  error={phoneError}
                  helperText={phoneError ? "Please enter a valid Phone number" : ""}
                />
              </SignupRight>
            </SignupDoublegrid>
          </StyledInput>
          <StyledCheck>
            <Checkbox
              checked={checked}
              onChange={handleChange}
              inputProps={{ 'aria-label': 'controlled' }}
            />      
            <StyledCheckText>Receive updates & offers on WhatsApp</StyledCheckText>
          </StyledCheck>
          <RefferalCodeDiv>
            <StyledReffText>Referral Code (optional)</StyledReffText>
            <RefferalInput>
              <StyledReffIn
                variant='outlined'
                placeholder='ENTER YOUR FRIEND REFFERAL CODE'
              />
            </RefferalInput>
          </RefferalCodeDiv>
          <StyledInput>
            <StyledBottomText>
              By clicking Continue, you agree to our
              <StyledLink to="/terms"> Terms & Conditions </StyledLink>
              and {' '}
              <StyledLink to="/terms"> Privacy Policy</StyledLink>.
            </StyledBottomText>
            <StyledButton onClick={handleRegister}>Get OTP</StyledButton>
          </StyledInput>
        </StyledForm>
        <StyledBottomText>
          Already have an Account?
          <StyledLink to='/signin'>Log in instead </StyledLink>
        </StyledBottomText>
      </StyledPaper>
    </FullScreenContainer>
  );
};
