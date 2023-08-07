
// Class



class Person {
    private first_name: string;
    private last_name: string;
    private age: number;

    get firstName() { // Getter
        return this.first_name
    }

    set firstName(fname: string) { // Setter
        'Hello,' + this.first_name
    }



    constructor(_fname: string, _lname: string, _age: number) {
        this.first_name = _fname;
        this.last_name = _lname;
        this.age = _age;
    }

}

let Mike = new Person('asd', 'asd', 18);
Mike.firstName

// Сужение классов

class Animal {
    name: string;
}

class Dog {
    name: string;
    tail: boolean;
}

const puppy: Animal = new Dog();
puppy.name // Сужение классов tail - отсутствует













/*
// Union Type



let a: number | string = 5; // Union Type
a = 'Hello.'
console.log(a);

function sayId(id: number | string) {
    if (typeof id == 'string') {
        console.log(id.toUpperCase());
    } else {
        console.log(`id is number ${id}`);
    }
}

function hiUser(user: string | string[]) {
    if (Array.isArray(user)) {
        console.log(user.length);
    } else {
        console.log(user + 'Hi!');
    }
    
}

hiUser(['Sandy', 'Maria']);

*/


/*

// Interfaces and Types



type coord = { lat: number,  long: number }; // Types

interface ICoord { // Interface
    lat: number;
    long: number;
}


function pointer(coord: ICoord) {
    console.log();
}

type Id = number | string;


// Слияние интерфейсов (Interfaces)

interface Animal {
    name: string;
}

interface Dog extends Animal {
    tail?: boolean;
}

const dog: Dog = {
    name: "Bobik",
    tail: true,
}

// Types не могут участвовать в слиянии определений.

// Interfaces могут оределять только объекты, а не преметивы.

// ! Всегда используйте interface, если вам не нужна какая-то фича types. !

*/


/*
// Литеральные типы



const a = 'asd'; // Литеральный тип

let b: 'zxc' = 'zxc'; // Литеральный тип

*/


/*
// Enum



enum Direction { // Тип Enum
    Right,
    Left
} 


Direction.Left;


enum Numbers { // Тип Enum
    First = 0,
    Second = 1
} 


enum Getero { // Тип Enum (Гетерогенный)
    First = 0,
    Second = "asd"
} 

*/


/*
// Generic



// Когда нужно возвратить тот тип который получили, нужно использовать Generic

function log(obj: string | number): string | number {
    console.log(obj);
    return obj
}


// Не факт что мы получим число а на выходе может быть строка

// Это можно сделать с помощью Generic

function logGeneric<T>(obj: T): T { // Generic
    console.log(obj);
    return obj
}

logGeneric<string>("asd");

*/


/*
// Class



class Coord {
    lat: number;
    long: number;

    constructor(lat: number, long: number) {
        this.lat = lat;
        this.long = long;
    }
}

const point_001 = new Coord(12.24, 48.15);


class MapLocation extends Coord {
    name: string;

    constructor(lat: number, long: number, name: string) {
        super(lat, long); // Мы должны сделать ссылку на основной класс клонструктор вызвав - 'super'
    }

}

*/