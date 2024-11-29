import "@/app/globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`m-0`}>
        {children}
        <GoogleAnalytics
          gaId={process.env.G_ANALYTICS_ID as string}
          debugMode={false}
        />
      </body>
    </html>
  );
}
