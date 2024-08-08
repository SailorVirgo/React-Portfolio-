import React from "react";

const About = () => (
  <section id="about" className="section">
    <div className="section-header">
      <h2>About Me</h2>
      <div className="profile-pic">
      <img src="/src/assets/images/profilepicturedemo.jpg" alt="Profile Picture" />
    </div>
    </div>
    <div className="section-content">
      <p>
        Hi, I'm Eric Casanova! I've lived in Austin, TX, since 2014, and in
        my free time, I enjoy playing video games, working out, bouldering, and
        collecting Pokémon.
      </p>
      <p>
        With 16 years of experience in the service industry, I've excelled in
        various roles, from fine dining to casual eateries. I'm a distinguished
        mixologist and have managed bars, eventually becoming the Assistant
        General Manager at a renowned Peruvian fusion restaurant in Austin.
      </p>
      <p>
        From 2018 to 2024, I ventured into the corporate world, working at a
        promotional products company where I assisted top salespeople recognized
        for their achievements during our monthly huddles. Recently, I took a
        leap of faith, leaving my job to join UT Austin's coding bootcamp,
        aiming to start a new career in tech.
      </p>
    </div>
  </section>
);

export default About;
