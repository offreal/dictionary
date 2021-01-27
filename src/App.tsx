import { FC } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import { Container } from '@material-ui/core';
import styled from 'styled-components';

import Dictionary from './pages/Dictionary';
import Main from './pages/Main';
import Quiz from './pages/Quiz';
import NotFound from './pages/NotFound';

const App: FC = () => {
  return (
    <Wrapper maxWidth="md">
      <Router>
        <Switch>
          <Route path="/main" component={Main} />
          <Redirect exact from="/" to="/main" />
          <Route path="/dictionary" component={Dictionary} />
          <Route path="/quiz" component={Quiz} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    </Wrapper>
  );
};

const Wrapper = styled(Container)`
  display: block;
  margin: 0 auto;
  text-align: center;
`;

export default App;
