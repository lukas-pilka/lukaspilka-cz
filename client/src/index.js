import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { CvEvents } from './App';
import reportWebVitals from './reportWebVitals';
import ReactGA from 'react-ga';

// Google Analytics
const TRACKING_ID = 'UA-144703876-4';
ReactGA.initialize(TRACKING_ID);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <section>
            <h1>Lukas Pilka</h1>
        </section>
        <section>
            <p className="profileText">I'm a digital designer and strategist dealing with interaction design, the latest technologies, and cultural data. I founded <a href="https://cabinetofwonders.net/" target="_blank" rel="noopener noreferrer">Cabinet of Wonders</a>, a virtual guide across museums that helps visitors find wonders everywhere they go. I am also the co-founder and strategy director of <a href="https://blueghost.cz" target="_blank" rel="noopener noreferrer">BlueGhost</a>, a software agency operating in custom applications & digital products development. Furthermore, I'm the initiator of the <a href="https://otevrenesbirky.cz/" target="_blank" rel="noopener noreferrer">Open Collections</a> project, the creator of the computer vision-based application <a href="https://digitalcurator.art" rel="noopener noreferrer" target="_blank">DigitalCurator.art</a>, a programmer, a lover of neural networks & TensorFlow, a podcaster, and a fan of old and new generative art.</p>
            <p className="profileText">I finished my PhD in 2022 at the Academy of Arts, Architecture and Design in Prague. In <a href="https://drive.google.com/file/d/1bIFjaWXvsRleSBSBGwtUjeANgOoTEW8D/view?usp=share_link" target="_blank" rel="noopener noreferrer">my thesis</a>, I focused on using computer vision and machine learning for automated classification and quantitative interpretation of artworks.</p>
        <p>
            I live in Prague, Czech Republic, EU<br/>
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
