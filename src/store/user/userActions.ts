export const CHANGE_NAME_ACTION = "CHANGE_NAME_ACTION"

export interface ChangeNameAction {
  type: typeof CHANGE_NAME_ACTION,
  payload: {
    name: string
  }
}

export function changeName(name: string): ChangeNameAction {
  return {
    type: CHANGE_NAME_ACTION,
    payload: {
      name
    }
  }
}
