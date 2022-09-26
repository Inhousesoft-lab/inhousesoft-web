import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Link from '@mui/material/Link';
import Container from '@mui/material/Container';
import Typography from '../components/Typography';

function Copyright() {
  return (
    <React.Fragment>
      {'© '}
      <Link color="inherit" href="https://www.lynlab.kr">
        Lynlab
      </Link>{' '}
      {new Date().getFullYear()}
    </React.Fragment>
  );
}

export default function AppFooter() {
  return (
    <Typography
      component="footer"
      sx={{ display: 'flex', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ my: 8, display: 'flex' }}>
        <Grid container spacing={5}>
          <Grid item xs={6} sm={4} md={3}>
            <Copyright />
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Legal
            </Typography>
            <Box component="ul" sx={{ m: 0, listStyle: 'none', p: 0 }}>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">이용약관</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">개인정보 처리방침</Link>
              </Box>
              <Box component="li" sx={{ py: 0.5 }}>
                <Link href="#">청소년보호정책</Link>
              </Box>
            </Box>
          </Grid>
          <Grid item>
            <Typography variant="body1">
              린랩 | 서울특별시 서대문구 신촌로25, 2층 3688호 | 대표이사 : 이태린
            </Typography>
            <Typography variant="body1">
              사업자등록번호 : 731-08-02170
            </Typography>
            <Typography variant="body1">
              문의전화 : 070-8984-3550(이메일 고객센터만 운영) | 이메일 : help@ublooming.co.kr
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}