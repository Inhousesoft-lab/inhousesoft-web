import * as React from 'react';
import AppBar from '../components/AppBar';
import Toolbar from '../components/Toolbar';
import Typography from '../components/Typography';

function AppAppBar() {
  return (
    <div>
      <AppBar position="fixed">
        <Toolbar sx={{ justifyContent: 'space-between' }}>
          <Typography variant="h6" sx={{ fontSize: 24 }}>
            Lynlab
          </Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
    </div>
  );
}

export default AppAppBar;