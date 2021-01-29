import React, { FC } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Container } from '@material-ui/core'
import styled from 'styled-components'

import Dictionary from './pages/Dictionary'
import Main from './pages/Main'
import Quiz from './pages/Quiz'
import NotFound from './pages/NotFound'
import routes from './constants/routes'
import device from './constants/device'

const Wrapper = styled(Container)`
  padding-top: 40px;
  padding-bottom: 40px;

  @media ${device.tablet} {
    width: 100vw;
    max-width: 100%;
    height: 100vh;
    height: calc(${window.innerHeight * 0.01}px * 100);
    margin: 0;
    padding: 0;
  }
`

const App: FC = () => (
  <Wrapper maxWidth="md">
    <Router>
      <Switch>
        <Route path={routes.main} component={Main} />
        <Redirect exact from="/" to={routes.main} />
        <Route path={routes.dictionary} component={Dictionary} />
        <Route path={routes.quiz} component={Quiz} />
        <Route path={routes.notfound} component={NotFound} />
      </Switch>
    </Router>
  </Wrapper>
)

export default App
