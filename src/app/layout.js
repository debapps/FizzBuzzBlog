import "./globals.css";

export const metadata = {
    title: "Home | FizzBuzz Blog",
    description:
        "FizzBuzz Blog is the personal blogging website for cutting-edge digital technology, sceince and innovation, cloud computing and web technologies.",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/favicon/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon/favicon-16x16.png"
                />
                <link rel="manifest" href="/favicon/site.webmanifest" />
            </head>
            <body>{children}</body>
        </html>
    );
}
