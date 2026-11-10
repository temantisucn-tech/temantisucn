import { Readable } from "stream";
export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  if (!code) return res.status(400).end("no code");
  const r = await fetch("https://cdn.videy.co/" + code + ".mp4", {
    headers: { Range: req.headers.range || "", "User-Agent": "Mozilla/5.0" }
  });
  const headers = { "Content-Type": "video/mp4", "Accept-Ranges": "bytes" };
  if (r.headers.get("content-range")) headers["Content-Range"] = r.headers.get("content-range");
  if (r.headers.get("content-length")) headers["Content-Length"] = r.headers.get("content-length");
  res.writeHead(r.status, headers);
  Readable.fromWeb(r.body).pipe(res);
}
