import React from 'react';
import { Map } from './components/Map';
import styled from 'styled-components';

const Layout = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 72px 1fr;
  gap: 24px;
  grid-template-areas:
    'header'
    'main';
`;

export function App() {
  return (
    <Layout>
      <Map />
    </Layout>
  );
}
