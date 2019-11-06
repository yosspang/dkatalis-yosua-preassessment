const express = require('express')
const app = express()
const port = 3000


const bodyParser = require("body-parser")


const Mongoose = require("mongoose") 
Mongoose.connect('mongodb://localhost/restaurants')

const RestaurantsModel = Mongoose.model("restaurant",{
    //restaurant model fields
    address: String,
    building: String
})



app.use(bodyParser.urlencoded({extended:true})) 
app.use(bodyParser.json()) 


app.get('getBronx/limit/:limit/page/:page',async(req,res)=>{
    var per_page = parseInt(req.params.limit) 
    var page_count = Math.max(1,parseInt(req.params.page))
    var result = await RestaurantsModel.find({borough:'Bronx'}).limit(per_page).skip(per_page * (page_count - 1)) 
    var count = await RestaurantsModel.count()
    console.log(result)
    const response={
        statusCode: 200,
        pages: count / per_page,
        content: result 
    }
    res.json(response).status(response.statusCode)
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))

