'use client';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useMediaQuery, useTheme } from '@mui/material';

export default function NavBarHeader() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        color="inherit"
        position="fixed"
        sx={{
          background: '#DCDCDC',
          boxShadow: 'none',
          height: '70px',
          display: 'flex',
          justifyContent: 'center',
        }}>
        <Toolbar>
          <Typography
            sx={{
              flexGrow: 1,
            }}>
            <Box
              component={'img'}
              src={'/images/logo-black.svg'}
              alt={'logo'}
              sx={{
                ml: isMobile ? 1 : undefined,
                width: isMobile ? '40%' : '9%',
              }}
            />
          </Typography>

          <Box>
            <IconButton sx={{ mr: isMobile ? 0 : 2 }}>
              <Badge
                badgeContent={4}
                color="error"
                sx={{
                  '& .MuiBadge-badge': {
                    fontSize: '0.7rem',
                    minWidth: '18px',
                    height: '16px',
                  },
                }}>
                <ShoppingCartIcon sx={{ width: '26px', height: '26px', color: '#8B96A5' }} />
              </Badge>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
