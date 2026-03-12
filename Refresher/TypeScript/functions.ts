function greeting(name:string):string{
    return `Hello Mr/Mrs., Have a Good Day ! ${name}`
}
const username1: string="Atharv"
const username2: string="SomeGirl in the Future"
console.log(greeting(username1))
greeting(greeting(username2))

