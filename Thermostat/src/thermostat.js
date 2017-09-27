function Thermostat() {
  this.temperature = 20;
};


Thermostat.prototype.showTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.TurnUpTemperature = function(amount) {
  this.temperature += amount;
};

Thermostat.prototype.TurnDownTemperature = function(amount) {

  this.temperature -= amount;

};
