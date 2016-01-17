var fs=require("fs");
var path=require("path");
var ROOT=__dirname+ '\/'  +  "public";
var change=require('MyModules/change').f;
//console.log(change);
//console.log(ROOT);
function sendFileSave(filePath,res,changer) {
    try{
        filePath=decodeURIComponent(filePath);
    }
    catch(e)
    {
        res.statusCode=400;
        res.end("Bad Request");
        return
    }

    if(~filePath.indexOf('\0'))
    {
        res.statusCode=400;
        res.end("Bad Request");
        return
    }

    filePath=path.normalize(path.join(ROOT,filePath));
    console.log(filePath);
    fs.stat(filePath,function(err,stats)
    {
        if(err||!stats.isFile())
        {
            console.log(err);
            res.statusCode=400;
            res.end("File not found 2");
            return;
        }
        sendFile(filePath,res,changer);

    })

}
function sendFile(filePath,res,changer) {
    console.log("FilePath:" +filePath);
    fs.readFile(filePath,function(err,content)
    {
        filePath=change({"\\":"/"})
        if(err) throw err;
        changer=changer||{};
        //E:\NODEJS\APPS\Bot\SERVER\reader.js
        changer['/ip/']=global.ip;
        changer['/ssip/']=global.ssIp;
        res.end(change(content.toString(),changer));
    })
}

module.exports.sendFileSave=sendFileSave;
//console.log(read(__filename));


