'use client';
import CardsProdutos from './components/cardsProdutos';
import NavBarHeader from './components/navBarHeader';
import { Box, Container, Grid, useMediaQuery, useTheme } from '@mui/material';

export default function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
            <Grid
              item
              sx={{ margin: 1 }}
              sm={6}
              md={3.5}
              lg={2.2}
              key={item}>
              <CardsProdutos />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Container>
  );
}
