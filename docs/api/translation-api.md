---
title: Translation API
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/translations
---

<script setup>
import DividePage from '../../components/DividerPage.vue'   
</script>

# Translation API <Badge type="tip" text="✓ BAA" />

Break language barriers effortlessly with our Translation API. Seamlessly translate text between multiple languages, enabling communication and enhancing user experiences across diverse audiences.

#### Base URL

<pre>{{ $frontmatter.api }}</pre>

#### Authentication

Authentication is required for all API endpoints using **API Tokens** sent in the request header. See the [Getting Started](/api/getting-started) to learn how to set up your keys and authenticate to the API.

## Translate Text

Translates text by automatically detecting the source language and translating it to the target language.

---

### Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint use the `POST` method and requires a JSON object in the request body.

#### Required parameters

The following parameters are required as the request body.

<Badge type="tip" text="to" /><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The language to translate `to`. See supported languages below.

<Badge type="tip" text="text" /><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The text to translate.

#### Optional parameters

<br />
<Badge type="tip" text="from" /><Badge type="info" text="string" /><br/>

The language to translate `from`. Unless explicitly specified using the `from` parameter, the API will determine the source language automatically,

<Badge type="tip" text="promptSuffix" /><Badge type="info" text="string" /><Badge type="warning" text="advanced feature" /><br/>

A prompt suffix can be included to add additional context and instructions for the translation.

---

</template>

<template #right>

::: info Example request body

```json
{
  "to": "Spanish",
  "text": "Life is like a box of chocolates; you never know what you're gonna get."
}
```

:::

::: info Example request body with optional parameters

```json
{
  "from": "English",
  "to": "French",
  "text": "Sometimes, I guess there just aren't enough rocks.",
  "promptSuffix": "Include the original text before the translated, formatted as: {original_test} --- {translation}"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

The a JSON body containing the translated text and estimated credit usage.

---

</template>
<template #right>

::: info Response

```json
{
  "translation": "Sometimes, I guess there just aren't enough rocks. --- Parfois, je suppose qu'il n'y a tout simplement pas assez de pierres.",
  "credits": 1
}
```

:::

</template>
</DividePage>

## Notes

::: tip Be advised
The Translation API uses a [Large Language Model (LLM)](https://en.wikipedia.org/wiki/Large_language_model) to generate the translated text. Repeated calls to the API using the same text may produce slightly different responses.
:::

## Supported languages

The following languages are supported for bi-directional translation and can be specified using either the `from` or `to` parameters.

| Language         |
| ---------------- |
| English          |
| Mandarin Chinese |
| Spanish          |
| Hindi            |
| French           |
| Standard Arabic  |
| Bengali          |
| Russian          |
| Portuguese       |
| German           |
| Japanese         |
| Javanese         |
| Punjabi          |
| Wu Chinese       |
| Telugu           |
| Korean           |
| Italian          |
| Tamil            |
| Turkish          |
| Marathi          |
