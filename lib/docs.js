import fs from 'fs';
import path from 'path';
export const readDoc=(slug)=>{
  const dir=path.join(process.cwd(),'content/docs');
  for(const cat of JSON.parse(fs.readFileSync(path.join(dir,'docs.json'),'utf8'))){
    const a=cat.articles.find(x=>x.slug===slug);
    if(a) return {meta:a,category:cat.category,md:fs.readFileSync(path.join(dir,cat.category.toLowerCase().replace(/\s+/g,'-'),`${slug}.md`),'utf8')};
  }
  return null;
};
