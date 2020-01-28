import React from 'react';
import { Route, Switch } from 'react-router-dom'
import { Box } from 'grommet'
import Home from './components/Home'
import Person from './components/Person'

const App = () => (
  <>
  <Box pad='medium'>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/person' component={Person} />
    </Switch>
  </Box>
  </>
)

export default App;
