import React from 'react';
import Header from './Header';
import KegList from './KegList';
import AddKegForm from './AddKeg';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';

function App(){
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={KegList} />
        <Route path='/AddKeg' component={AddKegForm} />
        <Route component = {Error404}/>
      </Switch>
    </div>
  );
}

export default App;