export default function ProductDetails({params} : {
    params: {productId: string}
}){clg
    return <h1>Details about product {params.productId}</h1>
}
