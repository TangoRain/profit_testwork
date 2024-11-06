

import button from '$lib/components/button/button.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';


const  meta = {
    component: button, 
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary:Story = {
    
   
}

export const Disable: Story = {
    args: {
        isActive: false
    }
};