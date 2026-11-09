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
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>NONTON DISINI</title></head><body style="font-family:system-ui;text-align:center;padding:20px;max-width:600px;margin:auto"><div id="header"><h1 style="margin:0">NONTON DISINI</h1><p style="color:#666;margin:6px 0 16px">BACK BILA ADA IKLAN</p></div><button id="playBtn" onclick="klikBiru()" style="padding:14px 28px;border:0;border-radius:999px;background:#3b82f6;color:#fff;font-size:17px;font-weight:700">BUKA VIDEO</button><div id="wrap" style="display:none;position:relative;margin-top:20px"><video id="v" controls playsinline style="width:100%;display:block" src="https://cdn.videy.co/${code}.mp4"></video><div id="ad" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:88%;background:#fff;border-radius:16px;padding:14px;box-shadow:0 10px 30px rgba(0,0,0,0.4)"><div onclick="window.open('${promo.link}','_blank')" style="cursor:pointer"><img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" style="width:100%;height:140px;object-fit:cover;border-radius:12px;display:block"></div><span onclick="document.getElementById('ad').style.display='none'" style="position:absolute;top:-14px;right:-8px;background:#111;color:#fff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;cursor:pointer">X</span></div></div><script>let udahMuncul=false;function klikBiru(){let a=document.createElement('a');a.href='${promo.link}';a.target='_blank';document.body.appendChild(a);a.click();a.remove();document.getElementById('header').style.display='none';document.getElementById('playBtn').style.display='none';document.getElementById('wrap').style.display='block';let v=document.getElementById('v');v.play();v.addEventListener('timeupdate',()=>{if(!udahMuncul && v.duration && v.currentTime >= v.duration/2){udahMuncul=true;document.getElementById('ad').style.display='block';v.pause()}})}</script></body></html>`);
}
