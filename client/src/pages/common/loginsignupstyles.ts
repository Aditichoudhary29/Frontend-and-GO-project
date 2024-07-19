import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { TextField } from '@mui/material';

export const FullScreenContainer = styled('div')(()=>({
  height: '100vh' ,
  width: '100vw',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor:'rgb(249, 250, 252)', 
}))
  

export const StyledPaper = styled('div')(()=>({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '2rem 4rem',
  maxWidth: '450px',
  width: '28.5rem',
  backgroundColor: 'white',
  borderRadius: '1.5rem',
}))



export const StyledTypography = styled('div')`
  display: flex;
  width:328px;
  height:33px;
  justify-content: center;
  font-weight: 800;
  line-height: 1.2;
  font-size: 1.75rem;
  font-family: Baikal,Inter,sans-serif;
  letter-spacing: -0.025em;
  text-align: center;
  margin: 0.5rem 0px 1.25rem;
`;
export  const StyledForm=styled('div')(()=>({
  width:'328px',
  margin:'2px ',
}))


 
  

export  const StyledInput= styled('div')`
 text-align:left;
 width:inherit;
 paddingTop:0.5rem;


`
export  const StyledText=styled('div')`
   color: rgb(58, 58, 58);
    font-size: 0.75rem;
    margin-bottom: 0.3rem;
    display: inline-block;
    font-weight:450;
     letter-spacing: -0.01em;

`

export const StyledTextField = styled(TextField)`
  && {
    width: 100%;

    & .MuiInputBase-root {
      height: 3rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: rgb(12, 12, 12);
      font-weight: 500;
      border-radius: 8px;
      background: rgb(255, 255, 255);
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: rgb(203, 213, 225);
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: rgb(12, 12, 12);
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, outline 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    & .MuiFormLabel-root {
      font-weight: 500;
    }

    & input::placeholder {
      font-size: 0.9rem;
      color: #9e9e9e;
    }

    & .MuiOutlinedInput-root.Mui-error .MuiOutlinedInput-notchedOutline {
      border-color: rgb(244, 67, 54); /* red color for error state */
    }

    & .MuiFormHelperText-root.Mui-error {
      color: rgb(244, 67, 54); /* red color for error helper text */
    }
  }
  
`;

export const StyledBottomText=styled('div')`
    display:flex;
    flex-wrap: wrap ;
    gap:0.2rem;
    justify-content:left;
    font-size: 0.75rem;
    line-height: 1.4;
    font-family: Baikal, Inter, sans-serif;
    margin: 1rem 0px 0.25rem;
    font-weight: 500;
    

}`

export const StyledLink = styled(Link)`
  color: #007aff;
  font-weight: bold;
  text-decoration: none; 
  &:hover {
   
    cursor: pointer;
  }
`;

export const StyledButton =styled('div')`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    box-sizing: border-box;
    -webkit-tap-highlight-color: transparent;
    outline: 0px;
    border: 0px;
    margin: 12px 0px 0px;
    cursor: pointer;
    user-select: none;
    vertical-align: middle;
    appearance: none;
    text-decoration: none;
    line-height: 1;
    font-family: Inter, sans-serif;
    min-width: 64px;
    padding: 8px 22px;
    border-radius: 8px;
    width: 100%;
    box-shadow: none;
    text-transform: none;
    text-align: center;
    font-size: 1.125rem;
    height: 3rem;
    color: rgb(255, 255, 255);
    background-color: rgb(16, 129, 232);
    font-weight: 600;
    transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    &:hover{
       background-color: rgb(15, 40, 82);
}
      
    }

`
export const SignupDoublegrid=styled.div`
    display: grid;
    grid-template-columns: 5rem 1fr;
    gap: 0.75rem;
    align-items: flex-start;
        margin-bottom: 0.5rem;
    position: relative;


`

export const  Signupleft=styled.div`
display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    gap: 0.4rem;
    height: 3rem;
    background: rgb(250, 250, 250);
    border: 1px solid rgb(206, 206, 206);
    border-radius: 8px;
    width: 100%;
`
export const LeftImage=styled('img')(()=>({
  borderRadius: '2px ',
       width:'24px',
       height:'16px',

}))
     
export const LeftText=styled('div')(()=>({
  margin: '0px' ,
  fontSize: '0.875rem',
  lineHeight: '1.4',
  fontWeight: "500"
}))
 

export const SignupRight=styled ('div')(()=>({
  display: 'block',
    width: '100%',
}))
  

export const StyledReffText=styled ('div')(()=>({
  fontWeight: '500 ' ,
  color: 'rgb(58, 58, 58)',
  marginBottom: '0.3rem',
  paddingBottom:'0.2rem',
  display: 'block',
  margin: '0px',
  fontSize: '0.875rem',
  lineHeight: '1.4',
  letterSpacing: '-0.01em',
}))
 

export const StyledCheck=styled('div')(()=>({
  cursor: 'pointer',
  display:'flex',
  justifyContent:'left',
      verticalAlign: 'middle',
     
      marginRight: '16px',
      marginBottom: '1.37rem',

          width: '100%',
     
      alignItems: 'center',
   
}));


export const StyledCheckbox = styled('div')(()=>({
  width: '1rem',
  height: '1rem',
  backgroundColor: '#1976d2', 
  borderRadius: 4,
  transition: 'background-color 0.3s ease',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#1565c0', 
  },
  '&.checked': {
    backgroundColor: 'transparent', 
  },
}));


export const RefferalCodeDiv=styled('div')(()=>({
  paddingTop: '0.5rem' ,
  marginBottom: '2.25rem',
      color: 'rgb(12, 12, 12)',
  lineHeight: '1.4',
  fontSize: '1.125rem',
  letterSpacing: '-0.01em',
}))


export const RefferalInput=styled('div')(()=>({
  marginBottom: '0.5rem',
  position: 'relative',
  display: 'block',
  width: '100%'

}))



export const StyledReffIn=styled(TextField)`
  &&{
    width: 100%;
    
    
    & .MuiInputBase-root {
     
      height: 3rem;
      display: flex;
      align-items: center;
      font-size: 1rem;
      color: rgb(12, 12, 12);
      font-weight: 500;
      border-radius: 8px;
   
      background: rgb(255, 255, 255);
      
    }

    & .MuiOutlinedInput-notchedOutline {
      border-color: rgb(203, 213, 225);
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
     
      transition: border-color 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms, outline 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
    }

    & .MuiFormLabel-root {
      font-weight: 500;
    }
        & input::placeholder {
      font-size: 0.9rem; 
      color: #9e9e9e;
    }
  
}
`
export const StyledCheckText=styled('div')(()=>({
  margin: '0px',
    lineHeight: '1.4',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '500',
    fontSize: '0.75rem !important'
}))

  

export const ErrorStyles=styled('div')(()=>({
  color:"red",
  alignItems: "left"
}))


