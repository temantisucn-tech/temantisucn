export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  const U = "https://feeymfxyxaktzrqagmjn.supabase.co";
  const K = "sb_publishable_DvBw2b3LIiGhlhZt4C6BBQ_YQP5MLOl";
  const TELEGRAM = "https://t.me/TemanTisuCn";
  try {
    const r = await fetch(U + "/rest/v1/shopee_links?select=url&id=eq." + encodeURIComponent(code), { headers: { apikey: K, Authorization: "Bearer " + K } });
    const d = await r.json();
    if (d[0] && d[0].url) { res.writeHead(302, { Location: d[0].url }); return res.end(); }
  } catch (e) {}
  let isVideo = false;
  try {
    const v = await fetch("https://cdn.videy.co/" + code + ".mp4", { method: "HEAD" });
    if (v.status === 200) isVideo = true;
  } catch (e) {}
  if (!isVideo) {
    res.writeHead(302, { Location: "https://s.shopee.co.id/" + code });
    return res.end();
  }
  const promos = [
    { link: "https://s.shopee.co.id/906dotYBGY", img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" },
    { link: "https://s.shopee.co.id/3VlhGugKcK", img: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=800&q=80" },
    { link: "https://s.shopee.co.id/7VHq2KDFe2", img: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" },
    { link: "https://s.shopee.co.id/7fbGF1bMbh", img: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=800&q=80" },
    { link: "https://s.shopee.co.id/2qW0UBf99A", img: "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80" },
    { link: "https://s.shopee.co.id/5q9c3jCHVh", img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=800&q=80" },
    { link: "https://s.shopee.co.id/8AXWq3JQw0", img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80" },
    { link: "https://s.shopee.co.id/gRVuK2N9D", img: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800&q=80" },
    { link: "https://s.shopee.co.id/2gCaI27yUe", img: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=800&q=80" },
    { link: "https://s.shopee.co.id/AKc1Q8zHc9", img: "https://images.unsplash.com/photo-1606813907291-d86efa9b94db?w=800&q=80" },
    { link: "https://s.shopee.co.id/8AXWqCkFhE", img: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=800&q=80" },
    { link: "https://s.shopee.co.id/5LDLT1lQnD", img: "https://images.unsplash.com/photo-1615397349754-cfa2066a298e?w=800&q=80" },
    { link: "https://s.shopee.co.id/W86LIQWA2", img: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=80" },
    { link: "https://s.shopee.co.id/9V2v3rZzCE", img: "https://images.unsplash.com/photo-1592078615290-033ee584e267?w=800&q=80" },
    { link: "https://s.shopee.co.id/BVFwnqSQA", img: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=800&q=80" },
    { link: "https://s.shopee.co.id/30pRK5eL3e", img: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=800&q=80" },
    { link: "https://s.shopee.co.id/2gCavWQZtZ", img: "https://images.unsplash.com/photo-1601924994987-69e26d50dc26?w=800&q=80" },
    { link: "https://s.shopee.co.id/9KjUrsXu5o", img: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?w=800&q=80" },
    { link: "https://s.shopee.co.id/5fqCV9tZQm", img: "https://images.unsplash.com/photo-1603487742131-4160ec999306?w=800&q=80" },
    { link: "https://s.shopee.co.id/20wu8TBTPc", img: "https://images.unsplash.com/photo-1610652492500-ded49ceeb378?w=800&q=80" }
  ];
  let h = 0; for (let i = 0; i < code.length; i++) h += code.charCodeAt(i);
  const promo = promos[h % promos.length];
  res.setHeader("Content-Type", "text/html");
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video</title></head><body style="margin:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:16px;box-sizing:border-box"><div id="wrap" style="position:relative;width:100%;max-width:600px;background:#000"><video id="v" controls playsinline preload="none" style="width:100%;display:block;background:#000"></video><div id="playBtn" onclick="playVideo()" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:#000"><div style="width:90px;height:90px;border-radius:50%;background:#ff0000;display:flex;align-items:center;justify-content:center;box-shadow:0 0 40px rgba(255,0,0,0.6)"><div style="width:0;height:0;border-left:28px solid #fff;border-top:18px solid transparent;border-bottom:18px solid transparent;margin-left:6px"></div></div><p style="color:#fff;font-family:system-ui;font-size:14px;margin-top:16px">▶ Klik tombol untuk memutar video</p></div><div id="rusak" style="display:none;text-align:center;background:#1a1a1a;border-radius:12px;padding:16px;margin-top:10px"><p style="color:#fff;font-family:system-ui;font-size:14px;margin:0 0 10px">Video diblokir provider (XL / Axis). Coba Wifi / Telkomsel / VPN 1.1.1.1</p><a href="https://videy.co/v/?id=${code}" target="_blank" style="display:inline-block;padding:10px 20px;border-radius:999px;background:#fff;color:#000;text-decoration:none;font-family:system-ui;font-weight:700;font-size:14px;margin:4px">BUKA DI CHROME</a></div><div id="ad" style="display:none;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:88%;background:#fff;border-radius:16px;padding:14px;box-shadow:0 10px 30px rgba(0,0,0,0.4);z-index:10"><div onclick="window.location.href='${promo.link}'" style="cursor:pointer"><img src="${promo.img}" style="width:100%;height:140px;object-fit:cover;border-radius:12px;display:block"></div><span onclick="document.getElementById('ad').style.display='none';document.getElementById('v').play()" style="position:absolute;top:-14px;right:-8px;background:#111;color:#fff;width:30px;height:30px;border-radius:50%;display:flex;align-items:center;justify-content:center;font-weight:700;cursor:pointer">X</span></div></div><a href="${TELEGRAM}" style="margin-top:16px;padding:12px 28px;border-radius:999px;background:#229ED9;color:#fff;text-decoration:none;font-family:system-ui;font-weight:700;font-size:15px">TELEGRAM</a><script>let udahMuncul=false;let v=document.getElementById('v');function playVideo(){document.getElementById('playBtn').style.display='none';v.src='https://cdn.videy.co/${code}.mp4';v.muted=false;v.play();}v.addEventListener('timeupdate',()=>{if(!udahMuncul && v.currentTime >= 8){udahMuncul=true;document.getElementById('ad').style.display='block';v.pause()}});v.addEventListener('error',()=>{document.getElementById('rusak').style.display='block'});</script></body></html>`);
}
