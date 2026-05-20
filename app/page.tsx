export default function Page() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";
  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Legal Compliance
        </span>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-5">
          Scan Contractor Agreements for{" "}
          <span className="text-[#58a6ff]">Misclassification Risks</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          Upload your contractor agreements and get an instant AI-powered risk score based on IRS and DOL criteria. Catch compliance issues before they become costly penalties.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <a
            href={checkoutUrl}
            className="bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg transition-colors text-base"
          >
            Start Scanning — $18/mo
          </a>
          <a
            href="#faq"
            className="border border-[#30363d] hover:border-[#58a6ff] text-[#c9d1d9] px-8 py-3 rounded-lg transition-colors text-base"
          >
            Learn More
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-6 text-sm text-[#8b949e]">
          <span>✓ IRS 20-Factor Analysis</span>
          <span>✓ DOL Economic Reality Test</span>
          <span>✓ ABC Test Coverage</span>
          <span>✓ Actionable Recommendations</span>
        </div>
      </section>

      {/* How It Works */}
      <section className="max-w-3xl mx-auto px-6 pb-16">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { step: "1", title: "Upload Contract", desc: "Paste or upload your contractor agreement in seconds." },
            { step: "2", title: "AI Risk Analysis", desc: "Our AI flags risky clauses against IRS/DOL standards." },
            { step: "3", title: "Get Recommendations", desc: "Receive a risk score and compliant language suggestions." }
          ].map((item) => (
            <div key={item.step} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="text-[#58a6ff] text-2xl font-bold mb-2">{item.step}</div>
              <h3 className="text-white font-semibold mb-1">{item.title}</h3>
              <p className="text-[#8b949e] text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20 text-center">
        <h2 className="text-2xl font-bold text-white mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8">
          <div className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro Plan</div>
          <div className="text-5xl font-bold text-white mb-1">$18</div>
          <div className="text-[#8b949e] mb-6">/month</div>
          <ul className="text-left space-y-3 mb-8 text-sm">
            {[
              "Unlimited contract scans",
              "Full IRS 20-factor analysis",
              "DOL & ABC test coverage",
              "Clause-level risk highlighting",
              "Compliant language suggestions",
              "PDF & text upload support",
              "Priority email support"
            ].map((f) => (
              <li key={f} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span> {f}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors text-base"
          >
            Get Started Now
          </a>
          <p className="text-[#8b949e] text-xs mt-4">Cancel anytime. No contracts.</p>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {[
            {
              q: "What criteria does the scanner use?",
              a: "The scanner applies the IRS 20-factor behavioral and financial control test, the DOL Economic Reality Test, and the ABC Test used in many states to evaluate misclassification risk."
            },
            {
              q: "Is this a substitute for legal advice?",
              a: "No. This tool provides AI-assisted risk analysis to help you identify potential issues. Always consult a qualified employment attorney for final legal decisions."
            },
            {
              q: "What file formats are supported?",
              a: "You can paste contract text directly or upload PDF and plain text files. Support for DOCX is coming soon."
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-[#8b949e] text-sm">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t border-[#21262d] text-center py-8 text-[#8b949e] text-sm">
        © {new Date().getFullYear()} Contractor Classification Risk Scanner. Not legal advice.
      </footer>
    </main>
  );
}
