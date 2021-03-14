import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles'
import Jobs from 'components/Jobs/Jobs';
import Employees from 'components/Employees/Emloyees';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <Jobs />
      <main className={classes.content}>
        <div className={classes.toolbar}></div>
        <Employees />
      </main>
    </div>
  );
}

export default App;


