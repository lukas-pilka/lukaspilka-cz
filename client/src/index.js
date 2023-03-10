import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CvEvents } from './App';
import reportWebVitals from './reportWebVitals';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';

// Google Analytics
const TRACKING_ID = 'UA-144703876-4';
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Helmet>
          <title>Lukas Pilka | Digital designer </title>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
          <link href="https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=UA-144703876-4"></script>
      </Helmet>
      <h1>Lukas Pilka</h1>
      <p>===========</p>
      <p>I'm a digital designer, strategist, and journalist dealing with interaction and communication design, contemporary technologies, new media and the overlap of all into the world of fine art. Within my doctoral research at the Academy of Arts, Architecture and Design in Prague, I'm interested in using neural networks for the quantitative interpretation of classical works of art. I'm a co-founder of BlueGhost digital agency, which operates in the field of online marketing and developing custom apps. As well as I'm a member of AltTab group which maps the intersections of design, ethics, and technology.</p>
        <p>
            Lives in Prague, Czech Republic, EU<br/>
            Cell: +420 774 502 521<br/>
            hello.lukas.pilka@gmail.com<br/>

              <a href="https://www.linkedin.com/in/lukas-pilka/" target="_blank">in</a> &nbsp;
              <a href="https://twitter.com/LukasPilka" target="_blank">Tw</a> &nbsp;
              <a href="https://www.facebook.com/lukas.pilka" target="_blank">Fb</a> &nbsp;
          </p>
      <p>===========</p>
      <CvEvents />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
