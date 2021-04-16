const jwt = require('jsonwebtoken');

module.exports = (app, conn) => {

    app.post('/auth/login', (req, res)=>{
        conn.query(`SELECT * FROM operators WHERE name='${req.body.name}' AND password=MD5('${req.body.password}');`, (error, response)=>{
            if(!error){
                if(response.length>0){
                    var usr =  response[0];
                    var payload = {
                        user_id: usr.user_id,
                        name: usr.name
                    }
                    var token = jwt.sign(payload, '!@#$%^&');
                    res.json({status: true, token: token});
                }else{
                    res.json({status: false, error: response});
                }
            }else{
                res.json({status: false, error: error});
            }
        })
    })

    app.post('/auth/register', (req, res)=>{
        conn.query(`INSERT INTO operators (name,password) VALUES ('${req.body.name}',MD5('${req.body.password}'));`, (error, response)=>{
            if(!error){
                res.json({status: true});
            }else{
                res.json({status: false, error});
            }
        })
    })

}