var fs=require('fs');
var reader=require('./reader');


function main(res){
    reader.sendFileSave('./main.html',res);
}
exports.main=main;