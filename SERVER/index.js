var server=require("./server.js");
var router=require("./router.js");
var requestHandlers=require("./requestHandlers.js");


var handle={};
handle['/']=requestHandlers.main;

server.start(router.route,handle);
