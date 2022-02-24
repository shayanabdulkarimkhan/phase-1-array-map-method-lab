const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const titleCased = () => {

  const titleTut = tutorials.map(

    function (arr) {
      let newArr;      
      for (let i=0; i<arr.length; i++){
        
        if (i=== 0) {
          newArr = arr[0].charAt(0).toUpperCase();
        } else if (arr[i-1] === " "){
          newArr = `${newArr}${arr[i].toUpperCase()}`;
        } else {
          newArr = `${newArr}${arr[i]}`;
        }
      }
      
      return newArr;
      // const chArr = newArr.map(function (ele,index,arr) {
      //   if (index >0) {
      //     if (newArr[index-1] === " ") {
      //       console.log(ele.toUpperCase());
      //     } else {
      //       return ele;
      //     }
          
      //   } else {
      //     return arr[0].charAt(0).toUpperCase(); 
      //   }
      // });
      
      // console.log(chArr);

      // newArr = arr.map(function(ele){
      //   i++;
      //   if (ele === " "){
      //     return arr[i+1].toUpperCase();
      //   }        
      // })

      
      
    }     
     
  )
  return titleTut;
}

console.log(titleCased());




