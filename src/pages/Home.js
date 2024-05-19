import React from 'react';
import headshot from '../components/2039320.JPG'
import List from '../components/List'
import data from '../components/data'

const HomePage = () => {
  return (
    <div className='home'>
      <div className='hometop'>
        <div className='bio'>
          <h1>Emma <br></br>Pennington</h1>
          <p>I am a Computer Science and Software Engineering major at the University of Washington Bothell.
            I am passionate about using tech to enhance the lives of others and support overlooked
            communities.</p>
        </div>
        <img src={headshot} style={{"height" : "30%", "width" : "30%"}} alt="Headshot" />
      </div>
      <div className='homebottom'>
        <div>
          <h2>Areas of Interest:</h2>
          <ul>
            <li>UI/UX Design</li>
            <li>Web Development</li>
            <li>Software Development</li>
            <li>Product Management</li>
          </ul>
        </div>
        <div>
          <h2>Technical Skills:</h2>
          <ul>
            <li>C++</li>
            <li>Python</li>
            <li>MySQL</li>
            <li>HTML / CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
          </ul>
        </div>
        <div>
          <h2> Relevant Coursework:</h2>
          <List items={data}/>
        </div>
      </div>
    </div>
  );
}

export default HomePage;