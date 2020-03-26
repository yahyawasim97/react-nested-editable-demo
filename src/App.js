import React from 'react';
import './App.css';
import logo from './logo.svg';
import NestedEditableTree from './nested-editable-tree/nested-editable-tree';
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
