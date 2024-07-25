import bcryptjs from 'bcryptjs'


enum Role {
    admin = 'admin',
    user = 'user'
}

interface SeedUser {
    email: string,
    password: string,
    name: string,
    role: Role;
}

interface SeedData {
    users: SeedUser[]
}


export const initialData: SeedData = {

    users: [
        {
            email: 'german@google.com',
            name: 'German Gatica',
            password: bcryptjs.hashSync('123456'),
            role: Role.admin
        },
        {
            email: 'catalina@google.com',
            name: 'Catalina Gatica',
            password: bcryptjs.hashSync('123456'),
            role: Role.user
        },
    ]
}