export const metadata = {
    title: "Ricardo Amorim",
    description: "My Github readme.md",
    icons: {
        icon: "../favicon.png",
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang='en'>
            <body>{children}</body>
        </html>
    );
}
