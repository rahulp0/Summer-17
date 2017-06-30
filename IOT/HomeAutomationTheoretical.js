//Theoretical

<html>
<head>
    <script type="text/javascript"
src="http://cloud.boltiot.com/static/js/boltCommands.js">
    //This code must be there in all code for control or monitoring
    //Arduino type control and monitoring functions are pre-written in the boltCommands.js File
    </script> 
    <script type="text/javascript">
    setKey('{{ApiKey}}','{{Name}}'); // Default line must be present in every code
    setDebug(False); //Change Debug to true to get on screen alert
messages of Command execution
    function changeImage(msg){ // Function to change the image when a button is clicked
    if(msg == "OFF"){

document.getElementById('myImage').src='https://cdn.pixabay.com/photo/2012/04/14/13/32/power-33948_960_720.png';
      digitalWrite(0, LOW); //Arduino type function to control the state of one GPIO pin of Bolt
     }
     else{

document.getElementById('myImage').src=
'http://www.clker.com/cliparts/8/8/c/0/1197121244407718078webmichl_powerbutton_2_states_(_on_off_)_1.svg.hi.png';
     digitalWrite(0, HIGH); //Arduino type function to control the state of one GPIO pin of Bolt
     }
   }
    </script>
</head>
<body>
<center>
    <button onclick='changeImage("ON")';
style="height:50px;width:75px">ON</button>
    <img id="myImage"
src="https://cdn.pixabay.com/photo/2012/04/14/13/32/power-33948_960_720.png"
height="200" width="200">
    <button onclick='changeImage("OFF")';
style="height:50px;width:75px">OFF</button>
</center>
</body>
</html>