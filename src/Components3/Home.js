import React, { useState } from 'react';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import { Card, CardContent, Typography, CardMedia, Grid, Button, Container, AppBar, Toolbar,CssBaseline,Box } from '@mui/material';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Footer from './Footer';

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: 300,
  margin: theme.spacing(2),
  padding: theme.spacing(2),
  textAlign: 'center',
  transition: 'transform 0.3s',
  '&:hover': {
    transform: 'scale(1.05)',
  },
  position: 'relative',
}));

const themeLight = createTheme({
  palette: {
    mode: 'light',
  },
});

const themeDark = createTheme({
  palette: {
    mode: 'dark',
  },
});

const Home = () => {
  const [theme, setTheme] = useState(themeLight);
  
  const toggleTheme = () => {
    setTheme(theme === themeLight ? themeDark : themeLight);
  };


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
  };

  const animeData = [

    {
      title: 'My Hero Academia',
      description: 'Best anime ever',
      image: 'https://w0.peakpx.com/wallpaper/708/705/HD-wallpaper-my-hero-academia-boku-no-hero-academia.jpg',
    },
    {
      title: 'Bleach',
      description: 'Best anime ever',
      image: 'https://w0.peakpx.com/wallpaper/778/520/HD-wallpaper-ichigo-kurosaki-anime-bleach.jpg',
    },
  
  ];

  const randomImages = [
    'https://i.pinimg.com/1200x/df/1e/1b/df1e1b44da61576fabc094f3e0b4c627.jpg',
    'https://i.pinimg.com/736x/ec/27/ac/ec27ac45ffa4b2d09d6d06038f052c4c.jpg',
    'https://i.pinimg.com/originals/d2/fe/b3/d2feb36cb96f1ae08db7bb7f26e9d493.jpg',
    'https://e0.pxfuel.com/wallpapers/262/901/desktop-wallpaper-guys-anime-headphone-heads-anime-boy-thumbnail.jpg',
    'https://funmauj.b-cdn.net/test/330331.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnAcOOyXtsdxBmTgkCmZsak6wopIJRswxu6g&usqp=CAU',

  ];

  const cutesonicWallpapers = [
    'https://i.pinimg.com/736x/9d/0e/95/9d0e95a207231b44c265a8fef32d7127.jpg',
    'https://i.pinimg.com/1200x/cc/c6/86/ccc6862498ae6304e553cc46db9042fb.jpg',
    'https://i.pinimg.com/originals/4f/db/55/4fdb554aa28a9cbd5bea7e9b47139500.png',
    'https://i.pinimg.com/736x/f7/f1/1c/f7f11c8b1e3593e10c54d2bbe2d870bd.jpg',
    'https://i.pinimg.com/736x/7a/37/7d/7a377d2c024edff621790847d0794451.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1GS6sxgnqXowwb7724c7d2QWH40rtR39Kjg&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToG1P07uDQdCbJmNpqU_nqnrlOxdpKKYV4Xg&usqp=CAU',
    'https://png.pngtree.com/png-clipart/20230214/ourmid/pngtree-beautiful-red-parrot-png-image_6600183.png',
  ];

  return (
    <ThemeProvider theme={theme}>
      <div style={{ backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#f5f5f5', minHeight: '100vh' }}>
        <CssBaseline />
        <AppBar position="sticky" color='grey'>
          <Toolbar>
            <Typography variant="h6" style={{ flexGrow: 1 }}>
              Anime Wallpaper
            </Typography>
            <Button color="inherit" onClick={toggleTheme}>
              Toggle Theme
            </Button>
          </Toolbar>
        </AppBar>
       
        <Container>
          <Grid container spacing={2} alignItems="stretch">
            <Grid item xs={12} sm={6} md={8}>
              <Slider {...settings}>
                {animeData.map((anime, index) => (
                  <div key={index}>
                    <StyledCard>
                      <CardMedia component="img" height="140" image={anime.image} alt={anime.title} />
                      <CardContent>
                        <Typography gutterBottom variant="h4">
                          {anime.title}
                        </Typography>
                        <Typography variant="body2">{anime.description}</Typography>
                      </CardContent>
                    </StyledCard>
                  </div>
                ))}
              </Slider>
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" height="100%">
                <Typography variant="h6" gutterBottom>
                  PinexAnimeImages
                </Typography>
                <Grid container spacing={2}>
                  {randomImages.map((image, index) => (
                    <Grid item xs={6} key={index}>
                      <img src={image} alt={`Random ${index}`} style={{ width: '100%' }} />
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Grid>
          <Typography variant="h4" style={{ marginTop: '24px' }}>
            cutesonic Wallpapers
          </Typography>
          <Grid container spacing={2}>
            {cutesonicWallpapers.map((wallpaper, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <StyledCard>
                  <CardMedia component="img" height="140" image={wallpaper} alt={`Anime Wallpaper ${index}`} />
                  <CardContent>
                    <Typography gutterBottom variant="h5">
                      Wallpaper {index + 1}
                    </Typography>
                    <Typography variant="body2">Beautiful cutesonic wallpaper.</Typography>
                  </CardContent>
                </StyledCard>
              </Grid>
            ))}
          </Grid>
        </Container>
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Home;