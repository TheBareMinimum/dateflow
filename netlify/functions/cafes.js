export default async (request) => {
const FSQ_KEY = "QKJQR1BD3RMLUPOMZAFJ4JZHMRCS1QFKKT0TO4GF04UTIDYO";
const url = new URL(request.url);
const fsqUrl = "https://places-api.foursquare.com/places/search?" + url.searchParams.toString();
try {
const response = await fetch(fsqUrl, {
headers: {
"Accept": "application/json",
"Authorization": "Bearer " + FSQ_KEY,
"X-Places-Api-Version": "2025-06-17"
}
});
const body = await response.text();
return new Response(body, {
status: response.status,
headers: { "Content-Type": "application/json" }
});
} catch (error) {
return new Response(JSON.stringify({ error: error.message }), {
status: 500,
headers: { "Content-Type": "application/json" }
});
}
};

