import Image from "next/image";
import Link from "next/link";

export default function Home() {
    return (
        <main
            style={{
                width: "100%",
                height: "100vh",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
            }}
        >
            <Link href='/api/render?section=readme'>Go to /api/render?section=readme</Link>
        </main>
    );
}
