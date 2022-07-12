import React from 'react'
import { Red, RedCtx } from '../components/Context'

export const AppContext = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h2>Senza Context API</h2>
                <Red />
            </div>
            <div className='col-6'>
                <h2>Con Context API</h2>
                <RedCtx />
            </div>
        </div>
    </div>
  )
}
