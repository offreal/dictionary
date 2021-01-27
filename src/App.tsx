import React from 'react';

import Dictionary from './pages/Dictionary';
import Main from './pages/Main';
import Quiz from './pages/Quiz';

const App: React.FC = () => {
  return (
    <main>
      <Main />
      <Dictionary />
      <Quiz />
    </main>
  );
};

export default App;
