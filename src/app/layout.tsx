import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";

import "~/styles/globals.css";

export const metadata = {
  title: "Bloomspark",
  description:
    "Bloomspark is a platform that allows homeowners to sell a portion of their home equity to investors.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
