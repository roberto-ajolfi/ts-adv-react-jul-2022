import React from 'react'
import ClassRef, { FunctionRef } from '../components/ClassRef'
import SimpleRef from '../components/SimpleRef'
import ToggleFocus from '../components/ToggleFocus'

export const AppRefs = () => {
  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <SimpleRef />
            </div>
            <div className='col-6'>
                <ToggleFocus />
            </div>
        </div>
        <div className='row'>
            <div className='col-12'>
                &nbsp;
            </div>
        </div>
        <div className='row'>
            <div className='col-6'>
                <ClassRef />
            </div>
            <div className='col-6'>
                <FunctionRef />
            </div>
        </div>
    </div>
  )
}
