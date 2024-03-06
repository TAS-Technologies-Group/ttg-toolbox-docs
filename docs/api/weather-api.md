---
title: Weather API
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/weather
---

<script setup>
import DividePage from '../../components/DividerPage.vue'   
</script>

# Weather API

Get up-to-the-minute weather and accurate forecasts with the Weather API. Access current conditions and future predictions easily, empowering your applications with real-time weather data for informed decision-making.

#### Base URL

<pre>{{ $frontmatter.api }}</pre>

#### Authentication

Authentication is required for all API endpoints using **API Tokens** sent in the request header. See the [Getting Started](/api/getting-started) to learn how to set up your keys and authenticate to the API.

## Current Conditions

Retrieves the current weather conditions for a given country and zip/postal code.

---

### Endpoint <Badge type="tip" text="GET" />

<pre>{{ $frontmatter.api }}/<Badge type="tip" text="country_code" />/<Badge type="tip" text="postal_code" />/current</pre>

---

<DividePage :top="63">
<template #left>

### Required parameters

The following parameters are required.

<Badge type="tip" text="country_code" /><Badge type="danger" text="required" /><br/>
A valid country code is required. The following country codes are supported:

| Country       | Code |
| ------------- | :--: |
| United States |  US  |
| Canada        |  CA  |

<Badge type="tip" text="postal_code" /><Badge type="danger" text="required" /><br/>

A valid zip / postal code is required.

### Optional parameters

There is one optional parameter.

<Badge type="tip" text="units" /><br/><br/>

Use the `units` parameter to specify the units for all fields with a standard units, e.g. miles or kilometers. The following units are supported:

| Units    | Examples                       |
| -------- | ------------------------------ |
| imperial | miles, fahrenheit, in. mercury |
| metric   | kilometers, celsius, pascals   |

---

</template>

<template #right>

::: info Example request URL

```
https://api.ttgtoolbox.com/v1/weather/US/49010/current
```

:::

::: info Example request URL with optional parameter

```
https://api.ttgtoolbox.com/v1/weather/US/49010/current
?units=metric
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

The a JSON body containing the current weather conditions.

---

</template>
<template #right>

::: info Response

```json
{
  "time": "2024-03-06T11:22:13-05:00",
  "timezone": "America/Detroit",
  "latitude": 42.5256,
  "longitude": -85.8661,
  "location": "Allegan, Michigan, US",
  "temperature": 44.85,
  "feels_like": 40.98,
  "humidity": 78,
  "dew_point": 38.43,
  "uv_index": 2.55,
  "clouds": 89,
  "visibility": 10000,
  "wind_speed": 7,
  "wind_deg": 36,
  "wind_direction": "NE",
  "wind_gust": 14,
  "description": "overcast clouds",
  "units": "imperial"
}
```

:::

</template>
</DividePage>
