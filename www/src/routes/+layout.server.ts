
import { client } from "$lib/db/client";
import { generateUUID } from "$lib/utility/uuid";
import type { LayoutServerLoad } from "./$types";

export const load = (async({ cookies }) => {
    let user = cookies.get("user")??"tested";
    console.log(user);
    if(user == null){ 
        await addUser();
    }
    else {

        let userDb = await  client.user.findFirst({
            where:{
                uuid: user
            }
        })
        console.log(userDb);
        if (userDb == null) {
            addUser()
        }
        else { 
            user = userDb.uuid;
        }
    }
    return { "user":user};
    
    

    async function addUser() {
        let uuid ="tested"; //generateUUID();
        cookies.set("user", uuid, { path: "/", maxAge: 300000, });
        user = uuid;
        let userDb = await client.user.create({
            data: {
                "uuid": uuid
            }
        });
    }
}) satisfies LayoutServerLoad;