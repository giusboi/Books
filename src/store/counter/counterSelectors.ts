import { RootState } from '../store';
import { createSelector } from 'reselect'
export const countSelector = (state: RootState) => {
  return state.counter.count
}

const cSelector = (state: RootState, multiply: number) => state.counter.count
const mSelector = (state: RootState, multiply: number) => multiply

export const multiplySelector = createSelector(
  [
    cSelector,
    mSelector
  ],
  (count: number, multiply: number) => {
    // EXPENSIVE
    return count * multiply
  }
)
