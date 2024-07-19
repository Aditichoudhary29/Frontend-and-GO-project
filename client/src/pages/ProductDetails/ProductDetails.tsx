import React, { useState, useEffect } from 'react';
import { Dialog, DialogContent, CircularProgress, Alert, Box, Container } from '@mui/material';
import axios from 'axios';
import { ProductCard } from './Product.Card.component';

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

interface ProductDetailsModalProps {
  open: boolean;
  onClose: () => void;
  productId: string;
}

export const ProductDetails: React.FC<ProductDetailsModalProps> = ({ open, onClose, productId }) => {
  const [loading, setLoading] = useState(true);
  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get(`http://localhost:8000/api/v1/product/${productId}`, { withCredentials: true });
        if (response.data && response.data.data) {
          setProduct(response.data.data);
        } else {
          throw new Error('Product data not found');
        }
      } catch (error) {
        console.error('Error fetching product details:', error);
        setError('Error fetching product details');
      } finally {
        setLoading(false);
      }
    };

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="sm"
      PaperProps={{
        style: {
          backgroundColor: 'white', 
        },
      }}
    >
      <DialogContent style={{ backgroundColor: 'white' }}> 
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            <Alert severity="error">{error}</Alert>
          </Box>
        ) : product ? (
          <ProductCard product={product} />
        ) : (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '70vh' }}>
            
          </Box>
        )}
      </DialogContent>
    </Dialog>
  );
};
