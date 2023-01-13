 //console.log(__dirname)
//setInterval(()=>{
 //   console.log('Hello world')
 //},1000)

//require('./mind-grade')

const path =require('path')

console.log(path.sep)

const filePath = path.join('/content','subfolder','home.txt')

console.log(filePath)

const base =path.basename(filePath)

console.log(base)

const absolute = path.resolve(__dirname,'content','subfolder','home.txt')

console.log(absolute)