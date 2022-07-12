import React, { Component, CSSProperties, ErrorInfo, ReactNode } from 'react'

export default class ErrorBoundary extends Component<{ children: ReactNode }> {
    state = { hasError: false };

    static getDerivedStateFromError() {
        // utilizzare lo stato del Componente per generare la fallback UI
        console.log("getDerivedStateFromError() invoked.");
        return { hasError: true };
    }

    componentDidCatch(error: Error, info: ErrorInfo) {
        // loggare l'errore (qualsiasi cosa questo significhi ...)
        console.log("componentDidCatch() invoked.");
        console.log(error);
        console.log(info);
    }
    
    render() {
        if(this.state.hasError)
            return (<FallBack />);

        return this.props.children;
    }
}

const FallBack: React.FC = () => (<div style={{ textAlign: 'center'} as CSSProperties}>
    <div><img src="images\iCubed32.png" /></div>
    <h1>Si è verificato un errore!</h1>
</div>);