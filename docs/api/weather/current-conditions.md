---
title: Current Conditions
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/weather
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Current Conditions

Retrieves the current weather conditions for a given country and zip/postal code.

## Endpoint <Badge type="tip" text="GET" />

<pre>{{ $frontmatter.api }}/<Badge type="tip" text="country_code" />/<Badge type="tip" text="postal_code" />/current</pre>

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

<span style="font-family:courier; font-weight:bold">postal_code</span><Badge type="danger" text="required" /><br/>

A valid zip / postal code is required.

### Optional query parameters

<span style="font-family:courier; font-weight:bold">units</span>

Use the `units` parameter to specify the units for all fields with standard units, e.g., miles or kilometers. The following units are supported:

| <span style="font-family:courier; font-weight:bold">units</span> | Examples                       |
| ---------------------------------------------------------------- | ------------------------------ |
| imperial                                                         | miles, fahrenheit, in. mercury |
| metric                                                           | kilometers, celsius, pascals   |

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

A JSON object containing the current weather conditions.

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
