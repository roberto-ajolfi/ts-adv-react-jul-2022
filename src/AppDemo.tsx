import React, { Component, ComponentType, ReactElement } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavigationBar from './NavigationBar';
import Footer from './Footer';
import App from './Apps/App';
import NoMatch from './NoMatch';
import { AppContext } from './Apps/AppContext';
import { AppErrorBoundary } from './Apps/AppErrorBoundary';

export interface DemoApp {
  name: string;
  component: ReactElement;
}

const demoApps: DemoApp[] = [
  { name: "Welcome", component: <App /> },
  { name: "Context", component: <AppContext /> },
  { name: "ErrBoundary", component: <AppErrorBoundary /> },
];

const AppDemo = () => {
  const routes = demoApps.map( 
    (app: DemoApp, idx: number) => {
      const path = idx == 0 ? "/" : `/${app.name.toLowerCase().replace(" ", "")}`
      return( <Route path={path} element={app.component} key={idx} /> );
    }
  );

  return (
    <>
    <BrowserRouter>
        <NavigationBar apps={demoApps} />
        <div className="container">
          <Routes>
            {routes}
            <Route element={<NoMatch />} />
          </Routes>
        </div>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default AppDemo;