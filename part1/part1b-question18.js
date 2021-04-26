var intervalID = setInterval(second,1000);

function second(){
    let d = new Date();
    let time = d.toLocaleTimeString();
    console.log(time);
}