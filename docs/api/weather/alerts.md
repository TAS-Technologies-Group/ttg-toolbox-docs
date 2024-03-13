---
title: Weather Alerts
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/weather
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Weather Alerts

Retrieves weather alerts for a given country and zip/postal code.

## Endpoint <Badge type="tip" text="GET" />

<pre>{{ $frontmatter.api }}/<Badge type="tip" text="country_code" />/<Badge type="tip" text="postal_code" />/alerts</pre>

---

<DividePage :top="63">
<template #left>

### Required parameters

This endpoint uses the `GET` method and has the following required parameters.

<span style="font-family:courier; font-weight:bold">country_code</span><Badge type="danger" text="required" /><br/>

We support the following country codes.

| Country       | Code |
| ------------- | :--: |
| United States |  US  |
| Canada        |  CA  |

<span style="font-family:courier; font-weight:bold">postal_code</span><Badge type="danger" text="required" /><br/>

A valid zip / postal code is required.

---

</template>

<template #right>

::: info Example request URL

```
https://api.ttgtoolbox.com/v1/weather/US/49010/alerts
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON array containing the current weather alerts.

---

</template>
<template #right>

::: info Response

```json
[
  {
    "sender_name": "NWS Mount Holly NJ",
    "event": "Wind Advisory",
    "start": 1710176940,
    "end": 1710201600,
    "description": "* WHAT...Northwest winds 20 to 30 mph with gusts up to 55 mph.\n\n* WHERE...Delaware, northeast Maryland, New Jersey and eastern\nPennsylvania.\n\n* WHEN...Until 8 PM EDT this evening.\n\n* IMPACTS...Gusty winds could blow around unsecured objects.\nTree limbs could be blown down and a few power outages may\nresult.\n\n* ADDITIONAL DETAILS...The saturated ground may make it easier for\nsome trees to fall, especially weaker or shallow rooted trees..",
    "tags": ["Wind"]
  }
]
```

:::

</template>
</DividePage>
