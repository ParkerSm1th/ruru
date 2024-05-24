import { SignInButton } from "@clerk/nextjs";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      Hello this is a super secret project
      <SignInButton forceRedirectUrl="/dashboard" />
    </main>
  );
}
