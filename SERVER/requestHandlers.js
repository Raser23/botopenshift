var fs=require('fs');
var reader=require('./reader');


function main(res){
    reader.sendFileSave('.\/test\/index.html',res);
}

function lessons(res){
    var less;
    fs.readdir('.\/SERVER\/public\/html\/lessons',function(err,data){
        if(err) console.log(err);

        //res.end(data.toString());
        var r={};
        for(var i in data){
            r[i]=data[i];
        }
        reader.sendFileSave('.\/html\/lessons.html',res,{"/model/":JSON.stringify(r)});
    });
}
function ss(res,params){

    if(params['file']){
        //params['file']=params['file'].toString().replaceAll('\\','\/');
        console.log("Need File: "+params["file"]);
        reader.sendFileSave('.\/'+params['file'],res)
    }else{
        res.end('NO FILERINO');
    }
}
function minecraft(res){
    reader.sendFileSave('.\/html\/minecraft.html',res);
}
exports.ss=ss;
exports.lessons=lessons;
exports.main=main;
exports.minecraft=minecraft;