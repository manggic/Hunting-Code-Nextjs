

import path from 'path';
var fs = require('fs');
export default function getBlog(req, res){
    let {name} = req.query
     fs.readFile(`blogdata/${name}.json`,'utf8',  (err, data)=> {
        if(!err){
          res.status(200).json(JSON.parse(data))
        }else{
        res.status(200).json({err: 'true'})
          
        }

    })
}