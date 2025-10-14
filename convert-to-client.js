const fs = require("fs");
const path = require("path");

// ✅ Recursive function to scan all files inside a folder
function processDir(dir) {
  fs.readdirSync(dir).forEach((file) => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      processDir(filePath); // check nested folders
    } else if (file.endsWith(".tsx")) {
      convertFile(filePath);
    }
  });
}

// ✅ Function to inject/replace "use client"
function convertFile(filePath) {
  let content = fs.readFileSync(filePath, "utf8");

  if (content.startsWith('"use client";') || content.startsWith("'use client';")) {
    console.log("✅ Already client:", filePath);
    return;
  }

  if (content.startsWith('"use server";') || content.startsWith("'use server';")) {
    content = content.replace(/("|')use server\1;/, '"use client";');
    console.log("🔄 Replaced server → client:", filePath);
  } else {
    content = `"use client";\n\n` + content;
    console.log("➕ Added client directive:", filePath);
  }

  fs.writeFileSync(filePath, content, "utf8");
}

// Run on src/app
const targetDir = path.join(__dirname, "src", "app");
processDir(targetDir);

console.log("\n✨ Done! All pages converted to 'use client';");
