import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import { ThemeProvider } from "@mui/material/styles";
import Footer from "app/components/Footer";
import Header from "app/components/Header";
import theme from "app/ui/theme";
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
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <div id="root">
              <Header />
              {children}
              <Footer />
            </div>
          </ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
