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
import { AppRenderProp } from './Apps/AppRenderProp';
import { AppHOC } from './Apps/AppHOC';
import { AppCompound } from './Apps/AppCompound';
import { AppLazy } from './Apps/AppLazy';
import { AppLibrary } from './Apps/AppLibrary';
import { AppI18N } from './Apps/AppI18N';
import { AppPortal } from './Apps/AppPortal';
import { AppRefs } from './Apps/AppRefs';

export interface DemoApp {
  name: string;
  component: ReactElement;
}

const demoApps: DemoApp[] = [
  { name: "Welcome", component: <App /> },
  { name: "Context", component: <AppContext /> },
  { name: "Error Boundary", component: <AppErrorBoundary /> },
  { name: "Render Props", component: <AppRenderProp /> },
  { name: "HOC", component: <AppHOC /> },
  { name: "Compound", component: <AppCompound /> },
  { name: "Library", component: <AppLibrary /> },
  { name: "i18n", component: <AppI18N /> },
  { name: "Portal", component: <AppPortal /> },
  { name: "REFs", component: <AppRefs /> },
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
            <Route path='/lazy/*' element={<AppLazy />} />
            <Route element={<NoMatch />} />
          </Routes>
        </div>
    </BrowserRouter>
    <Footer />
    </>
  );
}

export default AppDemo;