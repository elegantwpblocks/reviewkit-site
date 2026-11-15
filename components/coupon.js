'use client';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import d from '../data.json';

const CODE = d.coupon.code;
const KEY = 'reviewkit_coupon_dismissed';
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

export function CouponBar() {
    const [hidden, setHidden] = useState(false);
    useIso(() => {
        try { if (localStorage.getItem(KEY) === '1') setHidden(true); } catch { }
    }, []);
    const dismiss = () => {
        setHidden(true);
        try { localStorage.setItem(KEY, '1'); } catch { }
    };
    if (hidden) return null;
    return (
        <div className="couponbar" role="region" aria-label="Launch offer">
            <script dangerouslySetInnerHTML={{ __html: `try{if(localStorage.getItem('${KEY}')==='1')document.currentScript.parentElement.style.display='none'}catch(e){}` }} />
            <div className="cwrap">
                <span className="ctag"><TagIcon /> {d.coupon.label}</span>
                <span>Reviewkit Pro is here. First 100 customers save with</span>
                <CopyCode tone="dark" />
                <button type="button" className="couponclose" aria-label="Dismiss announcement" onClick={dismiss}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" aria-hidden><path d="M6 6l12 12M18 6L6 18" /></svg>
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
