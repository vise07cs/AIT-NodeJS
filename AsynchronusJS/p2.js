function orderFood(){

    return new Promise((resolve, reject) => {
        setTimeout(() => {
      const food = 'Pizza';
      if (food) {
        resolve(`Order placed for: ${food}`);
      } else {
        reject('No food selected');
      }
    })
  }
  , 2000);
}


function orderDesert(){
 
    return new Promise((resolve, reject) => {
       setTimeout(() => {
      const icecreame = 'chocoabr';
      if (food) {
        resolve(`Order placed for: ${icecreame}`);
      } else {
        reject('No food selected');
      }
    })
  }
  , 2000);
}



orderFood().then((result) => {
    console.log(result);
    return orderDesert();
}).then((result2) => {
    console.log(result2);
}).catch((error) => {
    console.error('Error:', error);
})