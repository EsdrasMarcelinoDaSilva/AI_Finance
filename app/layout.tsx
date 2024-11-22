import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

const mulish = Mulish({
  subsets: ["latin-ext"],
});

export const metadata: Metadata = {
  title: "Finances AI",
  description: "finance manager with ia",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${mulish.className} antialiased dark`}>
        <ClerkProvider
          appearance={{
            baseTheme: dark,
          }}
        >
          {/* <div className="flex h-full flex-col overflow-hidden">{children}</div> */}
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
