import { Card, CardMedia, CardContent, Typography, Box, Button } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useConvertValues } from '@/hooks/useConvertValues';

export default function ItemCard({ image, title, price, onRemoveItem }) {
  const { convertValues } = useConvertValues();

  const handleRemoveItem = (index) => {
    onRemoveItem(index);
  };

  return (
    <Card
      sx={{
        padding: 1,
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        minHeight: 150,
      }}>
      <CardMedia
        component="img"
        alt={title}
        image={image}
        sx={{ maxWidth: 100, maxHeight: 100, objectFit: 'contain' }}
      />
      <CardContent sx={{ ml: 2, flexGrow: 1 }}>
        <Typography component="p">{title}</Typography>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Typography sx={{ color: '#000000', fontSize: 18, fontWeight: 'bold' }}>
            {convertValues(price)}
          </Typography>

          <Button
            sx={{ display: 'flex', color: '#000000' }}
            onClick={handleRemoveItem}>
            <DeleteIcon sx={{ color: '#000000' }} />
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
