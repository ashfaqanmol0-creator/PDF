"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";

const convertToTools = [
  { href: "/jpg_to_pdf", label: "JPG to PDF" },
  { href: "/word_to_pdf", label: "WORD to PDF" },
  { href: "/powerpoint_to_pdf", label: "POWERPOINT to PDF" },
  { href: "/excel_to_pdf", label: "EXCEL to PDF" },
  { href: "/html-to-pdf", label: "HTML to PDF" },
];

const convertFromTools = [
  { href: "/pdf_to_jpg", label: "PDF to JPG" },
  { href: "/pdf_to_word", label: "PDF to WORD" },
  { href: "/pdf_to_powerpoint", label: "PDF to POWERPOINT" },
  { href: "/pdf_to_excel", label: "PDF to EXCEL" },
  { href: "/pdf_to_pdfa", label: "PDF to PDF/A" },
];

const allTools = {
  organize: [
    { href: "/merge_pdf", label: "Merge PDF" },
    { href: "/split_pdf", label: "Split PDF" },
    { href: "/remove-pages", label: "Remove pages" },
    { href: "/extract-pages", label: "Extract pages" },
    { href: "/organize-pdf", label: "Organize PDF" },
    { href: "/scan-pdf", label: "Scan to PDF" },
  ],
  optimize: [
    { href: "/compress_pdf", label: "Compress PDF" },
    { href: "/repair-pdf", label: "Repair PDF" },
    { href: "/ocr-pdf", label: "OCR PDF" },
  ],
  convertTo: convertToTools,
  convertFrom: convertFromTools,
  edit: [
    { href: "/rotate_pdf", label: "Rotate PDF" },
    { href: "/add_pdf_page_number", label: "Add page numbers" },
    { href: "/pdf_add_watermark", label: "Add watermark" },
    { href: "/crop-pdf", label: "Crop PDF" },
    { href: "/edit-pdf", label: "Edit PDF" },
    { href: "/pdf-forms", label: "PDF Forms" },
  ],
  security: [
    { href: "/unlock_pdf", label: "Unlock PDF" },
    { href: "/protect-pdf", label: "Protect PDF" },
    { href: "/sign-pdf", label: "Sign PDF" },
    { href: "/redact-pdf", label: "Redact PDF" },
    { href: "/compare-pdf", label: "Compare PDF" },
  ],
  intelligence: [
    { href: "/pdf-summarize", label: "AI Summarizer" },
    { href: "/translate-pdf", label: "Translate PDF" },
  ],
};

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [allToolsDropdownOpen, setAllToolsDropdownOpen] = useState(false);
  const [convertDropdownOpen, setConvertDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setAllToolsDropdownOpen(false);
        setConvertDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <style>{`
        .header {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 1000;
          background: rgba(255,255,255,0.97);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
          border-bottom: 1px solid transparent;
          transition: all 0.3s ease;
          height: 64px;
        }
        .header.scrolled {
          border-bottom-color: var(--border-light);
          box-shadow: var(--shadow-sm);
        }
        .header-inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px;
          height: 100%;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          flex-shrink: 0;
        }
        .logo-icon {
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
          box-shadow: 0 4px 12px rgba(226,0,26,0.3);
        }
        .logo-text {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark);
          letter-spacing: -0.5px;
        }
        .logo-text span {
          color: var(--primary);
        }
        
        .nav-desktop {
          display: flex;
          align-items: center;
          gap: 4px;
          margin-left: 16px;
        }
        .nav-link {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 8px 12px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 500;
          color: var(--text-medium);
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          background: none;
          border: none;
        }
        .nav-link:hover, .nav-link.active {
          background: #f5f5f8;
          color: var(--text-dark);
        }
        .nav-link svg {
          transition: transform 0.2s ease;
        }
        .nav-link:hover svg {
          transform: rotate(180deg);
        }

        /* Dropdowns */
        .dropdown-wrapper {
          position: relative;
        }
        .dropdown-mega {
          position: absolute;
          top: calc(100% + 8px);
          left: 50%;
          transform: translateX(-50%);
          background: white;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          min-width: 720px;
          padding: 24px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          animation: fadeInUp 0.2s ease;
          z-index: 1000;
        }
        .dropdown-simple {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          background: white;
          border: 1px solid var(--border-light);
          border-radius: var(--radius-lg);
          box-shadow: var(--shadow-lg);
          min-width: 200px;
          padding: 12px;
          animation: fadeInUp 0.2s ease;
          z-index: 1000;
        }
        .dropdown-group-title {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          margin-bottom: 8px;
          padding: 0 8px;
        }
        .dropdown-item {
          display: block;
          padding: 7px 10px;
          border-radius: var(--radius-sm);
          font-size: 13.5px;
          color: var(--text-medium);
          font-weight: 500;
          transition: all 0.15s ease;
          white-space: nowrap;
        }
        .dropdown-item:hover {
          background: #f5f5f8;
          color: var(--primary);
        }

        /* Spacer */
        .nav-spacer { flex: 1; }

        /* Nav actions */
        .nav-actions {
          display: flex;
          align-items: center;
          gap: 10px;
          flex-shrink: 0;
        }
        .nav-login-btn {
          padding: 8px 18px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 600;
          color: var(--text-medium);
          cursor: pointer;
          transition: all 0.2s ease;
          background: none;
          border: none;
          text-decoration: none;
        }
        .nav-login-btn:hover {
          color: var(--text-dark);
        }
        .nav-signup-btn {
          padding: 8px 20px;
          border-radius: var(--radius-sm);
          font-size: 14px;
          font-weight: 700;
          color: white;
          background: linear-gradient(135deg, #e2001a, #ff4d6d);
          border: none;
          cursor: pointer;
          transition: all 0.2s ease;
          box-shadow: 0 4px 12px rgba(226,0,26,0.25);
          text-decoration: none;
          display: inline-flex;
          align-items: center;
        }
        .nav-signup-btn:hover {
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(226,0,26,0.35);
        }

        /* Mobile menu button */
        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          border-radius: 8px;
          transition: background 0.2s;
          margin-left: auto;
        }
        .mobile-menu-btn:hover { background: #f5f5f8; }
        .mobile-menu-btn span {
          display: block;
          width: 22px;
          height: 2px;
          background: var(--text-dark);
          border-radius: 2px;
          transition: all 0.3s ease;
        }
        .mobile-menu-btn.open span:nth-child(1) {
          transform: translateY(7px) rotate(45deg);
        }
        .mobile-menu-btn.open span:nth-child(2) {
          opacity: 0;
        }
        .mobile-menu-btn.open span:nth-child(3) {
          transform: translateY(-7px) rotate(-45deg);
        }

        /* Mobile overlay menu */
        .mobile-overlay {
          display: none;
          position: fixed;
          top: 64px; left: 0; right: 0; bottom: 0;
          background: white;
          z-index: 999;
          overflow-y: auto;
          padding: 20px 24px;
          animation: fadeInUp 0.2s ease;
        }
        .mobile-overlay.open { display: block; }
        .mobile-section-title {
          font-size: 11px;
          font-weight: 700;
          color: var(--text-light);
          text-transform: uppercase;
          letter-spacing: 1px;
          padding: 16px 0 8px;
          border-top: 1px solid var(--border-light);
          margin-top: 8px;
        }
        .mobile-section-title:first-child { border-top: none; margin-top: 0; }
        .mobile-nav-item {
          display: block;
          padding: 10px 8px;
          font-size: 15px;
          font-weight: 500;
          color: var(--text-medium);
          border-radius: 8px;
          transition: all 0.15s ease;
        }
        .mobile-nav-item:hover {
          background: #f5f5f8;
          color: var(--primary);
        }
        .mobile-auth-btns {
          display: flex;
          gap: 12px;
          margin-top: 24px;
          padding-top: 24px;
          border-top: 1px solid var(--border-light);
        }
        .mobile-auth-btns a {
          flex: 1;
          text-align: center;
          padding: 12px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
        }

        @media (max-width: 768px) {
          .nav-desktop, .nav-spacer, .nav-actions { display: none; }
          .mobile-menu-btn { display: flex; }
        }
      `}</style>

      <header className={`header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-inner" ref={dropdownRef}>
          {/* Logo */}
          <Link href="/" className="logo">
            <div className="logo-icon">i</div>
            <span className="logo-text">iLove<span>PDF</span></span>
          </Link>

          {/* Desktop Nav */}
          <nav className="nav-desktop">
            {/* Merge */}
            <Link href="/merge_pdf" className="nav-link">Merge PDF</Link>
            {/* Split */}
            <Link href="/split_pdf" className="nav-link">Split PDF</Link>
            {/* Compress */}
            <Link href="/compress_pdf" className="nav-link">Compress PDF</Link>

            {/* Convert PDF dropdown */}
            <div className="dropdown-wrapper">
              <button
                className={`nav-link ${convertDropdownOpen ? "active" : ""}`}
                onClick={() => { setConvertDropdownOpen(!convertDropdownOpen); setAllToolsDropdownOpen(false); }}
              >
                Convert PDF
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {convertDropdownOpen && (
                <div className="dropdown-simple" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", minWidth: "360px", gap: "0 16px" }}>
                  <div>
                    <div className="dropdown-group-title">Convert to PDF</div>
                    {convertToTools.map(t => (
                      <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setConvertDropdownOpen(false)}>{t.label}</Link>
                    ))}
                  </div>
                  <div>
                    <div className="dropdown-group-title">Convert from PDF</div>
                    {convertFromTools.map(t => (
                      <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setConvertDropdownOpen(false)}>{t.label}</Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* All PDF Tools dropdown */}
            <div className="dropdown-wrapper">
              <button
                className={`nav-link ${allToolsDropdownOpen ? "active" : ""}`}
                onClick={() => { setAllToolsDropdownOpen(!allToolsDropdownOpen); setConvertDropdownOpen(false); }}
              >
                All PDF tools
                <svg width="12" height="12" viewBox="0 0 12 12" fill="currentColor">
                  <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              {allToolsDropdownOpen && (
                <div className="dropdown-mega" style={{ gridTemplateColumns: "repeat(3, 1fr)" }}>
                  {/* Organize */}
                  <div>
                    <div className="dropdown-group-title">Organize PDF</div>
                    {allTools.organize.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                    <div className="dropdown-group-title" style={{marginTop:"16px"}}>Optimize PDF</div>
                    {allTools.optimize.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                  </div>
                  {/* Convert */}
                  <div>
                    <div className="dropdown-group-title">Convert to PDF</div>
                    {allTools.convertTo.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                    <div className="dropdown-group-title" style={{marginTop:"16px"}}>Convert from PDF</div>
                    {allTools.convertFrom.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                  </div>
                  {/* Edit, Security, Intelligence */}
                  <div>
                    <div className="dropdown-group-title">Edit PDF</div>
                    {allTools.edit.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                    <div className="dropdown-group-title" style={{marginTop:"16px"}}>PDF Security</div>
                    {allTools.security.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                    <div className="dropdown-group-title" style={{marginTop:"16px"}}>PDF Intelligence</div>
                    {allTools.intelligence.map(t => <Link key={t.href} href={t.href} className="dropdown-item" onClick={() => setAllToolsDropdownOpen(false)}>{t.label}</Link>)}
                  </div>
                </div>
              )}
            </div>
          </nav>

          <div className="nav-spacer" />

          {/* Auth Actions */}
          <div className="nav-actions">
            <Link href="/login" className="nav-login-btn">Login</Link>
            <Link href="/register" className="nav-signup-btn">Sign up free</Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`mobile-menu-btn ${mobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </header>

      {/* Mobile Overlay */}
      <div className={`mobile-overlay ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-section-title">Most Used</div>
        <Link href="/merge_pdf" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Merge PDF</Link>
        <Link href="/split_pdf" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Split PDF</Link>
        <Link href="/compress_pdf" className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>Compress PDF</Link>
        <div className="mobile-section-title">Organize PDF</div>
        {allTools.organize.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        <div className="mobile-section-title">Convert PDF</div>
        {allTools.convertTo.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        {allTools.convertFrom.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        <div className="mobile-section-title">Edit PDF</div>
        {allTools.edit.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        <div className="mobile-section-title">PDF Security</div>
        {allTools.security.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        <div className="mobile-section-title">PDF Intelligence</div>
        {allTools.intelligence.map(t => <Link key={t.href} href={t.href} className="mobile-nav-item" onClick={() => setMobileMenuOpen(false)}>{t.label}</Link>)}
        <div className="mobile-auth-btns">
          <Link href="/login" className="btn btn-ghost" onClick={() => setMobileMenuOpen(false)}>Login</Link>
          <Link href="/register" className="btn btn-primary" onClick={() => setMobileMenuOpen(false)}>Sign up free</Link>
        </div>
      </div>
    </>
  );
}
