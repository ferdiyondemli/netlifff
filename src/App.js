import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { One } from './One';
import { Two } from './Two';
import { Three } from './Three';

function App() {
 



  return (<>
    <div id='one'>
    <One />
    </div>

    <div id='two'>
      <Two></Two>
    </div>


    <div id='three'>
     <Three></Three>
    </div>

  </>

  );
}

export default App;
