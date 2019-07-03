import { useState } from 'react';
import Router from 'next/router';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import Grid from '@material-ui/core/Grid';

const styles = makeStyles(() => ({
  root: {
    flexGrow: 1
  },
  iconButton: {
    marginLeft: '.5rem'
  },
  toolbar: {
    paddingLeft: 0,
    paddingRight: 0
  },
  toolbarTitle: {
    flex: 1,
    cursor: 'pointer'
  },
  drawer: {
    padding: '2rem'
  }
}));

export default function Nav() {
  const [drawer, setDrawer] = useState(false);
  const classes = styles();

  const toggleDrawer = () => setDrawer(!drawer);

  return (
    <div className={classes.root}>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <Typography
              component="h2"
              variant="h5"
              color="inherit"
              align="left"
              noWrap
              className={classes.toolbarTitle}
              onClick={() => Router.push('/')}
            >
              StanFaas.com
            </Typography>
            <IconButton color="inherit">
              <SearchIcon />
            </IconButton>
            <IconButton
              edge="end"
              color="secondary"
              aria-label="Menu"
              classes={{ root: classes.iconButton }}
              aria-controls="menu"
              aria-haspopup="true"
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Drawer
        anchor="right"
        open={drawer}
        onClose={toggleDrawer}
        classes={{ paper: classes.drawer }}
      >
        <Grid container direction="row" spacing={2}>
          <Grid item>Test for drawer</Grid>
          <Grid item>Hello</Grid>
        </Grid>
      </Drawer>
    </div>
  );
}
