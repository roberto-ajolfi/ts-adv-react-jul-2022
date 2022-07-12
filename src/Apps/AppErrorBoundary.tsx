import React from 'react'
import ErrorBoundary from '../components/ErrorBoundary';

const ComponentWithError: React.FC = () => { throw new Error("Broken Component"); };

export const AppErrorBoundary = () => {
return (<ErrorBoundary>
    <div className='container'>
        <div className='row'>
            <div className='col-6'>
                <h2>Senza ErrorBoundary</h2>
                <ComponentWithError />
            </div>
            <div className='col-6'>
                <h2>Con ErrorBoundary</h2>
                <ErrorBoundary>
                    <ComponentWithError />
                </ErrorBoundary>
            </div>
        </div>
    </div>
    </ErrorBoundary>);
}
