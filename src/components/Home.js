import React from 'react';
import TodoList from './TodoList';
import logo from '../logo.svg';

const Home = () => {
  return (
    <section>
      <img src={logo} className="App-logo" alt="logo" />
      <TodoList />
    </section>
  );
};

export default Home;
