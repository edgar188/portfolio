import React from 'react';

export default function About() {
  return (
    <section className='about pt-5 pb-5'>
      <div className='container dsp-flex'>
        <div>
          <h3>CORE SKILLS</h3>
          <ul className='list-about mt-3 mb-4'>
            <li>Ruby, Ruby on Rails, Redis, RSpec, Sidekiq</li>
            <li>MySQL, PostgreSQL</li>
            <li>JavaScript(ES6), React, Redux, Preact, jQuery, CoffeeScript</li>
            <li>HTML5, CSS3, SASS(SCSS), LESS, Bootstrap, Material-UI</li>
            <li>Figma, Adobe Photoshop, Adobe XD</li>
          </ul>
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <ul className='list-about mt-3 mb-4'>
            <li>
              <p className='mb-1'>RUBY DEVELOPER</p>
              <p>March 2020 - Present | STDev Armenia | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Experience building and interacting with Restful APIs.</li>
                <li>Experience writing unit tests, participating in design discussions, data shape and business logic.</li>
                <li>Experience with SQL databases.</li>
                <li>Deep understanding and use of OOP principles.</li>
                <li>Deep understanding and use of clean code concepts.</li>
                <li>Was a mentor of the Ruby/RoR internship program.</li>
              </ul>
            </li>
            <li>
              <p className='mb-1'>FRONT-END DEVELOPER</p>
              <p>September 2019 - February 2020 | STDev Armenia | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Worked on creating websites with fully responsive user interface design.</li>
                <li>Participates in the development of templates in the style of Perfect Pixel.</li>
                <li>Skilled in cross-browser/cross-platform issues and web standards.</li>
                <li>For lack of time, made some parts of the site myself without a preliminary design template, trying to keep the best user interface practices and experience from previous designs.</li>
              </ul>
            </li>
          </ul>

        </div>

        <div>
          <h3>EDUCATION</h3>
            <ul className='list-about mt-3 mb-4'>
              <li>
                <p className='mb-1'>NATIONAL POLYTECHNIC UNIVERSITY OF ARMENIA</p>
                M.S. in Engineering: Design and Modelling of Mechanical Systems | 2020-2022 | Yerevan, Armenia
              </li>
              <li>
                <p className='mb-1 mt-2'>NATIONAL POLYTECHNIC UNIVERSITY OF ARMENIA</p>
                B.S. in Engineering: Computer Design of Mechanical Systems | 2016-2020 | Yerevan, Armenia
              </li>
            </ul>
            <h3>COURSES</h3>
            <ul className='list-about mt-3 mb-4'>
              <li>ARMENIAN CODE ACADEMY JavaScript/React Development | 2019 | Yerevan, Armenia</li>
            </ul>
          <h3>ADDITIONAL SKILLS</h3>
          <ul className='list-about mt-3 mb-4'>
            <li>Work overtime based on team success and project outcomes.</li>
            <li>Good team player and willingness to help others.</li>
            <li>Mentoring.</li>
          </ul>
          <h3>LANGUAGES</h3>
          <ul className='list-about mt-3 mb-4'>
            <li>Armenian(Native)</li>
            <li>English(Good)</li>
            <li>Russian(Good)</li>
          </ul>
          <h3>INTERESTS</h3>
          <ul className='list-about mt-3 mb-4'>
            <li>Classical guitar playing, gaming, hiking, and swimming.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
