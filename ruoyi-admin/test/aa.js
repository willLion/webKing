const testPromise = (flag) => {
  return new Promise((resolve, reject)=>{
     try {
         if(flag === 1) {
             throw Error('this is error')
             resolve(1)
         } else {
             resolve(flag)
         }
     } catch (e) {
         reject(e)
     }
  })
}

const result = await testPromise(1)
    .catch(e => {
})

console.log(result)