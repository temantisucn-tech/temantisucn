export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  if (!code) return res.status(400).end("no code");
  const r = await fetch("https://cdn.videy.co/" + code + ".mp4", {
    headers: { Range: req.headers.range || "", "User-Agent": "Mozilla/5.0" }
  });
  res.setHeader("Content-Type", "video/mp4");
  res.setHeader("Accept-Ranges", "bytes");
  if (r.headers.get("content-range")) res.setHeader("Content-Range", r.headers.get("content-range"));
  if (r.headers.get("content-length")) res.setHeader("Content-Length", r.headers.get("content-length"));
  res.status(r.status);
  const buf = Buffer.from(await r.arrayBuffer());
  return res.end(buf);
}
