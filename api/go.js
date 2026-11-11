export default async function handler(req, res) {
  const code = (req.query.code || "").trim();
  const U = "https://feeymfxyxaktzrqagmjn.supabase.co";
  const K = "sb_publishable_DvBw2b3LIiGhlhZt4C6BBQ_YQP5MLOl";
  const TELEGRAM = "https://t.me/TemanTisuCn";
  const SHOPEE_LIST = ["W86LIQWA2","9V2v3rZzCE","BVFwnqSQA","30pRK5eL3e","2gCavWQZtZ","9KjUrsXu5o","5fqCV9tZQm","20wu8TBTPc","1gK5LW1d3i","40i07rdj0P","30pSw3zYnI","3g59jN8ovZ","6L5uuIJMyp","5LDNiU0VWo","7puihA6ZMb","20wvkTX3Vw","2gCcXkODcV","7KyS6OiIUM","9AQ6HrGkHu","2gCcXxIy2U","9AQ6HwEJTm","2BGLx8IaJm","9pfn5J5b1L","6q2BVw8yvy","4LKqXMYrwm","AUvTsmMdon","1BNolfHILs","qkyNCtHVm"];
  if (SHOPEE_LIST.includes(code)) {
    res.writeHead(301, { Location: "https://s.shopee.co.id/" + code, "Cache-Control": "no-cache" });
    return res.end();
  }
  try {
    const r = await fetch(U + "/rest/v1/shopee_links?select=url&id=eq." + encodeURIComponent(code), { headers: { apikey: K, Authorization: "Bearer " + K } });
    const d = await r.json();
    if (d[0] && d[0].url) { res.writeHead(301, { Location: d[0].url }); return res.end(); }
  } catch (e) {}
  let isVideo = false;
  try {
    const v = await fetch("https://cdn.videy.co/" + code + ".mp4", { method: "HEAD" });
    if (v.status === 200) isVideo = true;
  } catch (e) {}
  if (!isVideo) {
    res.writeHead(301, { Location: "https://s.shopee.co.id/" + code });
    return res.end();
  }
  res.setHeader("Content-Type", "text/html");
  return res.end(`<!DOCTYPE html><html><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Video</title></head><body style="margin:0;background:#000;display:flex;flex-direction:column;align-items:center;justify-content:center;min-height:100vh;padding:16px;box-sizing:border-box"><div id="wrap" style="position:relative;width:100%;max-width:600px;background:#000"><video id="v" controls playsinline preload="none" style="width:100%;display:block;background:#000"></video><div id="playBtn" onclick="playVideo()" style="position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;background:#000"><div style="width:90px;height:90px;border-radius:50%;background:#ff0000;display:flex;align-items:center;justify-content:center;box-shadow:0 0 40px rgba(255,0,0,0.6)"><div style="width:0;height:0;border-left:28px solid #fff;border-top:18px solid transparent;border-bottom:18px solid transparent;margin-left:6px"></div></div><p style="color:#fff;font-family:system-ui;font-size:14px;margin-top:16px">▶ Klik tombol untuk memutar video</p></div></div><a href="${TELEGRAM}" style="margin-top:16px;padding:12px 28px;border-radius:999px;background:#229ED9;color:#fff;text-decoration:none;font-family:system-ui;font-weight:700;font-size:15px">TELEGRAM</a><script>let v=document.getElementById('v');function playVideo(){document.getElementById('playBtn').style.display='none';v.src='/api/video?code=${code}';v.muted=false;v.play();}</script></body></html>`);
}
