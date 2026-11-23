import d from '../data.json';
export const dynamic='force-static';
export default function robots(){
  return {
    rules:[{userAgent:'*',allow:'/'}],
    sitemap:`${d.site.url}/sitemap.xml`
  };
}
