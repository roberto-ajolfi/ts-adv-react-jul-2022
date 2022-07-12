import React from "react";

export const withHeaderAndFooter = <T extends {}>(Component: React.ComponentType<T>) => {
    const wrappingComponent = (props: T) => (
        <React.Fragment>
            <header style={{ backgroundColor: "crimson", color: "white" }}>
                === HOC Header ===
            </header>
            <main>
                <Component { ... props as T} />
            </main>
            <footer style={{ backgroundColor: "navy", color: "white" }}>
                &copy; 2022 iCubed
            </footer>
        </React.Fragment>
    );

    (wrappingComponent as any).displayName = `WithHeaderAndFooter(${getDisplayName(Component)})`

    return wrappingComponent;
}

export const withHeaderAndFooterClass = <T extends {}>(Component: React.ComponentType<T>) => {
    class WrappingComponent extends React.Component<T> {
        render(): JSX.Element {
            return (<React.Fragment>
                <header style={{ backgroundColor: "orange", color: "white", textAlign: 'right' }}>
                    === HOC Header ===
                </header>
                <main>
                    <Component { ... this.props as T} />
                </main>
                <footer style={{ backgroundColor: "green", color: "white", textAlign: 'center' }}>
                    &copy; 2022 iCubed
                </footer>
            </React.Fragment>);
        }
    }

    (WrappingComponent as any).displayName = `WithHeaderAndFooterClass(${getDisplayName(Component)})`

    return WrappingComponent;
}

export function getDisplayName<T>(WrappedComponent: React.ComponentType<T>) {
    return WrappedComponent.displayName
        || WrappedComponent.name
        || 'Component';
}