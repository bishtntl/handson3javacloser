// // Q1>>>>>>>>>>>>>>>>>>>
//  function counter(){
//         var counter = 0;
//         function IncreaseCounter() {
//             return counter += 1;
//         };
    
//         return IncreaseCounter;
//     } 
//     var counter = counter();
//     console.log(counter());
//     console.log(counter());
//     console.log(counter());
//     console.log(counter());



//     // Q2>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
    // let count = 0;
    //     (function ()
    //      {
    //       if (count === 0) 
    //       {
    //         let count = 1;
    //         console.log(count); // What is logged?
    //       }
    //       console.log(count); // What is logged?
    //     })();

        // let count = 0;
        // function demo()
        //  {
        //   if (count === 0) 
        //   {
        //     let count = 1;
        //     console.log(count); // What is logged?
        //   }
         
        // }
        // console.log(count)
        // demo()   
        



//         // Q3>>>>>>>>>>>>>>>>>>>
        for (var i = 0; i < 3; i++) {
            setTimeout(function log() {
              console.log(i); // What is logged?
            }, 1000)
        }

        // for (var i = 0; i < 3; i++) {
        //     // setTimeout(function log() {
        //       console.log(i); // What is logged?
        //     // }, 1000)
        // }


//         // Q4>>>>>>>>>>>>>>>>>>>>>>>
      //  var findarea= function(l){
      //     return function (b){
      //     console.log(l*b)

      //    }
        
      //  }
      //  var area=findarea(3)
      //  area(4)
       



//       //  Q5>>>>>>>>>>>>>>>>>>>>>
    //   function counter(){
    //     var counts=0;
    //     function increase(){
    //     return  counts +=1
    //     }
    //     return increase;
    //   }
    //  var coun=counter()
    //  coun()
    //  coun()
    //  coun()


//     // Q6>>>>>>>>>>>>>>>>>>>>>>>>>
//     var a = 12;
// (function () {
//   console.log(a);
// })()

// // Q7>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
// var a = 10;
//     var x = (function () {
//       var a = 12
//       return function () {
//         console.log(a)
//       }
//     })();

      
      


       