<template>
  <div class="docs-wrapper">
    <header class="docs-header">
      <div class="announcement-banner">
        <span>
          v4 public beta is live! Next-gen performance and features are here 
          <a href="#">[See What's New]</a>.
        </span>
      </div>

      <nav class="main-navbar">
        <div class="nav-left">
          <div class="logo">
            <span class="logo-text">💠WaveFlutter</span>
          </div>

          <ul class="nav-links">
            <li><a href="#" class="active">Documentation</a></li>
            <li><a href="#">API References</a></li>
            <li><a href="#">Support</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </div>

        <div class="nav-right">
          <div class="version-select">
            <span>v4.0.0</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>

          <div class="search-box">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
            <input type="text" placeholder="Search" />
            <kbd>⌘ K</kbd>
          </div>

          <button class="ask-ai-btn">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8z"/>
            </svg>
            Ask AI
          </button>
        </div>
      </nav>
    </header>

    <div class="docs-layout">
      <aside class="sidebar">
        <div class="nav-section">
          <h5 class="nav-header">INTRODUCTION</h5>
          <ul class="nav-list">
            <li class="nav-item active">Getting Started</li>
            <li class="nav-item has-arrow">Quickstart</li>
            <li class="nav-item">Integration Journey</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">CORE CONCEPTS</h5>
          <ul class="nav-list">
            <li class="nav-item">Environments</li>
            <li class="nav-item">Authentication</li>
            <li class="nav-item">Supported Request Headers</li>
            <li class="nav-item">Encryption</li>
            <li class="nav-item">Errors</li>
            <li class="nav-item">Webhooks</li>
            <li class="nav-item">Idempotency</li>
            <li class="nav-item">Testing</li>
            <li class="nav-item">Best Practices</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">COLLECTIONS - INFLOW</h5>
          <ul class="nav-list">
            <li class="nav-item has-arrow">Introduction</li>
            <li class="nav-item">Card Payments</li>
            <li class="nav-item">Mobile Money</li>
            <li class="nav-item">Pay With Bank Transfer</li>
            <li class="nav-item">USSD</li>
            <li class="nav-item">OPay</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">PAYOUTS - OUTFLOWS</h5>
          <ul class="nav-list">
            <li class="nav-item has-arrow">Introduction</li>
            <li class="nav-item">Bank Account Transfers</li>
            <li class="nav-item">Mobile Money Transfers</li>
            <li class="nav-item">Wallet-to-Wallet</li>
            <li class="nav-item">Stablecoins</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">PAYMENT OPERATIONS</h5>
          <ul class="nav-list">
            <li class="nav-item">Settlements</li>
            <li class="nav-item">Refunds</li>
            <li class="nav-item">Chargebacks</li>
            <li class="nav-item">Reporting VAT</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">USE CASES</h5>
          <ul class="nav-list">
            <li class="nav-item">Fintechs</li>
            <li class="nav-item">Banks and OFIs</li>
            <li class="nav-item">Travel and Hospitality</li>
            <li class="nav-item">E-Commerce</li>
            <li class="nav-item">Remittance</li>
            <li class="nav-item">Telecommunications</li>
          </ul>
        </div>

        <div class="nav-divider"></div>

        <div class="nav-section">
          <h5 class="nav-header">API WORKFLOWS</h5>
          <ul class="nav-list">
            <li class="nav-item">Loan disbursements</li>
            <li class="nav-item">Real-time FX conversion</li>
          </ul>
        </div>
      </aside>

      <main class="content">
        <div class="content-inner">
          <h1>Getting Started</h1>
          <p class="subtitle">
            Create an account and learn how to start using Flutterwave.
          </p>

          <hr />

          <p>
            Flutterwave APIs help you collect payments seamlessly in your
            application. You can quickly integrate using our SDKs, prebuilt UIs or
            build custom solutions using our APIs.
          </p>

          <p class="link">
            <a href="#">Create an account</a> to start integrating our payment solutions.
          </p>

          <div class="cards">
            <div class="card">
              <div class="image">
                <img src="/tool.jpg" alt="Quickstart" />
              </div>
              <h2>Quickstart</h2>
              <p>Start building right away with these essential steps.</p>
            </div>

            <div class="card">
              <div class="image pink">
                <img src="/pink.png" alt="API Basics" />
              </div>
              <h2>API Basics</h2>
              <p>Understand the fundamentals of making API requests.</p>
            </div>

            <div class="card">
              <div class="image">
                <img src="/global.png" alt="Payment Methods" />
              </div>
              <h2>Payment Methods</h2>
              <p>Accept payments globally with different payment methods.</p>
            </div>
          </div>

          <section class="api-section" id="accept-payment">
            <h2>Accept a Payment</h2>
            <p>Explore how our collections (inflow) work.</p>

            <div class="api-card">
              <div class="api-info">
                <h3>Before you begin</h3>
                <p>
                  Authenticate all Flutterwave API calls using the Token Generated
                  with your CLIENT ID and CLIENT SECRET
                </p>
                <button>Begin</button>
              </div>

              <div class="api-code">
                <div class="endpoint">
                  <span>POST</span>
                  https://idp.flutterwave.com/realms/flutterwave/token
                </div>
                <div class="code-box">
                  <pre>
curl https://idp.flutterwave.com/realms/flutterwave/protocol/openid-co
nnect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d '{\"grant_type\":\"client_credentials\"}' \
  -X POST
                  </pre>
                </div>
              </div>
            </div>
            <hr />
          </section>

          <section class="api-section" id="make-transfer">
            <h2>Make a Transfer</h2>
            <p>Understand how transfers work with Flutterwave.</p>

            <div class="api-card">
              <div class="api-info">
                <h3>Before you begin</h3>
                <p>
                  Authenticate all Flutterwave API calls using the Token Generated
                  with your CLIENT ID and CLIENT SECRET
                </p>
                <button>Begin</button>
              </div>

              <div class="api-code">
                <div class="endpoint">
                  <span>POST</span>
                  https://idp.flutterwave.com/realms/flutterwave/token
                </div>
                <div class="code-box">
                  <pre>
curl https://idp.flutterwave.com/realms/flutterwave/protocol/openid-co
nnect/token \
  -H "Content-Type: application/x-www-form-urlencoded" \
  -d "grant_type=client_credentials" \
  -X POST
                  </pre>
                </div>
              </div>
            </div>
            <hr />
          </section>

          <footer class="content-footer">
            <a href="#" class="next-page-link">
              Quickstart
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </a>

            <div class="feedback-card">
              <span class="feedback-text">Did this page help you?</span>
              <div class="feedback-buttons">
                <button class="feedback-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path>
                  </svg>
                  Yes
                </button>
                <button class="feedback-btn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M10 15v4a3 3 0 0 0 3 3l4-9V2H5.72a2 2 0 0 0-2 1.7l-1.38 9a2 2 0 0 0 2 2.3zm7-13h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2h-3"></path>
                  </svg>
                  No
                </button>
              </div>
            </div>
          </footer>
        </div>
      </main>

      <aside class="toc-inline">
        <button class="copy-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
          </svg>
          Copy Page
        </button>
        <h5>TABLE OF CONTENTS</h5>
        <ul>
          <li><a href="#accept-payment">Accept a Payment</a></li>
          <li><a href="#make-transfer">Make a Transfer</a></li>
        </ul>
      </aside>
    </div>
  </div>
</template>

<script setup></script>

<style scoped>
/* Reset */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.docs-wrapper {
  width: 100%;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
}

/* ==========================================
   TOP HEADER & BANNER STYLES
========================================== */
.docs-header {
  position: sticky;
  top: 0;
  z-index: 100;
  background: #ffffff;
  border-bottom: 1px solid #e5e7eb;
}

/* Dark Announcement Bar */
.announcement-banner {
  background-color: #252849;
  color: #ffffff;
  text-align: center;
  padding: 12px 32px;
  font-size: 13px;
  font-weight: 500;
}

.announcement-banner span {
  font-size: 14px;
}

.announcement-banner a {
  color: #ffffff;
  text-decoration: underline;
  margin-left: 4px;
}

/* Main Navigation Bar */
.main-navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 28px;
  background-color: #ffffff;
}

