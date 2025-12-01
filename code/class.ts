class Users { //propriedades
    name: string
    public balance: number = 0
    singleTransactions: number = 0
    static totalTransactions: number =0

    constructor(n:string, b: number){
        this.name = n
        this.balance = b
    }

    addMondey(amonut: number){
        this.balance += amonut
        this.singleTransactions++
        Users.totalTransactions++
    }
}

const user1 = new Users('Maiara', 10)
user1.addMondey(100)
user1.addMondey(30)

const user2 = new Users('Fernando', 20)
user2.addMondey(30)
user2.addMondey(50)


console.log(user1)
console.log(user2)
console.log(Users.totalTransactions)

