import { User } from './User';
import React from 'react';

export const MyStateContext = React.createContext<MyState | undefined>(
  undefined)
export const EditMyStateContext = React.createContext<EditMyState | undefined>(
  undefined)

export interface MyState {
  readonly user: User | undefined
}

export interface EditMyState {
  readonly editUser: (user: User) => void
  readonly getUser: () => Promise<void>
}

