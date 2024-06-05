import Image from 'next/image';
import React from 'react';

export default function Logo({
  inverted = false,
  sm = false,
}: {
  inverted?: boolean;
  sm: boolean;
}) {
  return (
    <Image
      style={{ filter: inverted ? 'inert(100)' : '' }}
      src="/assets/img/Logo/logo.png"
      alt="logo"
      width={445 * (sm ? 0.6 : 0.3)}
      height={85 * (sm ? 0.5 : 0.3)}
    />
  );
}
