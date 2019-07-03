import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Nav from './Nav';

const styles = makeStyles(() => ({
  fixed: {
    paddingTop: '100px'
  }
}));

const Layout = ({ children }) => {
  const classes = styles();

  return (
    <div>
      <Nav />
      <Container fixed classes={classes}>
        {children}
      </Container>
    </div>
  );
};

export default Layout;
