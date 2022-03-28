let addElement = function ( arr,nuevo,maximo){
    let newArr = arr.filter(function(item){
    return item === nuevo
    })
    if(newArr.length === 0 && arr.length < maximo){
       arr.push(nuevo)
       console.log(arr)
    }else if (newArr.length === 0 && arr.length >=maximo) {
       arr.splice(maximo-1 , arr.length , nuevo)
       console.log(arr)
    }else {
       arr.splice(nuevo-1 , 1 )
       arr.push(nuevo)
           console.log(arr)      
    }
}
addElement([1,2,3,4], 4, 4)

