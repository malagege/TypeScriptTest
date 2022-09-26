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