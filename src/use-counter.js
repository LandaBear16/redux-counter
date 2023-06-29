import { useSelector } from 'react-redux';
import { useActions } from './use-actions';
import { increment, decrement, set } from './actions';
import { useMemo } from 'react';

export const useCounter = () => {
  const count = useSelector((state) => state.count);
  const actions = useActions({ increment, decrement, set });
  return useMemo(() => {
    return { count, ...actions };
  }, [count, actions]);
};
