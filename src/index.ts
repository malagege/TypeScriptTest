//  基本類型

let str: string = 'helloworld'
let str2 = 'helloworld' // 不用給予型別， TypeScript 會自動判定編譯時類別
str = "Hello World"

let num: number = 10000
let boo: boolean = true
let n: null = null
let un: undefined = undefined

let test: any = true  // 可以放任何型別，跟寫 JS 一樣

// 陣列

let arr: string[] = ['a','b']
let arr2: string[][] = [['a','b']]

// 元祖
let tuple = [1,'a', true]
let tuple_: [number, string, boolean] = [1,'a', true]
let tuple2: [string,string][] =[['a','b']]


// Enum 枚舉

enum LiveStatus{
    SUCCESS,  // 這邊不填寫，跟 C# Enum 規則一樣
    FAIL = -1,
    STREAMING = 1,
}

const stat = LiveStatus.FAIL
// 注意無法使用 status 變數
// 原因是 window.status 有用到變數
// 可以參考: [程式語言教學誌 FB, YouTube: PYDOING: HTML DOM 快速導覽 - window 物件的屬性 status](https://pydoing.blogspot.com/2011/10/javascript-window-status.html)


// Union
// 變數可以放多種型別
let aaa: number | string;
aaa = 1000
aaa = 'str'

// type
// 自定義型別，可以用 union(|) 放多種型別
type A = number | string
type B = boolean | string

let a1: A 
a1 = 999
a1 = 'str'

let b1:B
b1 = true

// interface 

interface User{
    name: string;
    age: number;
}


// Object 


// type 跟 interface 差異，type 不能連續擴充，但是 interface 可以。
// 下面 type 不可連續使用，但是 interface 可以
// 注意這邊 C# 無法這樣用 interface 重複宣告，這邊是 TypeScript 獨有的
type Card = {
    name: string,
    desc?: string
}

// type Card = {
//     age: number
// }


interface Card2 {
    name: string,
    desc: string
}

interface Card2 {
    age?: number          //可選
}

const obj: Card = {
    name: 'bruce',
    desc: 'xxx'
}

// function 

// function hello (){}

function hello (a: string, b: string){
    return a + b
}

function hello2 (a: string, b: string): number {
    console.log(a , b);
    return 999
}

function hello3(a: number, b: boolean, c: string){
    return 100
}

// function undefined

function test2(a:number){
    console.log(a);
}

function hello4(name: string,age?: number){   // 問號參數一定要放在後面
    // let a: number
    // a = age
    // age 可能是 undefined ，但宣告 number 所以編譯會錯
    
    if( age !== undefined ){
        test2(age)
        return -1
    }
    return name + age
}

// 箭頭函式

const func = () => {}


const func2 = () => {
    return 1
}


// unknown 
// 打API 回傳資料編譯器不知道類型
// [JSONPlaceholder - Free Fake REST API](https://jsonplaceholder.typicode.com/)

type Data = {
    userId: number,
    id: number,
    title: string,
    completed: boolean,
}

async function getData(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json() as Data
}

const data1: Data = {
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }


type Beta = {
name: string
}

// 直接轉型會錯，透過 unknown 轉型就不會有問題
const beta = data1 as unknown as Beta;


// class

// private 私有
// public 公開
// protected 受保護
// 這上面關鍵字只在 TypeScript生效，但 JS 可以訪問到，如 console.log 都可以看到內容。後續 JS 版本有支援 privat
// [Private class features - JavaScript | MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_class_fields)

class Live{
    roomName: string
    private id: string
    protected name: string

    constructor(roomName: string, id1: string, name: string) {
        this.roomName = roomName
        this.id = id1
        this.name = name
    }

    start(){
        this.id
    }
}

class CarLive extends Live{
    constructor(roomName: string, id1: string, name: string) {
        super(roomName, id1, name);
    }
    
    start(){
        // super.id 訪問不到
        super.name
    }
}

const live = new Live('1號','000001','bruce')
const carLive = new Live('2號','000002','bruce2')
console.log(live)
console.log(carLive)
// carLive.name 因 protected 無法用


class Live2{
    // 私有變數
    #name
    constructor(name: string){
        this.#name = name
    }

}

const live2 = new Live2('live2')
// console.log(live2.#name) 無法印出


interface CarProps {
    name: string
    age: number
    start: () => void
}

class Car implements CarProps{
    // private name: string 不可以寫成 private 修飾
    name: string
    age: number

    constructor(name: string, age: number){
        this.name = name
        this.age = age
    }
    start(){

    }

}

// 泛型

function print<T>(data: T){
    console.log('data', data)
}

print<number>(999)
print<string>('bruce')
print<boolean>(true)