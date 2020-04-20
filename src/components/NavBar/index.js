import React from 'react';
import Typography from '@material-ui/core/Typography';

const NavBar = ({ title }) => {
  return (
    <header style={{ textAlign: 'center', marginTop: 20 }}>
      <Typography variant="h4">{title}</Typography>
    </header>
  );
};

export default NavBar;
