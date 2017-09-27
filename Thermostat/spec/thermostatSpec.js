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
    thermostat.TurnUpTemperature(5)
    expect(thermostat.showTemperature()).toEqual(25);
  });

  it('can descrease the temperature with a down function', function() {
    thermostat.TurnDownTemperature(5)
    expect(thermostat.showTemperature()).toEqual(15)
  });
 });
});
