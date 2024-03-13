---
title: Daily Forecast
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/weather
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Daily Forecast

Retrieves an daily weather forecast for a given country and zip/postal code for up to 8 days.

## Endpoint <Badge type="tip" text="GET" />

<pre>{{ $frontmatter.api }}/<Badge type="tip" text="country_code" />/<Badge type="tip" text="postal_code" />/daily</pre>/<Badge type="tip" text="day" />

---

<DividePage :top="63">
<template #left>

### Required path parameters

This endpoint uses the `GET` method and has the following required parameters.

<span style="font-family:courier; font-weight:bold">country_code</span><Badge type="danger" text="required" /><br/>

We support the following country codes.

| Country       | Code |
| ------------- | :--: |
| United States |  US  |
| Canada        |  CA  |

<span style="font-family:courier; font-weight:bold">postal_code</span><Badge type="danger" text="required" />

A valid zip / postal code for a supported country.

### Optional path parameters

<span style="font-family:courier; font-weight:bold">day</span>

Use the `day` parameter to limit the response to a one-day forecast. The `day` designates which day of the 8-day forecast to retrieve. For example, `0` will return the forecast for the current day, whereas `7` will return the one-day forecast 7 days in the future.

### Optional query parameters

<span style="font-family:courier; font-weight:bold">units</span>

Use the `units` parameter to specify the units for all fields with standard units, e.g., miles or kilometers. The following units are supported:

| Units    | Examples                       |
| -------- | ------------------------------ |
| imperial | miles, fahrenheit, in. mercury |
| metric   | kilometers, celsius, pascals   |

---

</template>

<template #right>

::: info Example request URL

```
https://api.ttgtoolbox.com/v1/weather/US/49010/daily
```

:::

::: info Example request URL with optional parameter

