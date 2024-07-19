import React from 'react';
import {AppDiv,CenterAppbar,StyledImage,StyledLink} from "../common/Dashboardmain.styles"
import { FullScreenContainer } from "../common/loginsignupstyles"
import photo from "../../assets/logos/Logo_with_text.svg"
import { Navigate, useNavigate } from 'react-router-dom';

export const FirstPage : React.FC = ()=>{
  const nav=useNavigate();
   
       return <FullScreenContainer>
          <AppDiv>
              <StyledImage src={photo}></StyledImage>
               <CenterAppbar>
                
               </CenterAppbar>
              <div>
                <StyledLink to="/signin"> Login</StyledLink>
              
                <StyledLink to="/signup"> Signup</StyledLink>
              
             
              </div>
            
          </AppDiv>
          </FullScreenContainer>
}