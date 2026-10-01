/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import SideBar from './components/SideBar';
import Contact from './components/Contact';
import Home from './components/Home';
import Form from './components/Form';
import { Switch, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <SideBar />
        <div id="detail">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/contacts/new">
              <Form />
            </Route>
            <Route path="/contacts/:contactId/edit">
              <Form />
            </Route>
            <Route path="/contacts/:contactId">
              <Contact />
            </Route>
          </Switch>
        </div>
      </QueryClientProvider>
    </>
  );
}
