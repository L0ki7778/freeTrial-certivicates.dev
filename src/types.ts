

interface person {
    id: number,
    name: string,
    age: number
}

interface User {
    id: number,
    name: string,
    age: number
}

let jack: person = {
    id: 1, name: "Anna", age: 28
}

let joe: person = {
    id: 1, name: "Anna", age: 28
}

let jimmi: person = {
    id: 1, name: "Anna", age: 28
}

const personen: Record<string, person> = {
    jack: { id: 1, name: "Anna", age: 28 },
    joe: { id: 2, name: "Ben", age: 35 },
    jimmi: { id: 3, name: "Clara", age: 22 },
}
    ;


function logPersonProp<T, K extends keyof T>(type: T, key: K) {
    let popertyValue = type[key]
    console.log(popertyValue)
}

type ClacFunction = (a:number, b:number)=>number;
const add = (x:number, y:number)=>x+y;

function customCalc(a:number,b:number,func:ClacFunction):number{
    return func(a,b)
}

type Optional<T> = T | undefined;

let user : Optional<User>; 