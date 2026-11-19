import fs from 'fs';
import path from 'path';
import index from '../content/blog/index.json';

const dir = path.join(process.cwd(), 'content/blog');

export const posts = index;

export const categories = Object.entries(
  posts.reduce((acc, p) => {
    (acc[p.categorySlug] ??= { category: p.category, categorySlug: p.categorySlug, count: 0 }).count++;
    return acc;
  }, {})
).map(([, c]) => c);

export const getPost = (slug) => {
  const meta = posts.find((p) => p.slug === slug);
  if (!meta) return null;
  const raw = fs.readFileSync(path.join(dir, meta.categorySlug, meta.file), 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n\n?/);
  const fm = {};
  if (m) for (const line of m[1].split('\n')) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const [, key, val] = kv;
    if (val.startsWith('[')) fm[key] = val.slice(1, -1).split(',').map((s) => s.trim().replace(/^"|"$/g, '')).filter(Boolean);
    else fm[key] = val.replace(/^"|"$/g, '');
  }
  return { meta: { ...meta, ...fm }, md: raw.slice(m ? m[0].length : 0) };
};

export const relatedPosts = (post) =>
  (post.meta.relatedPosts || []).map((slug) => posts.find((p) => p.slug === slug)).filter(Boolean);

export const formatDate = (d) =>
  new Date(`${d}T00:00:00`).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
