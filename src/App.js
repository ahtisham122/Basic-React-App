import React from 'react';
import './App.css';
import './style.css';

const App = ({name, age}) => (
    <div>
      <center>
        <h1>Hello World From <span className='my-name'>{name},</span> Age = {age+7}</h1>
      </center>
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.youtube.com/">Youtube</a></li>
          <li><a href="https://www.google.com/">Google</a></li>
          <li><a href="https://www.piaic.org/">PIAIC</a></li>
        </ul>
        <ol>
          <li><a>Item One</a></li>
          <li><a>Item Two</a></li>
          <li><a>Item Three</a></li>
          <li><a>Item Four</a></li>
        </ol>
      
    </div>
  )

export default App;
