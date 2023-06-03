const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const database = {
    users: [
        {
            id: '123',
            name: 'chenny',
            email: 'chenny@gmail.com',
            password: 'lolku'
        },
        {
            id: '124',
            name: 'panny',
            email: 'panny@gmail.com',
            password: 'dolki'
        },
        {
            id: '125',
            name: 'manny',
            email: 'manny@gmail.com',
            password: 'chilu'
        }
    ]
}




app.get('/',(req,res)=>{
    
    res.send(database.users);
});


app.post('/signIn',(req,res)=>{
   if (req.body.email === database.users[2].email && 
      req.body.password === database.users[2].password){
              res.json("success")
      }
      else{
        res.json("errrrr")
      }
});


app.post('/register',(req,res)=>{
    const {email,name,password}= req.body;
    database.users.push(
        {
            id: '126',
            name: name,
            email: email,
            password: password
        }
    )
    res.json(database.users[database.users.length-1]);
});











app.listen(3000,()=>{
    console.log('app is running on port 3000');
})


