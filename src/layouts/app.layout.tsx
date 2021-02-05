import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import * as classes from './app.layout.styles';

export const AppLayout: React.FunctionComponent = (props) => {
    const { children } = props;
    const { appBar, appbarTitle, flexContainer, content } = classes;
  
    return (
      <>
        <AppBar position="static" className={appBar}>
          <Toolbar variant="dense">
            <div className={flexContainer}>
              <p className={appbarTitle}>Rick y Morty App</p>
            </div>
          </Toolbar>
        </AppBar>
        <main className={content}>{children}</main>
      </>
    );
  };