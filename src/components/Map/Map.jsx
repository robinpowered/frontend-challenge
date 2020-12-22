import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Text, Button, Input } from '../Base';
import { v4 as uuidv4 } from 'uuid';

const Header = styled.div`
  padding: 16px 24px;
  grid-area: 'header';
  background: whitesmoke;
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
`;

const InnerContainer = styled.div`
  padding: 24px;
`;

const Desk = styled.div`
  height: 50px;
  width: 100px;
  background-color: ${(props) =>
    props.type && props.type === 'unavailable' ? '#d3d3d3' : 'green'};
  border-radius: 4px;
  cursor: pointer;
  position: relative;

  &:not(:last-of-type) {
    margin-bottom: 16px;
  }

  &:hover {
    cursor: pointer;
  }
`;

const Popover = styled.div`
  position: absolute;
  top: -48px;
  right: -176px;
  width: 160px;
  padding: 8px;
  background: white;
  border-radius: 2px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.1);
`;

const ControlContainer = styled.div`
  padding: 16px;
  background: whitesmoke;
  width: 240px;
  margin: 24px;
  border-radius: 5px;
`;

const desk = [{ type: 'unavailable', id: uuidv4() }];

export function Map() {
  const [unavailableDesks, setUnavailableDesks] = useState();
  const [availableDesks, setAvailableDesks] = useState();
  const [desks, setDesks] = useState(desk);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const unavailableCount = 0
    const availableCount = 0
    // sets the value of unavailable desks
    setUnavailableDesks(unavailableCount);
    // sets the value of available desks
    setAvailableDesks(availableCount);
  }, [desks]);

  return (
    <React.Fragment>
      <Header>
        <Text style={{ marginRight: '16px' }}>Unavailable desks: {unavailableDesks}</Text>
        <Text>Available desks: {availableDesks}</Text>
      </Header>
      <div>
        <InnerContainer>
          {desks.map((desk) => (
            <Desk
              key={desk.id}
              type={desk.type}
              onClick={() => {
                setIsModalOpen((open) => !open);
              }}
            >
              {isModalOpen && (
                <Popover>
                  <Button>Delete</Button>
                  <Button>Toggle state</Button>
                </Popover>
              )}
            </Desk>
          ))}
        </InnerContainer>

        <ControlContainer>
          <div style={{ marginBottom: 8 }}>
            <Text style={{ marginBottom: 16, fontWeight: 500 }}>Adjust quantity</Text>
          </div>
          <div>
            <div style={{ marginBottom: 8 }}>
              <Input
                type="NUMBER"
                min="0"
                max="24"
                step="1"
                defaultValue="0"
                size="4"
              ></Input>{' '}
              <Text style={{ marginLeft: 8 }}>Unavailable</Text>
            </div>
            <div style={{ marginBottom: 12 }}>
              <Input
                type="NUMBER"
                min="0"
                max="24"
                step="1"
                defaultValue="0"
                size="4"
              ></Input>{' '}
              <Text style={{ marginLeft: 8 }}>Available</Text>
            </div>
            <Button style={{ width: '100%' }}>
              Add desks
            </Button>
          </div>
        </ControlContainer>
      </div>
    </React.Fragment>
  );
}

