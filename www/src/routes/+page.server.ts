
import { client } from "$lib/db/client";
import { generateUUID } from "$lib/utility/uuid";
import type { PageServerLoad} from "./$types";
import type { Actions } from "./$types";

export const load = (async({  cookies}) => {
    let us = cookies.get("user")??"tested"; 

    let user = await client.user.findFirst({
        where:{
            uuid:us
        },
        include:{todos:true}
    })

    return {
        "data":user
    }
}) satisfies PageServerLoad;


export const actions = {
    // default: async ({ request, cookies }) => {
    //     const data = await request.formData();
    //     console.log(request.headers)
    //     return {"status":"ok"};
    // }, 
    
    add_todo: async ({ request, cookies }) => {
        const data = await request.formData();
        await client.todo.create({
            data:{
                "datetime": new Date(Date.now()), 
                "title": data.get("todo")?.toString()!, 
                author: cookies.get("user")??"tested",
            }
        })
        console.log(data)
        return {"status":"ok"};
    }, 
    remove_todo: async ({ request, cookies }) => {
        const data = await request.formData();

        await client.todo.delete({
          where:{
            id: Number(data.get("todo_id")?.toString())
          }
        })
        console.log(data)
        return {"status":"ok"};
    }, 
    
} satisfies Actions;