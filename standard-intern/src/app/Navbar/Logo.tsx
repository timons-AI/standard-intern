'use client';

import Image from "next/image";
import { useRouter } from "next/router";

const Logo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push('/')}>
      <Image
        className="hidden md:block cursor-pointer"
        src="/images/logo.png"
        height={100}
        width={100}
        alt="Logo"
      />
    </div>
  );
};

export default Logo;
