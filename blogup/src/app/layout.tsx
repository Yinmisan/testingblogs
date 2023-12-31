import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="navbar bg-base-100">
        {" "}
        <div className="sm:">
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-neutral badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-primary badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-secondary badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-accent badge-lg"></div>
          </button>
        </div>
      </div>
      <div className="navbar bg-base-100">
        <div className="">
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-neutral badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-primary badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-secondary badge-lg"></div>
          </button>
          <button className="btn btn-ghost">
            {" "}
            <div className="badge badge-accent badge-lg"></div>
          </button>

          <Link href="/" className="btn btn-neutral text-xl">
            {" "}
          </Link>
          <Link href="/" className="btn btn-primary text-xl">
            {" "}
          </Link>
          <Link href="/" className="btn btn-secondary text-xl">
            {" "}
          </Link>
          <Link href="/" className="btn btn-accent text-xl"></Link>
          <Link href="/" className="btn btn-ghost text-xl">
            Blog-up
          </Link>
        </div>
      </div>
    </header>
  );

  const footer = (
    <>
      <footer className="footer footer-center p-4 bg-base-100 text-base-content">
        <aside>
          <p>
            The Ultimate{" "}
            <Link
              className="text-accent"
              href="https://github.com/Yinmisan/TheUltimateYinmi"
            >
              Yinmi
            </Link>{" "}
            Multi Function Web App
          </p>
        </aside>
      </footer>
    </>
  );

  return (
    <html lang="en" data-theme="night">
      <body
        className={`${inter.className} grid grid-rows-[auto_1fr_auto] h-screen`}
      >
        {header}

        {children}

        {footer}
      </body>
    </html>
  );
}
