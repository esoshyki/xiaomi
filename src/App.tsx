import React from 'react';
import Test from './components/Test';
import { withLayout } from './hooks/withTheme';

function App() {
  return (
    <Test />
  );
}

export default withLayout(App);
