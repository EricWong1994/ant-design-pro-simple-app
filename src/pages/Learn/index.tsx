// import React from 'react'
// import Counter from './components/counter'
import { useModel } from 'umi';


export default function Learn() {
    const message = useModel('demo');
    const {counter, increment: add, decrement: minus} = useModel('counter')
    // const { add, minus } = useModel('counter', (ret) => ({
    //     add: ret.increment,
    //     minus: ret.decrement,
    //   }));

    return (
        <div>
            Learn
            <div>{message}</div>;
            <div>
                <h3>{counter}</h3>
                <button onClick={add}>add by 1</button>
                <button onClick={minus}>minus by 1</button>
            </div>
        </div>
    )
}
