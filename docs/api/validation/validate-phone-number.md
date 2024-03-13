---
title: Validate Phone Number
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/validate/phonenumber
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Validate Phone Number

The Validate Phone Number endpoint validates a phone number and returns the formatted phone number and, optionally, the Caller-ID name.

::: tip NOTE
This endpoint supports phone numbers that conform to the [North American Numbering Plan (NANP)](https://nationalnanpa.com/).
:::

::: warning
Caller Name (CNAME / Caller-ID name) information is only available for **US** phone numbers.
:::

## Endpoint <Badge type="tip" text="GET" />

<pre>{{ $frontmatter.api }}/<Badge type="tip" text="phone_number" /></pre>

---

<DividePage :top="63">
<template #left>

### Required path parameters

This endpoint uses the `GET` method and has the following required path parameters.

<span style="font-family:courier; font-weight:bold">phone_number</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The phone number to validate.

Formatting characters such as `+`, `-`, `#`, `,`, `:`, `.` and `spaces` are allowed and generally ignored by the validation algorithm.

### Optional query parameters

<span style="font-family:courier; font-weight:bold">queryName</span><Badge type="info" text="boolean" /><br/>

Use the optional `queryName=true` to perform a Caller-ID / CNAME lookup. The default value is `queryName=false`.

---

</template>

<template #right>

::: info Example request URL

```
https://api.ttgtoolbox.com/v1/validate/phonenumber/855-564-4284
```

:::

::: info Example request URL with optional query parameter

```
https://api.ttgtoolbox.com/v1/validate/phonenumber/1234567890?queryName=true
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing the validated phone number and credit usage.

---

</template>
<template #right>

::: info An example valid response

```json
{
  "callingCode": "1",
  "countryCode": "US",
  "phoneNumber": "+18555644284",
  "nationalFormat": "(855) 564-4284",
  "valid": true,
  "validationErrors": [],
  "credits": 0
}
```

:::

::: info An example invalid response

```json
{
  "callingCode": null,
  "countryCode": null,
  "phoneNumber": "+11800-588-2300empire",
  "nationalFormat": "8005882300367473",
  "valid": false,
  "validationErrors": ["TOO_LONG"],
  "credits": 0
}
```

:::

</template>
</DividePage>
