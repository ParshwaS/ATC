module.exports = (app, conn)=>{

    app.get('/runways/list', (req,res)=>{
        conn.query("SELECT * FROM runways WHERE is_usable=TRUE;", (error, response)=>{
            if(!error)
                res.json({status: true, response});
            else
                res.json({status: false, error});
        });
    })

}