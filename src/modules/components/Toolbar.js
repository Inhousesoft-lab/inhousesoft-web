import { styled } from '@mui/material/styles';
import MuiToolbar from '@mui/material/Toolbar';

const Toolbar = styled(MuiToolbar)(({ theme }) => ({
  height: 64,
  backgroundColor: theme.palette.secondary.light,
  [theme.breakpoints.up('sm')]: {
    height: 70,
  },
}));

export default Toolbar;