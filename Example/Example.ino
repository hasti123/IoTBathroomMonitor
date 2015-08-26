int boardLed = D7; // This is where your LED is plugged in. The other side goes to a resistor connected to GND.

int photoresistor = A0; // This is where your photoresistor is plugged in. The other side goes to the "power" pin (below).

int power = A5; // This is the other end of your photoresistor. The other side is plugged into the "photoresistor" pin (above).

int lightOffThreshold = 65; // This is a value halfway between ledOnValue and ledOffValue, above which we will assume the led is on and below which we will assume it is off.

bool lightOn = false; // This flag will be used to mark if we have a new status or now. We will use it in the loop.

// We start with the setup function.

void setup() {
  // This part is mostly the same:
  pinMode(boardLed,OUTPUT); // Our on-board LED is output as well
  pinMode(photoresistor,INPUT);  // Our photoresistor pin is input (reading the photoresistor)
  pinMode(power,OUTPUT); // The pin powering the photoresistor is output (sending out consistent power)

  // Next, write the power of the photoresistor to be the maximum possible, which is 4095 in analog.
  digitalWrite(power,HIGH);
}

void loop() {

  if (analogRead(photoresistor)<lightOffThreshold) {
    if (lightOn==true) {
        Spark.publish("lightStatus","lightOff");
        digitalWrite(boardLed,HIGH);
        delay(500);
        digitalWrite(boardLed,LOW);
        lightOn=false;
    }
    else {
        //do nothing.
    }
  }

  else {
      if (lightOn==false) {
        Spark.publish("lightStatus","lightOn");
        digitalWrite(boardLed,HIGH);
        delay(500);
        digitalWrite(boardLed,LOW);

        lightOn=true;
      }
      else {
          // Otherwise, this isn't a new status, and we don't have to do anything.
      }
  }

}
