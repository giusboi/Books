import { RootState } from '../store';

export const countSelector = (state: RootState) => {
  return state.counter.count
}
