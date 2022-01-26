import { applyMiddleware, combineReducers, createStore } from 'redux';
import { counterReducer } from './counter/counterReducers';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

export function createMyStore() {
  const rootReducer = combineReducers({
    counter: counterReducer
  })
  const logger = createLogger()
  const storeEnhancer = applyMiddleware(logger)
  const store = createStore(rootReducer, storeEnhancer)
  return store
}

// Create some types for our typed hooks
type CreateStoreReturnType = ReturnType<typeof createMyStore>
type GetState = CreateStoreReturnType['getState']
export type RootState = ReturnType<GetState>
type AppDispatch = CreateStoreReturnType['dispatch']

// Export our typed Hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()
