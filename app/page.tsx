import Link from 'next/link';
import Image from 'next/image';
import styles from './page.module.css';
import { NewsletterForm } from './sections/NewsletterForm';

export default function HomePage() {
  return (
    <main className={styles.main}>
      <div className={styles.bgFX} aria-hidden />

      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={styles.logoWrap}>
            <Image src="/logo.svg" alt="Shattered Realms" width={64} height={64} priority />
          </div>
          <h1 className={styles.title}>Shattered Realms</h1>
          <p className={styles.tagline}>
            A fantasy roguelite RPG where every descent rewrites fate.
          </p>
          <div className={styles.ctaRow}>
            <Link className={`${styles.button} ${styles.primary}`} href="#wishlist">
              Wishlist Now
            </Link>
            <Link className={`${styles.button} ${styles.ghost}`} href="#demo">
              Play Free Demo
            </Link>
          </div>
          <div className={styles.heroFoot}>
            <span className={styles.badge}>PC • Console • 2025</span>
          </div>
        </div>
      </section>

      <section className={styles.features}>
        <h2 className={styles.sectionTitle}>Forge Your Legend</h2>
        <div className={styles.grid}>
          <FeatureCard
            title="Endless Dungeons"
            desc="Procedural realms, hand-authored rooms, and secrets in every run."
            icon="maze"
          />
          <FeatureCard
            title="Builds & Synergies"
            desc="Combine classes, relics, and spells into devastating archetypes."
            icon="spark"
          />
          <FeatureCard
            title="Bosses That Learn"
            desc="Adaptive foes evolve tactics the deeper you descend."
            icon="boss"
          />
          <FeatureCard
            title="Defy the Shattering"
            desc="Persist through meta-progression and rewrite the fate of the realms."
            icon="shard"
          />
        </div>
      </section>

      <section className={styles.showcase}>
        <div className={styles.cardRow}>
          <ShowcaseCard title="Arcane Archer" subtitle="Synergy Build">
            <div className={styles.cardArt} data-variant="arrows" />
          </ShowcaseCard>
          <ShowcaseCard title="Ember Tyrant" subtitle="Realm Boss">
            <div className={styles.cardArt} data-variant="dragon" />
          </ShowcaseCard>
          <ShowcaseCard title="Frostgrave" subtitle="Biome Preview">
            <div className={styles.cardArt} data-variant="frost" />
          </ShowcaseCard>
        </div>
      </section>

      <section className={styles.newsletter} id="newsletter">
        <NewsletterForm />
      </section>

      <footer className={styles.footer}>
        <p>© {new Date().getFullYear()} Shattered Realms. All rights reserved.</p>
        <div className={styles.links}>
          <Link href="#press">Press Kit</Link>
          <Link href="#support">Support</Link>
          <Link href="#privacy">Privacy</Link>
        </div>
      </footer>
    </main>
  );
}

function FeatureCard({ title, desc, icon }: { title: string; desc: string; icon: 'maze'|'spark'|'boss'|'shard' }) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.iconWrap}>
        <span data-icon={icon} />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{desc}</p>
      </div>
    </div>
  );
}

function ShowcaseCard({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className={styles.showcaseCard}>
      {children}
      <div className={styles.cardMeta}>
        <h4>{title}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
}
