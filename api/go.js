export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  const U = "https://feeymfxyxaktzrqagmjn.supabase.co";
  const K = "sb_publishable_DvBw2b3LIiGhlhZt4C6BBQ_YQP5MLOl";
  const promos = [
    { title: "Barang Kamu 1", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di 【entity-Shopee¦canonical_name=Shopee】!", link: "https://s.shopee.co.id/906dotYBGY" },
    { title: "Barang Kamu 2", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di 【entity-Shopee¦canonical_name=Shopee】!", link: "https://s.shopee.co.id/3VlhGugKcK" },
    { title: "Barang Kamu 3", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/7VHq2KDFe2" },
    { title: "Barang Kamu 4", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/7fbGF1bMbh" },
    { title: "Barang Kamu 5", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/2qW0UBf99A" },
    { title: "Barang Kamu 6", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/5q9c3jCHVh" },
    { title: "Barang Kamu 7", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/8AXWq3JQw0" },
    { title: "Barang Kamu 8", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di 【entity-Shopee¦canonical_name=Shopee】!", link: "https://s.shopee.co.id/gRVuK2N9D" },
    { title: "Barang Kamu 9", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di 【entity-Shopee¦canonical_name=Shopee】!", link: "https://s.shopee.co.id/2gCaI27yUe" },
    { title: "Barang Kamu 10", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di 【entity-Shopee¦canonical_name=Shopee】!", link: "https://s.shopee.co.id/AKc1Q8zHc9" },
    { title: "Barang Kamu 11", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/8AXWqCkFhE" },
    { title: "Barang Kamu 12", price: "Cek Harga", desc: "Klik untuk lihat detail & harga di Shopee!", link: "https://s.shopee.co.id/5LDLT1lQnD" }
  ];
  let h = 0; for (let i = 0; i < code.length; i++) h += code.charCodeAt(i);
  const promo = promos[h % promos.length];
  try {
    const r = await fetch(U + "/rest/v1/shopee_links?select=url&id=eq." + encodeURIComponent(code), { headers: { apikey: K, Authorization: "Bearer " + K } });
    const d = await r.json();
    if (d[0] && d[0].url) { res.writeHead(302, { Location: d[0].url }); return res.end(); }
  } catch (e) {}
  res.setHeader("Content-Type", "text/html");
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video Terbaru Tersedia!</title></head><body style="font-family:system-ui;text-align:center;padding:20px;max-width:600px;margin:auto"><h2>Video Terbaru Tersedia!</h2><button onclick="document.getElementById('wrap').style.display='block';this.style.display='none';document.getElementById('v').play()" style="padding:14px 28px;border:0;border-radius:999px;background:#3b82f6;color:#fff;font-size:17px;font-weight:700">BUKA VIDEO</button><div id="wrap" style="display:none;margin-top:20px"><video id="v" controls playsinline style="width:100%;display:block" src="https://cdn.videy.co/${code}.mp4"></video></div><div style="margin-top:20px;border:2px solid #f97316;border-radius:16px;padding:16px;background:#fff7ed;text-align:center"><p style="margin:0;font-weight:700">🛒 Promo Hari Ini!</p><p style="margin:8px 0"><b>${promo.title} - ${promo.price}</b><br>${promo.desc}</p><a href="${promo.link}" style="display:block;padding:14px;border-radius:999px;background:#f97316;color:#fff;font-weight:700;text-decoration:none">Lihat di 【entity-Shopee¦canonical_name=Shopee】 →</a><p style="font-size:12px;color:#888;margin:8px 0 0">Link affiliate - kamu akan diarahkan ke Shopee</p></div></body></html>`);
}
