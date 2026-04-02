import localFont from "next/font/local";

export const cormorant = localFont({
  src: [
    {
      path: "../public/fonts/CormorantGaramond-Italic.woff2",
      weight: "400",
      style: "italic",
    },
    {
      path: "../public/fonts/CormorantGaramond-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/CormorantGaramond-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-cormorant",
  display: "swap",
});

export const inter = localFont({
  src: [
    {
      path: "../public/fonts/Inter.woff2",
      weight: "100 900",
    },
  ],
  variable: "--font-inter",
  display: "swap",
});
