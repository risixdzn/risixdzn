import { NextRequest, NextResponse } from "next/server";
import { Readme } from "@/components/Readme";

export async function GET(request: NextRequest) {
    const section = request.nextUrl.searchParams.get("section");
    let content = ``;

    if (!section) return NextResponse.json("No section specified", { status: 400 });

    if (section == "readme") {
        content = Readme();
    } else {
        return NextResponse.json("Invalid section specified", { status: 400 });
    }

    return new Response(content, {
        headers: {
            "content-type": "image/svg+xml",
            "cache-control": "no-store, no-cache, must-revalidate, proxy-revalidate",
            pragma: "no-cache",
            expires: "0",
        },
    });
}
