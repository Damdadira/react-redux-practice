import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Counter from './Counter';
import { increase, decrease, setDiff } from '../modules/counter';

function CounterContainer(){
  /**
   * useSelector
   * 리덕스 스토어의 상태를 조회하는 Hook
   */
  const { number, diff } = useSelector(state => ({
    number: state.counter.number,
    diff: state.counter.diff
  }));

  const dispatch = useDispatch();

}