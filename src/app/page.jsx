'use client';
import NavBarHeader from './components/navBarHeader';
import { Container, useMediaQuery, useTheme } from '@mui/material';

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
      <NavBarHeader />
    </Container>
  );
}
