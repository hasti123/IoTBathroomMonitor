function ajaxRequest(){
 var activexmodes=["Msxml2.XMLHTTP", "Microsoft.XMLHTTP"] //activeX versions to check for in IE
 if (window.ActiveXObject){ //Test for support for ActiveXObject in IE first (as XMLHttpRequest in IE7 is broken)
  for (var i=0; i<activexmodes.length; i++){
   try{
    return new ActiveXObject(activexmodes[i])
   }
   catch(e){
    //suppress error
   }
  }
 }
 else if (window.XMLHttpRequest) // if Mozilla, Safari etc
  return new XMLHttpRequest()
 else
  return false
}

function start() {
    var deviceID = "430036001547343339383037";
    var accessToken = "ec4e29afa16b2728b2b61a23ffb18b81aa66aa34";
    var eventSource = new EventSource("https://api.spark.io/v1/devices/" + deviceID + "/events/?access_token=" + accessToken);

    document.getElementById("startButton").innerHTML = "Connected"

    eventSource.addEventListener("lightStatus", function(e) {
      var parsedData = JSON.parse(e.data);
        if (parsedData.data == "lightOn") {
          document.getElementById("bulb").src = "lightsOn.png";
          document.getElementById("startButton").style.backgroundColor = "green";
        } else {
          document.getElementById("bulb").src = "lightsOff.png";
          document.getElementById("startButton").style.backgroundColor = "red";
        }
      },false);

}
