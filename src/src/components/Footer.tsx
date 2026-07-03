import Link from "next/link";

export default function Footer() {
  return (
    <>
      <style>{`
        .footer {
          background: var(--secondary);
          color: rgba(255,255,255,0.7);
          margin-top: 80px;
        }
        .footer-top {
          max-width: 1280px;
          margin: 0 auto;
          padding: 60px 24px 40px;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr 1fr;
          gap: 40px;
        }
        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .footer-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
        }
        .footer-logo-icon {
          width: 36px;
          height: 36px;
          background: linear-gradient(135deg, #e2001a 0%, #ff4d6d 100%);
          border-radius: 10px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-weight: 900;
          font-size: 18px;
        }
        .footer-logo-text {
          font-size: 20px;
          font-weight: 800;
          color: white;
          letter-spacing: -0.5px;
        }
        .footer-logo-text span { color: #ff4d6d; }
        .footer-tagline {
          font-size: 14px;
          line-height: 1.7;
          color: rgba(255,255,255,0.55);
          max-width: 260px;
        }
        .footer-social {
          display: flex;
          gap: 12px;
          margin-top: 8px;
        }
        .social-icon {
          width: 36px;
          height: 36px;
          border-radius: 8px;
          background: rgba(255,255,255,0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: rgba(255,255,255,0.6);
          transition: all 0.2s ease;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
        }
        .social-icon:hover {
          background: rgba(255,255,255,0.15);
          color: white;
          transform: translateY(-2px);
        }
        .footer-col-title {
          font-size: 12px;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1.2px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 16px;
        }
        .footer-col ul {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 10px;
        }
        .footer-col ul li a {
          font-size: 14px;
          color: rgba(255,255,255,0.6);
          text-decoration: none;
          transition: color 0.2s ease;
          display: block;
        }
        .footer-col ul li a:hover {
          color: white;
        }
        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.08);
          padding: 20px 24px;
          max-width: 1280px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .footer-copyright {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }
        .footer-legal {
          display: flex;
          gap: 20px;
        }
        .footer-legal a {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-legal a:hover { color: rgba(255,255,255,0.7); }
        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.07);
          padding: 6px 12px;
          border-radius: 20px;
          font-size: 12px;
          color: rgba(255,255,255,0.5);
          margin-top: 16px;
        }
        .footer-badge span { color: #8FBC5D; font-size: 16px; }

        @media (max-width: 900px) {
          .footer-top {
            grid-template-columns: 1fr 1fr;
            gap: 32px;
          }
          .footer-brand { grid-column: 1 / -1; }
        }
        @media (max-width: 600px) {
          .footer-top { grid-template-columns: 1fr; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          {/* Brand */}
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <div className="footer-logo-icon">i</div>
              <span className="footer-logo-text">iLove<span>PDF</span></span>
            </Link>
            <p className="footer-tagline">
              All the tools you need to work with PDFs in one place. 100% free and easy to use.
            </p>
            <div className="footer-badge">
              <span>🔒</span> Safe & Secure — Your files are protected
            </div>
            <div className="footer-social">
              <a href="#" className="social-icon" title="Twitter">X</a>
              <a href="#" className="social-icon" title="Facebook">f</a>
              <a href="#" className="social-icon" title="LinkedIn">in</a>
              <a href="#" className="social-icon" title="Instagram">ig</a>
            </div>
          </div>

          {/* PDF Tools */}
          <div className="footer-col">
            <div className="footer-col-title">PDF Tools</div>
            <ul>
              <li><Link href="/merge_pdf">Merge PDF</Link></li>
              <li><Link href="/split_pdf">Split PDF</Link></li>
              <li><Link href="/compress_pdf">Compress PDF</Link></li>
              <li><Link href="/rotate_pdf">Rotate PDF</Link></li>
              <li><Link href="/unlock_pdf">Unlock PDF</Link></li>
              <li><Link href="/protect-pdf">Protect PDF</Link></li>
              <li><Link href="/edit-pdf">Edit PDF</Link></li>
              <li><Link href="/sign-pdf">Sign PDF</Link></li>
            </ul>
          </div>

          {/* Convert */}
          <div className="footer-col">
            <div className="footer-col-title">Convert</div>
            <ul>
              <li><Link href="/jpg_to_pdf">JPG to PDF</Link></li>
              <li><Link href="/word_to_pdf">Word to PDF</Link></li>
              <li><Link href="/powerpoint_to_pdf">PowerPoint to PDF</Link></li>
              <li><Link href="/excel_to_pdf">Excel to PDF</Link></li>
              <li><Link href="/pdf_to_jpg">PDF to JPG</Link></li>
              <li><Link href="/pdf_to_word">PDF to Word</Link></li>
              <li><Link href="/pdf_to_excel">PDF to Excel</Link></li>
              <li><Link href="/html-to-pdf">HTML to PDF</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="footer-col">
            <div className="footer-col-title">Company</div>
            <ul>
              <li><Link href="/help/about">About us</Link></li>
              <li><Link href="/pricing">Pricing</Link></li>
              <li><Link href="/features">Features</Link></li>
              <li><Link href="/business">Business</Link></li>
              <li><Link href="/desktop">Desktop App</Link></li>
              <li><Link href="/mobile">Mobile App</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Help */}
          <div className="footer-col">
            <div className="footer-col-title">Help</div>
            <ul>
              <li><Link href="/help/faq">FAQ</Link></li>
              <li><Link href="/help/documentation">Documentation</Link></li>
              <li><Link href="/help/security">Security</Link></li>
              <li><Link href="/help/legal">Legal & Privacy</Link></li>
              <li><Link href="/help/about">About</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copyright">© 2024 iLovePDF Clone. All rights reserved.</span>
          <div className="footer-legal">
            <Link href="/help/legal">Privacy Policy</Link>
            <Link href="/help/legal">Terms of Service</Link>
            <Link href="/cookies">Cookies</Link>
          </div>
        </div>
      </footer>
    </>
  );
}
