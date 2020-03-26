import React from 'react';
import './App.css';
import logo from './logo.svg';
import NestedEditableTree from 'react-editable-nested-menu';
function App() {
  return (
    <div className="App">
      <NestedEditableTree
        getValueOnSave={list => {
          console.log(list);
        }}
        logo={logo}
      />
    </div>
  );
}

export default App;
