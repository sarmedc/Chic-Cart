import Link from "next/link";

export const metadata = {
  title: "Chic Cart",
  description: "Find your next wardrobe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>
          <nav>
            <Link href="/">Home</Link>
            <Link href="/shop">Shop</Link>
          </nav>
          {children}
        </main>
      </body>
    </html>
  );
}
