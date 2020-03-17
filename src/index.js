
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix){
    return [];
  }else{
    console.log(matrix);
    for(let i=0;i<matrix.length;i++){
        if(i%2==0){
          matrix[i].sort((a,b)=> a-b);
        }
        else{
          matrix[i].sort((a,b)=>b-a);
        }
  }
  /*console.log(matrix);
  console.log(result);*/
  let result=matrix.flat(Infinity);
  return result;}
}
