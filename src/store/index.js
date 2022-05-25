import {configureStore} from '@reduxjs/toolkit';
import heroes from '../components/heroesList/heroesSlice';
import filters from '../components/heroesFilters/filtersSlice';

// const reducer = combineReducers({heroes: heroesReducer, filters: filtersReducer});

// const store = createStore(reducer, compose(
//     applyMiddleware(ReduxThunk),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// ));

const store = configureStore({
    reducer: {heroes, filters},
    devTools: process.env.NODE_ENV !== 'production'
});

export default store;