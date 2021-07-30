import React from 'react';
import { Header } from 'components/Header/index';

import TodoList from './components/Todo/Todo';

const App: React.VFC = () => {
  return (
    <>
      <Header />
      <TodoList />
    </>
  );
};

export default App;
