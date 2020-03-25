import 'bootstrap/dist/css/bootstrap.min.css';
import './nested-editable-tree.css';
import React, { useState } from 'react';
import { Card } from 'reactstrap';
import Header from './header';
import TreeBody from './tree-body';

NestedEditableTree.defaultProps = {
  defaultMode: 'read',
  defaultList: [],
  title: 'Nested Editable Tree',
  showTitle: true,
  currency: 'Rs',
  firstLevelTitleColor: 'grey',
  secondLevelTitleColor: 'grey',
  thirdLevelTitleColor: 'grey'
};

function NestedEditableTree({
  defaultMode,
  defaultList,
  title,
  showTitle,
  getValueOnSave,
  logo,
  currency,
  firstLevelTitleColor,
  secondLevelTitleColor,
  thirdLevelTitleColor
}) {
  const [mode, setMode] = useState(defaultMode);
  const [list, setList] = useState(defaultList);

  function handleButtonClick() {
    if (mode === 'read') {
      setMode('edit');
    } else {
      setMode('read');
      getValueOnSave(list);
    }
  }

  return (
    <div>
      <Card>
        <Header
          mode={mode}
          saveState={setMode}
          showTitle={showTitle}
          title={title}
          logo={logo}
          handleButtonClick={handleButtonClick}
        />
        <TreeBody
          list={list}
          mode={mode}
          setList={setList}
          currency={currency}
          firstLevelTitleColor={firstLevelTitleColor}
          secondLevelTitleColor={secondLevelTitleColor}
          thirdLevelTitleColor={thirdLevelTitleColor}
        />
      </Card>
    </div>
  );
}

export default NestedEditableTree;
