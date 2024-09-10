'use client';

import { useState } from 'react';
import { Minus, Plus } from 'lucide-react';
import { Button } from '../ui/button';

export default function CartButton() {
    const [quantity, setQuantity] = useState(0);

    const handleAdd = () => {
        setQuantity(quantity + 1);
    };

    const handleRemove = () => {
        if (quantity > 0) {
            setQuantity(quantity - 1);
        }
    };

    return (
        <div className='flex items-center font-normal'>
            {quantity === 0 ? (
                <Button size='sm' onClick={handleAdd} variant={'outline'} className='font-normal hover:bg-primary'>
                    Add
                </Button>
            ) : (
                <div>
                    <button onClick={handleRemove} className='p-2'>
                        <Minus size={16} />
                    </button>
                    <span className='px-2'>{quantity}</span>
                    <button onClick={handleAdd} className='p-2'>
                        <Plus size={16} />
                    </button>
                </div>
            )}
        </div>
    );
}