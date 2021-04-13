module.exports = (app, conn)=>{

    app.get('/flights/yetToArrive', (req,res)=>{
        conn.query("SELECT * FROM flights WHERE ETA >= NOW();", (error, response)=>{
            if(!error)
                res.json({status: true, response});
            else
                res.json({status: false, error});
        });
    });

    app.get('/flights/logs', (req,res)=>{
        conn.query("SELECT * FROM flights WHERE ETD < NOW();", (error, response)=>{
            if(!error)
                res.json({status: true, response});
            else
                res.json({status: false, error});
        });
    });

    app.get('/flights/parked', (req,res)=>{
        conn.query("SELECT * FROM flights WHERE ETD >= NOW() AND ETA <= NOW();", (error, response)=>{
            if(!error)
                res.json({status: true, response});
            else
                res.json({status: false, error});
        });
    });

}