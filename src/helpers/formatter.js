/**
 *  Возвращает температуру в С
 */

const formatters = {
  formatTemp: (temp) => `${(temp - 273.15).toFixed(1)}°C`,
};

export default formatters;
