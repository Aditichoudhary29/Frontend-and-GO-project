import React, { useState, useRef, useEffect } from "react";
import { Typography } from "@mui/material";
import { FullScreenContainer, StyledButton } from "../common/loginsignupstyles";
import {
  StyledTypography,
  StyledPaper,
  StyledForm,
  StyledBottom,
  OuterInput,
  InnerInput,
  StyledBottomText,
  InnerTextBox,
  StyledPhoneDiv,
  StyledPhone,
  StyledSvg,
  StyledResendButton,
  BlueColor,
  GreyText,
  ErrorMessage // Ensure you import the ErrorMessage styled component
} from "./verifypage.styles";
import { useLocation, useNavigate } from 'react-router-dom';
import axios from "axios";
import image from "../../assets/SVG/plan-for-intense-storms.svg";

interface LocationState {
  PhoneNumber?: string;
}

export const Verify: React.FC = () => {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const [timer, setTimer] = useState(30);
  const [showResend, setShowResend] = useState(false);
  const [inputError, setInputError] = useState<boolean[]>(Array(6).fill(false)); 
  const [otpError, setOtpError] = useState<string>('');
  const otpRefs = useRef<(HTMLInputElement | null)[]>([]);
  const location = useLocation();
  const navigate = useNavigate();

  const locationState = location.state as LocationState;
  const phone = locationState?.PhoneNumber || '';

  useEffect(() => {
    if (otpRefs.current[0]) {
      otpRefs.current[0]?.focus();
    }
  }, []);

  useEffect(() => {
    if (timer > 0) {
      const countdown = setTimeout(() => setTimer(timer - 1), 1000);
      return () => clearTimeout(countdown);
    } else {
      setShowResend(true);
    }
  }, [timer]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const value = e.target.value;
    if (/^\d*$/.test(value) && value.length <= 1) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      const newInputError = [...inputError];
      newInputError[index] = false;
      setInputError(newInputError);
      setOtpError('');

      // Move focus to the next input field if a value is entered
      if (value && index < otpRefs.current.length - 1) {
        setTimeout(() => {
          otpRefs.current[index + 1]?.focus();
        }, 0);
      }
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, index: number) => {
    if (e.key === 'Backspace' && !otp[index] && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowLeft' && index > 0) {
      otpRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < otpRefs.current.length - 1) {
      otpRefs.current[index + 1]?.focus();
    }
  };

  const handleSubmit = async () => {
    const otpString = otp.join('');
    if (otpString.length < 6) {
      setOtpError("OTP requires 6 digits");
      setInputError(Array(6).fill(true));
      return;
    }
    try {
      const response = await axios.post('http://localhost:8000/api/v1/users/verify-otp', {
        otp: otpString,
        PhoneNumber: phone
      }, { withCredentials: true });
      if (response.status === 200) {
        navigate('/home');
      } else {
        setOtpError(response.data.message || "OTP verification failed");
        setInputError(Array(6).fill(true));
      }
    } catch (error) {
      console.error("There was an error!", error);
      setOtpError("There was an error verifying your OTP. Please try again.");
      setInputError(Array(6).fill(true));
    }
  };

  const handleResend = async () => {
    try {
      await axios.post('http://localhost:8000/api/v1/users/resend-otp', { PhoneNumber: phone });
      setTimer(30); 
      setShowResend(false); 
      setOtpError('');
      setInputError(Array(6).fill(false));
    } catch (error) {
      console.error("Error resending OTP:", error);
      setOtpError("Error resending OTP. Please try again.");
    }
  };

  return (
    <FullScreenContainer>
      <StyledPaper>
        <StyledForm>
          <StyledTypography>
            Verify your Phone Number
          </StyledTypography>
          <StyledBottom>
            Enter the OTP sent to 
          </StyledBottom>
          <StyledPhoneDiv>
            <StyledPhone>
              {phone}
            </StyledPhone>
            <StyledSvg src={image} onClick={() => navigate('/signin')} />
          </StyledPhoneDiv>
          <OuterInput>
            <InnerInput>
              {otp.map((data, index) => (
                <InnerTextBox
                  key={index}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleChange(e as React.ChangeEvent<HTMLInputElement>, index)}
                  onKeyDown={(e) => handleKeyDown(e, index)}
                  ref={(el) => (otpRefs.current[index] = el)}
                  style={{ borderColor: inputError[index] ? 'red' : 'initial' }} // Apply error style conditionally
                />
              ))}
            </InnerInput>
          </OuterInput>
          {otpError && <ErrorMessage>{otpError}</ErrorMessage>}
          <StyledBottomText>
            {showResend ? (
              <>
                <GreyText>
                  Didn't receive the code?
                </GreyText>
                <BlueColor>
                  <StyledResendButton onClick={handleResend}>Resend</StyledResendButton>
                </BlueColor>
              </>
            ) : (
              <>
                <GreyText>
                  Expect OTP in 
                </GreyText>
                <BlueColor>
                  {timer} seconds
                </BlueColor>
              </>
            )}
          </StyledBottomText>
          <StyledButton onClick={handleSubmit}>
            Continue
          </StyledButton>
        </StyledForm>
      </StyledPaper>
    </FullScreenContainer>
  );
};

export default Verify;
