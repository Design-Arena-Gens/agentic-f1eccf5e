'use client';

import { useState } from 'react';
import styles from '../page.module.css';

export function NewsletterForm() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle'|'loading'|'success'|'error'>('idle');

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('error');
      return;
    }
    setStatus('loading');
    await new Promise(r => setTimeout(r, 900));
    setStatus('success');
  }

  return (
    <div style={{maxWidth: 720, margin: '0 auto'}}>
      <div className={styles.showcaseCard}>
        <div style={{padding: 18}}>
          <h3 style={{marginBottom: 6}}>Get realm updates</h3>
          <p style={{color: 'var(--muted)'}}>Be first to know about the demo, trailers, and release date.</p>
        </div>
        <div className={styles.cardMeta}>
          {status !== 'success' ? (
            <form onSubmit={onSubmit} style={{display:'flex', gap:12, flexWrap:'wrap'}}>
              <input
                type="email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                placeholder="you@adventurer.guild"
                aria-label="Email address"
                required
                style={{
                  flex:'1 1 280px',
                  minWidth: 220,
                  background:'rgba(255,255,255,.03)',
                  border:'1px solid var(--edge)',
                  color:'var(--text)',
                  padding:'12px 14px',
                  borderRadius:12
                }}
              />
              <button
                type="submit"
                disabled={status==='loading'}
                className={styles.button + ' ' + styles.primary}
                style={{whiteSpace:'nowrap'}}
              >
                {status==='loading' ? 'Joining…' : 'Join the Guild'}
              </button>
            </form>
          ) : (
            <p style={{color:'var(--brand-2)'}}>Welcome, traveler. Your oath is recorded.</p>
          )}
        </div>
      </div>
    </div>
  );
}
