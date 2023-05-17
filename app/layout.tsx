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
      <body>{children}</body>
    </html>
  );
}
