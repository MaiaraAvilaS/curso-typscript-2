
type User = {
    firstName: string
    age: number
}

type JobRole = {
    id: number
    role: string
}

type employee = User & JobRole

const e1: employee = {
    firstName: 'Maiara',
    age: 32,
    id: 221,
    role: 'Admin'
}

console.log(e1)