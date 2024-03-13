---
title: Calculate Distance
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/location/route/distance
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Calculate Distance

Calculates the travels or straight-line distance between two locations. Location can be specified by an address or latitude/longitude coordinates.

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
  "to": "42.3592,-71.04928"
}
```

:::

::: info Example #2 request body with optional parameters

```json
{
  "from": "Kitch-iti-Kipi, Michigan",
  "to": "Kalamazoo, MI",
  "units": "kilometers"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing the distance between the locations.

---

</template>
<template #right>

::: info Example #1 Response

```json
{
  "distance": 3.13
}
```

:::

</template>
</DividePage>
