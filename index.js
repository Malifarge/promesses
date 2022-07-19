
const hello = () =>{
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            resolve("hello world")
        },2000)
    })
}

const waitHello = async () => {
    const helloWorld = await hello()
    console.log(helloWorld)
  }
  
  waitHello()