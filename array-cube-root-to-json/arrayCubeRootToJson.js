const arrayCubeRootToJson = arr => {
    let obj={}
    if (arr===undefined || arr===true || arr===false || arr==={})
      {
        throw ''
        return
      }  
    for(let i=0;i<arr.length;i++)
    {
       if(typeof(arr[i])!=='number' && arr[i]!==Infinity)
        {
          throw ''
          return
        }    
    } 

    for(let i=0;i<arr.length;i++)
    {
       if (arr[i]===Infinity)
          obj[arr[i]]=Infinity 
       else    
          obj[arr[i]]=Math.cbrt(arr[i]) 
    }

   return obj 
};
     
export { arrayCubeRootToJson };
