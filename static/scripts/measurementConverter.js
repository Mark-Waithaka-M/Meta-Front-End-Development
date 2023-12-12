class MeasurementConverter {
    constructor(value, fromUnit) {
      this.value = value;
      this.fromUnit = fromUnit;
    }
  
    // Convert from one unit to another
    convert(toUnit) {
      // Define conversion factors
      const conversionFactors = {
        // Add your conversion factors here
        // For example, for length: 'meters' to 'feet'
        meters: { feet: 3.28084 },
        // For temperature: Celsius to Fahrenheit
        celsius: { fahrenheit: value => (value * 9/5) + 32 }
      };
  
      // Check if conversion is possible
      if (!conversionFactors[this.fromUnit] || !conversionFactors[this.fromUnit][toUnit]) {
        throw new Error('Conversion not supported');
      }
  
      // Perform the conversion
      const conversionFunction = conversionFactors[this.fromUnit][toUnit];
      return conversionFunction(this.value);
    }
  }
  
  // Example usage for length conversion
  const lengthConverter = new MeasurementConverter(5, 'meters');
  const feetValue = lengthConverter.convert('feet');
  console.log(`Converted value: ${feetValue} feet`);
  
  // Example usage for temperature conversion
  const temperatureConverter = new MeasurementConverter(20, 'celsius');
  const fahrenheitValue = temperatureConverter.convert('fahrenheit');
  console.log(`Converted value: ${fahrenheitValue} Fahrenheit`);
  