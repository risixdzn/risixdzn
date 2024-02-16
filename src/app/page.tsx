import { join } from "@/lib/svg";
import { html, styles } from "@/components/Readme";

export default function Home() {
    return (
        <div
            style={{ width: "100%", display: "flex", justifyContent: "center" }}
            dangerouslySetInnerHTML={{ __html: join(styles, html) }}
        ></div>
    );
}
