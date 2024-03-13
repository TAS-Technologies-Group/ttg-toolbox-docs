---
title: Validate Address
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/validate/address
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Validate Address

The Validate Address endpoint validates a free-form address and returns an address object containing the address components, latitude and longitude coordinates, and a map URL.

::: tip NOTE
This endpoint supports **US** and **Canadian** addresses.
:::

## Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}/</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint uses the `POST` method and requires a JSON object as the request body.

#### Required parameters

The request body requires the following parameters.

<span style="font-family:courier; font-weight:bold">address</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

### Optional parameters

<span style="font-family:courier; font-weight:bold">mapProvider</span><Badge type="info" text="string" /><br/>

Use the optional `mapProvider` parameter to specify the map engine to use the for URL. Google Maps is the default map provider.

| Map Provider  | <span style="font-family:courier; font-weight:bold">mapProvider</span> value |
| ------------- | ---------------------------------------------------------------------------- |
| Google Maps   | `google`<Badge type="tip" text="default" />                                  |
| Bing Maps     | `bing`                                                                       |
| OpenStreetMap | `openstreetmap`                                                              |

---

</template>

<template #right>

::: info Example request body

```json
{
  "address": "2127 Garland Dr, Muskegon, MI 49441"
}
```

:::

::: info Example request body with optional parameter

```json
{
  "address": "2127 Garland Dr, Muskegon, MI 49441",
  "mapProvider": "openstreetmap"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing the validated address.

---

</template>
<template #right>

::: info Response

```json
{
  "valid": true,
  "address1": "2127 Garland Dr",
  "address2": "",
  "city": "Norton Shores",
  "region": "MI",
  "postalCode": "49441 4433",
  "country": "USA",
  "latitude": 43.186353986704,
  "longitude": -86.296750999194,
  "text": "2127 Garland Dr, Norton Shores, MI, 49441, USA",
  "mapUrl": "https://www.openstreetmap.org/?mlat=43.186353986704&mlon=-86.296750999194"
}
```

:::

</template>
</DividePage>
