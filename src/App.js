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
          <li>Item One</li>
          <li>Item Two</li>
          <li>Item Three</li>
          <li>Item Four</li>
        </ol>
      
    </div>
  )

export default App;
