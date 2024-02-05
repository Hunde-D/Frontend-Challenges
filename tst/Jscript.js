// const promise = new Promise((resolve, reject) => {
//
//       //  navigator.geolocation.getCurrentPosition(resolve, reject);
//     navigator.geolocation.getCurrentPosition(position => {
//         resolve(position);
//     }, error => {
//         reject(error);
//     });
// });
//
// promise
//     .then(position => console.log(position))
//     .catch(error => console.error(error))
//     .finally(() => console.log('done'));

const pause = new Promise((resolve, reject) =>{
    // setTimeoout(() => {
    //     resolve();
    // },() => {
    //     reject();
    //
    // });
    // setTimeout(resolve, 2000);
    setTimeoout(resolve,reject)
})

pause
    .then(() => console.log('after 2 seconds'))
    .catch(() => console.log('error'))
    .finally(() => console.log('done!'));