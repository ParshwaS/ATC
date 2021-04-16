module.exports = (app, conn)=>{

    app.get('/flights/:type', (req,res)=>{
        conn.query(`CALL show_flights('${req.params.type}');`, (error, response)=>{
            if(!error){
                console.log(response);
                res.json({status: true, response});
            }else
                res.json({status: false, error});
        });
    });

    app.post('/flights/insert', (req, res)=>{
        conn.query("INSERT INTO flights(flight_name, from_airport, to_airport, ETA, ETD, runway_a, runway_d, hanger, TTF, LUB) VALUES (?,?,?,?,?,?,?,?,?,?)",[req.body.flight_name, req.body.from_airport, req.body.to_airport, req.body.ETA, req.body.ETD, req.body.runway_a, req.body.runway_b, req.body.hanger, req.body.TTF, req.body.LUB], (error, response)=>{
            if(!error){
                res.json({status: true});
            }else{
                res.json({status: false, error: error});
            }
        })
    })

}