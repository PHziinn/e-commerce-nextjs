'use client';
import { Box, Button, Grid, Rating, Typography, useMediaQuery, useTheme } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useConvertValues } from '@/hooks/useConvertValues';

export default function CardsProdutos({ produtoData, onAddItem }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const { convertValues } = useConvertValues();

  const handleAddToCart = () => {
    onAddItem(produtoData);
  };

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
            src={produtoData.image}
            alt={produtoData.image}
            sx={{ width: '100%', height: '200px', objectFit: 'contain', marginBottom: '16px' }}
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
          {produtoData.description}
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <Rating
            name="read-only"
            value={produtoData.rating.rate}
            precision={0.1}
            readOnly
            size="small"
          />
          <Typography
            variant="body2"
            sx={{ ml: 1, color: '#FFA400', fontSize: '15px' }}>
            {produtoData.rating.rate}/5
          </Typography>
        </Box>

        <Typography
          variant="h6"
          sx={{ fontWeight: 'bold', mb: 1 }}>
          {convertValues(produtoData.price)}
          <Typography
            component={'p'}
            sx={{ fontSize: 13, fontWeight: 'lighter', mb: 1 }}>
            À vista no PIX
          </Typography>
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button
            variant="contained"
            onClick={handleAddToCart}
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
