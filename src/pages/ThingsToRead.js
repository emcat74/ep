import React from 'react';

const ThingsToRead = () => {
  return (
    <div className='about'>
      <h1>About</h1>
      
      <div className='edu'>
        <h2>Education</h2>
        <p>Bachelor of Science in Computer Science and Software Engineering
          <br></br> University of Washington Bothell | Bothell, WA
        </p>
      </div>

      <div className='work'>
        <h2>Work Experience</h2>
        <div className='job'>
          <p><b>Preschool Gymnastics Coach,</b> Cascade Elite Gymnastics West</p>
          <p>February 2024 - Present</p>
          <ul>
            <li>Engage with children ages 18 months to 5 years</li>
            <li>Help children develop practice motor skills, follow directions, and learn basic gymnastics skills</li>
            <li>Encourage children to develop positive self image through reassurance and positive motivation</li>
          </ul>
        </div>
        <div className='job'>
          <p><b>Seasonal Brand Assosicate,</b> Athelta</p>
          <p>October 2023 - January 2024</p>
          <ul>
            <li>Engage with customers on the sales floor by advising
              customers on product selection
            </li>
            <li>Provide seamless transactions and returns with point-of-sale systems</li>
            <li>Encourage customer loyalty through the rewards program and pitching of
              the brand card
            </li>
            <li>Locate, manage, and replenish inventory</li>
          </ul>
        </div>
        <div className='job'>
          <p><b>Visual Manager,</b> Garage Clothing</p>
          <p>June 2023 - September 2023</p>
          <ul>
            <li>Lead and supervise sales assosciates to provide excellent customer
              service while also motivating team members
            </li>
            <li>Arrange and update store layout to optimize product visibility</li>
            <li>Monitor stock levels and replenish merchandise to maintain a visually
              appealing store
            </li>
            <li>Manage window displays to attract customers and promote featured items</li>
          </ul>
          </div>
        <div className='job'>
          <p><b>Sales Assosciate,</b> Garage Clothing</p>
          <p>June 2022 - June 2023</p>
          <ul>
            <li>Provide quality customer service by helping customers find items,
              answering questions, and providing personal recommendatiosn
            </li>
            <li>Collaborate with a team of 20+ people to maintain and organize stock
              of all items on the sales floor and assist customer transactions
            </li>
            <li>Process and prepare online orders for shipment</li>
            <li>Receive, unpack, and organize new merchanise</li>
          </ul>
        </div>
      </div>


    </div>
  );
}

export default ThingsToRead;