import React from 'react';
import { HomePage } from '../pages/frontend/HomePage';

export default {
    title: 'FE/HomePage',
    component: HomePage,
}

const Template = (args) => <HomePage {...args} />;

export const FEHomePage = Template.bind({});
FEHomePage.args = {};