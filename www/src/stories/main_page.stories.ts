

import Page from '../routes/+page.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';


const  meta = {
    component: Page, 
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;


export const Primary:Story = {
    args:{
        "data":{
            "user":"test_gen"
        }
    }
   
}