import React from 'react';
import ps from '../components/pocketshrink.png'
import flok from '../components/flokwatch.png'
import signify from '../components/logo_nullbg_purple.png'

const Portfolio = () => {
  return (
    <div className='portfolio'>
      <h1>Projects and Experience</h1>
      <div className="body">
        <div className='item'>
          <div className='text'>
            <div className='title'>
              <h2>Signify</h2>
              <p>Spring 2024</p>
            </div>
            <p>For the final project in Principles of Human Computer interaction, my team
              and I designed a prototype for an ASL translation app that can translate
              conversations between Deaf and hearing individuals. The technology is made
              accessible through a phone app where both Deaf and hearing users can set
              up their devices to capture their visual or audiory input where it will be
              translated to the other participant in their preferred language. The goal
              of this project was to support collaboration and communication between Deaf
              and hearing individuals and to make everyday interactions for accessible
              for those who are deaf or hard of hearing.
            </p>
          </div>
          <a href='https://www.figma.com/proto/bVOq5AHDe4w6a4W3nHFDDP/Interactive-Prototype?node-id=0-1&t=u6qpnRsReoqEMYqW-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=115%3A105&prev-org-id=external-teams'>
            <img src={signify} style={{"height" : "120%", "width" : "120%"}} alt="App screen"></img>
          </a>


        </div>

        <div className='item'>
          <a href='https://www.figma.com/proto/fIA7ziCJVjPcgRQOB6jPIx/FLOK-MOCKUPS?node-id=1-2&t=33mao5cCBVOrGpia-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=1%3A2&show-proto-sidebar=1'>
            <img src={flok} style={{"height" : "60%", "width" : "60%"}} alt="Flok Watch Mockup"></img>
          </a>
          <div className='text'>
            <div className='title'>
              <h2>Flok Apple Watch</h2>
              <p>December 2023</p>
            </div>
            <p>This project was in partnership with the company Flok, which has created
              an app to support individuals with rare metabolic diseases. Their app helps
              users to track their protein intake, which must be heavily restricted and
              monitored. My team and I created a Apple Watch prototype for the Flok app
              to help make the app more accessible and easier to use.
            </p>
          </div>
        </div>

        <div className='item'>
          <div className='text'>
            <div className='title'>
              <h2>Pocket Shrink</h2>
              <p>January 2022</p>
            </div>
            <p>I particpated in the Hackathon hosted by Women
              in Informatics at UW, where my group and I designed a prototype for our app
              Pocket Shrink. This is a journaling app that helps maintain mental health
              through reflection paired with machine learning analysis, while utilizing
              concepts from Cognitive Behavioral Therapy (CBT). For our work, my team
              earned the award of Best Design.
            </p>
          </div>
          <a href='https://www.figma.com/proto/HFFr8xhBSLmiKUo3SUETXr/PocketShrink?node-id=13-33&t=7SmO7VQFo9jdqd7P-0&scaling=scale-down&page-id=0%3A1&starting-point-node-id=13%3A33'>
            <img src={ps} style={{"padding-left" : "30px"}} alt="Pocket Shrink mascot"></img>
          </a>
        </div>

      </div>
    </div>
  );
}

export default Portfolio;