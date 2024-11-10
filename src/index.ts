import { PrismaClient } from "@prisma/client";

const prima = new PrismaClient

async function insertUser(userName: string, password: string, firsName: string, lasrName: string) {
   
    const res = await prima.user.create({
        
        data:{
            email: userName,
            password,
            firsName, 
            lasrName
        }
    })

    console.log(res)
}

interface updateParams  {
    firsName: string,
    lasrName: string
}

async function updateUser(userName: string, {firsName, lasrName} : updateParams) {
    const res = await prima.user.update({
        where: {email: userName},
        data: {firsName, lasrName}
    }) 

    console.log(res)
}

async function deleteUser(userName:string) {

    const res = await prima.user.delete({
        where: {email: userName}
    })
    console.log(res)
}

async function getUsers() {
    
    const res = await prima.user.findMany()
    console.log(res)
}

// deleteUser('sumitghosh345@gmail.com')
// insertUser('sumitghosh345@gmail.com', 'sumit123', 'sumit', 'ghosh')
// updateUser('sumitghosh345@gmail.com', {firsName: 'Basudeb', lasrName: 'Ghosh'})
getUsers()