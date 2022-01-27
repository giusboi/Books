export const CHANGE_USER_ACTION = "CHANGE_USER_ACTION"

export enum ChangeUserType {
  NAME = 'NAME',
  SURNAME = 'SURNAME'
}

export interface ChangeUserAction {
  type: typeof CHANGE_USER_ACTION,
  payload: {
    text: string
    subType: ChangeUserType
  }
}

export function changeUser(text: string, subType: ChangeUserType): ChangeUserAction {
  return {
    type: CHANGE_USER_ACTION,
    payload: {
      text,
      subType
    }
  }
}
