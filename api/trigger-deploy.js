export async function GET(req) {
	if (req.headers.get('Authorization') !== `Bearer ${process.env.CRON_SECRET}`) {
		return new Response("KO", { status: 401 });
	}

	await fetch("https://api.vercel.com/v1/integrations/deploy/prj_a2aRIV8PSGBZt8eJwZrzHKCaH3VE/67ZxJL9pwB");
	return new Response("OK", { status: 200 });

}
