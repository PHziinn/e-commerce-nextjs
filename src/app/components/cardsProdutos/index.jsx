'use client';
import { Box, Button, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function CardsProdutos() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Grid
      item
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyItems: 'center',
      }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          maxWidth: isMobile ? 350 : 285,
          flex: '0 0 auto',
          border: '1px solid #ccc',
          borderRadius: '8px',
          padding: '0.7rem',
        }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Box
            component={'img'}
            src={'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg'}
            alt={'Camisa Branca'}
            style={{ width: '80%', marginBottom: '16px' }}
          />
        </Box>

        <Typography
          variant="body2"
          sx={{
            mb: 2,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            marginBottom: 2,
            flexGrow: 1,
            lineHeight: '1.4em',
            maxHeight: '3.4em',
          }}>
          Mens Casual Premium Slim Fit T-Shirts
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating
            name="read-only"
            value={2}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            sx={{ ml: 1, color: '#FFA400', fontSize: '15px' }}>
            {2}/5
          </Typography>
        </Box>

        <Typography
          variant="body2"
          sx={{ textDecoration: 'line-through', color: 'gray' }}>
          R$ 255,00
        </Typography>

        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 1 }}>
          R$ 123,99
          <Typography
            component={'p'}
            sx={{ fontSize: 13, fontWeight: 'lighter', mb: 1 }}>
            À vista no PIX
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            href="#"
            variant="contained"
            sx={{
              boxShadow: 'none',
              background: 'black',
              transition: 'background-color 0.3s',
              width: '100%',
              '&:hover': {
                backgroundColor: '#D3D3D3',
                color: 'black',
              },
            }}>
            <ShoppingCartIcon />
            Comprar
          </Button>
        </Box>
      </Box>
    </Grid>
  );
}
