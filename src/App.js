import React from 'react';
import './index.css';
import Book from './components/Book';
import './modal.css';

function App() {
  return (
    <div>
      <Book items={['book1', 'book2']} />
    </div>
  );
}

export default App;
