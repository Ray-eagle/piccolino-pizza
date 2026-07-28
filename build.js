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
// NOTE: index.html is now the mobile-first build with external assets (edited directly).
// This script only produces the self-contained single-file variant used for the claude.ai artifact.
fs.writeFileSync(path.join(root, "artifact.html"), out);
console.log("artifact.html written:", (out.length / 1024 / 1024).toFixed(2) + " MB");
