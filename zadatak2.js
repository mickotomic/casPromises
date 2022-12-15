

async function startJob(numberOfTasks) { 
    const promise = new Promise(function (resolve, reject) {
        if (isNaN(numberOfTasks)) { 
            reject(err){ 
                console.log("Invalid input")
            }else { 
                setTimeout(() => {resolve( console.log(`[${numberOfTasks}] tasks finished`) )}, 2000);
            }
        }
    });
   return promise;
    
}
