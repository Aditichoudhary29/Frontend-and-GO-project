import React, { useState, useEffect } from 'react';
import { FullScreenContainer } from '../common/loginsignupstyles';
import { AppDiv, CenterAppbar, StyledImage, StyledLink } from '../common/Dashboardmain.styles';
import { CardOuterDiv } from './Dashboard.styles';
import photo from '../../assets/logos/Logo_with_text.svg';
import CardComponent from './DashboardComponents/CardComponent';
import { Grid, Alert, CircularProgress } from '@mui/material';
import axios from 'axios';
import  withAuth from '../AuthChecker';
import { useNavigate} from 'react-router-dom';

interface Product {
  _id: string;
  BuyerName: string;
  SellerName: string;
  UnitPrice: number;
  TotalUnits: number;
  Tenure: number;
  RemainingUnits: number;
  Xirr: number;
  Repayment: string;
  SellerImage: string;
  BuyerImage: string;
}

interface DashboardProps {
  onOpenModal: (productId: string) => void;
}

export const Dashboard: React.FC<DashboardProps> = ({ onOpenModal }) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const nav = useNavigate();

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/v1/products', { withCredentials: true });
      if (response.data && response.data.data) {
        setProducts(response.data.data);
      } else {
        setError('No products found');
      }
    } catch (err) {
      console.error(err);
      nav('/signin');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  const handleLogout = async () => {
    try {
    
      await axios.post('http://localhost:8000/api/v1/users/logout', { withCredentials: true });

   
      nav('/signin');
    } catch (err) {
      console.error('Error logging out:', err);
    }
  };
  if (loading) {
    return (
      <Grid container justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
        <CircularProgress />
      </Grid>
    );
  }

  if (error) {
    return (
      <Grid container justifyContent='center' alignItems='center' style={{ height: '100vh' }}>
        <Alert severity='error'>{error}</Alert>
      </Grid>
    );
  }

  return (
    <FullScreenContainer>
      <AppDiv>
        <StyledImage src={photo} />
        <CenterAppbar />
        <div>
          <StyledLink to='/' onClick={handleLogout}>Logout</StyledLink>
        </div>
      </AppDiv>

      <CardOuterDiv>
        {products?.map((product) => (
          <CardComponent
            key={product?._id}
            _id={product?._id}
            BuyerName={product?.BuyerName}
            SellerName={product?.SellerName}
            UnitPrice={product?.UnitPrice}
            Repayment={product?.Repayment}
            Xirr={product?.Xirr}
            ImageBuyer={product?.BuyerImage}
            ImageSeller={product?.SellerImage}
            TotalUnits={product?.TotalUnits}
            RemainingUnits={product?.RemainingUnits}
            Tenure={product?.Tenure}
            onClick={() => onOpenModal(product._id)}
          />
        ))}
      </CardOuterDiv>
    </FullScreenContainer>
  );
};

export default withAuth(Dashboard);
