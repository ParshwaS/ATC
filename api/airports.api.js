module.exports = (app, conn) => {

    app.get('/airports/list', (req, res)=>{
        conn.query("SELECT * FROM airports;", (error, response)=>{
            if(!error){
                res.json({status: true, response});
            }else{
                res.json({status: false, error});
            }
        })
    });

    app.post('/airports/add', (req, res)=>{
        conn.query(`INSERT INTO airports (airport_code, name, city, country) VALUES ('${req.body.airport_code}', '${req.body.name}', '${req.body.city}', '${req.body.country}')`, (error, response)=>{
            if(!error){
                res.json({status: true, response});
            }else{
                res.json({status: false, error});
            }
        })
    });

}