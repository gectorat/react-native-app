
import { REHYDRATE } from 'redux-persist/constants';
import type { Action } from '../actions/types';
import { PUSH_NEW_ROUTE, POP_ROUTE, POP_TO_ROUTE, REPLACE_ROUTE, REPLACE_OR_PUSH_ROUTE } from '../actions/route';

export type State = {
  routes: Array<string>
}

const initialState = {
  routes: ['home'],
};

export default function (state:State = initialState, action:Action): State {
  const routes = state.routes;

  switch (action.type) {
    case PUSH_NEW_ROUTE:
      return {
        ...state,
        routes: [...routes, action.route],
      };
    case REPLACE_ROUTE:
      return {
        ...state,
        routes: [...routes.slice(0, -1), action.route],
      };
    case REPLACE_OR_PUSH_ROUTE: {
      if (routes.reverse()[0] === 'home') {
        if (action.route !== 'home') {
          return {
            ...state,
            routes: [...routes, action.route],
          };
        }

        return {
          ...state,
          routes: [action.route],
        };
      } else if (action.route === 'home') {
        return {
          ...state,
          routes: [action.route],
        };
      }
      return {
        ...state,
        routes: [...routes.slice(0, -1), action.route],
      };
    }
    case POP_ROUTE:
      return {
        ...state,
        routes: [...routes.slice(0, -1), action.route],
      };
    case POP_TO_ROUTE: {
      return {
        ...state,
        routes: [...routes.slice(0, routes.lastIndexOf(action.route))],
      };
    }
    case REHYDRATE: {
      const savedData = action.payload.route || state;
      return {
        ...savedData,
      };
    }
    case 'SAVE_NAVIGATION_STACK':
      return {
        ...state,
        navigationStacks: {
          ...state.navigationStacks,
          [state.drawerTab]: action.stack,
        },
      };
    case 'SET_NAVIGATION_ROUTES':
      return {
        ...state,
        routes: action.routes,
      };
    default :
      return state;
  }
}
