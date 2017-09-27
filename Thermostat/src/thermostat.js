'use strict';

function Thermostat() {
  this.temperature = 20;
  this.MINIMUM_TEMPERATURE = 10;
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_ON = 32;
  this.PowerSavingMode = true;
};


Thermostat.prototype.showTemperature = function() {
  return this.temperature;
};

Thermostat.prototype.TurnUpTemperature = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1;
};


Thermostat.prototype.isMaximumTemperature = function() {
  if (this.isPowerSavingModeOn() === false) {
    return this.temperature === this.MAX_LIMIT_PSM_OFF;
  }
  return this.temperature === this.MAX_LIMIT_PSM_ON;
}


Thermostat.prototype.TurnDownTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1;
};

Thermostat.prototype.isPowerSavingModeOn = function() {
  return this.PowerSavingMode === true;
};

Thermostat.prototype.switchPowerSavingModeOn = function() {
  this.PowerSavingMode = true;

};

Thermostat.prototype.switchPowerSavingModeOff = function() {
  this.PowerSavingMode = false;

};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};
