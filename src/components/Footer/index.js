import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import foolsLogo from './fools.png';
import styles from './styles.module.css';

const Footer = () => (
  <Grid container spacing={3}>
    <Grid item xs={12} className={`${styles.item}`}>
      Built by a bunch of fools:
      <a href="https://github.com/4ools">
        <Avatar src={foolsLogo} alt="Fools on github" className={styles.icon} />
      </a>
    </Grid>
  </Grid>
);

export default Footer;
