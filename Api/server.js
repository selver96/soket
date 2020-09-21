const express = require('express');

const app = express();


const people = [

    {
        tc: 57985649182,
        ad: 'Selver',
        soyad: 'Said'
    }

];

app.get('/people', (req, res) => res.json(people));
app.get('/people/:x', function(req, res){
  
    var value = req.params.x;
    var isSayiHane = /^[0-9]{11}$/.test(value);
    var toplamX = 0;
    for (var i = 0; i < 10; i++) {
        toplamX += Number(value.substr(i, 1));
    }
    var isEsitX = toplamX % 10 == value.substr(10,1);
    var toplamY1 = 0;
    var toplamY2 = 0;
    for (var i = 0; i < 10; i+=2) {
        toplamY1 += Number(value.substr(i, 1));
    }
    for (var i = 1; i < 10; i+=2) {
        toplamY2 += Number(value.substr(i, 1));
    }
    var isEsitY = ((toplamY1 * 7) - toplamY2) % 10 == value.substr(9,0);
  
    if(isSayiHane && isEsitX && isEsitY) res.send('TC Doğru');
    else res.send('TC Yanlış')
    
});


app.get('/people/:ad/:soyad', function(req, res){

var person = people.find(function(person){
        return person.ad === req.params.ad && person.soyad === req.params.soyad;
});
        res.json(person.tc) 
});

app.listen(3000, () => console.log('Port 30000'));