let i =0;
function count(){
    console.log(i++);
    setTimeout(count(),1000);
}
count();