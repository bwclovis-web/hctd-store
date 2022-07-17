import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import UtilityNav from './UtilityNav';

export default {
    title: 'Molecules/Utility Nav',
    component: UtilityNav,
} as ComponentMeta<typeof UtilityNav>;

const Template: ComponentStory<typeof UtilityNav> = (args) => <UtilityNav />;

export const Default = Template.bind({});
