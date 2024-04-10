---
title: Closest Location
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/location/route/closest
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Closest Location

Finds the closest distance between multiple locations. Locations can be specified by an address or latitude/longitude coordinates.

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

An array of ending address or coordinates.

#### Optional parameters

<span style="font-family:courier; font-weight:bold">method</span>

The `method` parameters allows you to specify the method for the distance calculation.

| <span style="font-family:courier; font-weight:bold">method</span> value | Examples                          |
| ----------------------------------------------------------------------- | --------------------------------- |
| route <Badge type="tip" text="default" />                               | driving distance                  |
| map                                                                     | straight-line "as the crow flies" |

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
  "to": ["Annapolis, MD", "Wichita, KS", "Roswell, NM", "Ottawa, Ontario"]
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing the closest distance and an array of distances between each from and to location.

---

</template>
<template #right>

::: info Example #1 Response

```json
{
  "closest": {
    "distance": 420.18,
    "address": "Annapolis, MD"
  },
  "distances": [
    {
      "distance": 420.18,
      "address": "Annapolis, MD"
    },
    {
      "distance": 438.48,
      "address": "Ottawa, Ontario"
    },
    {
      "distance": 1623.6,
      "address": "Wichita, KS"
    },
    {
      "distance": 2159.7,
      "address": "Roswell, NM"
    }
  ]
}
```

:::

</template>
</DividePage>
