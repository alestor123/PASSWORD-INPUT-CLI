module.exports = (msg,time) => {
if(!(msg&&time)) throw Error('Please enter message and time correctly')
return new Promise((res) => setTimeout(() => res(console.log(msg)), time))
}