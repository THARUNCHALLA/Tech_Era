import {Route, Switch} from 'react-router-dom'

import Initial from './Components/Initial'
import Course from './Components/Course'
import NotFound from './Components/NotFound'

import './App.css'

const App = () => (
  <Switch>
    <Route exact path="/" component={Initial} />
    <Route exact path="/courses/:id" component={Course} />
    <NotFound component={NotFound} />
  </Switch>
)
export default App
