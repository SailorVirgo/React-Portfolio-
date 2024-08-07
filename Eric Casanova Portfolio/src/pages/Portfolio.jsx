import React from 'react';
import Project from '../components/Project';

const Portfolio = () => (
  <section id="work" className="section">
    <div className="section-header">
      <h2>My Work</h2>
    </div>
    <div className="section-content work-grid">
      <Project title="Horiseon-DMS" link="https://sailorvirgo.github.io/Horiseon-DMS/" image="/src/assets/images/largeimage.jpg" />
      <Project title="Employee Tracker" link="https://github.com/SailorVirgo/Employee-Tracker-.git" image="/src/assets/images/employee-tracker-pic.jpg" />
      <Project title="My Weather App" link="https://sailorvirgo.github.io/My-Weather-App/" image="/src/assets/images/weather-app-pic.jpg" />
      <Project title="Yah-Noted" link="https://sailorvirgo.github.io/Yah-Noted/" image="/src/assets/images/yah-noted-pic.jpg" />
      <Project title="TIC-TAC-TOE" link="https://sailorvirgo.github.io/TIC-TAC-TOE/" image="/src/assets/images/tic-tac-toepic.jpg" />
    </div>
  </section>
);

export default Portfolio;
