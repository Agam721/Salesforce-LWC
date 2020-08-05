const getBmi= function (weightInKgs,heightInMs) {
 try {
     return weightInKgs/(heightInMs*heightInMs);
 } catch (error) {
     return undefined;
 }   
}

export {getBmi};