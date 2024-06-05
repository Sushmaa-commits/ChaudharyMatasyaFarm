import React from 'react';
import Link from 'next/link';

interface NavLinkProps {
  href: string;
  title: string | React.ReactElement;
}

export default function NavLink({ href, title }: NavLinkProps) {
  return (
    <Link
      className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
      href={href}
    >
      <span className="relative z-10"> {title}</span>
    </Link>
  );
}
