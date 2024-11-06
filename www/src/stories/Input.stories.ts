

    import Input from '$lib/components/input/input.svelte';

    import type { Meta, StoryObj } from '@storybook/svelte';


    const  meta = {
        component: Input, 
    } satisfies Meta;

    export default meta;
    type Story = StoryObj<typeof meta>;


    export const Primary:Story = {
        args:{
            title: "sdflsdkflskflsdk"
        }
       
    }