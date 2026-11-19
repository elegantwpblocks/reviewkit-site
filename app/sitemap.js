const BASE='https://reviewkit.gutensuite.net';
import { posts, categories } from '../lib/blog';
export const dynamic='force-static';
export default function sitemap(){
  const last=new Date();
  const pages=['','/features','/showcase','/pricing','/changelog','/contact','/docs','/docs/installation','/blog'].map(p=>({
    url:`${BASE}${p||'/'}`,lastModified:last,changeFrequency:'weekly',priority:p===''?1:p==='/pricing'?0.9:0.7
  }));
  const cats=categories.map(c=>({url:`${BASE}/blog/category/${c.categorySlug}`,lastModified:last,changeFrequency:'weekly',priority:0.6}));
  const blog=posts.map(p=>({url:`${BASE}/blog/${p.slug}`,lastModified:p.updated||p.date,changeFrequency:'monthly',priority:0.6}));
  return [...pages,...cats,...blog];
}
