---
title: Translation API
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/translations
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Translate Text

Translates text by automatically detecting the source language and translating it to the target language.

## Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint uses the `POST` method and requires a JSON object as the request body.

#### Required parameters

The request body requires the following parameters.

<span style="font-family:courier; font-weight:bold">to</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The language to translate `to`. See [supported languages](#supported-languages) below.

<span style="font-family:courier; font-weight:bold">text</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The text to translate.

#### Optional parameters

<span style="font-family:courier; font-weight:bold">from</span><Badge type="info" text="string" /><br/>

The language to translate `from`. Unless explicitly specified using the `from` parameter, the API will determine the source language automatically,

<span style="font-family:courier; font-weight:bold">promptSuffix</span><Badge type="info" text="string" /><Badge type="warning" text="advanced feature" /><br/>

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

A JSON object containing the translated text and estimated credit usage.

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

Bidirectional translation is supported for the following languages, which can be specified using either the `from` or `to` parameters.

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
