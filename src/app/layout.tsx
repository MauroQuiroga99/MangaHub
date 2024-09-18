import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import Footer from "app/components/Footer";
import Header from "app/components/Header";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="viewport"
        content="width=device-width, initial-scale=1.0"
      >
        <div id="root">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
