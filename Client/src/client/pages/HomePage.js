import React from 'react';
import {Link} from 'react-router-dom';
import {Title} from "../../stylecomponent/index";

const Home = () => {
  return (
    <Title>
      <div className="center-align" style={{marginTrip: '20%'}}>
        <h3>Welcome to Rabbitmansion</h3>
        <p>Check out these awesome featuressss</p>
      </div>
    </Title>
  );
};

export default Home