Array.prototype.myMap = function(callback) {
    let newArray = []
    for (let i = 0; i < this.length; i++) {
      let newMappedItem = callback(this[i], i, this)
      newArray.push(newMappedItem)
    }
    return newArray
  }
  

Array.prototype.myForeach = function(callback){
    for (let i = 0; i < this.length; i++) {
      callback(this[i], i, this)
    }
  }

Array.prototype.myReduce = function(callback, initialValue=0){
    for (let i = 0; i < this.length; i++) {
      initialValue = callback(initialValue, this[i], i, this)
    }
    return initialValue
  }

Array.prototype.myFilter = function(callback){
        let filtered=[]
        for(let i=0;i< this.length;i++)
        {
           if(callback(this[i]))
             filtered.push(this[i]) 
        }
    
        return filtered
    }

