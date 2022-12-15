

async function startJob(numberOfTasks) { 
    const promise = new Promise(function (resolve, reject) {
        if (isNaN(numberOfTasks)) { 
            reject("Invalid input!");
            
            }else { 
                setTimeout(() => {resolve( console.log(`[${numberOfTasks}] tasks finished`) )}, 2000);
        }
    });
   
    
}

startJob(5);

