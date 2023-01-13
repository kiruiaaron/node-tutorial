const os =require('os')

//info about the current user

const user = os.userInfo()

console.log(user)


//method return the ystem uptime in nseconds

console.log(`the system uptime is ${os.uptime()} seconds`)

const ccurrentOs ={name:os.type(),
release:os.release(),
totalMem:os.totalmem(),
freeMem:os.freemem()}

console.log(ccurrentOs) 