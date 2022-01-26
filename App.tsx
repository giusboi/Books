import React from 'react';
import { AppNavigator } from './src/Navigation';
import { createMyStore } from './src/store/store';
import { Provider } from 'react-redux';

const store = createMyStore()

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
}
