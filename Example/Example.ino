int boardLed = D7; // This is where your LED is plugged in. The other side goes to a resistor connected to GND.
int photoresistor = A0; // This is where your photoresistor is plugged in. The other side goes to the "power" pin (below).
int power = A5; // This is the other end of your photoresistor. The other side is plugged into the "photoresistor" pin (above).
int lightOffThreshold = 65; // This is a value halfway between ledOnValue and ledOffValue, above which we will assume the led is on and below which we will assume it is off.
bool lightOn = false; // This flag will be used to mark if we have a new status or now. We will use it in the loop.

void setup() {
  pinMode(boardLed,OUTPUT); // Our on-board LED is output as well
  pinMode(photoresistor,INPUT);  // Our photoresistor pin is input (reading the photoresistor)
  pinMode(power,OUTPUT); // The pin powering the photoresistor is output (sending out consistent power)
  // Next, write the power of the photoresistor to be the maximum possible, which is 4095 in analog.
  digitalWrite(power,HIGH);

  Spark.function("getStatus",getStatus);
}

void loop() {
  if (analogRead(photoresistor)<lightOffThreshold) {
    if (lightOn==true) {
        Spark.publish("lightStatus","lightOff");
        lightOn=false;
    }
  }
  else {
      if (lightOn==false) {
        Spark.publish("lightStatus","lightOn");
        lightOn=true;
    }
  }
}

int getStatus(String command) {
    if(lightOn){
        Spark.publish("lightStatus","lightOn");
    } else {
        Spark.publish("lightStatus","lightOff");
    }
}
