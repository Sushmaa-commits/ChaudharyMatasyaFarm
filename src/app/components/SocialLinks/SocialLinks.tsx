import Image from 'next/image';
import React from 'react';

export default function SocialLinks() {
  return (
    <>
      <a
        href="https://www.facebook.com/profile.php?id=61559397647827"
        target="_blank"
        aria-label="social-link"
        className="text-gray-400 hover:text-indigo-700"
      >
        <Image
          src="/assets/img/icon/facebook.png"
          alt="facebook-icon"
          width="50"
          height="50"
        />
      </a>
      <a
        href="https://www.youtube.com/"
        target="_blank"
        aria-label="social-link"
        className="text-gray-400 hover:text-indigo-700"
      >
        <Image
          src="/assets/img/icon/youtube.png"
          alt="youtubes-icon"
          width="50"
          height="50"
        />
      </a>
      <a
        href="https://www.instagram.com/"
        target="_blank"
        aria-label="social-link"
        className="text-gray-400 hover:text-indigo-700"
      >
        <Image
          src="/assets/img/icon/instagram.webp"
          alt="instagram-icon"
          width="50"
          height="50"
        />
      </a>
    </>
  );
}
