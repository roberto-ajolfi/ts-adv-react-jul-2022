import React, { useState } from 'react'
import { UseEffectDemo } from '../components/UseEffectDemo'

export const AppHooks = () => {
    const [show, setShow] = useState(false);

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                { show &&
                    <UseEffectDemo />
                }
                <button className='btn btn-primary' 
                    onClick={() => setShow(!show)}>Toggle</button>
            </div>
            <div className='col-6'>
                
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>

            </div>
            <div className='col-6'>
                
            </div>
        </div>
    </div>
  )
}
