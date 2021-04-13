const jwt = require('jsonwebtoken');

module.exports = (app, conn) => {

    app.post('/auth/login', (req, res)=>{
        conn.query(`SELECT * FROM operators WHERE name=${req.body.name} AND password=MD5('${req.body.password}');`, (error, response)=>{
            if(!error){
                if(response[0].length>0){
                    
                }else{
                    res.json({status: false});
                }
            }else{
                res.json({status: false});
            }
        })
    })

}