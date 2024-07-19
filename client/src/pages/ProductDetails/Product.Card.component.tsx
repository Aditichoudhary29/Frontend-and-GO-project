import React, { useState } from 'react';
import { Typography, LinearProgress } from '@mui/material';
import { StyledCard, StyledCardHeader, StyledPaper, StyledCardContent, IncrementDecrementButton, IncrementDecrementBox, StyledButton } from './Productdetails.style';
import axios from 'axios';
import OrderDetailsPopup from '../OrderDetails/OrderDetailsModel'; 

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

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const [units, setUnits] = useState(0);
  const [orderPopupOpen, setOrderPopupOpen] = useState(false);
  const [orderDetails, setOrderDetails] = useState<Product | null>(null);
  
  const incrementUnits = () => {
    if (units < product.TotalUnits) {
      setUnits(units + 1);
    }
  };

  const decrementUnits = () => {
    if (units > 0) {
      setUnits(units - 1);
    }
  };

  const handleBuyNow = async () => {
    try {
      const requestData = {
        ProductId: product.ID,
        NoOfUnits: units,
      };
      const response = await axios.post(
        'http://localhost:8000/api/v1/order/details', requestData, { withCredentials: true }
      );
      if (response.data && response.data.data) {
        setOrderDetails(response.data.data);
        setOrderPopupOpen(true);
      } else {
        throw new Error('Order details not found');
      }
    } catch (error) {
      console.error('Error fetching order details:', error);
    }
  };

  const handleClosePopup = () => {
    setOrderPopupOpen(false);
  };

  const progress = (units / product.TotalUnits) * 100;

  return (
    <StyledCard>
      <StyledPaper>
      <StyledCardHeader
          title={`Buyer: ${product.BuyerName}`}
          subheader={`Seller: ${product.SellerName}`}
        />
        <StyledCardContent>
          <Typography variant="body1">Unit Price: ₹{product.UnitPrice}</Typography>
          <Typography variant="body1">Tenure: {product.Tenure} Days</Typography>
          <Typography variant="body1">Xirr: {product.Xirr}%</Typography>
          <Typography variant="body1">Total Units Left: {product.RemainingUnits - units} / {product.TotalUnits}</Typography>

          <LinearProgress variant="determinate" value={progress} sx={{ height: 10, borderRadius: 30, m: 2 }} />

          <IncrementDecrementBox>
            <IncrementDecrementButton variant="contained" onClick={decrementUnits} disabled={units === 0}>
              -
            </IncrementDecrementButton>
            <Typography variant="body1" display="inline" mx={2}>
              {units}
            </Typography>
            <IncrementDecrementButton variant="contained" onClick={incrementUnits} disabled={units >= product.TotalUnits}>
              +
            </IncrementDecrementButton>
          </IncrementDecrementBox>

          <StyledButton onClick={handleBuyNow}>Buy Now</StyledButton>

          <OrderDetailsPopup open={orderPopupOpen} onClose={handleClosePopup} product={orderDetails} units={units} />
        </StyledCardContent>
      </StyledPaper>
    </StyledCard>
  );
};