function HOCFunc(callback){
    console.log("HOC function");
callback()
}
function newFunc(){
    console.log("Callback function");
}
HOCFunc(newFunc)
