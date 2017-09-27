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
    for (var i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.getCurrentTemperature()).toEqual(10);
  });
 });
});
