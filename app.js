const express = require("express")
const app = express()

app.use(express.static('./'))


app.all('*', (req, res) =>{
    res.status(404).send('Resource not found')
})

app.listen(5000, ()=>{
    console.log("Server is listening on Port 5000 ... ");
})