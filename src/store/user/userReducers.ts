import { CHANGE_USER_ACTION, ChangeUserAction, ChangeUserType } from './userActions';

export interface UserState {
  readonly name: string
  readonly surname: string
  readonly userId: string
}

const initialState: UserState = {
  name: 'Mario',
  surname: 'Rossi',
  userId: '12345_NEW'
}

export function userReducer(
  state: UserState = initialState,
  action: ChangeUserAction
): UserState {
  switch (action.type) {
    case CHANGE_USER_ACTION: {
      if (action.payload.subType === ChangeUserType.NAME) {
        return {
          ...state,
          name: action.payload.text
        }
      } else {
        return {
          ...state,
          surname: action.payload.text
        }
      }

    }
    default: {
      return state
    }
  }
}