.nav-left, .nav-right {
  display: flex;
  align-items: center;
  gap: 28px;
}

/* Logo */
.logo {
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text {
  font-size: 20px;
  font-weight: 800;
  color: #1f2937;
  letter-spacing: -0.5px;
}

/* Nav Links */
.nav-links {
  margin-left: 45px;
  display: flex;
  list-style: none;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: #4b5563;
  font-size: 15px;
  font-weight: 600;
  transition: color 0.15s ease;
}

.nav-links a:hover,
.nav-links a.active {
  color: #111827;
}

/* Version Selector */
.version-select {
  display: flex;
  align-items: center;
  gap: 6px;
  color: #4b5563;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
}

/* Search Box */
.search-box {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1px solid #d1d5db;
  border-radius: 8px;
  padding: 6px 12px;
  color: #9ca3af;
  width: 220px;
}

.search-box input {
  border: none;
  outline: none;
  background: transparent;
  width: 100%;
  font-size: 14px;
  color: #1f2937;
}

.search-box kbd {
  background: #f3f4f6;
  border: 1px solid #e5e7eb;
  border-radius: 4px;
  padding: 2px 5px;
  font-size: 11px;
  color: #6b7280;
  font-family: inherit;
}

/* Ask AI Button */
.ask-ai-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background-color: #ffffff;
  border: 1.5px solid #1f2937;
  color: #1f2937;
  font-size: 14px;
  font-weight: 700;
  padding: 8px 16px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.ask-ai-btn:hover {
  background-color: #f9fafb;
}

/* ==========================================
   MAIN GRID LAYOUT (3 COLUMNS)
========================================== */
.docs-layout {
  display: grid;
  grid-template-columns: 260px 1fr 220px;
  min-height: calc(100vh - 110px);
}

/* ==========================================
   LEFT SIDEBAR
========================================== */
.sidebar {
  padding: 24px 0;
  background: #f9fafb;
  border-right: 1px solid #e5e7eb;
  height: calc(100vh - 110px);
  overflow-y: auto;
  position: sticky;
  top: 110px;
}

.nav-header {
  color: #6b7280;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  padding: 12px 24px 8px 24px;
}

.nav-list {
  list-style: none;
}

.nav-item {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 24px;
  font-size: 14px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
}

.nav-item:hover {
  background-color: #f3f4f6;
  color: #111827;
}

.nav-item.active {
  background-color: #ffffff;
  color: #111827;
  font-weight: 700;
}

.nav-item.active::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 4px;
  background-color: #f59e0b;
}

