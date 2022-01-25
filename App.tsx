import React, { useMemo, useState } from 'react';
import { AppNavigator } from './src/Navigation';
import { EditMyState, EditMyStateContext, MyState, MyStateContext } from './src/store/MyState';
import { User } from './src/store/User';

export default function App() {
  const [myState, setMyState] = useState<MyState>({
    user: undefined
  })

  const editMyState: EditMyState = {
    editUser: (user) => setMyState({
      ...myState,
      user
    }),
    getUser: async () => {
      const user = await ApiClient.getUser()
      setMyState({
        ...myState,
        user
      })
    }
  }

  return (
    <MyStateContext.Provider value={myState}>
      <EditMyStateContext.Provider value={editMyState}>
        <AppNavigator />
      </EditMyStateContext.Provider>
    </MyStateContext.Provider>
  );
}

const ApiClient = {
  getUser: () => {
    return new Promise<User>(resolve => {
      setTimeout(() => {
        resolve({
          name: 'Mario From Server',
          surname: 'Rossi From Server',
          userId: '12345 From Server'
        })
      }, 5000)
    })
  }
}
