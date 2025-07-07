"use client";

import { Button } from "../ui/button";
import Image from "next/image";
import Logo from "../../../../public/images/logo.png";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Ticket } from 'lucide-react';
import { cn } from '../../lib/utils';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Array of navigation links
  const navLinks = [
    { href: '#apropos', label: 'À Propos' },
    { href: '#programme', label: 'Programme' },
    { href: '#partenaires', label: 'Partenaires' },
    { href: '#inscriptions', label: 'Inscriptions et Billetterie' },
    { href: '#faqs', label: 'FAQs' },
    { href: '#contact', label: 'Contact' },
  ];

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setHasScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed w-full md:w-[90%] md:left-1/2 md:-translate-x-1/2 z-50 transition-all duration-300',
        'bg-[#0D3DA3]/80 backdrop-blur-xl border-b border-[#2bf7d5]/30 shadow-lg md:rounded-lg md:my-10 p-2',
        mounted ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4',
        hasScrolled ? 'shadow-2xl' : ''
      )}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link
              href="/"
              className={cn(
                'text-white font-semibold text-xl',
                'transition-all duration-300 hover:text-blue-300 group'
              )}
            >
              <span className="inline-block rounded-full transition-all duration-300 group-hover:shadow-[0_0_24px_4px_#2bf7d5]">
                <Image src={Logo} alt="EthAfrique" width={60} height={60} quality={100} />
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'text-white font-light transition-all duration-300 relative',
                  'hover:font-bold hover:text-[#2bf7d5]',
                  'after:absolute after:bottom-0 after:left-0',
                  'after:h-0.5 after:w-0 after:bg-[#2bf7d5]',
                  'after:transition-all after:duration-300',
                  'hover:after:w-full',
                  'after:rounded'
                )}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop Reserve Button */}
          <div className="hidden md:block">
          <a href="https://lu.ma/jduoajcx?tk=OaWrmK" target="_blank">
              <Button
                className={cn(
                  'bg-gradient-to-br from-[#2BF7D5] to-[#0D3DA3] text-black px-6 py-2 rounded-lg cursor-pointer font-bold flex items-center gap-2 shadow-lg',
                  'hover:from-[#0D3DA3] hover:to-[#2BF7D5] hover:text-white hover:scale-105 transition-all duration-300'
                )}
              >
                <Ticket className="w-5 h-5 mr-1" />
                Réserver mon billet
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={cn('text-white hover:text-[#2bf7d5] transition-colors duration-300 p-2 rounded-full bg-[#0D3DA3]/70 shadow')}
              aria-label="Ouvrir le menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          'md:hidden bg-[#0D3DA3]/80 backdrop-blur-xl border-t border-[#2bf7d5]/30',
          'transition-all duration-300 ease-in-out',
          isOpen
            ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none h-2'
        )}
      >
        <div className="px-2 pt-4 pb-6 space-y-2 sm:px-3 flex flex-col items-center">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'text-white hover:text-[#2bf7d5] text-lg font-semibold block px-6 py-3',
                'transition-all duration-300 rounded-xl hover:bg-[#2bf7d5]/10 w-full text-center'
              )}
              onClick={() => setIsOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-4 w-full flex justify-center">
            <Button
              className={cn(
                'w-full bg-gradient-to-br from-[#2BF7D5] to-[#0D3DA3] text-black font-bold px-6 py-3 rounded-lg shadow-lg flex items-center justify-center gap-2',
                'hover:from-[#0D3DA3] hover:to-[#2BF7D5] hover:text-white hover:scale-105 transition-all duration-300'
              )}
              onClick={() => setIsOpen(false)}
            >
              <Ticket className="w-5 h-5 mr-1" />
              Réserver mon billet
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;