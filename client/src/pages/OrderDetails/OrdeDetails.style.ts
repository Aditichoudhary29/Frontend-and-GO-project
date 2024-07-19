import { Dialog, DialogTitle, DialogContent, DialogActions, } from '@mui/material';
import { styled } from '@mui/material/styles';

export const StyledDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialog-paper': {
      borderRadius: theme.spacing(2),
      backgroundColor: '#f5f5f5',
      padding: theme.spacing(2),
      width:"500px",
  
    },
  }));
  
  export const StyledDialogTitle = styled(DialogTitle)(({ theme }) => ({
    backgroundColor: '#e0e0e0',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: `${theme.spacing(2)} ${theme.spacing(2)} 0 0`,
  }));
  
  export const StyledDialogContent = styled(DialogContent)(({ theme }) => ({
    padding: theme.spacing(2),
    paddingTop:'1rem'
   
  }));
  
  export const StyledDialogActions = styled(DialogActions)(({ theme }) => ({
    justifyContent: 'center',
    padding: theme.spacing(2),
    backgroundColor: '#e0e0e0',
    borderRadius: `0 0 ${theme.spacing(2)} ${theme.spacing(2)}`,
  }));
  export const StyledComponentLeft =styled('div')(()=>({
    display:'flex'
  }))
  export const StyledUser=styled('div')(()=>({
    color:'gray',
    fontSize:'1.1rem',
    fontWeight:"500",
    paddingRight:"0.4rem"
  }));

  export const StyledUserName=styled('div')(()=>({
    color:'black',
    fontSize:'1.1rem',
    fontWeight:"500"
  }));
  export const StyledComponent =styled('div')(()=>({
    display:'flex',
    justifyContent:'space-between'
  }))
  export const StyledLeft=styled('div')(()=>({
    alignItems:'right',
    color:'black',
    fontSize:'1.1rem',
    fontWeight:"500"
  }))
  export const StyledComponentRight =styled('div')(()=>({
    display:'flex'
  }))

  export const Styledimage=styled('img')(()=>({
    padding:'2rem',
    width:'10rem',
    height:'10rem',
   alignItems:'center'

  }))

  export const Imagediv=styled('div')(()=>({
    display:'flex',
    justifyContent:'center',
  }))
 export const  StatusDiv=styled('div')(()=>({
    display:'flex',
    justifyContent:'center',
 }))
  export const Status=styled('div')(()=>({
    fontSize:"2rem",
    color:"green",
    alignContent:'center'
  })) 