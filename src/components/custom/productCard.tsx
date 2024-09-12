import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

import Image from "next/image";
import { Product } from "@/types/productType";
import CartButton from "./cartButton";

interface ProductCartProps {
    product: Product;
}

export default function ProductCart({ product }: ProductCartProps) {
    return (
        <Card>
            <CardHeader className="text-center pt-2 pb-1">
                <CardTitle>{product.name}</CardTitle>
                {/* <CardDescription>
                </CardDescription> */}
            </CardHeader>
            <CardContent className="px-2 pb-0">
                <Image src={product.imageUrl} alt={product.name} width={400} height={400} className='pb-2' />
            </CardContent>
            <CardFooter className='flex flex-nowrapitems-center justify-between p-2 pt-0'>
                    <div className='font-normal'>&#8377; {product.price.toFixed(2)}</div>
                    <CartButton />
            </CardFooter>
        </Card>
    );
}