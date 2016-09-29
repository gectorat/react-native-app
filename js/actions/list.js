
import type { Action } from './types';

export const SET_INDEX = 'SET_INDEX';
export const ADD_ITEM = 'ADD_ITEM';

export function addItem(text:string):Action {
  return {
    type: ADD_ITEM,
    text
  }
}
export function setIndex(index:number):Action {
  return {
    type: SET_INDEX,
    payload: index,
  };
}
