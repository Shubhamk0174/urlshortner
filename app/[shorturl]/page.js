import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
    console.log(params);
    const shorturl = await params.shorturl;
    console.log("short url", shorturl);

    const client = await clientPromise;
    const db = client.db("urlShortner");
    const collection = db.collection("url");

    const doc = await collection.findOne({ shorturl: shorturl });
    console.log("doc", doc);
    if (doc && doc.url) {
        let target = doc.url;
        if (!/^https?:\/\//i.test(target)) {
            target = "https://" + target;
        }
        redirect(target);
    } else {
        redirect(process.env.NEXT_PUBLIC_HOST);
    }
    return <div></div>;
}
