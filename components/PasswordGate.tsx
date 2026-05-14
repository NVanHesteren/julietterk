"use client";

import { useState, useEffect } from "react";

const PASS = "123";
const STORAGE_KEY = "jrk-auth";

export default function PasswordGate({ children }: { children: React.ReactNode }) {
  const [status, setStatus] = useState<"loading" | "locked" | "unlocked">("loading");
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    setStatus(sessionStorage.getItem(STORAGE_KEY) === "true" ? "unlocked" : "locked");
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input === PASS) {
      sessionStorage.setItem(STORAGE_KEY, "true");
      setStatus("unlocked");
    } else {
      setError(true);
      setInput("");
    }
  };

  if (status === "loading") {
    return <div className="fixed inset-0 z-[100] bg-ink" />;
  }

  if (status === "unlocked") return <>{children}</>;

  return (
    <div className="fixed inset-0 z-[100] bg-ink flex items-center justify-center">
      <div className="text-center px-8">
        <span className="text-[11px] uppercase tracking-[0.18em] text-sage-pale font-medium">
          julietterk.com
        </span>
        <h1 className="font-serif font-light text-[clamp(2rem,4vw,3rem)] text-cream mt-4 mb-3 tracking-[-0.02em]">
          Site under construction
        </h1>
        <p className="text-cream/50 text-sm mb-8">Enter password to preview</p>
        <form onSubmit={handleSubmit} className="flex gap-3 justify-center">
          <input
            type="password"
            value={input}
            onChange={(e) => { setInput(e.target.value); setError(false); }}
            placeholder="Password"
            className={`bg-cream/10 text-cream border ${error ? "border-clay" : "border-cream/20"} rounded-full px-5 py-3 text-sm font-sans outline-none focus:border-sage transition-colors w-48 placeholder:text-cream/30`}
            autoFocus
          />
          <button
            type="submit"
            className="bg-sage text-white rounded-full px-6 py-3 text-sm font-medium hover:bg-sage-deep transition-colors"
          >
            Enter
          </button>
        </form>
        {error && <p className="text-clay text-xs mt-3">Incorrect password</p>}
      </div>
    </div>
  );
}
