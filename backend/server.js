const express = require('express')
const app = express()
const request = require('request')
const bodyParser = require('body-parser')

app.use('/messages',bodyParser.json({extended: true}))

app.use(express.static('./frontend/chat_page/public'))
app.use(express.static('./frontend/chat_page/assets/js'))
app.use(express.static('./frontend/chat_page/assets/images'))

/*
request('http://sandbox.api.simsimi.com/request.p?key=6e06030e-1f69-4b3e-bcd2-2ea0b7893edf&lc=pt&ft=1.0&text=eae', function(err,res,body){
   let respText = JSON.parse(body)
})
*/
app.post('/messages', (req,res) => {
    request(`http://sandbox.api.simsimi.com/request.p?key=6e06030e-1f69-4b3e-bcd2-2ea0b7893edf&lc=pt&ft=1.0&text=${req.body.msgsent}`, function(err,resp,body){
        let respText = JSON.parse(body)
        res.send(respText.response)
    })

})
app.listen(8080,() => console.log('executando server'))