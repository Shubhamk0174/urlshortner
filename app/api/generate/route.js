import clientPromise from '@/lib/mongodb'


export async function POST(request) {

    const body = await request.json()
    console.log("body",body);
    const client = await clientPromise;
    const db = client.db("urlShortner")
    const collection = db.collection("url")


    // Check if the short url exists
    const doc = await collection.findOne({shorturl: body.shorturl})
    console.log(doc);
    console.log("this is executed");
    if(doc){
        return Response.json({success: false, error: true, message: 'URL Already Exists'})
    }


    const result = await collection.insertOne({
        url: body.url,
        shorturl: body.shorturl
    })

    return Response.json({success: true, error: false, message: 'URL Generated Successfully'})
}