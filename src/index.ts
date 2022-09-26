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

console.log(stat);