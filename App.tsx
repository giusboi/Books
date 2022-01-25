import React, { useEffect, useRef, useState } from 'react';
import { AppNavigator } from './src/Navigation';
import { EditMyState, EditMyStateContext, MyState, MyStateContext } from './src/state/MyState';
import { ApiClient, ApiClientImpl, ApiClientMock } from './src/managers/ApiClient';

const MOCK = true

export default function App() {
  const myApiClientRef = useRef<ApiClient>(MOCK ? new ApiClientMock() : new ApiClientImpl())
  useEffect(() => {
    myApiClientRef.current.auth()
  }, [])

  const [myState, setMyState] = useState<MyState>({
    user: {
      name: 'Mario',
      surname: 'Rossi',
      userId: '12345'
    },
  })

  const editMyState: EditMyState = {
    editName: (name) => {
      setMyState({
        ...myState,
        user: {
          ...myState.user,
          name,
        }
      })
    },
    getUser: async () => {
      const userFromNetwork = await myApiClientRef.current.getUser()
      setMyState({
        ...myState,
        user: userFromNetwork
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
