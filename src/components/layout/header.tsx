'use client';

import { useState, useEffect } from 'react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const navigationItems: {
  title: string;
  href: string;
  items?: {
    title: string;
    href: string;
    description: string;
  }[];
}[] = [
  {
    title: 'Home',
    href: '/',
  },
  {
    title: 'About Us',
    href: '#about',
  },
  {
    title: 'Floor Plans',
    href: '#floor-plans',
  },
  {
    title: 'Key Highlights',
    href: '#key-highlights',
  },
  {
    title: 'Location',
    href: '#location',
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-border/40 transition-all duration-300 ${
        isScrolled
          ? 'bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80'
          : 'bg-transparent border-transparent'
      }`}
    >
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-bold text-xl text-white">
          <Image
            src="/Logo.svg"
            alt="IRIS BROADWAY"
            width={160}
            height={160}
            className={`transition-opacity duration-300 ${
              isScrolled ? 'opacity-100' : 'opacity-90'
            }`}
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex md:items-center md:space-x-4">
          <NavigationMenu className="text-white">
            <NavigationMenuList>
              {navigationItems.map(item => (
                <NavigationMenuItem key={item.title}>
                  {item.items ? (
                    <>
                      <NavigationMenuTrigger
                        className={`text-white transition-colors ${
                          isScrolled ? 'hover:bg-white/10' : 'hover:bg-black/20'
                        }`}
                      >
                        {item.title}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2">
                          {item.items.map(subItem => (
                            <li key={subItem.title}>
                              <NavigationMenuLink asChild>
                                <a
                                  href={subItem.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                                >
                                  <div className="text-sm font-medium leading-none text-foreground">
                                    {subItem.title}
                                  </div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subItem.description}
                                  </p>
                                </a>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild>
                      <a
                        href={item.href}
                        className={`group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 text-white ${
                          isScrolled ? 'hover:bg-white/10' : 'hover:bg-black/20'
                        }`}
                      >
                        {item.title}
                      </a>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Navigation */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              className={`text-white transition-colors ${
                isScrolled ? 'hover:bg-white/10' : 'hover:bg-black/20'
              }`}
            >
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent
            side="right"
            className="w-[300px] sm:w-[400px] bg-black/95 border-border/40"
          >
            {/* Rest of the mobile menu content remains unchanged */}
            <SheetTitle className="text-white">
              <Image
                src="/Logo.svg"
                alt="IRIS BROADWAY"
                width={150}
                height={150}
                className="mb-8"
              />
            </SheetTitle>
            <nav className="flex flex-col space-y-6 mt-8">
              {navigationItems.map(item => (
                <div key={item.title}>
                  {item.items ? (
                    <div className="space-y-4">
                      <h4 className="font-medium text-white text-lg">
                        {item.title}
                      </h4>
                      <div className="pl-4 space-y-4">
                        {item.items.map(subItem => (
                          <a
                            key={subItem.title}
                            href={subItem.href}
                            className="block text-base text-white/70 hover:text-white transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {subItem.title}
                          </a>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      className="block text-lg text-white hover:text-white/80 transition-colors"
                      onClick={() => setIsOpen(false)}
                    >
                      {item.title}
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
