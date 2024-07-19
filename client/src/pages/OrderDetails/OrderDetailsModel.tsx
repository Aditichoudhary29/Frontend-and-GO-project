
import withAuth from '../AuthChecker';
import { useNavigate } from 'react-router-dom';
import React, { useState ,useEffect} from 'react';
import { Button} from '@mui/material';
import {StyledDialog,StyledDialogTitle,StyledDialogContent,StyledDialogActions, StyledUser, StyledUserName,StyledComponent,  StyledLeft, StyledComponentRight, StyledComponentLeft, Styledimage, Imagediv, Status, StatusDiv} from "./OrdeDetails.style"
import success from "../../assets/success-withdraw.svg"
import failed from "../../assets/SVG/error-withdraw.svg"
interface Product {
  _id: string;
  BuyerName: string;
  SellerName: string;
  UnitPrice: number;
  TotalUnits: number;
  Tenure: number;
  RemainingUnits: number;
  ImageSeller: string;
  ImageBuyer: string;
  Xirr: number;
  ID: string;
}

interface OrderDetailsPopupProps {
  open: boolean;
  onClose: () => void;
  product: Product | null;
  units: number;
}


const OrderDetailsPopup: React.FC<OrderDetailsPopupProps> = ({ open, onClose, product, units }) => {
  const navigate = useNavigate();
const [successful,setSuccessful]=useState(true);
useEffect(() => {
  setSuccessful(units > 0);
}, [units]);
  const handleClose = () => {
    onClose();
    navigate('/dashboard');
  };

  if (!product) return null;
 
  return (
    <StyledDialog open={open} onClose={handleClose}>
      <StyledDialogTitle>Order Details</StyledDialogTitle>
      <StyledDialogContent>
        <StyledComponent>
          <StyledComponentLeft>
        <StyledUser>BUYER: </StyledUser>
        <StyledUserName>{product.BuyerName}</StyledUserName>
        </StyledComponentLeft>
      
        <StyledComponentLeft>
        <StyledUser>SELLER: </StyledUser>
        <StyledUserName>{product.SellerName}</StyledUserName>
        </StyledComponentLeft>
        <StyledComponentRight>
          <StyledUser>
            TOTAL:
          </StyledUser>
          <StyledUserName>₹{(product.UnitPrice * units).toFixed(2)}</StyledUserName>
        </StyledComponentRight>
       </StyledComponent>
         {successful ? (
          <Imagediv>
            <Styledimage src={success} />
          </Imagediv>
        ) : (
          <Imagediv>
            <Styledimage src={failed} />
          </Imagediv>
        )}

        <StatusDiv>
          <Status>{successful ? 'SUCCESSFUL' : 'FAILED'}</Status>
        </StatusDiv>

      </StyledDialogContent>
      <StyledDialogActions>
        <Button onClick={handleClose} variant="contained" >
          Close
        </Button>
      </StyledDialogActions>
    </StyledDialog>
  );
};

export default withAuth(OrderDetailsPopup);
