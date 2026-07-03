import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToolGrid from "@/components/ToolGrid";

export default function Home() {
  return (
    <>
      <style>{`
        .hero {
          background: linear-gradient(160deg, #fff5f5 0%, #ffffff 40%, #f8f9fc 100%);
          padding: 120px 24px 60px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .hero::before {
          content: '';
          position: absolute;
          top: -100px; right: -100px;
          width: 500px; height: 500px;
          background: radial-gradient(circle, rgba(226,0,26,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero::after {
          content: '';
          position: absolute;
          bottom: -80px; left: -80px;
          width: 400px; height: 400px;
          background: radial-gradient(circle, rgba(95,131,198,0.07) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .hero-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
          margin: 0 auto;
        }
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(226,0,26,0.08);
          border: 1px solid rgba(226,0,26,0.15);
          color: var(--primary);
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 24px;
          animation: fadeInUp 0.5s ease;
        }
        .hero-badge-dot {
          width: 7px; height: 7px;
          background: var(--primary);
          border-radius: 50%;
          animation: pulse-ring 1.5s ease-out infinite;
        }
        .hero h1 {
          font-size: clamp(32px, 5vw, 56px);
          font-weight: 800;
          line-height: 1.15;
          color: var(--text-dark);
          letter-spacing: -1.5px;
          margin-bottom: 20px;
          animation: fadeInUp 0.6s ease 0.1s both;
        }
        .hero h1 span {
          background: linear-gradient(135deg, #e2001a, #ff4d6d);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .hero-subtitle {
          font-size: clamp(15px, 2vw, 18px);
          color: var(--text-medium);
          line-height: 1.7;
          max-width: 580px;
          margin: 0 auto 36px;
          animation: fadeInUp 0.6s ease 0.2s both;
        }
        .hero-stats {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 40px;
          flex-wrap: wrap;
          animation: fadeInUp 0.6s ease 0.3s both;
          margin-bottom: 0;
        }
        .hero-stat {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
        }
        .hero-stat-value {
          font-size: 26px;
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }
        .hero-stat-label {
          font-size: 13px;
          color: var(--text-light);
          font-weight: 500;
        }
        .hero-stat-divider {
          width: 1px;
          height: 40px;
          background: var(--border-light);
        }

        /* Trust badges */
        .trust-bar {
          background: white;
          border-top: 1px solid var(--border-light);
          border-bottom: 1px solid var(--border-light);
          padding: 16px 24px;
          margin-bottom: 48px;
        }
        .trust-bar-inner {
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }
        .trust-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-medium);
        }
        .trust-icon {
          width: 22px;
          height: 22px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 12px;
        }
        .trust-icon.green { background: #edfaf0; color: #2d8a4e; }
        .trust-icon.blue { background: #eef4fd; color: #2d6abf; }
        .trust-icon.orange { background: #fff4ec; color: #c86a1a; }

        /* Section title */
        .section-header {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          margin-bottom: 28px;
        }
        .section-title {
          font-size: 24px;
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }

        /* Features section */
        .features-section {
          background: white;
          padding: 80px 24px;
          margin-top: 40px;
        }
        .features-inner {
          max-width: 1280px;
          margin: 0 auto;
        }
        .features-header {
          text-align: center;
          margin-bottom: 56px;
        }
        .features-header h2 {
          font-size: clamp(24px, 3.5vw, 38px);
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .features-header p {
          font-size: 16px;
          color: var(--text-medium);
          max-width: 480px;
          margin: 0 auto;
        }
        .features-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .feature-card {
          padding: 32px 28px;
          border-radius: var(--radius-lg);
          background: var(--bg-light);
          border: 1px solid var(--border-light);
          transition: all 0.25s ease;
        }
        .feature-card:hover {
          box-shadow: var(--shadow-md);
          transform: translateY(-3px);
        }
        .feature-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 24px;
          margin-bottom: 20px;
        }
        .feature-card h3 {
          font-size: 18px;
          font-weight: 700;
          color: var(--text-dark);
          margin-bottom: 10px;
        }
        .feature-card p {
          font-size: 14px;
          color: var(--text-medium);
          line-height: 1.7;
        }

        /* CTA section */
        .cta-section {
          background: linear-gradient(135deg, var(--secondary) 0%, #2d2d5a 100%);
          padding: 80px 24px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .cta-section::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(226,0,26,0.15) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
        }
        .cta-inner {
          position: relative;
          z-index: 1;
          max-width: 600px;
          margin: 0 auto;
        }
        .cta-inner h2 {
          font-size: clamp(28px, 4vw, 44px);
          font-weight: 800;
          color: white;
          letter-spacing: -1px;
          margin-bottom: 16px;
          line-height: 1.15;
        }
        .cta-inner p {
          font-size: 16px;
          color: rgba(255,255,255,0.6);
          margin-bottom: 36px;
          line-height: 1.6;
        }
        .cta-btns {
          display: flex;
          gap: 14px;
          justify-content: center;
          flex-wrap: wrap;
        }
        .cta-btn-primary {
          padding: 14px 32px;
          background: linear-gradient(135deg, #e2001a, #ff4d6d);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 700;
          font-size: 16px;
          text-decoration: none;
          transition: all 0.2s ease;
          box-shadow: 0 8px 24px rgba(226,0,26,0.35);
          display: inline-flex;
          align-items: center;
          gap: 8px;
        }
        .cta-btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 12px 32px rgba(226,0,26,0.45);
        }
        .cta-btn-secondary {
          padding: 14px 32px;
          background: rgba(255,255,255,0.1);
          color: white;
          border-radius: var(--radius-md);
          font-weight: 600;
          font-size: 16px;
          text-decoration: none;
          border: 1.5px solid rgba(255,255,255,0.2);
          transition: all 0.2s ease;
          backdrop-filter: blur(8px);
        }
        .cta-btn-secondary:hover {
          background: rgba(255,255,255,0.18);
          transform: translateY(-2px);
        }

        @media (max-width: 768px) {
          .hero { padding: 100px 20px 48px; }
          .hero-stats { gap: 24px; }
          .hero-stat-divider { display: none; }
          .features-grid { grid-template-columns: 1fr; }
          .trust-bar-inner { gap: 16px; }
        }
      `}</style>

      <Header />

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-badge">
            <div className="hero-badge-dot" />
            100% Free PDF Tools Online
          </div>
          <h1>
            Every tool you need to<br />
            work with <span>PDFs</span>
          </h1>
          <p className="hero-subtitle">
            All tools you need to use PDFs, at your fingertips. All are 100% FREE and easy to use! 
            Merge, split, compress, convert, rotate, unlock and watermark PDFs with just a few clicks.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-value">45M+</span>
              <span className="hero-stat-label">Users</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">30+</span>
              <span className="hero-stat-label">PDF Tools</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">100%</span>
              <span className="hero-stat-label">Free to Use</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-value">256-bit</span>
              <span className="hero-stat-label">SSL Encryption</span>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-bar-inner">
          <div className="trust-item">
            <div className="trust-icon green">✓</div>
            No software installation
          </div>
          <div className="trust-item">
            <div className="trust-icon blue">🔒</div>
            Secure file handling
          </div>
          <div className="trust-item">
            <div className="trust-icon orange">⚡</div>
            Fast processing
          </div>
          <div className="trust-item">
            <div className="trust-icon green">♻</div>
            Auto file deletion
          </div>
          <div className="trust-item">
            <div className="trust-icon blue">📱</div>
            Works on all devices
          </div>
        </div>
      </div>

      {/* Tools Grid */}
      <div className="section-header">
        <p className="section-title">All PDF Tools</p>
      </div>
      <ToolGrid />

      {/* Features Section */}
      <section className="features-section">
        <div className="features-inner">
          <div className="features-header">
            <h2>Why choose iLovePDF?</h2>
            <p>Trusted by millions of users worldwide for fast, secure, and easy PDF processing.</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#FEF0EC", fontSize: "26px" }}>🔒</div>
              <h3>Secure & Private</h3>
              <p>
                All files are encrypted with 256-bit SSL. Your files are automatically deleted 
                after processing. We never share your documents with anyone.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#EBF1FD", fontSize: "26px" }}>⚡</div>
              <h3>Fast Processing</h3>
              <p>
                Our powerful servers process your PDF files instantly. No waiting around — 
                download your files in seconds after processing.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#F0F8E8", fontSize: "26px" }}>✨</div>
              <h3>High Quality Results</h3>
              <p>
                Our tools maintain the highest quality possible. Whether converting, compressing, 
                or editing, your documents come out looking perfect.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#F5EDF5", fontSize: "26px" }}>📱</div>
              <h3>Works Everywhere</h3>
              <p>
                Use iLovePDF on any device — desktop, tablet, or mobile. Works in all major 
                browsers without any software installation.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#FEF4EC", fontSize: "26px" }}>🆓</div>
              <h3>100% Free to Use</h3>
              <p>
                All basic PDF tools are completely free. No hidden fees, no watermarks on basic 
                operations, no registration required.
              </p>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: "#F0EEFF", fontSize: "26px" }}>🤖</div>
              <h3>AI-Powered Tools</h3>
              <p>
                Leverage artificial intelligence to summarize, translate, and extract insights 
                from your PDF documents instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-inner">
          <h2>Get started with iLovePDF today</h2>
          <p>
            Join over 45 million users worldwide. Sign up for free and access all PDF tools 
            without any limitations.
          </p>
          <div className="cta-btns">
            <a href="/register" className="cta-btn-primary">
              🚀 Get started for free
            </a>
            <a href="/pricing" className="cta-btn-secondary">
              View pricing
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
