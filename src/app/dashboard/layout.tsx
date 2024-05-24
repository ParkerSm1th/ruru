import { TopNav } from "./_components/top-nav";

import "~/styles/globals.css";

export const metadata = {
  title: "Bloomspark - Dashboard",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
      <TopNav />
      {children}
    </div>
  );
}
