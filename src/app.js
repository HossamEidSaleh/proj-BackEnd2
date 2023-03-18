const express = require("express")
const app = express()

const port = process.env.PORT || 3000



//static page

const path = require('path')
var x = path.join(__dirname,'../public')
app.use(express.static(x))




// app.get('/',(req , res)=>{
//     res.send("Hello world")
// })

// app.get('/about',(req , res)=>{
//     res.send("this is data in about page")
// })

// app.get('/service',(req , res)=>{
//     res.send("this is data in service page")
// })

// app.get('/team',(req , res)=>{
//     res.send("<h2>Hossam eid</h2> <button>Send</button>")
// })


app.get('/data',(req , res)=>{
    res.send({
        name:"hossam",
        age:20,
        city:"benisuef"
    })
})





app.set('view engine' , 'hbs');
//////////////
const viewsD = path.join(__dirname , '../temp1/views')
app.set("views", viewsD )
///////////

const  hbs = require("hbs")

const partialsPath = path.join(__dirname , '../temp1/partials')
hbs.registerPartials(partialsPath)
///////////

app.get('/',(req , res)=>{
    res.render('index' , {
        title:"HOME",
        desc:"this is home page",
        name:"Hossam",
        age:20,
        city:"Benisuef",
        img1:'images/PicsArt_12-11-09.15.39.jpg',
        uni1:"BNS University"
    })
})

app.get('/service',(req , res)=>{
    res.render('service' , {
        title:"SERVICE",
        desc:"this is service page",
        name:"Ali",
        age:25,
        city:"Fayoum",
        img2:'images/t4.jpg',
        uni2:"cairo university"
    })
})


app.get('/team',(req , res)=>{
    res.render('team' , {
        title:"TEAM",
        desc:"this is team page",
        name:"Ahmed",
        age:30,
        city:"cairo",
        img3:'images/team-1.jpg',
        uni3:"NUB University"
    })
})


app.get('/about',(req , res)=>{
    res.render('about' , {
        title:"ABOUT",
        desc:"this is about page",
        name:"mohamed",
        age:35,
        city:"Giza",
        img4:'images/about-img.png',
        uni4:"AUC University"
    })
})


app.get('/prices',(req , res)=>{
    res.render('prices' , {
        title:"PRICES",
        desc:"this is prices page",
        name:"Karim",
        age:28,
        city:"Mansoura",
        img5:'images/pic-3.png',
        uni5:"Nile University"
    })
})


app.listen(port , ()=>{
    console.log(`Example app listening on port ${port}`)
})