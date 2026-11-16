'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import d from '../data.json';

const CODE = d.coupon.code;
const KEY = 'reviewkit-bfcm-2026-closed';
const END = '2026-11-30T23:59:59';
const useIso = typeof window === 'undefined' ? useEffect : useLayoutEffect;

const CopyIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden><rect x="9" y="9" width="12" height="12" rx="2.5" /><path d="M5 15V5a2 2 0 0 1 2-2h10" /></svg>;
const CheckIcon = () => <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20 6L9 17l-5-5" /></svg>;
const TagIcon = () => <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden><path d="M20.6 13.4 12 22 2 12V2h10l8.6 8.6a2 2 0 0 1 0 2.8z" /><circle cx="7.5" cy="7.5" r="1" fill="currentColor" /></svg>;

function useCopy() {
    const [copied, setCopied] = useState(false);
    const timer = useRef();
    const copy = async () => {
        try { await navigator.clipboard.writeText(CODE); }
        catch {
            const ta = document.createElement('textarea');
            ta.value = CODE;
            ta.style.position = 'fixed';
            ta.style.opacity = '0';
            document.body.appendChild(ta);
            ta.select();
            document.execCommand('copy');
            ta.remove();
        }
        setCopied(true);
        clearTimeout(timer.current);
        timer.current = setTimeout(() => setCopied(false), 2000);
    };
    return [copied, copy];
}

export function CopyCode({ tone = 'light' }) {
    const [copied, copy] = useCopy();
    return (
        <button type="button" onClick={copy} className={`codechip ${tone}${copied ? ' ok' : ''}`}
            aria-label={copied ? 'Coupon code copied' : `Copy coupon code ${CODE}`}>
            {CODE}{copied ? <CheckIcon /> : <CopyIcon />}
        </button>
    );
}

const pad = n => (n < 10 ? '0' + n : String(n));

