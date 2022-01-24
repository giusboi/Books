import React, { useMemo, useState } from 'react';
import { AppNavigator } from './src/Navigation';
import { EditMyState, EditMyStateContext, MyState, MyStateContext } from './src/store/MyState';

export default function App() {
  const [myState, setMyState] = useState<MyState>({
    user: undefined
  })

  const editMyState: EditMyState = {
    editUser: (user) => setMyState({
      ...myState,
      user
    })
  }

  return (
    <MyStateContext.Provider value={myState}>
      <EditMyStateContext.Provider value={editMyState}>
        <AppNavigator />
      </EditMyStateContext.Provider>
    </MyStateContext.Provider>
  );
}
