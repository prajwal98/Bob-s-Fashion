import React from 'react';

import Directory from '../../components/directory/directory.component';
import LandingPage from '../../pages/landingpage/landingpage.component';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => (
  <div>
  <LandingPage/>
 
  <HomePageContainer>
    
    <Directory />
  </HomePageContainer>
  </div>
);

export default HomePage;
