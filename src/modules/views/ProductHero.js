import * as React from 'react';
import Typography from '../components/Typography';
import ProductHeroLayout from './ProductHeroLayout';

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/professional.jpg)`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={process.env.PUBLIC_URL + '/professional.jpg'}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2">
        소소한 일상에, 블루밍 한방울
      </Typography>
      <Typography
        variant="body2"
        color="inherit"
        sx={{ mt: 10 }}
      >
        소개팅 경험을 바꾸다
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mt: 2 }}
      >
        연애를 꿈꾸는 당신을 위한 소개팅 서비스
      </Typography>
    </ProductHeroLayout>
  );
}