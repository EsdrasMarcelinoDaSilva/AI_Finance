"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="flex justify-between border-b border-solid py-4 px-8">
      {/* esquerada */}
      <div className="flex items-center gap-10">
        <Image src="/logo.svg" alt="Logo" width={173} height={39} />
        <Link
          href="/"
          className={pathname === "/" ? "text-primary font-bold" : ""}
        >
          Dashboard
        </Link>
        <Link
          href="/transactions"
          className={
            pathname === "/transactions"
              ? "text-primary font-bold"
              : "text-muted-foreground"
          }
        >
          Transações
        </Link>
        <Link
          href="/subscription"
          className={
            pathname === "/subscription" ? "text-primary font-bold" : ""
          }
        >
          Assinatura
        </Link>
      </div>
      {/* direita */}
      <UserButton showName />
    </nav>
  );
}
