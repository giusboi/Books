import { INCREMENT_ACTION, IncrementAction } from './counterActions';

export interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0
}

export function counterReducer(
  state: CounterState = initialState,
  action: IncrementAction
): CounterState {
  switch (action.type) {
    case INCREMENT_ACTION: {
      return {
        ...state,
        count: state.count + 1
      }
    }
    default: {
      return state
    }
  }
}
