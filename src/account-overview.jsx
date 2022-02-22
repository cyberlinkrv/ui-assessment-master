import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

import './account-overview.css';

export const AccountOverview = ({data}) => {
  console.log(data);

  return (
    <div className="AccountOverview">
      <FontAwesomeIcon icon={faHardHat} />
      thanks for the opportunity, but my degree as a developer 
      still requires a little more time for web development. 
      even so I'm leaving a React Native project on my github if 
      you can take a look at it, as it has great similarity with 
      web development it can serve as a basis for me to be evaluated. 
      I thank you in advance for the opportunity.
      
      https://github.com/cyberlinkrv/gameplay

    
    </div>
  )
}

export default AccountOverview;