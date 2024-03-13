---
title: Calculate Directions
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/location/route/directions
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Calculate Directions

Calculates the directions between two locations. Locations can be specified by an address or latitude/longitude coordinates.

## Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint uses the `POST` method and requires a JSON object as the request body.

#### Required parameters

The request body requires the following parameters.

<span style="font-family:courier; font-weight:bold">from</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The starting address or coordinates.

<span style="font-family:courier; font-weight:bold">to</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The ending address or coordinates.

#### Optional parameters

<span style="font-family:courier; font-weight:bold">mapProvider</span><Badge type="info" text="string" /><br/>

Use the optional `mapProvider` parameter to specify the map engine to use the for URL. Google Maps is the default map provider.

| Map Provider  | <span style="font-family:courier; font-weight:bold">mapProvider</span> value |
| ------------- | ---------------------------------------------------------------------------- |
| Google Maps   | `google`<Badge type="tip" text="default" />                                  |
| Bing Maps     | `bing`                                                                       |
| OpenStreetMap | `openstreetmap`                                                              |

<span style="font-family:courier; font-weight:bold">units</span>

Use the `units` parameter to specify the units for all fields with standard units, e.g., miles or kilometers.

| <span style="font-family:courier; font-weight:bold">units</span> value |
| ---------------------------------------------------------------------- |
| miles <Badge type="tip" text="default" />                              |
| kilometers                                                             |

---

</template>

<template #right>

::: info Example #1 request body

```json
{
  "from": "77 Massachusetts Ave, Cambridge, MA 02139",
  "to": "42.3592,-71.04928"
}
```

:::

::: info Example #2 request body

```json
{
  "from": "299 Concession St Suite 301, Kingston, ON K7K 2B9, Canada",
  "to": "130 King St W Suite 300, Toronto, Canada",
  "mapProvider": "bing",
  "units": "kilometers"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing the distance between the locations, travel time, a map link to the route, and a map link to the final destination.

---

</template>
<template #right>

::: info Example #1 Response

```json
{
  "distance": 3.13,
  "durationSeconds": 878,
  "durationFormatted": "14 minutes",
  "routeUrl": "https://www.google.com/maps/dir/?api=1&origin=77%20Massachusetts%20Ave%2C%20Cambridge%2C%20MA%2002139&destination=42.3592%2C-71.04928",
  "destinationUrl": "https://www.google.com/maps?q=42.3592,-71.04928"
}
```

:::

::: info Example #2 Response

```json
{
  "distance": 263.2,
  "durationSeconds": 10328,
  "durationFormatted": "2 hours, 52 minutes",
  "routeUrl": "https://www.bing.com/maps?rtp=~adr.299%20Concession%20St%20Suite%20301%2C%20Kingston%2C%20ON%20K7K%202B9%2C%20Canada~adr.130%20King%20St%20W%20Suite%20300%2C%20Toronto%2C%20Canada",
  "destinationUrl": "https://www.bing.com/maps?cp=43.648168898024~-79.383493717473"
}
```

:::

</template>
</DividePage>
````
