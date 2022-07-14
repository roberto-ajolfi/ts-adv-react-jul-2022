import React, { useState } from 'react'
import { PeopleListWithReducer } from '../components/PeopleListWithReducer';
import { TicketTable } from '../components/TicketTable';
import { UseEffectDemo } from '../components/UseEffectDemo'
import useCounter from '../hooks/useCounter';
import useTicketData from '../hooks/useTicketData';

export const AppHooks = () => {
    const [show, setShow] = useState(false);

    const { value, increment, decrement, zero, valueComponent } = useCounter(0);
    const [tickets, loading] = useTicketData();

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h3>useEffect Demo</h3>
                { show &&
                    <UseEffectDemo />
                }
                <button className='btn btn-primary' 
                    onClick={() => setShow(!show)}>Toggle</button>
            </div>
            <div className='col-6'>
                <PeopleListWithReducer />
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col-6 text-center'>
                <div style={{ fontSize: "1.5em", color: "crimson"}}>{value}</div>
                <div>
                    <button className='btn btn-primary' onClick={() => increment()}>+ 1</button>
                    <button className='btn btn-secondary' onClick={() => decrement()}>- 1</button>
                    <button className='btn btn-danger' onClick={() => zero()}>RESET</button>
                </div>
                {valueComponent}
            </div>
            <div className='col-6'>
                { loading ? 
                    <h3>Loading ...</h3> : 
                    <TicketTable data={tickets} title="Tickets from Hook" />
                }
            </div>
        </div>
    </div>
  )
}
