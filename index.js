
// 01-hello world

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

// 02- il fait froid

const meteo = () =>{
    const temperature = 2
    return new Promise((resolve,reject) =>{
        setTimeout(() =>{
            if (temperature <= 10){
                resolve ("Il fait froid")
            } else{
                reject("il fait chaud")
            }
        },4000)
    })
}

const waitTemp = async () => {
    try {
        const temp = await meteo()
        console.log(temp)
      } catch(error) {
        console.log(error)
      }
    }

  waitTemp()