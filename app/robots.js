const BASE='https://reviewkit.gutensuite.net';
export const dynamic='force-static';
export default function robots(){
  return {
    rules:[{userAgent:'*',allow:'/'}],
    sitemap:`${BASE}/sitemap.xml`
  };
}
