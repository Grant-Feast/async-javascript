// // Use a function to use a set time out method to change the body background color after a delayed amount of time.
// const colorChange = (color, delayed, doNext) => {
//   setTimeout(() => {
//     document.body.style.backgroundColor = color;
//     doNext && doNext();
//   }, delayed)
// }

// // Use the colorChange function as a nested call back, calling a different color to be changed to every second.
// colorChange('red', 1000, () => {
//   colorChange('blue', 1000, () => {
//     colorChange('yellow', 1000, () => {
//       colorChange('green', 1000, () => {

//       })
//     })
//   })
// });

// // Using nested callbacks like this can get complicated and messy and so you can use a promise object instead.

// const fakeRequestCallback = (url, success, failure) => {
//   const delay = Math.floor(Math.random() * 4500) + 500;
//   setTimeout(() => {
//     if (delay > 4000) {
//       failure('connection timeout');
//     } else {
//       success(`Here is your fake data from ${url}`);
//     }
//   }, delay);
// }

// This does exactly the same as the callback above, it just doesnt include any callbacks.
// const fakeRequestPromise = (url) => {
//   return new Promise((resolve, reject) => {
//     const delay = Math.floor(Math.random() * 4500) + 500;
//     setTimeout(() => {
//       if (delay > 4000) {
//         reject('connection timeout');
//       } else {
//         resolve(`Here is your fake data from ${url}`);
//       }
//     }, delay);
//   })
// }

// If the url comes back as resolved, the then method will then be passed.
// const request = fakeRequestPromise('yelp.com/api/page1');
// Only one of the below will be printed depending on the outcome.
// request
//   .then(() => {
//     console.log('Resolved!');
//     console.log('it worked!');
//   }).catch(() => {
//     console.log('Rejected!');
//     console.log('Unlucky, timeout')
//   })

  // The above doesn't need to be saved to a variable, it can be chained instead to the then method.

  // fakeRequestPromise('yelp.com/api/page1')
  //   .then(() => {
  //     console.log('it worked! (page 1)'); // If this first then method is passed, it will then move onto the next.
  //     fakeRequestPromise('yelp.com/api/page2')
  //       .then(() => {
  //         console.log('it worked! (page 2)');
  //       })
  //       .catch(() => {
  //         console.log('Unlucky, timeout (page 2)')
  //       })
  //   })
  //     .catch(() => {
  //       console.log('Unlucky, timeout')
  //     })

// An easier way to write the same promise above:
// fakeRequestPromise('yelp.com/api/page1')
//     .then(() => {
//       console.log('it worked! (page 1)');
//       return fakeRequestPromise('yelp.com/api/page2')
//     })
//     .then(() => {
//       console.log('it worked! (page 2)');
//       return fakeRequestPromise('yelp.com/api/page3')
//     })
//     .then(() => {
//       console.log('it worked! (page 3)');
//     })
//     .catch(() => {
//       console.log('Unlucky, timeout');
//     })

// A simpler way to create a new promise is to use the async key word, for example:

// async function hello() {

// }

// const helloTwo = async () => {

// }

// The async keyword is placed in front of the function and a promis is automatically returned.

// There is also the await keyword which can be used in place of the .then() method. 
// When used it basically doesn't run the next line of code until the current promise has been fulfilled.

async function rainbow() {
  await delayedColorChange(red, 1000);
  await delayedColorChange(green, 1000);
  await delayedColorChange(blue, 1000);
  await delayedColorChange(orange, 1000);
}























































