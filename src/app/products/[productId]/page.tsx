import {Metadata} from "next"

// option 1
// export const generateMetadata = ({params}:Props):Metadata =>{
//     return {
//         title: `Product ${params.productId}`
//     }
// }

//option 2
export const generateMetadata = async ({params}:Props):Promise<Metadata> =>{
    const title = await new Promise(resolve => {
        setTimeout(()=>{
            resolve(`iPhone ${params.productId}`)
        }, 100)
    })
    return {
        title: `Product ${title}`
    }
}

type Props = {
  params: {
    productId: string;
  };
};

export default function ProductDetails({
  params,
}: Props) {
  return <h1>Details about product {params.productId}</h1>;
}