.nav-item.has-arrow::after {
  content: "";
  display: inline-block;
  width: 6px;
  height: 6px;
  border-right: 1.5px solid #9ca3af;
  border-top: 1.5px solid #9ca3af;
  transform: rotate(45deg);
}

.nav-divider {
  height: 1px;
  background-color: #e5e7eb;
  margin: 16px 0;
}

/* ==========================================
   MAIN CONTENT AREA
========================================== */

/* ==========================================
   CARDS
========================================== */


/* Sticky Table of Contents (3rd Column) */
.toc-inline {
  padding: 40px 24px 0 0;
  position: sticky;
  top: 110px;
  height: fit-content;
}

.copy-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  padding: 8px 12px;
  border: 1px solid #d1d5db;
  background: #ffffff;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 600;
  color: #374151;
  cursor: pointer;
  transition: background-color 0.15s ease;
}

.copy-btn:hover {
  background-color: #f9fafb;
}

.toc-inline h5 {
  margin: 20px 0 10px;
  color: #6b7280;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}

.toc-inline ul {
  list-style: none;
  padding: 0;
}

.toc-inline li {
  margin-bottom: 8px;
}

.toc-inline a {
  color: #4b5563;
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: color 0.15s ease;
}

.toc-inline a:hover {
  color: #111827;
}

/* ==========================================
   API SECTIONS
========================================== */
.api-section {
  margin-top: 40px;
}

.api-section h2 {
  color: #222b65;
  font-size: 22px;
  margin-bottom: 6px;
}

.api-section > p {
  margin-bottom: 20px;
  color: #555;
  font-size: 14px;
}

.api-card {
  display: grid;
  grid-template-columns: 200px 1fr;
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  overflow: hidden;
  width: 100%;
  background: white;
}

.api-info {
  background: #f8fafc;
  padding: 24px 18px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid #e5e7eb;
}

.api-info h3 {
  font-size: 15px;
  color: #222;
  margin-bottom: 10px;
}

.api-info p {
  font-size: 13px;
  line-height: 1.5;
  color: #667;
}

.api-info button {
  margin-top: 24px;
  padding: 10px;
  border: none;
  border-radius: 8px;
  background: #ff9f00;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

.api-code {
  padding: 16px;
}

.endpoint {
  font-size: 13px;
  color: #555;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: monospace;
}

.endpoint span {
  background: #d8f5dc;
  color: #208b35;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: bold;
}

.code-box {
  background: #062333;
  border-radius: 8px;
  padding: 16px;
  min-height: 140px;
  overflow: auto;
}

.code-box pre {
  color: white;
  font-size: 12.5px;
  line-height: 1.6;
  font-family: monospace;
}

/* ==========================================
   CONTENT FOOTER
========================================== */
.content-footer {
  margin-top: 40px;
  padding-top: 20px;
  border-top: 1px solid #e5e7eb;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 16px;
}

.next-page-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: #374151;
  font-size: 15px;
  font-weight: 600;
  text-decoration: none;
}

.feedback-card {
  width: 100%;
  background-color: #f8fafc;
  border: 1px solid #e5e7eb;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
}

.feedback-text {
  color: #4b5563;
  font-size: 14px;
  font-weight: 500;
}

.feedback-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
}

.feedback-btn {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: white;
  border: 1px solid #d1d5db;
  color: #374151;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  padding: 6px 12px;
  border-radius: 6px;
}

.feedback-btn:hover {
  background-color: #f3f4f6;
  color: #111827;
}
</style>