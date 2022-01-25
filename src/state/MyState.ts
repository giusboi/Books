import { User } from './User';
import { createContext } from 'react';

export const MyStateContext = createContext<MyState | undefined>(undefined)
export const EditMyStateContext = createContext<EditMyState | undefined>(undefined)

export interface MyState {
  readonly user: User
}

export interface EditMyState {
  editName: (name: string) => void
  getUser: () => void
}
