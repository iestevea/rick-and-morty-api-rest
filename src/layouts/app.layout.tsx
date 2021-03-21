import * as React from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import * as classes from './app.layout.styles';
import { Typography } from '@material-ui/core';
import { linkRoutes } from 'core/router';

export const AppLayout: React.FunctionComponent = (props) => {
  const { children } = props;
  const history = useHistory();

  return (
    <>
      <AppBar position="static">
        <Toolbar variant="dense">
          <IconButton color="inherit" aria-label="Menu">
            <AccountCircle />
          </IconButton>
          <Typography
            variant="h6"
            style={{ paddingLeft: '8px', cursor: 'pointer' }}
            onClick={() => history.push(linkRoutes.characterCollection)}
          >
            Characters
          </Typography>
          <Typography
            variant="h6"
            style={{ paddingLeft: '8px', cursor: 'pointer' }}
            onClick={() => history.push(linkRoutes.episodeCollection)}
          >
            Episodes
          </Typography>
          <Typography
            variant="h6"
            style={{ paddingLeft: '8px', cursor: 'pointer' }}
            onClick={() => history.push(linkRoutes.locationCollection)}
          >
            Places
          </Typography>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>{children}</main>
    </>
  );
};
