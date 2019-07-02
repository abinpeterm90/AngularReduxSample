import {Action} from '@ngrx/store';

export function simpleReducer(state: string='hai', action: Action) {
  switch(action.type)  {
    case '1':
     return state='Hello';
    case '2':
     return state='State 2';
    default:
     return state;
  }
}
