import React from 'react';
import '../port.css'
const Portfolio = () => {
  return (
    <div>
      <h2>Portfolio</h2>
      <section>
        <h2 class="section-heading" id="my-work"></h2>
        <div class="section-div">
          <a href="https://github.com/Clarky13F/Weather">
            <div id="firstBox" class="container container-whole">Weather app
            </div>
          </a>
          <a href="https://github.com/Clarky13F/noteTaker">
            <div class="container container-half">Note Taker</div>
          </a>
          <a href="https://github.com/Clarky13F/password-gen">
            <div class="container container-half container-half-left">Password gen</div>
          </a>
          <a href="https://github.com/Clarky13F/mongoDB-">
            <div class="container container-half">MongoDB</div>
          </a>
          <a href="link_to_box5https://github.com/Clarky13F/employee-tracker">
            <div class="container container-half container-half-left">Employee tracker</div>
          </a>
          <a href="link_to_box6https://github.com/Clarky13F/ORM">
            <div class="container container-half">ORM</div>
          </a>
          <a href="link_to_box7">
            <div class="container container-half container-half-left">Box 7</div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;