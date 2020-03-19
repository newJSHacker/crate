import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/index';

const store = createStore(
    rootReducer,
    applyMiddleware(thunk)
)

function fetchSecretSauce() {
    return fetch('http://www.google.com/search?q=secret+sauce');
}

// 평범한 액션생성자이다.
// 미들웨어없이 액션을 반환한다.
// 하지만 이는 '사실'만을 반환한다. 또한 비동기처리를 하지 못한다.

function makeASandwich(forPerson, secretSauce) {
    return {
        type: 'MAKE_SANDWICH',
        forPerson,
        secretSauce
    }
}

function aplogize(fromPerson, toPerson, error) {
    return {
        type: 'APOLOGIZE',
        fromPerson,
        toPerson,
        error
    };
}

function withdrawMoney(amout) {
    return {
        type: 'WITHDRAW',
        amout
    };
}

//미들웨어없이 이렇게 dispatch할수 있다.
store.dispatch(withdrawMoney(100));
