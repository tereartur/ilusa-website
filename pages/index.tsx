import React from 'react';
import { NextPage } from 'next';
import HomePage from './home';

const IndexPage: NextPage<any> = props => {
  return <HomePage {...props} />;
};

export default IndexPage;
