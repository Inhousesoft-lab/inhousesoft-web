import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

const image = {
  height: 55,
  my: 4,
};

function ProductHowItWorks() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', bgcolor: 'secondary.light', overflow: 'hidden' }}
    >
      <Container
        sx={{
          mt: 10,
          mb: 15,
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src={process.env.PUBLIC_URL + '/productCurvyLines.png'}
          alt="curvy lines"
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            top: -180,
            opacity: 0.7,
          }}
        />
        <Typography variant="h4" component="h2" sx={{ mb: 14 }}>
          블루밍을 믿으세요!
        </Typography>
        <div>
          <Grid container spacing={5}>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/productHowItWorks3.svg'}
                  alt="suitcase"
                  sx={image}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                Specialized Data Analysis
                </Typography>
                <Typography variant="h5" align="center">
                  보다 전문적인 데이터 분석으로 만남의 기회를 높혀갑니다.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/productValues2.svg'}
                  alt="graph"
                  sx={image}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                  Only real User
                </Typography>
                <Typography variant="h5" align="center">
                  유령 또는 로봇 계정을 사용하지 않겠습니다.
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box sx={item}>
                <Box
                  component="img"
                  src={process.env.PUBLIC_URL + '/productHowItWorks1.svg'}
                  alt="clock"
                  sx={image}
                />
                <Typography variant="h6" sx={{ my: 5 }}>
                Persnal Information Security
                </Typography>
                <Typography variant="h5" align="center">
                  소중한 회원님들의 개인정보를 함부로 유출하지 않겠습니다.
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </div>
      </Container>
    </Box>
  );
}

export default ProductHowItWorks;