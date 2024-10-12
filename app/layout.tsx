import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const roboto = Roboto({ weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "CRM",
  description: "This is Custom CRM for Freelancer",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          {/* <SignedOut>
            <SignInButton />
          </SignedOut> */}
          <SignedIn>
            <UserButton />
          </SignedIn>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
