'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Bell, Menu, Pizza, ShoppingBag, UserRound } from 'lucide-react';

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-white shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-black">
                        <Link href="/" className='flex flex-row gap-1'>
                            <Pizza />
                            <span>Milan Pizza</span>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-8">
                        <Link href="/" className="text-gray-800 hover:text-gray-600">
                            <Bell />
                        </Link>
                        <Link href="/" className="text-gray-800 hover:text-gray-600">
                            Orders
                        </Link>
                        <Link href="/contact" className="text-gray-800 hover:text-gray-600">
                            Contact
                        </Link>
                        <Link href="/services" className="text-gray-800 hover:text-gray-600">
                            <ShoppingBag />
                        </Link>
                        <Link href="/services" className="text-gray-800 hover:text-gray-600">
                            <UserRound />
                        </Link>
                    </div>

                    {/* Mobile Menu Button and Notification Icon */}
                    <div className="md:hidden flex items-center space-x-4">
                        <Link href="/" className="text-gray-800 hover:text-gray-600">
                            <Bell />
                        </Link>
                        <button
                            onClick={toggleMenu}
                            className="text-gray-800 hover:text-gray-600 focus:outline-none"
                        >
                            {/* Hamburger Icon */}
                            <Menu />
                        </button>

                    </div>
                </div>

                {/* Mobile Menu */}
                {isOpen && (
                    <div className="md:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <Link href="/" className="block text-gray-800 hover:text-gray-600">
                                Home
                            </Link>
                            <Link href="/" className="block text-gray-800 hover:text-gray-600">
                                Orders
                            </Link>
                            <Link href="/contact" className="block text-gray-800 hover:text-gray-600">
                                Contact
                            </Link>
                            <Link href="/services" className="block text-gray-800 hover:text-gray-600">
                                Cart
                            </Link>
                            <Link href="/services" className="block text-gray-800 hover:text-gray-600">
                                Profile
                            </Link>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
}
