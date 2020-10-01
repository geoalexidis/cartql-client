# @geoalexidis/cartql-client

Simple typed [cartql](https://cartql.com/) client created wit the help of https://genql.now.sh/

## Examples get and mutate

```javascript
import { createClient } from "@geoalexidis/cartql-client";

const client = createClient();
const cart__id = "123456789";

function getGenQL() {
  client
    .query({
      cart: [
        {
          id: cart__id
        },
        {
          items: {
            id: true,
            name: true,
            quantity: true
          }
        }
      ]
    })
    .then(x => console.log(x));
}

function mutateGenQl() {
  client
    .mutation({
      addItem: [
        {
          input: {
            cartId: cart__id,
            id: "012-345",
            name: "Not A Flamethrower",
            quantity: 1,
            price: 0
          }
        },
        {
          items: {
            id: true,
            name: true,
            quantity: true
          }
        }
      ]
    })
    .then(x => console.log(x));
}
```

## Response Examples

### Success

```json
{
  "data": {
    "cart": {
      "id": "123456789",
      "email": null,
      "isEmpty": false,
      "abandoned": false,
      "totalItems": 4,
      "totalUniqueItems": 1,
      "currency": {
        "code": "USD",
        "symbol": "$"
      },
      "subTotal": {
        "amount": 0,
        "formatted": "$0.00"
      },
      "shippingTotal": {
        "amount": 0,
        "formatted": "$0.00"
      },
      "taxTotal": {
        "amount": 0,
        "formatted": "$0.00"
      },
      "grandTotal": {
        "amount": 0,
        "formatted": "$0.00"
      },
      "attributes": [],
      "notes": null,
      "createdAt": "2020-10-01T14:13:28.466Z",
      "updatedAt": "2020-10-01T14:14:41.321Z",
      "items": [
        {
          "id": "012-345",
          "name": "Not A Flamethrower",
          "description": null,
          "images": [],
          "quantity": 4,
          "attributes": [],
          "unitTotal": {
            "amount": 0,
            "formatted": "$0.00"
          },
          "lineTotal": {
            "amount": 0,
            "formatted": "$0.00"
          },
          "createdAt": "2020-10-01T14:13:28.473Z",
          "updatedAt": "2020-10-01T14:14:41.321Z"
        }
      ]
    }
  }
}
```

### Error

```json
{
  "errors": [
    {
      "message": "Field \"cart\" argument \"id\" of type \"ID!\" is required, but it was not provided.",
      "locations": [
        {
          "line": 2,
          "column": 3
        }
      ],
      "extensions": {
        "code": "GRAPHQL_VALIDATION_FAILED"
      }
    }
  ]
}
```
