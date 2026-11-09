export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  const U = "https://feeymfxyxaktzrqagmjn.supabase.co";
  const K = "sb_publishable_DvBw2b3LIiGhlhZt4C6BBQ_YQP5MLOl";
  try {
    const r = await fetch(U + "/rest/v1/shopee_links?select=url&id=eq." + encodeURIComponent(code), { headers: { apikey: K, Authorization: "Bearer " + K } });
    const d = await r.json();
    if (d[0] && d[0].url) {
      res.writeHead(302, { Location: d[0].url });
      return res.end();
    }
  } catch (e) {}
  res.setHeader("Content-Type", "text/html");
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video Terbaru Tersedia!</title></head><body style="font-family:system-ui;text-align:center;padding:40px"><h2>Video Terbaru Tersedia!</h2><button onclick="document.getElementById('v').style.display='block';this.style.display='none';document.getElementById('v').play()" style="padding:14px 28px;border:0;border-radius:999px;background:#3b82f6;color:#fff;font-size:17px;font-weight:700">BUKA VIDEO</button><video id="v" controls playsinline style="width:100%;display:none;margin-top:20px" src="https://cdn.videy.co/${code}.mp4"></video></body></html>`);
}
