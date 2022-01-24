import React, { useMemo, useState } from 'react';
import { AppNavigator } from './src/Navigation';
import { EditMyState, EditMyStateContext, MyState, MyStateContext } from './src/store/MyState';

export default function App() {
  const [myStore, setMyStore] = useState<MyState>({
    user: undefined
  })

  const editMyState: EditMyState = {
    editUser: (user) => setMyStore({
      ...myStore,
      user
    })
  }

  return (
    <MyStateContext.Provider value={myStore}>
      <EditMyStateContext.Provider value={editMyState}>
        <AppNavigator />
      </EditMyStateContext.Provider>
    </MyStateContext.Provider>
  );
}
