import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '../components/Button';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/balloon.jpg)`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={process.env.PUBLIC_URL + '/balloon.jpg'}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        소소한 일상에, 블루밍 한방울
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { sx: 4, sm: 10 } }}
      >
        연애를 꿈꾸는 당신을 위한 소개팅 서비스
      </Typography>
      <Box
        component="section"
        md={{ maxWidth: 400}}
      >
        <Grid container>
          <Grid item xs={6} sm={6} md={6}>
            <Button
              size="large"
              component="a"
              href="#"
              sx={{ minWidth: 200 }}
            >
              <img
                src={process.env.PUBLIC_URL + '/appstore.png'}
                alt="appstore"
                width="123"
                height="42"
              />
            </Button>
          </Grid>
          <Grid item xs={6} sm={6} md={6}>
            <Button
              size="large"
              component="a"
              href="#"
              sx={{ minWidth: 200 }}
            >
              <img
                src={process.env.PUBLIC_URL + '/googleplay.png'}
                alt="googleplay"
                width="123"
                height="42"
              />
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        소개팅 경험을 바꾸다
      </Typography>
    </ProductHeroLayout>
  );
}