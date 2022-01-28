import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk, { ThunkAction, ThunkDispatch } from 'redux-thunk';
import { counterReducer } from './counter/counterReducers';
import { createLogger } from 'redux-logger';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { userReducer } from './user/userReducers';
import { categoriesReducer } from './categories/categoriesReducers';

export function createMyStore() {
  const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    categories: categoriesReducer
  })
  const logger = createLogger()
  const storeEnhancer = applyMiddleware(thunk, logger)
  const store = createStore(rootReducer, storeEnhancer)
  return store
}

// Create some types for our typed hooks
type CreateStoreReturnType = ReturnType<typeof createMyStore>
type GetState = CreateStoreReturnType['getState']
export type RootState = ReturnType<GetState>
type Dispatch = CreateStoreReturnType['dispatch']
type AppAction = Parameters<Dispatch>[0]
type AppDispatch = ThunkDispatch<RootState, unknown, AppAction>

// Export our typed Hooks
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<AppDispatch>()

// Export AppThunkAction
export type AppThunkAction<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AppAction
  >;
