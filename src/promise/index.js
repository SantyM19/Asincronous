const someThingWillHappen = ()=>{
    return new Promise((resolve,reject)=>{
        if(true){
            resolve('Hey!')
        }else{
            reject("Whooooops!")
        }
    })
}

someThingWillHappen()
    .then(response => console.log(response))
    .catch(err => console.error(err))

    const someThingWillHappen2 = ()=>{
        return new Promise((resolve,reject)=>{
            if(true){
                setTimeout(()=>{
                    resolve('Heyeye!')
                },2000)
            }else{
                const error = new Error ("Whoooop!")
                reject("Whooooops!")
            }
        })
    }    


someThingWillHappen2()
    .then(response => console.log(response))
    .catch(err => console.error(err))

Promise.all([someThingWillHappen(),someThingWillHappen2()])
    .then(response =>{
        console.log('resulsts Array', response)
    })
    .catch(err => {
        console.error(err)
    })