export function CouponBar() {
    const [hidden, setHidden] = useState(false);
    const [copied, copy] = useCopy();
    const [left, setLeft] = useState({ d: '00', h: '00', m: '00', s: '00' });
    useIso(() => {
        try { if (sessionStorage.getItem(KEY) === '1') setHidden(true); } catch { }
    }, []);
    useIso(() => {
        const end = new Date(END).getTime();
        const tick = () => {
            const diff = end - Date.now();
            if (isNaN(end) || diff <= 0) { setHidden(true); clearInterval(timer); return; }
            const t = Math.floor(diff / 1000);
            setLeft({
                d: pad(Math.floor(t / 86400)),
                h: pad(Math.floor((t % 86400) / 3600)),
                m: pad(Math.floor((t % 3600) / 60)),
                s: pad(t % 60)
            });
        };
        tick();
        const timer = setInterval(tick, 1000);
        return () => clearInterval(timer);
    }, []);
    const dismiss = () => {
        setHidden(true);
        try { sessionStorage.setItem(KEY, '1'); } catch { }
    };
    if (hidden) return null;
    return (
        <div className="bfcm" role="region" aria-label="Black Friday offer">
            <script dangerouslySetInnerHTML={{ __html: `try{if(sessionStorage.getItem('${KEY}')==='1')document.currentScript.parentElement.style.display='none'}catch(e){}` }} />

            <svg className="bfcm__deco" viewBox="0 0 360 76" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">
                <polygon points="250,-20 330,26 250,72 170,26" fill="#8b7cff" opacity="0.28" />
                <polygon points="330,26 410,72 330,118 250,72" fill="#5b9be8" opacity="0.26" />
                <polygon points="170,26 250,72 170,118 90,72" fill="#ffffff" opacity="0.08" />
                <polygon points="330,-30 390,4 330,38 270,4" fill="#ffd166" opacity="0.22" />
            </svg>

            <div className="bfcm__inner">
                <svg className="bfcm__art" viewBox="0 0 120 80" aria-hidden="true">
                    <defs>
                        <linearGradient id="bfTop" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#b9b0ff" /><stop offset="1" stopColor="#8b7cff" /></linearGradient>
                        <linearGradient id="bfLeft" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#3427c9" /><stop offset="1" stopColor="#4a55e0" /></linearGradient>
                        <linearGradient id="bfRight" x1="0" y1="0" x2="1" y2="0"><stop offset="0" stopColor="#4f7fe0" /><stop offset="1" stopColor="#5b9be8" /></linearGradient>
                        <linearGradient id="bfTag" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#ff6b8b" /><stop offset="1" stopColor="#e11d48" /></linearGradient>
                    </defs>
                    <ellipse cx="60" cy="76" rx="34" ry="4" fill="#000" opacity="0.28" />
                    <g className="float">
                        <polygon points="28,28 60,46 60,74 28,56" fill="url(#bfLeft)" />
                        <polygon points="60,46 92,28 92,56 60,74" fill="url(#bfRight)" />
                        <polygon points="60,10 92,28 60,46 28,28" fill="url(#bfTop)" />
                        <polygon points="44,14 76,32 76,42 44,24" fill="#ffd166" />
                        <polygon points="40,34.75 48,39.25 48,67.25 40,62.75" fill="#f59e0b" />
                        <polygon points="72,39.25 80,34.75 80,62.75 72,67.25" fill="#ffd166" />
                        <ellipse cx="53" cy="22" rx="7.5" ry="4.5" transform="rotate(-25 53 22)" fill="#ffd166" stroke="#f59e0b" strokeWidth="1.5" />
                        <ellipse cx="67" cy="22" rx="7.5" ry="4.5" transform="rotate(25 67 22)" fill="#ffd166" stroke="#f59e0b" strokeWidth="1.5" />
                        <circle cx="60" cy="25" r="3.2" fill="#f59e0b" />
                    </g>
                    <g className="tag">
                        <circle cx="98" cy="22" r="14" fill="url(#bfTag)" stroke="#fff" strokeWidth="2" />
                        <text x="98" y="28" textAnchor="middle" fontFamily="Poppins, Arial, sans-serif" fontSize="17" fontWeight="800" fill="#fff">%</text>
                    </g>
                    <path d="M12 18 L14 24 L20 26 L14 28 L12 34 L10 28 L4 26 L10 24 Z" fill="#ffd166" opacity="0.9" />
                    <circle cx="108" cy="52" r="2.5" fill="#fff" opacity="0.7" />
                </svg>

                <span className="bfcm__badge">Black Friday &amp; Cyber Monday</span>

                <p className="bfcm__text">
                    Get <strong>30% OFF</strong> Reviewkit Pro, every plan
                    <small>Limited-time offer. All Pro widgets and features included.</small>
                </p>

                <button className="bfcm__code" type="button" onClick={copy} aria-label={`Copy coupon code ${CODE}`}>
                    {copied ? 'Copied!' : `Code: ${CODE}`}
                </button>

                <ul className="bfcm__timer" aria-label="Time left on the offer">
                    <li><b>{left.d}</b><span>Days</span></li>
                    <li><b>{left.h}</b><span>Hrs</span></li>
                    <li><b>{left.m}</b><span>Mins</span></li>
                    <li><b>{left.s}</b><span>Secs</span></li>
                </ul>

                <a className="bfcm__btn" href="/pricing">
                    Grab the Offer
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
                </a>

                <button className="bfcm__close" type="button" aria-label="Dismiss offer" onClick={dismiss}>
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true"><path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
                </button>
            </div>
        </div>
    );
}

export function CouponBanner() {
    return (
        <section className="wrap couponwrap">
            <div className="couponhero">
                <div className="chero-txt">
                    <span className="pill">{d.coupon.label}</span>
                    <p><strong>First 100 customers</strong> get an extra discount with code <CopyCode tone="light" /></p>
                </div>
                <p className="mut sm chero-note">The code is applied automatically at checkout through the buttons below — paste it in if it isn’t prefilled.</p>
            </div>
        </section>
    );
}
