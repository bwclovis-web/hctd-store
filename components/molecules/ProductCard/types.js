export type ProductType = {
    type?: 'cat',
    display?: number,
    product: {
        node: {
            id: string, 
            handle?: string,
             priceRange:{
                    maxVariantPrice:{
                        amount: string
                    }
                    minVariantPrice:{
                        amount: string
                    }
                }
            title: string,
            featuredImage: {
                url: string
            },
            image: {
                src: string
            }
        }
    }
}