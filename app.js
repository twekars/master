var mqtt=require('mqtt');
var client  = mqtt.connect('mqtt://192.168.0.3');
client.on('connect',function()
{
client.subscribe('master1lat1');
client.subscribe('master1long1');
client.subscribe('master1lat2');
client.subscribe('master1long2');
client.subscribe('master1lat3');
client.subscribe('master1long3');
});
client.on('message', function (topic, message) {

if(topic=="master1lat1")
{
console.log("DRONE 1 latitude ="+ " "+message.toString());
}
if(topic=="master1long1")
{
console.log("DRONE 1 Longitude="+" "+message.toString());
}
if(topic=="master1lat2")
{
client.publish('m1s2lat2',message.toString());
console.log("DRONE 2 latitude ="+ " "+message.toString());
}
if(topic=="master1long2")
{
client.publish('m1s2long2',message.toString());
console.log("DRONE 2 Longitude="+" "+message.toString());
}
if(topic=="master1lat3")
{
client.publish('m1s2lat3',message.toString());
console.log("DRONE 3 latitude ="+ " "+message.toString());
}
if(topic=="master1long3")
{
client.publish('m1s2long3',message.toString());
console.log("DRONE 3 Longitude="+" "+message.toString());
}
});
