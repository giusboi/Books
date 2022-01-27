import { CHANGE_NAME_ACTION, ChangeNameAction } from './userActions';

export interface UserState {
  readonly name: string
  readonly surname: string
  readonly userId: string
}

const initialState: UserState = {
  name: 'Mario',
  surname: 'Rossi',
  userId: '12345'
}

export function userReducer(
  state: UserState = initialState,
  action: ChangeNameAction
): UserState {
  switch (action.type) {
    case CHANGE_NAME_ACTION: {
      return {
        ...state,
        name: action.payload.name
      }
    }
    default: {
      return state
    }
  }
}
