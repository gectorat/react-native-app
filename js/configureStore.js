
import { AsyncStorage } from 'react-native';
import devTools from 'remote-redux-devtools';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { persistStore, autoRehydrate } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import reducer from './reducers';
import promise from './promise';
import rootSaga from './sagas';
const sagaMiddleware = createSagaMiddleware();

export default function configureStore(onCompletion:()=>void):any {
  const enhancer = compose(
    autoRehydrate(),
    applyMiddleware(thunk, promise),
    applyMiddleware(sagaMiddleware),
    devTools({
      name: 'nativestarterproseed', realtime: true,
    }),
  );

  const store = createStore(reducer, enhancer);

  sagaMiddleware.run(rootSaga);
  persistStore(store, { storage: AsyncStorage }, onCompletion);

  return store;
}
