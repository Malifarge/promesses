
// 01 - hello world

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

// 02 - il fait froid

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

// 03 - Ménage

const doLaundry = () =>{
    console.log("je commence la lessive");
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        resolve("j'ai fini la lessive")
        },3000)
    })
}

const doDishes = () =>{
    console.log("je commence la vaisselle");
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
        resolve("j'ai fini la vaisselle")
        },1500)
    })
}

const clean = async() =>{

    const endLaundry = await doLaundry()
    console.log(endLaundry);
    const endDishes= await doDishes()
    console.log(endDishes);
    console.log("J'ai terminé le ménage");
}

clean ()