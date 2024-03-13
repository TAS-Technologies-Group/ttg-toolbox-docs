---
title: Summarize Message
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/summarize/message
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Summarize Message

Summarizes message text using a Large Language Model (LLM) and Artificial Intelligence (AI).

## Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint uses the `POST` method and requires a JSON object as the request body.

#### Required parameters

The request body requires the following parameters.

<span style="font-family:courier; font-weight:bold">text</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The message text to summarize. The message can be from any source, including non-standard formatting characters, such as paging pipes (`|`).

#### Optional parameters

<span style="font-family:courier; font-weight:bold">model</span><Badge type="info" text="string" /><br/>

The default LLM for generating summaries is OpenAI's GPT-3.5 Turbo `gpt-3.5-turbo`, which performs effectively for basic messages. Nevertheless, you have the flexibility to explore other LLM options by specifying the `model` parameter.

| Model                                                           | <span style="font-family:courier; font-weight:bold">model</span> value |
| --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [OpenAI GPT-3.5 Turbo](https://platform.openai.com/docs/models) | `gpt-3.5-turbo` <Badge type="tip" text="default" />                    |
| [OpenAI GPT-4 Turbo](https://platform.openai.com/docs/models)   | `gpt-4-turbo`                                                          |
| [OpenAI GPT-4](https://platform.openai.com/docs/models)         | `gpt-4`                                                                |
| [Cohere Command](https://cohere.com/models/command)             | `cohere.command-text-v14`                                              |
| [AI21 Jurassic-2 Ultra](https://www.ai21.com/studio)            | `ai21.j2-ultra-v1`                                                     |

_Additional models may be added in future releases. Costs vary depending the chosen LLM._

<span style="font-family:courier; font-weight:bold">prompt</span><Badge type="info" text="string" /><Badge type="warning" text="advanced feature" /><br/>

The default prompt is a variation of "In 3-4 sentences summarize the following message ticket." You can override this prompt using the `prompt` parameter. See the request example to the right.

---

</template>

<template #right>

::: info Example request body

```json
{
  "text": "Name: John Smith Issue: I'm experiencing an issue with my recent order. The tracking information seems to be incorrect, and I haven't received my package yet. Order Number: ABC456 Additional Information: I placed the order last week and was expecting it to arrive by now. Can you please help me resolve this?"
}
```

:::

::: info Example request body with optional parameters

```json
{
  "text": "Name: John Smith Issue: I'm experiencing an issue with my recent order. The tracking information seems to be incorrect, and I haven't received my package yet. Order Number: ABC456 SSN: 123-45-6789 Additional Information: I placed the order last week and was expecting it to arrive by now. Can you please help me resolve this?",
  "prompt": "Summarize the provided message, but do NOT include the SSN or and any PII if provided.",
  "model": "gpt-4-turbo"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing summarized message and estimated credit usage.

---

</template>
<template #right>

::: info Response

```json
{
  "summary": "John Smith is encountering an issue with his recent order (Order Number: ABC456). The tracking information is inaccurate, and he has not received his package despite placing the order last week with the expectation of a timely delivery. John is seeking assistance in resolving this matter promptly.",
  "credits": 1
}
```

:::

</template>
</DividePage>

## Notes

::: tip Be advised
The Summary API uses a [Large Language Model (LLM)](https://en.wikipedia.org/wiki/Large_language_model) to generate message summaries. Repeated calls to the API using the same text will produce different responses.
:::
