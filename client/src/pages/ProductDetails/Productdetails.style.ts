import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import {
    Grid, Typography, Card, CardContent, CardHeader, CircularProgress,
    Alert, Button, Box, LinearProgress, Container
  } from '@mui/material';
export const StyledCard = styled(Card)(({ theme}) => ({
    transition: 'transform 0.3s, box-shadow 0.3s',
    '&:hover': {
      transform: 'scale(1.05)',
      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
    },
    borderRadius: 15,
    padding: theme.spacing(2),
    margin: theme.spacing(2),
  }));
  
 export const StyledPaper = styled('div')`
    display: flex;
    flex-direction: column;
    align-items: center;
    
    max-width: 450px;
    width: 28.5rem;
    background-color:white ;
    border-radius: 1.5rem;
    boxShadow: 3 ;
  `;
export  const StyledCardHeader = styled(CardHeader)(({ theme }) => ({
    width:'100%',
    backgroundColor: 'gray',
    textAlign: 'center',
    color: 'white',
    '& .MuiCardHeader-subheader': {
      color: 'white',
    },
    padding: theme.spacing(2),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  }));
  
  export const StyledCardContent = styled(CardContent)(({ theme }) => ({
    width:'100%',
    padding: theme.spacing(3),
    textAlign: 'center',
    backgroundColor: 'white',
  
  }));
  
  export const IncrementDecrementBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing(2),
  }));
  
 export const IncrementDecrementButton = styled(Button)(({ theme }) => ({
    margin: theme.spacing(0, 1),
    backgroundColor: 'gray',
    color:'white',
  }));
  
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
      background-color:gray;
      font-weight: 600;
      transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
      &:hover{
         background-color:black;
  }
        
      }
  
  `