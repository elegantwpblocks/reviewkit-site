const BASE='https://reviewkit.gutensuite.net';
export const dynamic='force-static';
export default function sitemap(){
  const last=new Date();
  return ['','/features','/showcase','/pricing','/changelog','/contact','/docs','/docs/installation'].map(p=>({
    url:`${BASE}${p||'/'}`,lastModified:last,changeFrequency:'weekly',priority:p===''?1:p==='/pricing'?0.9:0.7
  }));
}
