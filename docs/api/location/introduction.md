---
title: Location API
layout: doc
aside: true
api: https://api.ttgtoolbox.com/v1/location
---

# Location API

The Location API provides a suite of location-based services, including distance calculation between two points, route generation with map URLs, geocoding, and reverse geocoding functionalities.

## Base URL

The Location API is currently on version 1.

```js-vue
{{ $frontmatter.api }}
```

## Authentication

Authentication is required for all API endpoints using **API Tokens** sent in the request header. See the [Getting Started](/library/agent-assist/getting-started) page to learn how to set up your keys and authenticate to the API.

## Response codes & errors

We use conventional HTTP response codes to indicate the success or failure of an API request. In general: Codes in the `2xx` range indicate success. Codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, etc.). Codes in the `5xx` range indicate an error with our servers.

| Code | Type                  | Details                                                                                 |
| ---- | --------------------- | --------------------------------------------------------------------------------------- |
| 200  | OK                    | The request succeeded.                                                                  |
| 400  | Bad request           | Bad request. Additional errors will be provided in the message.                         |
| 401  | Unauthorized          | The request was failed, usually due missing or invalid API key.                         |
| 422  | Quota reached         | The request was denied due to insufficient API credits. Free plans only.                |
| 429  | Too many requests     | The request was denied due to the number of allowed requests per minute being exceeded. |
| 500  | Internal server error | The request could not be completed due to an error on the server side.                  |
| 503  | Service unavailable   | The server was unavailable.                                                             |

## Tutorials & examples

Tutorials and guides, including downloadable example scripts, are available on the [TTG Toolbox website](https://ttgtoolbox.com).

## A note on credits

All of our APIs use credits for billing and tracking purposes.
