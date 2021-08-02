import React from 'react';
import { Header } from 'components/Header/index';
import { Todo } from './components/Todo/index';

const App: React.VFC = () => {
  return (
    <>
      <Header />
      <Todo />
    </>
  );
};

export default App;
