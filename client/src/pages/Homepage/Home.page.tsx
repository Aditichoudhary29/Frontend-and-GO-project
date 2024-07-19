import React from 'react';
import {AppDiv,CenterAppbar,StyledImage,StyledLink} from "../common/Dashboardmain.styles"
import { FullScreenContainer } from "../common/loginsignupstyles"
import photo from "../../assets/logos/Logo_with_text.svg"
import {  useNavigate } from 'react-router-dom';

export const Home : React.FC = ()=>{
  const nav=useNavigate();
    function onclickHandler(){
      nav('/dashboard')
    }
       return <FullScreenContainer>
          <AppDiv>
              <StyledImage src={photo}></StyledImage>
               <CenterAppbar>
                 <button onClick={onclickHandler}>ID</button>
               </CenterAppbar>
              <div>
                <StyledLink to="/">Logout</StyledLink>
              </div>  
          </AppDiv>
          </FullScreenContainer>
}