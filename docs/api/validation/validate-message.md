---
title: Validate Message
layout: doc
aside: false
api: https://api.ttgtoolbox.com/v1/validate/message
---

<script setup>
import DividePage from '../../../components/DividerPage.vue'   
</script>

# Validate Message

The Validate Message endpoint uses Artificial Intelligence (AI) to validate a message using the specified criteria.

## Endpoint <Badge type="tip" text="POST" />

<pre>{{ $frontmatter.api }}</pre>

---

<DividePage :top="63">
<template #left>

### Request body

This endpoint uses the `POST` method and requires a JSON object as the request body.

#### Required parameters

The request body requires the following parameters.

<span style="font-family:courier; font-weight:bold">message</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The message to validate. The message can be from any source, including non-standard formatting characters, such as paging pipes (`|`).

<span style="font-family:courier; font-weight:bold">criteria</span><Badge type="info" text="string" /><Badge type="danger" text="required" /><br/>

The validation criteria. The criteria provided dictate the specific aspects of the message that the AI validation API will assess for accuracy, relevance, or compliance.

#### Criteria suggestions & examples

1. **Check Fields:** Do the message fields contain specific or required information?

   **Example:** "The caller is Luke Skywalker and he's arrived at Alderaan."

1. **Grammar and Spelling:** Ensuring the message is grammatically correct and free of spelling errors.

   **Example:** "Please check if the message adheres to proper grammar and spelling."

1. **Content Relevance:** Verifying that the message content aligns with the intended purpose or topic.

   **Example:** "Verify if the message content is relevant to ..."

1. **Sensitive Information Detection:** Identifying sensitive information, such as personal identifiers like SSNs or credit card numbers.

   **Example:** "Check for the presence of sensitive information, such as Social Security Numbers or credit card details."

1. **Language Tone:** Assessing the tone of the message to ensure it matches the desired level of formality or politeness.

   **Example:** "Evaluate the language tone to confirm it aligns with ..."

#### Optional parameters

<span style="font-family:courier; font-weight:bold">model</span><Badge type="info" text="string" /><br/>

The default LLM for message validation is OpenAI's GPT-3.5 Turbo `gpt-3.5-turbo`, which performs effectively for basic messages. Nevertheless, you have the flexibility to explore other LLM options by specifying the `model` parameter.

| Model                                                           | <span style="font-family:courier; font-weight:bold">model</span> value |
| --------------------------------------------------------------- | ---------------------------------------------------------------------- |
| [OpenAI GPT-3.5 Turbo](https://platform.openai.com/docs/models) | `gpt-3.5-turbo` <Badge type="tip" text="default" />                    |
| [OpenAI GPT-4 Turbo](https://platform.openai.com/docs/models)   | `gpt-4-turbo`                                                          |
| [OpenAI GPT-4](https://platform.openai.com/docs/models)         | `gpt-4`                                                                |
| [Cohere Command](https://cohere.com/models/command)             | `cohere.command-text-v14`                                              |

_Additional models may be added in future releases. Costs vary depending the chosen LLM._

---

</template>

<template #right>

::: info Example request body

```json
{
  "criteria": "Caller's Name, Company, Account, Phone Number, Product, Outage",
  "message": "Message Ticket: \nCaller:| Jim Hall |\nCompany:| Acme |\nAccount:| 1029 |\nPhone:| 555-719-3559 |\nProduct: eFax\nOutage: Yes\nMsg:| Not getting notice of faxes anymore. . . Not getting failed or successful faxes. |"
}
```

:::

::: info Example request body with optional parameters

```json
{
  "model": "gpt-4",
  "criteria": "The caller is Luke Skywalker and he's arrived at Alderaan.",
  "message": "Message Ticket: Caller:| Luke Skywalker |Company:|| Account:| 11111 | Phone:| 800-555-1212 | \nMsg:|. he's caught in a tractor beam and being pulled into a space station.|"
}
```

:::

</template>
</DividePage>

<DividePage :top="63">
<template #left>

### Returns

A JSON object containing message validation results and estimated credit usage.

---

</template>
<template #right>

::: info Valid message response

```json
{
  "valid": true,
  "message": "All requirements for the message have been met.",
  "credits": 1
}
```

:::

::: info Invalid message response

```json
{
  "valid": false,
  "message": "The requirements were not met. The caller, Luke Skywalker, was supposed to have arrived at Alderaan. However, the message states that he's caught in a tractor beam and being pulled into a space station.",
  "credits": 1
}
```

:::

</template>
</DividePage>

## Notes

::: tip Be advised
The Message Validation API uses a [Large Language Model (LLM)](https://en.wikipedia.org/wiki/Large_language_model) to generate the validation results. Repeated calls to the API using the exact text will produce different responses. Also, note that other models behave differently depending on the specific criteria and message. It may take some experimenting to determine what works best for you and your particular use case.
:::
