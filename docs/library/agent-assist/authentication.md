---
title: Authentication
layout: doc
aside: true
---

# Authentication

To access our API and utilize its features, you need to authenticate your requests using an API key. Authentication is essential for maintaining the security and integrity of our services. Here's how it works:

1. **Obtaining an API Key:**

If you haven't already, you'll need to generate an API key. You can view and manage your API keys in the [TTG Toolbox](https://wwwtoolbox.com) site.

2. **Including the API Key in your requests:**

include it in the header of your HTTP requests under the key name `X-API-Key`.

```
X-API-Key: [Your API Key]
```

3. **Ensuring Security:**

Your API keys carry privileges that can incur real costs, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas or websites such as GitHub, client-side code, and documentation.

All API requests must be made over HTTPS. Calls made over plain HTTP will fail. API requests without authentication will also fail.

::: danger
If you suspect your API key has been compromised, regenerate it immediately to maintain the security of your account.
:::

If you have any questions or encounter any issues with authentication, feel free to reach out to our support team for assistance.