```
https://api.ttgtoolbox.com/v1/weather/US/49010/daily
?units=metric
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object **array** containing the daily forecasts.

::: tip NOTE
If you request a single daily forecast using the `day` parameter, the response will be a JSON **object** containing the forecast.
:::

---

</template>
<template #right>

::: details Response for all 8 daily forecasts

```json
[
  {
    "time": "2024-03-11T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-11T19:44:21-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 50.49,
    "temperature_night": 48.09,
    "temperature_min": 30.65,
    "temperature_max": 54.21,
    "feels_like_day": 47.07,
    "feels_like_night": 42.57,
    "pressure": 1019,
    "humidity": 39,
    "dew_point": 27.12,
    "uv_index": 3.8,
    "clouds": 0,
    "wind_speed": 17.49,
    "wind_deg": 219,
    "wind_direction": "SW",
    "wind_gust": 36.37,
    "description": "clear sky",
    "summary": "You can expect clear sky in the morning, with partly cloudy in the afternoon",
    "units": "imperial"
  },
  {
    "time": "2024-03-12T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-12T19:45:30-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 57.33,
    "temperature_night": 52.48,
    "temperature_min": 43.65,
    "temperature_max": 62.35,
    "feels_like_day": 55.44,
    "feels_like_night": 50.86,
    "pressure": 1010,
    "humidity": 57,
    "dew_point": 41.94,
    "uv_index": 2.88,
    "clouds": 99,
    "wind_speed": 18.61,
    "wind_deg": 228,
    "wind_direction": "SW",
    "wind_gust": 36.46,
    "description": "overcast clouds",
    "summary": "There will be partly cloudy today",
    "units": "imperial"
  },
  {
    "time": "2024-03-13T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-13T19:46:39-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 58.05,
    "temperature_night": 54.14,
    "temperature_min": 48.18,
    "temperature_max": 58.21,
    "feels_like_day": 56.93,
    "feels_like_night": 53.44,
    "pressure": 1009,
    "humidity": 72,
    "dew_point": 49.39,
    "uv_index": 1.65,
    "clouds": 99,
    "wind_speed": 11.81,
    "wind_deg": 211,
    "wind_direction": "SW",
    "wind_gust": 31.09,
    "description": "overcast clouds",
    "summary": "There will be partly cloudy today",
    "units": "imperial"
  },
  {
    "time": "2024-03-14T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-14T19:47:48-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 59.31,
    "temperature_night": 59.4,
    "temperature_min": 51.35,
    "temperature_max": 60.82,
    "feels_like_day": 59.13,
    "feels_like_night": 59.22,
    "pressure": 1007,
    "humidity": 89,
    "dew_point": 56.03,
    "uv_index": 1.11,
    "clouds": 100,
    "wind_speed": 14.09,
    "wind_deg": 242,
    "wind_direction": "SW",
    "wind_gust": 32.37,
    "description": "light rain",
    "summary": "The day will start with partly cloudy through the late morning hours, transitioning to rain",
    "units": "imperial"
  },
  {
    "time": "2024-03-15T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-15T19:48:56-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 43.75,
    "temperature_night": 36.37,
    "temperature_min": 36.37,
    "temperature_max": 48.25,
    "feels_like_day": 37.96,
    "feels_like_night": 30.78,
    "pressure": 1019,
    "humidity": 67,
    "dew_point": 33.67,
    "uv_index": 2,
    "clouds": 100,
    "wind_speed": 16.35,
    "wind_deg": 271,
    "wind_direction": "W",
    "wind_gust": 32.12,
    "description": "light rain",
    "summary": "Expect a day of partly cloudy with rain",
    "units": "imperial"
  },
  {
    "time": "2024-03-16T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-16T19:50:05-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 41.92,
    "temperature_night": 40.62,
    "temperature_min": 31.75,
    "temperature_max": 45.21,
    "feels_like_day": 38.3,
    "feels_like_night": 36.25,
    "pressure": 1017,
    "humidity": 61,
    "dew_point": 29.44,
    "uv_index": 2,
    "clouds": 79,
    "wind_speed": 6.4,
    "wind_deg": 178,
    "wind_direction": "S",
    "wind_gust": 11.1,
    "description": "broken clouds",
    "summary": "There will be partly cloudy today",
    "units": "imperial"
  },
  {
    "time": "2024-03-17T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-17T19:51:13-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 40.87,
    "temperature_night": 34.9,
    "temperature_min": 34.9,
    "temperature_max": 41.81,
    "feels_like_day": 33.15,
    "feels_like_night": 26.38,
    "pressure": 1005,
    "humidity": 82,
    "dew_point": 35.87,
    "uv_index": 2,
    "clouds": 100,
    "wind_speed": 15.82,
    "wind_deg": 285,
    "wind_direction": "W",
    "wind_gust": 24.16,
    "description": "light rain",
    "summary": "Expect a day of partly cloudy with rain",
    "units": "imperial"
  },
  {
    "time": "2024-03-18T13:00:00-04:00",
    "timezone": "America/Detroit",
    "sunrise": "2024-03-18T19:52:21-04:00",
    "latitude": 42.2624,
    "longitude": -85.6096,
    "location": "Kalamazoo, Michigan, US",
    "temperature_day": 34.61,
    "temperature_night": 28.96,
    "temperature_min": 28.96,
    "temperature_max": 34.93,
    "feels_like_day": 24.28,
    "feels_like_night": 22.17,
    "pressure": 1013,
    "humidity": 54,
    "dew_point": 19.72,
    "uv_index": 2,
    "clouds": 91,
    "wind_speed": 17.16,
    "wind_deg": 308,
    "wind_direction": "NW",
    "wind_gust": 22.24,
    "description": "light snow",
    "summary": "Expect a day of partly cloudy with snow",
    "units": "imperial"
  }
]
```

:::

::: info Response for a one-day forecast

```json
{
  "time": "2024-03-11T13:00:00-04:00",
  "timezone": "America/Detroit",
  "sunrise": "2024-03-11T19:44:21-04:00",
  "latitude": 42.2624,
  "longitude": -85.6096,
  "location": "Kalamazoo, Michigan, US",
  "temperature_day": 50.49,
  "temperature_night": 48.09,
  "temperature_min": 30.65,
  "temperature_max": 54.21,
  "feels_like_day": 47.07,
  "feels_like_night": 42.57,
  "pressure": 1019,
  "humidity": 39,
  "dew_point": 27.12,
  "uv_index": 3.8,
  "clouds": 0,
  "wind_speed": 17.49,
  "wind_deg": 219,
  "wind_direction": "SW",
  "wind_gust": 36.37,
  "description": "clear sky",
  "summary": "You can expect clear sky in the morning, with partly cloudy in the afternoon",
  "units": "imperial"
}
```

:::

</template>
</DividePage>
