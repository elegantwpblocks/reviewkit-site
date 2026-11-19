import Link from 'next/link';
import fs from 'fs';
import { formatDate } from '../lib/blog';

const hasImage = (src) => fs.existsSync(`${process.cwd()}/public${src}`);

export function PostCard({ post }) {
  const img = hasImage(post.featuredImage);
  return (
    <Link href={`/blog/${post.slug}`} className="postcard">
      <div className="thumb">
        {img
          ? <img src={post.featuredImage} alt="" loading="lazy" decoding="async" />
          : <div className="thumbfb" aria-hidden="true"><svg width="44" height="44" viewBox="0 0 24 24"><path fill="#00b67a" d="M12 1.5l3.1 7.2 7.9.7-6 5.2 1.8 7.6L12 18l-6.8 4.2L7 14.6 1 9.4l7.9-.7z"/></svg></div>}
      </div>
      <div className="postbody">
        <p className="postmeta sm mut"><span className="pill">{post.category}</span><time dateTime={post.date}>{formatDate(post.date)}</time></p>
        <h2>{post.title}</h2>
        <p className="mut">{post.description}</p>
        <p className="readmore">{post.readingTime} <span aria-hidden="true">→</span></p>
      </div>
    </Link>
  );
}
