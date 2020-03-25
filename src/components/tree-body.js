import React from 'react';
import { CardBody, Card, Row, Col, Input, Button } from 'reactstrap';
import Item from './item';

function TreeBody({
  list,
  setList,
  mode,
  currency,
  firstLevelTitleColor,
  secondLevelTitleColor,
  thirdLevelTitleColor
}) {
  function handleMenuChange(event, menuIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].name = event.target.value;
    setList(fetchedlist);
  }

  function removeMenu(menuIndex) {
    const fetchedlist = [...list];
    fetchedlist.splice(menuIndex, 1);
    setList(fetchedlist);
  }

  function handleCategoryChange(event, menuIndex, categoryIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex].name = event.target.value;
    setList(fetchedlist);
  }

  function removeCategory(menuIndex, categoryIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories.splice(categoryIndex, 1);
    setList(fetchedlist);
  }

  function handleItemChange(event, menuIndex, categoryIndex, itemIndex) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex].items[itemIndex][
      event.target.name
    ] = event.target.value;
    setList(fetchedlist);
  }

  function addItem(menuId, categoryId) {
    const fetchedlist = [...list];
    let item = {
      name: '',
      description: '',
      price: ''
    };
    fetchedlist[menuId].categories[categoryId].items.push(item);
    setList(fetchedlist);
  }

  function removeItem(menuIndex, categoryIndex, index) {
    const fetchedlist = [...list];
    fetchedlist[menuIndex].categories[categoryIndex].items.splice(index, 1);
    setList(fetchedlist);
  }

  function addMenu() {
    const fetchedlist = [...list];
    let menu = {
      name: '',
      description: '',
      categories: []
    };
    fetchedlist.push(menu);
    setList(fetchedlist);
  }

  function addCategory(menuId) {
    const fetchedlist = [...list];
    let menu = {
      name: '',
      description: '',
      items: []
    };
    fetchedlist[menuId].categories.push(menu);
    setList(fetchedlist);
  }

  function handleKeyDown(e) {
    e.target.style.height = 'inherit';
    e.target.style.height = `${e.target.scrollHeight}px`;
  }

  return (
    <CardBody>
      {list.length === 0
        ? mode === 'read' && <p>Add a menu</p>
        : list.map((menu, menuIndex) => {
            return (
              <div className="first__level__list__style" key={menuIndex}>
                <Row
                  style={{
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '5px 0px'
                  }}
                >
                  <Col xs="8" md="4">
                    <Input
                      disabled={mode === 'read' ? true : false}
                      style={
                        mode === 'read'
                          ? {
                              color: firstLevelTitleColor,
                              ...styles.menuReadStyle
                            }
                          : { margin: 10 }
                      }
                      onChange={event => handleMenuChange(event, menuIndex)}
                      value={menu.name}
                    />
                  </Col>
                  {mode === 'edit' && (
                    <Col xs="4" md="2">
                      <i
                        className="fa fa-minus"
                        style={{ float: 'right', color: 'red' }}
                        onClick={() => {
                          removeMenu(menuIndex);
                        }}
                      ></i>
                    </Col>
                  )}
                </Row>
                {menu.categories.map((category, categoryIndex) => {
                  return (
                    <Card
                      style={{
                        margin: 10,
                        marginBottom: 20,
                        padding: '10px 5px',
                        background: '#d3d3d329',
                        border: 0,
                        borderRadius: 10,
                        boxShadow: 'rgba(0, 0, 0, 0.2) 0px 2px 4px 0px'
                      }}
                      key={categoryIndex}
                    >
                      <Row
                        style={{
                          justifyContent: 'space-between',
                          alignItems: 'center',
                          margin: '5px 0px',
                          borderBottom: '2px solid',
                          borderColor: '#2e363a'
                        }}
                      >
                        <Col xs="8" md="4">
                          <Input
                            disabled={mode === 'read' ? true : false}
                            style={
                              mode === 'read'
                                ? {
                                    color: secondLevelTitleColor,
                                    ...styles.categoryReadStyle
                                  }
                                : { margin: '10px 0px' }
                            }
                            value={category.name}
                            onChange={event =>
                              handleCategoryChange(
                                event,
                                menuIndex,
                                categoryIndex
                              )
                            }
                          />
                        </Col>
                        {mode === 'edit' && (
                          <Col xs="4" md="2">
                            <i
                              className="fa fa-minus"
                              style={{ float: 'right', color: 'red' }}
                              onClick={() =>
                                removeCategory(menuIndex, categoryIndex)
                              }
                            ></i>
                          </Col>
                        )}
                      </Row>
                      <div>
                        {category.items.map((item, index) => {
                          let lastIndex = category.items.length - 1;
                          return (
                            <Item
                              currency={currency}
                              mode={mode}
                              lastIndex={lastIndex}
                              item={item}
                              index={index}
                              menuIndex={menuIndex}
                              categoryIndex={categoryIndex}
                              handleItemChange={handleItemChange}
                              removeItem={removeItem}
                              handleKeyDown={handleKeyDown}
                              thirdLevelTitleColor={thirdLevelTitleColor}
                            />
                          );
                        })}
                        {mode === 'edit' && (
                          <Row
                            style={{
                              padding: '10px 20px',
                              justifyContent: 'flex-end'
                            }}
                          >
                            <Button
                              color="primary"
                              onClick={() => {
                                addItem(menuIndex, categoryIndex);
                              }}
                            >
                              Add Item
                            </Button>
                          </Row>
                        )}
                      </div>
                    </Card>
                  );
                })}
                {mode === 'edit' && (
                  <Row
                    style={{ padding: '10px 20px', justifyContent: 'flex-end' }}
                  >
                    <Button
                      color="primary"
                      onClick={() => addCategory(menuIndex)}
                    >
                      Add Category
                    </Button>
                  </Row>
                )}
              </div>
            );
          })}
      {mode === 'edit' && (
        <Row style={{ padding: '10px 20px', justifyContent: 'flex-end' }}>
          <Button color="primary" onClick={addMenu}>
            Add Menu
          </Button>
        </Row>
      )}
    </CardBody>
  );
}

const styles = {
  menuReadStyle: {
    background: 'transparent',
    fontSize: 22,
    border: 'none',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 0
  },
  categoryReadStyle: {
    background: 'transparent',
    fontSize: 20,
    border: 'none',
    fontWeight: 'bold',
    padding: 10,
    paddingLeft: 0
  },
  itemEditStyle: {
    background: 'transparent',
    border: 'none',
    padding: 5,
    resize: 'none',
    fontWeight: '500'
  }
};

export default TreeBody;
