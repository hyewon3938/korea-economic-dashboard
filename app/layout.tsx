import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

export const pretendard = localFont({
  src: [
    { path: "./fonts/Pretendard-Regular.subset.woff2", weight: "400" },
    { path: "./fonts/Pretendard-Medium.subset.woff2", weight: "500" },
    { path: "./fonts/Pretendard-SemiBold.subset.woff2", weight: "600" },
  ],
  display: "swap",
});


export const metadata: Metadata = {
  title: "한국 경제 지표 계기판",
  description: "국채 금리, 환율, 외환보유액 등 핵심 지표로 한국 경제 흐름을 빠르게 파악하는 대시보드",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body
      className={`${pretendard.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
