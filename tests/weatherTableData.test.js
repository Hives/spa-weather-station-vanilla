/* eslint-disable no-undef */
'use strict';
import WeatherTableData from '../src/weatherTableData';

let weatherDataObject = {
  id: 1,
  temperature: 20,
  pressure: 1039,
  humidity: 50,
  date: `2019-05-20T11:07:03.000Z`
};

let weatherDataObject2 = {
  id: 2,
  temperature: 20,
  pressure: 1039,
  humidity: 50,
  date: `2019-05-20T11:07:03.000Z`
};

describe('weather table', function() {
  it('creates a table instance', function() {
    expect(new WeatherTableData()).toBeInstanceOf(WeatherTableData);
  });

  it('adds an article to the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.list).toHaveLength(1);
  });

  it('retrieves an article from the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    let weatherObject = weatherTableData.list.pop();
    expect(weatherObject).toEqual(weatherDataObject);
  });

  it('retrieves all articles from the list', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getTableData()).toHaveLength(2);
  });

  it('gets a list of temperature data', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getTemperatureData()).toEqual([20, 20]);
  });

  it('gets a list of humidity data', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getHumidityData()).toEqual([50, 50]);
  });

  it('gets a list of pressure data', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getPressureData()).toEqual([1039, 1039]);
  });

  it('gets a list of dates', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject);
    expect(weatherTableData.getDatesData()).toEqual(['12:07:03', '12:07:03']);
  });

  it('gets a record by id', function() {
    let weatherTableData = new WeatherTableData();
    weatherTableData.addData(weatherDataObject);
    weatherTableData.addData(weatherDataObject2);
    expect(weatherTableData.getRecord(2)).toEqual(weatherDataObject2);
  });
});
