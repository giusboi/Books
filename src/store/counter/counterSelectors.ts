import { RootState, useAppSelector } from '../store';
import { createSelector } from 'reselect';
import { useMemo } from 'react';

export const countSelector = (state: RootState) => state.counter.count

// export const multiplyCountSelector = (state: RootState, multiply: number) => (
//   state.counter.count * multiply
// )

export const multiplyCountSelector = createSelector(
  [
    (state: RootState, multiply: number) => state.counter.count,
    (state: RootState, multiply: number) => multiply
  ],
  (count: number, multiply: number) => {
    console.log('executing')
    return count * multiply
  }
)

export const  useMultiplyCount = (multiply: number) => {
  const selector = useMemo(() => {
    return createSelector(
      [
        (state: RootState, m: number) => state.counter.count,
        (state: RootState, m: number) => m
      ],
      (count: number, m: number) => {
        console.log('executing')
        return count * m
      }
    )
  }, [])
  return useAppSelector(state => selector(state, multiply))
}
