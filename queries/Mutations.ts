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