import React from 'react';
import './App.css';
import NestedEditableTree from './components/nested-editable-tree';
import logo from './logo.svg';
function App() {
  return (
    <div className="App">
      <NestedEditableTree 
        getValueOnSave={(list)=>{console.log(list)}}
        logo={logo}
      />
    </div>
  );
}

export default App;
