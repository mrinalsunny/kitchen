'use client';

import { Switch } from '@headlessui/react';
import { useState } from 'react';

export default function VegSwitch() {
    const [enabled, setEnabled] = useState(false);

    return (
        <div className='container mx-auto px-4 flex items-center gap-2'>
            <Switch
                checked={enabled}
                onChange={setEnabled}
                className="group relative flex h-7 w-14 cursor-pointer rounded-full bg-black/10 p-1 transition-colors duration-200 ease-in-out focus:outline-none data-[focus]:outline-1 data-[focus]:outline-white data-[checked]:bg-black/10"
            >
                <span
                    aria-hidden="true"
                    className={`pointer-events-none inline-block size-5 translate-x-0 rounded-full ring-0 shadow-lg transition duration-200 ease-in-out ${
                        enabled ? 'translate-x-7 bg-green-800' : 'bg-red-800'
                    }`}
                />
            </Switch>
            <h4 className='text-black'>{enabled ? 'Veg' : 'Non-Veg'}</h4>
        </div>
    );
}