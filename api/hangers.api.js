module.exports = (app, conn)=>{

    app.get('/hangers/emptyForTime', (req,res)=>{
        
        conn.query("SELECT hangers.hanger_code, hanger_availability(hangers.hanger_code, ) FROM hangers WHERE ETD >= NOW();", (error, response)=>{
            if(!error)
                res.json({status: true, response});
            else
                res.json({status: false, error});
        });
    });

}