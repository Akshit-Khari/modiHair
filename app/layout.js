import "./globals.css";

export const metadata = {
  title: "HairClinic",
  description: "Hair transplant & care center",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <main>{children}</main>
      </body>
    </html>
  );
}
