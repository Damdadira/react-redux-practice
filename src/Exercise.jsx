import React from 'react';
import { legacy_createStore as createStore } from 'redux'

const initialState = {
  counter: 0,
  text: '',
  list: []
};

const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

const increase = () => {
  type: INCREASE
}

const decrease = () => {
  type: DECREASE
}

const changeText = text => ({
  type: CHANGE_TEXT,
  text
})

const addToList = item => ({
  type: ADD_TO_LIST,
  item
})

function reducer(state = initialState, action){
  switch(action.type){
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1
      }
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1
      }
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text
      }
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item)
      }
    default:
      return state;
  }
}

export default function Exercise(){
  const store = createStore(reducer);

  // const listener = () => {
  //   const state = store.getState(); 
  // }

  // const unsubscribe = store.subscribe(listener); //구독을 해제하고 싶을 때

  store.dispatch({type: 'INCREASE'})
  store.dispatch({type: 'DECREASE'})
  store.dispatch({type: 'CHANGE_TEXT', text: '안녕하세요'})
  store.dispatch({type: 'ADD_TO_LIST', item: '1'})

  console.log(store.getState()) //현재 store 안에 있는 상태를 조회

  return(
    <h2>redux</h2>
  )
}