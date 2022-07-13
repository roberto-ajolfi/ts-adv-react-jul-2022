import React from 'react'
import TranslateClass from '../components/TranslateClass'
import { TranslateFunc } from '../components/TranslateFunc'

export const AppI18N = () => {
  return (
    <div className='container'>
        <div className="row">
            <div className='col-6'>
                <TranslateClass />
            </div>
            <div className='col-6'>
                <TranslateFunc />
            </div>
        </div>
    </div>
  )
}
