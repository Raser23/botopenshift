var server=require("./server.js");
var router=require("./router.js");
var requestHandlers=require("./requestHandlers.js");


var handle={};
handle['/']=requestHandlers.main;
handle['/lessons']=requestHandlers.lessons;
handle['/ss']=requestHandlers.ss;
server.start(router.route,handle);
