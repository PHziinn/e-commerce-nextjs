'use client';
import CardsProdutos from './components/cardsProdutos';
import NavBarHeader from './components/navBarHeader';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [cartItems, setCartItems] = useState([]);

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    },
  });

  useEffect(() => {
    const storedCartItems = localStorage.getItem('products');

    if (storedCartItems) {
      try {
        const parsedCartItems = JSON.parse(storedCartItems);

        setCartItems(parsedCartItems);
      } catch (error) {
        console.error('Erro ao analisar itens do carrinho do localStorage:', error);
      }
    }
  }, []);

  const handleAddItem = (newItem) => {
    setCartItems((prevCartItems) => [...prevCartItems, { ...newItem, quantity: 1 }]);

    localStorage.setItem('products', JSON.stringify(cartItems));
  };

  const handleRemoveItem = (index) => {
    const updatedCartItems = [...cartItems];
    updatedCartItems.splice(index, 1);
    setCartItems(updatedCartItems);

    localStorage.setItem('products', JSON.stringify(updatedCartItems));
  };

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: isMobile ? '95vw' : '80vw',
        paddingX: isMobile ? 0 : undefined,
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? 15 : '10rem' }}>
        <NavBarHeader
          cartItems={cartItems}
          onRemoveItem={handleRemoveItem}
        />

        <Grid
          container
          spacing={1}
          sx={{ display: 'flex', justifyContent: isMobile ? 'center' : 'flex-start' }}>
          {isLoading && <Typography variant="body1">Carregando produtos...</Typography>}
          {isError && <Typography variant="body1">Erro ao carregar produtos</Typography>}
          {data?.map((produto) => (
            <Grid
              item
              key={produto.id}
              sx={{ margin: 1 }}
              sm={6}
              md={3.5}
              lg={2.2}>
              <CardsProdutos
                onAddItem={handleAddItem}
                produtoData={produto}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
