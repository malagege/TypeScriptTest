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
