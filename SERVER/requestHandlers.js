var fs=require('fs');



function main(res){
    fs.readFile(__dirname+'/public/main.html',function(err,data){
        if(err) {
            res.end(err.toString());
            //throw err;
        }
        res.end(data);
    })
}
exports.main=main;