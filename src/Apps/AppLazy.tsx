import React, { useState } from 'react'
//import { Admin } from '../components/admin/Admin';
import { ComponentLazyA } from '../components/ComponentLazyA'

const ComponentLazyB = React.lazy(() => import('../components/ComponentLazyB'));
const Admin = React.lazy(() => import('../components/admin/Admin'));

export const AppLazy = () => {
    const [loadB, setLoadB] = useState(false);
    const [loadAdmin, setLoadAdmin] = useState(false);

    return (
        <div className='container'>
            <div className='row'>
                <div className='col-6 text-center'>
                    <ComponentLazyA />
                    <React.Suspense fallback={<Loading />}>
                        { loadB && <ComponentLazyB /> }
                    </React.Suspense>
                    <button onClick={() => setLoadB(!loadB)} className="btn btn-danger">
                        Toggle Component B
                    </button>
                    <button onClick={() => setLoadAdmin(!loadAdmin)} className="btn btn-warning">
                        Open Admin
                    </button>
                </div>
                <div className='col-6'>
                <React.Suspense fallback={<Loading />}>
                    { loadAdmin && <Admin /> }
                </React.Suspense>
                </div>
            </div>
        </div>
    );
};

const Loading: React.FC = 
    () => (<div style={{ color: "red", fontWeight: "bold" }}>Loading ...</div>);
