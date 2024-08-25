'use client';
import CardsProdutos from './components/cardsProdutos';
import NavBarHeader from './components/navBarHeader';
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@mui/material';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: async () => {
      const response = await axios.get('https://fakestoreapi.com/products');
      return response.data;
    },
  });

  return (
    <Container
      maxWidth={false}
      sx={{
        maxWidth: isMobile ? '95vw' : '80vw',
        paddingX: isMobile ? 0 : undefined,
      }}>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: isMobile ? 15 : '10rem' }}>
        <NavBarHeader />

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
              <CardsProdutos produtoData={produto} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
