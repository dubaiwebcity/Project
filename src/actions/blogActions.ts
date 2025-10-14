export function handleBlogSearch(formData: FormData) {
  const q = String(formData.get("q") ?? "").trim();
  // Client-side redirect
  window.location.href = q ? `/blogs?search=${encodeURIComponent(q)}` : "/blogs";
}
