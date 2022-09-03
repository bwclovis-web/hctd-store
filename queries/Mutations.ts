export const createCartInstanceMutation = `
    mutation {
        cartCreate {
            cart {
                id
                checkoutUrl
                lines(first: 250) {
                    edges {
                      node {
                        id
                      }
                    }
                }
                estimatedCost {
                    subtotalAmount {
                        amount
                        currencyCode
                    }
                }
            }
        }
    }
`

export const testMutation = `
mutation customerCreate($input: CustomerInput) {
    customerCreate(input: $input) {
      customer {
        # Customer fields
      }
      userErrors {
        field
        message
      }
    }
  }
`
