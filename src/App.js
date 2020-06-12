import React from 'react';
import './App.css';
import './style.css';
import Media from './mediacard'

const App = ({name, age}) => (
    <div>
      <center>
        <h1>Hello World From <span className='my-name'>{name},</span> Age = {age+7}</h1>
      
        <ul>
          <li><a href="https://www.facebook.com/">Facebook</a></li>
          <li><a href="https://www.youtube.com/">Youtube</a></li>
          <li><a href="https://www.google.com/">Google</a></li>
          <li><a href="https://www.piaic.org/">PIAIC</a></li>
        </ul>
        <Media title="This Is The Title" body="This Is The Body" url="https://i1.wp.com/static.web-backgrounds.net/uploads/2012/08/City_Landscape_Background.jpg"></Media>
      </center>
      
    </div>
  )

export default App;
