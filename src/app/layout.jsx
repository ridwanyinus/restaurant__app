import "./globals.css";

export const metadata = {
  title: "Restaurant App",
  description: "Restaurant App By RYO",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-dark">{children}</body>
    </html>
  );
}
