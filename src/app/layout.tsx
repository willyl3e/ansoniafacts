import type { Metadata } from "next";
import "./globals.css";
import Navigation from "./components/navigation";

export const metadata: Metadata = {
  title: "Ansonia Facts",
  description:
    "Buried in Debt. Starved of Truth. Uncovering the Hidden Costs of 12 Years Under Cassetti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navigation></Navigation>
        {children}
        <div className="text-center">
          <footer className="mt-24 mb-10 border-[1px] border-white p-1 tracking-tighter text-sm inline-block">
            PAID FOR BY ANSONIA DTC, JAMES MALLOY, TREASURER
          </footer>
        </div>
      </body>
    </html>
  );
}
