//1 import express
const express=require ("express");
//2 init the app
const app=express();

//3 creat a port
const port=5500
//4 creat a server
app.listen(port,(err)=>
err?console.log(err):console.log(`server is listening ${port}`))
//5 middeleware
const verifDate= (req,res,next) => {
    let days=['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];
    let hours=new Date().getHours();
    if (
        days[new Date().getDay()]!== 'saturday'&&
        days[new Date().getDay()]!== 'sunday'&& hours > 9 && hours < 17
    )
    {next()} 
    else {res.send('you are not workin, come back later')}

}

app.use(verifDate)


//console.log(new Date().getHours())
//console.log(new Date().getMinutes())
//console.log(new Date().getDay())


//routing middeleware
app.use (express.static('Public'))

