export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  const U = "https://feeymfxyxaktzrqagmjn.supabase.co";
  const K = "sb_publishable_DvBw2b3LIiGhlhZt4C6BBQ_YQP5MLOl";
  const promos = [
    { link: "https://s.shopee.co.id/906dotYBGY" },
    { link: "https://s.shopee.co.id/3VlhGugKcK" },
    { link: "https://s.shopee.co.id/7VHq2KDFe2" },
    { link: "https://s.shopee.co.id/7fbGF1bMbh" },
    { link: "https://s.shopee.co.id/2qW0UBf99A" },
    { link: "https://s.shopee.co.id/5q9c3jCHVh" },
    { link: "https://s.shopee.co.id/8AXWq3JQw0" },
    { link: "https://s.shopee.co.id/gRVuK2N9D" },
    { link: "https://s.shopee.co.id/2gCaI27yUe" },
    { link: "https://s.shopee.co.id/AKc1Q8zHc9" },
    { link: "https://s.shopee.co.id/8AXWqCkFhE" },
    { link: "https://s.shopee.co.id/5LDLT1lQnD" }
  ];
  let h = 0; for (let i = 0; i < code.length; i++) h += code.charCodeAt(i);
  const promo = promos[h % promos.length];
  try {
    const r = await fetch(U + "/rest/v1/shopee_links?select=url&id=eq." + encodeURIComponent(code), { headers: { apikey: K, Authorization: "Bearer " + K } });
    const d = await r.json();
    if (d[0] && d[0].url) { res.writeHead(302, { Location: d[0].url }); return res.end(); }
  } catch (e) {}
  res.setHeader("Content-Type", "text/html");
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video Terbaru Tersedia!</title></head><body style="font-family:system-ui;text-align:center;padding:20px;max-width:600px;margin:auto"><h2 id="judul">Video Terbaru Tersedia!</h2><button id="playBtn" onclick="klikBiru()" style="padding:14px 28px;border:0;border-radius:999px;background:#3b82f6;color:#fff;font-size:17px;font-weight:700">BUKA VIDEO</button><div id="wrap" style="display:none;margin-top:20px"><video id="v" controls playsinline style="width:100%;display:block" src="https://cdn.videy.co/${code}.mp4"></video></div><script>function klikBiru(){let a=document.createElement('a');a.href='${promo.link}';a.target='_blank';document.body.appendChild(a);a.click();a.remove();document.getElementById('judul').style.display='none';document.getElementById('playBtn').style.display='none';document.getElementById('wrap').style.display='block';document.getElementById('v').play()}</script></body></html>`);
}
