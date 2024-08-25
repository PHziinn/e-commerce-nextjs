'use client';
import { useState } from 'react';
import {
  Box,
  IconButton,
  Badge,
  AppBar,
  Typography,
  Toolbar,
  Drawer,
  List,
  useMediaQuery,
  useTheme,
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';
import ItemCard from '../itemCard';
import { useConvertValues } from '@/hooks/useConvertValues';

export default function NavBarHeader({ cartItems, onRemoveItem }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { convertValues } = useConvertValues();

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };

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
            <IconButton
              sx={{ mr: isMobile ? 0 : 2 }}
              onClick={handleDrawerOpen}>
              <Badge
                badgeContent={cartItems.length}
                color="error"
                sx={{
                  '& .MuiBadge-badge': { fontSize: '0.7rem', minWidth: '18px', height: '16px' },
                }}>
                <ShoppingCartIcon sx={{ width: '26px', height: '26px', color: '#8B96A5' }} />
              </Badge>
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={handleDrawerClose}
              PaperProps={{ sx: { width: isMobile ? 400 : 450 } }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
                <IconButton onClick={handleDrawerClose}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {cartItems.length > 0 ? (
                  <>
                    {cartItems.map((item, index) => (
                      <ItemCard
                        key={index}
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        onRemoveItem={() => onRemoveItem(index)}
                      />
                    ))}
                    <Typography sx={{ p: 2, fontWeight: 'bold', fontSize: 20 }}>
                      Total: {convertValues(totalPrice)}
                    </Typography>
                  </>
                ) : (
                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ p: 2, fontWeight: 'bold', fontSize: 20 }}>
                    Seu carrinho está vazio.
                  </Typography>
                )}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
