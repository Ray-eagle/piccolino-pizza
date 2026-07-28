// Inlines assets into index.template.html -> index.html (single self-contained file)
// {{IMG:name}} -> data URI from assets/web/name
// {{VID:name}} -> data URI from assets/video/name
const fs = require("fs");
const path = require("path");
const root = __dirname;
const tpl = fs.readFileSync(path.join(root, "index.template.html"), "utf8");
const MIME = { png: "image/png", jpg: "image/jpeg", jpeg: "image/jpeg", mp4: "video/mp4", webm: "video/webm" };
function inline(dir, name) {
  const file = path.join(root, "assets", dir, name);
  const ext = path.extname(name).slice(1).toLowerCase();
  return `data:${MIME[ext]};base64,` + fs.readFileSync(file).toString("base64");
}
const out = tpl
  .replace(/\{\{IMG:([^}]+)\}\}/g, (m, n) => inline("web", n))
  .replace(/\{\{VID:([^}]+)\}\}/g, (m, n) => inline("video", n));
fs.writeFileSync(path.join(root, "index.html"), out);
console.log("index.html written:", (out.length / 1024 / 1024).toFixed(2) + " MB");
