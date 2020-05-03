import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { loadCSS } from 'fg-loadcss';
import Header from '../components/header';
import SKILLS from '../components/skills';
import EXPERIENCES from '../components/experience';

function App() {
  React.useEffect(() => {
    loadCSS(
      'https://use.fontawesome.com/releases/v5.12.0/css/all.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div>
      <Header></Header>
      <SKILLS></SKILLS>
      <EXPERIENCES></EXPERIENCES>
    </div>
  );
}

export default App;

