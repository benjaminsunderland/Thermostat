describe('Thermostat', function() {

  var thermostat

  beforeEach(function() {
    thermostat = new Thermostat();
  });

  describe('thermostat', function() {

  it('can return a temperature', function() {
    expect(thermostat.showTemperature()).toEqual(20);
  });

  it('can increase the temperature with a up function', function() {
    thermostat.TurnUpTemperature()
    expect(thermostat.showTemperature()).toEqual(21);
  });

  it('can descrease the temperature with a down function', function() {
    thermostat.TurnDownTemperature()
    expect(thermostat.showTemperature()).toEqual(19)
  });

  it('has a minimum of 10 degrees', function() {
    for (var i = 0; i < 10; i++) {
      thermostat.TurnDownTemperature();
    }
    expect(thermostat.showTemperature()).toEqual(10);
  });

  it('has power saving mode on by default', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
  });

  it('can switch PSM off', function() {
    thermostat.switchPowerSavingModeOff();
    expect(thermostat.isPowerSavingModeOn()).toBe(false);
   });

   it('can switch PSM back on', function() {
     thermostat.switchPowerSavingModeOff();
     expect(thermostat.isPowerSavingModeOn()).toBe(false)
     thermostat.switchPowerSavingModeOn();
     expect(thermostat.isPowerSavingModeOn()).toBe(true);
   });

   describe('when power saving mode is on', function() {
     it('has a maximum temperature of 25 degrees', function() {
        for (var i = 0; i < 5; i++) {
          thermostat.TurnUpTemperature();
        }
        expect(thermostat.showTemperature()).toEqual(25);
     });
   });
  });
 });
