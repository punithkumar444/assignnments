
function time(){
    let now = new Date();
    console.log(now.getHours()+':'+now.getMinutes()+':'+now.getSeconds());
    setTimeout(time,1000);
}
time();
//2nd syntax
setInterval(function(){
 let date = new Date();
 let hour = date.getHours();
 if(hour >12){
    hour = hour-12;
 }
 console.log(hour+':'+date.getMinutes()+':'+date.getSeconds());

},1000);