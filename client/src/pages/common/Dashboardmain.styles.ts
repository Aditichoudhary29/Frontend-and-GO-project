import styled from "@emotion/styled";
import { Link } from "react-router-dom";
export const AppDiv = styled('div')({
  height: '5.375rem',
  top: '0px',
  left: '0px',
  position: 'fixed',
  width: '100%',
  zIndex: '9',
  borderBottom: '1px solid rgba(83, 83, 83, 0.13)',
  padding: '1.5rem 4rem',
  display: 'flex',
  backgroundColor: 'rgb(255, 255, 255)',
  justifyContent: 'space-between',
  alignItems: 'center',
});


export const StyledImage = styled('img')(()=>({
  maxWidth: '97px', 
  height: '37px',
 


  '&:hover':{
    cursor:'pointer',
  }

}))
 
 

export const CenterAppbar = styled('div')(()=>({
  display: 'inline-flex ',
  gap: '2rem',
  flex: '0 1 auto',
  justifyContent: 'center',
  placeSelf: 'center',
  margin: '0px',
  padding: '0px',
  listStyle: 'none',

}))
 

export const StyledLink=styled(Link)(()=>({
  color: 'rgb(107 ,107,107)',
  padding:'5px',
  fontWeight: 'bold',
  textDecoration: 'none', 
  '&:hover' : {
   
    cursor: 'pointer',
  }

}))
  
