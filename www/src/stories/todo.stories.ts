

import todo from '$lib/components/todo/todo.svelte';

import type { Meta, StoryObj } from '@storybook/svelte';


const  meta = {
    component: todo, 
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary:Story ={
    args:{
        "title":"todo"
    }
}