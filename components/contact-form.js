'use client';
import { useState } from 'react';
import d from '../data.json';

export default function ContactForm() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  async function onSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus('sending');
    setError('');
    try {
      const res = await fetch(d.form.endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...Object.fromEntries(new FormData(form)),
          access_key: d.form.access_key,
          subject: 'Reviewkit contact form message',
          from_name: 'Reviewkit website',
        }),
      });
      const json = await res.json();
      if (!res.ok || !json.success) throw new Error(json.message || 'Message could not be sent. Try again.');
      setStatus('sent');
      form.reset();
    } catch (err) {
      setStatus('idle');
      setError(err.message || 'Message could not be sent. Try again.');
    }
  }
  return (
    <form className="card form" onSubmit={onSubmit}>
      <input type="checkbox" name="botcheck" tabIndex={-1} aria-hidden="true" style={{ display: 'none' }} />
      <label>Your email<input type="email" name="email" autoComplete="email" required /></label>
      <label>How can we help?<textarea name="message" rows="5" required /></label>
      {error && <p className="formerr" role="alert">{error}</p>}
      {status === 'sent' ? (
        <p className="formok" role="status">Message sent. We will reply by email.</p>
      ) : (
        <button className="btn" disabled={status === 'sending'}>{status === 'sending' ? 'Sending' : 'Send message'}</button>
      )}
    </form>
  );
}
