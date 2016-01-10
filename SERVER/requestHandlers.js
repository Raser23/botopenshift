var fs=require('fs');
function main(res){
    fs.readFile('public/main.html',function(err,data){
        if(err) throw err;

        res.end(data);
    })
}
exports.main=main;