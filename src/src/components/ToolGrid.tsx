"use client";

import { useState } from "react";
import { tools, categories, Tool } from "@/lib/tools";
import { getToolIcon } from "@/components/ToolIcons";
import Link from "next/link";

export default function ToolGrid() {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredTools = activeCategory === "all"
    ? tools
    : tools.filter(t => t.category === activeCategory);

  return (
    <>
      <style>{`
        .tools-section {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        /* Filter tabs */
        .filter-tabs {
          display: flex;
          align-items: center;
          gap: 8px;
          flex-wrap: wrap;
          margin-bottom: 40px;
          padding: 6px;
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          box-shadow: var(--shadow-sm);
          width: fit-content;
        }
        .filter-tab {
          padding: 8px 20px;
          border-radius: var(--radius-sm);
          font-size: 13.5px;
          font-weight: 600;
          color: var(--text-medium);
          cursor: pointer;
          transition: all 0.2s ease;
          background: none;
          border: none;
          white-space: nowrap;
        }
        .filter-tab:hover {
          color: var(--text-dark);
          background: #f5f5f8;
        }
        .filter-tab.active {
          background: var(--primary);
          color: white;
          box-shadow: 0 4px 12px rgba(226,0,26,0.25);
        }

        /* Tools grid */
        .tools-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 16px;
        }

        /* Tool card */
        .tool-card {
          background: white;
          border-radius: var(--radius-lg);
          border: 1px solid var(--border-light);
          padding: 24px 20px;
          text-decoration: none;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 12px;
          transition: all 0.25s ease;
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .tool-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--card-color, var(--primary));
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 0.3s ease;
        }
        .tool-card:hover {
          border-color: transparent;
          box-shadow: var(--shadow-md);
          transform: translateY(-4px);
        }
        .tool-card:hover::before {
          transform: scaleX(1);
        }
        .tool-card:hover .tool-card-arrow {
          opacity: 1;
          transform: translateX(0);
        }
        .tool-card-icon {
          width: 52px;
          height: 52px;
          border-radius: 14px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--card-bg, #f5f5f8);
          padding: 6px;
          transition: transform 0.2s ease;
        }
        .tool-card:hover .tool-card-icon {
          transform: scale(1.08);
        }
        .tool-card h3 {
          font-size: 15px;
          font-weight: 700;
          color: var(--text-dark);
          line-height: 1.3;
        }
        .tool-card p {
          font-size: 13px;
          color: var(--text-light);
          line-height: 1.6;
          flex: 1;
        }
        .tool-card-arrow {
          align-self: flex-end;
          width: 28px;
          height: 28px;
          border-radius: 50%;
          background: var(--card-color, var(--primary));
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transform: translateX(-8px);
          transition: all 0.25s ease;
          margin-top: 4px;
        }
        .tool-card-arrow svg {
          color: white;
        }

        @media (max-width: 1024px) {
          .tools-grid { grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); }
        }
        @media (max-width: 640px) {
          .tools-grid { grid-template-columns: repeat(2, 1fr); gap: 12px; }
          .filter-tabs { width: 100%; justify-content: flex-start; overflow-x: auto; }
          .tool-card { padding: 18px 14px; }
        }
      `}</style>

      <div className="tools-section">
        {/* Filter Tabs */}
        <div className="filter-tabs">
          {categories.map(cat => (
            <button
              key={cat.id}
              className={`filter-tab ${activeCategory === cat.id ? "active" : ""}`}
              onClick={() => setActiveCategory(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="tools-grid">
          {filteredTools.map((tool, index) => (
            <ToolCard key={tool.id} tool={tool} index={index} />
          ))}
        </div>
      </div>
    </>
  );
}

function ToolCard({ tool, index }: { tool: Tool; index: number }) {
  return (
    <Link
      href={tool.href}
      className="tool-card"
      style={{
        "--card-color": tool.color,
        "--card-bg": tool.bgColor,
        animationDelay: `${index * 0.04}s`,
      } as React.CSSProperties}
    >
      <div className="tool-card-icon">
        {getToolIcon(tool.id, 38)}
      </div>
      <h3>{tool.title}</h3>
      <p>{tool.description}</p>
      <div className="tool-card-arrow">
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
          <path d="M3 7h8M8 4l3 3-3 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </Link>
  );
}
