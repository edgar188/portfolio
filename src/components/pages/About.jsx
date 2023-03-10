import React from 'react';

export default function About() {
  return (
    <section className='about container pt-6 pb-4'>
      <div className='dsp-flex'>
        <div className='section-left'>
          <h3>PROFESSIONAL EXPERIENCE</h3>
          <ul className='list-about'>
            <li>
              <p className='mb-1'>Full-STACK(ROR/REACT) DEVELOPER</p>
              <p>November 2022 - Present | STDev Armenia && Rankbreeze CA | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Work on a dedicated project.</li>
                <li>Experience collaborating with a teammate across multiple time zones.</li>
                <li>Develop Chrome extensions using Preact.</li>
              </ul>
            </li>
            <li>
              <p className='mb-1'>RUBY DEVELOPER</p>
              <p>March 2020 - November 2022 | STDev Armenia | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Participate in working on and developing projects in Rails 5 and 6.</li>
                <li>Performed unit tests, shortened testing time, and fixed age issues.</li>
                <li>Implemented coding best practices that reduced rework by 25%.</li>
                <li>Experience building and interacting with Restful APIs.</li>
                <li>Experience with SQL databases.</li>
                <li>In some periods, have worked 16 hours of overtime per week, reduced the estimate by 10%, and made the project a success at the right time.</li>
                <li>Mentored a 3-month Ruby/RoR internship program and helped new individuals join the team.</li>
              </ul>
            </li>
            <li className='mt-3'>
              <p className='mb-1'>FRONT-END DEVELOPER</p>
              <p>September 2019 - February 2020 | STDev Armenia | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Developed single-page applications using React lib and Redux state container.</li>
                <li>The increased user experience by 15-20%.</li>
                <li>Developed features to enhance the users experience.</li>
                <li>Made sure web pages are optimized for the best speed and scalability.</li>
              </ul>
            </li>
            <li className='mt-3'>
              <p className='mb-1'>FRONT-END DEVELOPER</p>
              <p>June 2018 - September 2019 | Collaboratous | Yerevan, Armenia</p>
              <ul className='mt-2'>
                <li>Participates in the development of templates in the style of Perfect Pixel.</li>
                <li>Worked on creating websites with fully responsive user interface design.</li>
                <li>Skilled in cross-browser/cross-platform issues and web standards.</li>
              </ul>
            </li>
          </ul>
          <h3>EDUCATION</h3>
          <ul className='list-about'>
            <li>
              <p className='mb-1'>NATIONAL POLYTECHNIC UNIVERSITY OF ARMENIA</p>
              <span>M.S. in Engineering: Design and Modelling of Mechanical Systems | 2020-2022 | Yerevan, Armenia</span>
            </li>
            <li className='mt-3'>
              <p className='mb-1'>NATIONAL POLYTECHNIC UNIVERSITY OF ARMENIA</p>
              <span>B.S. in Engineering: Computer Design of Mechanical Systems | 2016-2020 | Yerevan, Armenia</span>
            </li>
          </ul>
          <h3>COURSES</h3>
          <ul className='list-about'>
            <li>
              <p className='mb-1'>ARMENIAN CODE ACADEMY</p>
              <span>JavaScript/React Development | 2019 | Yerevan, Armenia</span>
            </li>
          </ul>
        </div>

        <div className='section-right'>
          <h3>CORE SKILLS</h3>
          <ul className='list-about'>
            <li>Ruby, Ruby on Rails, Redis, RSpec, Sidekiq</li>
            <li>MySQL, PostgreSQL</li>
            <li>JavaScript(ES6), React, Redux, Preact, Stimulus, CoffeeScript</li>
            <li>HTML5, CSS3, SASS(SCSS), LESS, Bootstrap, Material-UI</li>
            <li>Figma, Adobe Photoshop, Adobe XD</li>
            <li>Jira, Trello, Linear</li>
          </ul>
          <h3>ADDITIONAL SKILLS</h3>
          <ul className='list-about'>
            <li>Work overtime based on team success and project outcomes.</li>
            <li>Good team player and willingness to help others.</li>
            <li>Mentoring and coaching.</li>
          </ul>
          <h3>LANGUAGES</h3>
          <ul className='list-about'>
            <li>Armenian(native)</li>
            <li>English</li>
            <li>Russian</li>
          </ul>
          <h3>INTERESTS & HOBBIES</h3>
          <ul className='list-about'>
            <li>Keeping up with the latest developments in technology.</li>
            <li>Reading books, articles.</li>
            <li>Playing the guitar.</li>
            <li>Playing team sports(soccer, basketball, volleyball).</li>
            <li>Going out and eating at restaurants.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
