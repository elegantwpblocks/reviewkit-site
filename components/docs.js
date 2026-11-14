'use client';
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function DocsNav({ items, q }) {
  const path = usePathname();
  const cats = [...new Set(items.map(i => i.category))];
  return (
    <nav className="docnav" aria-label="Documentation">
      {cats.map(c => {
        const arts = items.filter(i => i.category === c && (!q || (i.title + ' ' + i.category).toLowerCase().includes(q.toLowerCase())));
        return arts.length > 0 && (
          <div key={c}>
            <h3>{c}</h3>
            {arts.map(i => {
              const on = path === `/docs/${i.slug}`;
              return <Link key={i.slug} href={`/docs/${i.slug}`} className={on ? 'on' : ''} aria-current={on ? 'page' : undefined}>{i.title}</Link>;
            })}
          </div>
        );
      })}
    </nav>
  );
}

export function DocsBrowser({ items }) {
  const [q, setQ] = useState('');
  const hits = items.filter(i => (i.title + ' ' + i.category + ' ' + i.desc).toLowerCase().includes(q.toLowerCase()));
  const cats = [...new Set(items.map(i => i.category))];
  return (
    <>
      <div className="search">
        <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden><circle cx="11" cy="11" r="7" fill="none" stroke="#667085" strokeWidth="2"/><path d="M16.5 16.5L21 21" stroke="#667085" strokeWidth="2" strokeLinecap="round"/></svg>
        <input type="search" placeholder="Search docs" aria-label="Search docs" value={q} onChange={e => setQ(e.target.value)} />
      </div>
      <div className="docs">
        <DocsNav items={items} q={q} />
        <div className="docmain">
          <p className="sr-only" role="status">{hits.length === 0 ? 'No articles found' : `${hits.length} ${hits.length === 1 ? 'article' : 'articles'} found`}</p>
          {hits.length === 0 ? (
            <div className="card empty"><b>No articles match "{q}"</b><p className="mut">Try a different word, or browse the categories on the left.</p></div>
          ) : cats.map(c => {
            const arts = hits.filter(i => i.category === c);
            return arts.length > 0 && (
              <section key={c}>
                <h2>{c}</h2>
                <div className="doclist">
                  {arts.map(i => <Link key={i.slug} href={`/docs/${i.slug}`} className="card docrow"><b>{i.title}</b><p className="mut">{i.desc}</p></Link>)}
                </div>
              </section>
            );
          })}
        </div>
      </div>
    </>
  );
}
