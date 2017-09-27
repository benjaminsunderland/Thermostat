function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
};


Thermostat.prototype.showTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.TurnUpTemperature = function() {
  this.temperature += 1;
};


Thermostat.prototype.TurnDownTemperature = function() {
  this.temperature -= 1;

};
