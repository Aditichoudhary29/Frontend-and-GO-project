import { TextField ,Typography} from '@mui/material';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
export const  StyledTypography=styled('div')(()=>({
    margin: '1.25rem 0px 0.5rem ',
    fontWeight: '700',
    lineHeight: '1.2',
    fontSize: '1.25rem',
    fontFamily: 'Baikal, Inter, sans-serif',
    letterSpacing: '-0.025em',
    textAlign: 'center',
}))


export const StyledPaper=styled('div')(()=>({
    width: '32.25rem' ,
    background: 'rgb(255, 255, 255)',
    borderRadius: '1.5rem',
    padding: '2.5rem 4rem',
}))
   


export  const StyledForm=styled('div')(()=>({
    margin: '0px ',
    color: 'rgb(12, 12, 12)',
    lineHeight: '1.4',
    fontSize: '1.175rem',
    letterSpacing: '-0.01em',
    fontFamily: 'Inter, sans-serif',
    fontWeight: '400',
    backgroundColor: 'rgb(255, 255, 255)',
}))

    


export const StyledBottom=styled('div')(()=>({
    margin: '0px' ,
    fontSize: '0.875rem',
    lineHeight: '1.4',
    color: 'rgb(107, 107, 107)',
    fontWeight: '500',
    display: 'flex',
    
    justifyContent: 'center',
    
    alignItems: 'center',
    flexirection: 'column',
}))
     

export const OuterInput=styled('div')`
    margin: 0px;
    color: rgb(12, 12, 12);
    line-height: 1.4;
    font-size: 1.125rem;
    letter-spacing: -0.01em;
    font-family: Inter, sans-serif;
    font-weight: 400;
    background-color: rgb(255, 255, 255)
    
}
`
export const InnerInput=styled('div')(()=>({
    height: '3rem ',
    fontSize: '1.125rem',
    fontWeight: '600',
    display: 'flex',
    gap: '1.25rem',
}))
  
    


export const InnerTextBox=styled.input`
    font: inherit;
    text-align: center;
    width: 2.8em;
    border-radius: 10px;
    border-style: solid;
    border-color: rgb(206, 206, 206);
    border-width: 1px;
    caret-color: rgb(107, 107, 107);
    outline: none;
}
`
export const StyledBottomText=styled('div')(()=>({
    display:'flex' ,
    flexWrap: 'wrap' ,
    gap:'0.2rem',
    justifyContent:'center',
    fontSize: '0.75rem',
    lineHeight: '1.4',
    fontFamily:' Baikal, Inter, sans-serif',
    margin: '1rem 0px 0.25rem',
    fontWeight: '500',
    
}))
   




export const StyledLink = styled(Link)(()=>({
    color: '#007bff' ,
    textDecoration: 'none',
    cursor: 'pointer',
  
    '&:hover': {
      textDecoration: 'underline'
    }
  
}))
  

export const StyledResendButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  text-decoration: none;
  cursor: pointer;
  padding: 0;
  font: inherit;

  &:hover {
    text-decoration: underline;
  }
`;
export const StyledPhoneDiv=styled.div`
    display: flex;
    Justify-content: center;
    align-Items:center;
    padding-bottom:2rem;
}

`
export const StyledPhone=styled.div`
margin: 0px;
    font-size: 0.875rem;
    line-height: 1.4;
    color: rgb(12, 12, 12);
    font-weight: 600;
    letter-spacing: 0.01em;
}
`
export const StyledSvg=styled.img(()=>({
    cursor: 'pointer' ,
    width:'1.5rem',
    height:'1.5rem',
}))
    




export const GreyText=styled.div`
    margin: 0px;
    font-size: 0.75rem;
    line-height: 1.4;
    font-family: Inter, sans-serif;
    color: rgb(157, 157, 157);
    font-weight: 600;
}

`
export const BlueColor=styled.div`

    margin: 0px;
    font-size: 0.75rem;
    line-height: 1.4;
    font-family: Inter, sans-serif;
    font-weight: 600;
    color: rgb(16, 129, 232);
}
`
export const ErrorMessage = styled(Typography)(()=>({
    color: 'red',
    marginTop: '8px',
    textAlign: 'center',
}))
  

