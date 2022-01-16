import React from 'react';
import { increment , decrement } from '../../redux/Action/counterAction';
import { useSelector , useDispatch } from 'react-redux';

const CounterTwo = () => {

    const count = useSelector( state => state.counterReducer.count );
    const dispatch = useDispatch();

    return (
        <div>
            
            <h4>Counter : {count}</h4>
            <button onClick={ () => dispatch(increment(2)) }>Increment</button>
            <button onClick={ () => dispatch(decrement(2)) }>Decrement</button>
        </div>
    );
};

export default CounterTwo;