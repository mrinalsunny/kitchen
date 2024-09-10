import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react';
import Image from 'next/image';
import CartButton from './cartButton';
type Product = {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
};

interface ProductTabProps {
    products: Product[];
}

async function getProducts(): Promise<Product[]> {
    const response = await fetch('http://localhost:8080/api/v1/products', {
        method: "GET"
    });
    const products = await response.json();
    console.log(products);
    return products;
}

export default async function ProductTab() {
    const products = await getProducts();

    // Group products by category
    const categories = products.reduce((acc: Record<string, Product[]>, product: Product) => {
        const { category } = product;
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(product);
        return acc;
    }, {} as Record<string, Product[]>);

    return (
        <div className="flex h-screen w-full justify-center pt-3 px-4">
            <div className="w-full max-w-full lg:max-w-7xl">
                <TabGroup>
                    <TabList className="flex items-center justify-center gap-4">
                        {Object.keys(categories).map((category) => (
                            <Tab
                                key={category}
                                className="rounded-full py-1 px-3 text-sm/6 font-normal text-black focus:outline-none data-[selected]:bg-black/10 data-[hover]:bg-black/5 data-[selected]:data-[hover]:bg-black/10 data-[focus]:outline-1 data-[focus]:outline-white"
                            >
                                {category}
                            </Tab>
                        ))}
                    </TabList>
                    <TabPanels className="mt-3">
                        {Object.entries(categories).map(([category, products]) => (
                            <TabPanel key={category} className="rounded-xl bg-black/5 p-3 max-w-full">
                                <ul className='grid grid-cols-2 lg:grid-cols-4 text-black'>
                                    {products.map((product) => (
                                        <li key={product.id} className="relative rounded-md p-3 text-sm/6 transition hover:bg-black/5">
                                            <a href="#" className="font-extrabold text-black flex items-center justify-center pb-3">
                                                {/* <span className="absolute inset-0" /> */}
                                                {product.name}
                                            </a>
                                            {/* <ul className="flex flex-col items-center justify-center gap-2 text-black/50" aria-hidden="true"> */}
                                            {/* <li>{product.description}</li> */}
                                            {/* <li aria-hidden="true">&middot;</li> */}
                                            <Image src={product.imageUrl} alt={product.name} width={400} height={400} className='pb-3'/>
                                            {/* <li> */}
                                            <div className='flex items-center justify-between'>
                                                <div className='font-normal'>${product.price.toFixed(2)}</div>
                                                <CartButton />
                                            </div>
                                            {/* </li> */}
                                            {/* <li aria-hidden="true">&middot;</li> */}
                                            {/* <li>Category: {product.category}</li> */}
                                            {/* </ul> */}
                                        </li>
                                    ))}
                                </ul>
                            </TabPanel>
                        ))}
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    );
}