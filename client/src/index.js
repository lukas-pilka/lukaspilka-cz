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
        <section>
            <h1>Lukas Pilka</h1>
        </section>
        <section>
        <p className="profileText">Lukas Pilka is a digital designer, innovator and media theorist focusing on interactive and communication design, contemporary technologies, new media and the overlap between these fields and the world of fine art. His <a href="https://drive.google.com/file/d/1bIFjaWXvsRleSBSBGwtUjeANgOoTEW8D/view?usp=share_link" target="_blank" rel="noopener noreferrer">recently completed PhD</a> at the Academy of Arts, Architecture and Design in Prague focused on the use of computer vision and neural networks for automated classification and quantitative interpretation of artworks. Lukas Pilka is also a co-founder of the software company <a href="https://blueghost.cz" target="_blank" rel="noopener noreferrer">BlueGhost</a>, a university lecturer and a contributor to many media outlets. He is the initiator of the <a href="https://otevrenesbirky.cz/" target="_blank" rel="noopener noreferrer">Open Collections project</a>, creator of the experimental application <a href="https://digitalcurator.art" rel="noopener noreferrer" target="_blank">DigitalCurator.art</a>, programmer, podcaster and enthusiast of old and new generative art.</p>
        <p>
            Lives in Prague, Czech Republic, EU<br/>
            Cell: +420 774 502 521<br/>
            hello.lukas.pilka@gmail.com<br/>
        </p>
        <nav>
            Social & resources:&nbsp;
                <a href="https://www.linkedin.com/in/lukas-pilka/" target="_blank" rel="noopener noreferrer">in</a>
                <a href="https://twitter.com/LukasPilka" target="_blank" rel="noopener noreferrer">Tw</a>
                <a href="https://podcasts.apple.com/us/podcast/blueghost-update/id1539124027" target="_blank" rel="noopener noreferrer">Apple Podcasts</a>
                <a href="https://open.spotify.com/show/5DTkvyEUnUvR7yBqxqqj1V" target="_blank" rel="noopener noreferrer">Spotify</a>
                <a href="https://photos.app.goo.gl/TmbHmNyrTCCmDxcW9" target="_blank" rel="noopener noreferrer">Profile photos</a>
            </nav>
        </section>
        <CvEvents />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
