"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";

export function TopNav() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center px-4">
        <nav className={"flex items-center space-x-4 lg:space-x-6"}>
          <Link
            href="/dashboard"
            className="text-muted-foreground hover:text-primary text-sm font-medium transition-colors"
          >
            Home
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </div>
  );
}
