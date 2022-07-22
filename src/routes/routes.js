const {Router} = require('express');
const fs = require('fs');
const router = Router();

const olduser = fs.readFileSync('src/object.json','utf-8');
const users=JSON.parse(olduser);
//const users=[];

router.get('/',(req,res)=>{
    res.render('index',{
        users
    });
});

router.post('/user',(req,res)=>{
    const {nombre, apellido, email, mensaje}=req.body;
    if(!nombre || !apellido || !email || !mensaje){
        res.status(301).send('No se puede dejar campos vacios');
    }
    else{
        
            let user = {
                nombre,
                apellido,
                email,
                mensaje
            };
        
            users.push(user);
            mostrar.style.display="";
            

        
        
        const myjson=JSON.stringify(users);
        fs.writeFileSync('src/object.json',myjson,'utf-8');
        res.redirect('/');

    }
    
});




module.exports=router;