import { Box, Typography } from '@mui/material';

export const Footer = () => {
  return (
    <Box sx={{ color: 'white', padding: '20px', mt: 10, background: '#000' }}>
      <Typography
        variant="body2"
        align="center"
        sx={{ padding: 2 }}>
        &copy; 2024 Tech Play
      </Typography>
    </Box>
  );
};
