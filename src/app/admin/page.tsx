"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Lock,
  Mail,
  Phone,
  Building2,
  Calendar,
  FileText,
  RefreshCw,
  Download,
  Code,
  LogOut,
  Trash2,
  Plus,
  Search,
  CheckCircle2,
  ExternalLink,
  Eye,
  EyeOff,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";

interface QuoteItem {
  id: string;
  institutionName: string;
  email: string;
  phone: string;
  requirements: string;
  submittedAt: string;
  status: string;
}

export default function AdminPage() {
  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [emailInput, setEmailInput] = useState<string>("");
  const [passwordInput, setPasswordInput] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [authError, setAuthError] = useState<string | null>(null);

  // Data state
  const [quotes, setQuotes] = useState<QuoteItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [filterStatus, setFilterStatus] = useState<string>("all");
  const [showRawJson, setShowRawJson] = useState<boolean>(false);
  const [copiedJson, setCopiedJson] = useState<boolean>(false);
  const [selectedQuote, setSelectedQuote] = useState<QuoteItem | null>(null);

  // New quote modal state
  const [showAddModal, setShowAddModal] = useState<boolean>(false);
  const [newInstitution, setNewInstitution] = useState<string>("");
  const [newEmail, setNewEmail] = useState<string>("");
  const [newPhone, setNewPhone] = useState<string>("");
  const [newRequirements, setNewRequirements] = useState<string>("");
  const [isSubmittingNew, setIsSubmittingNew] = useState<boolean>(false);

  // Check existing session on mount
  useEffect(() => {
    try {
      const storedAuth = sessionStorage.getItem("apparel_admin_auth");
      if (storedAuth === "true") {
        setIsAuthenticated(true);
      }
    } catch {
      // sessionStorage unavailable
    }
  }, []);

  // Fetch quotes once authenticated
  const fetchQuotes = async () => {
    setIsLoading(true);
    try {
      const res = await fetch("/api/quote");
      const data = await res.json();
      if (data.success && Array.isArray(data.quotes)) {
        setQuotes(data.quotes);
      }
    } catch (err) {
      console.error("Failed to fetch quotes:", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchQuotes();
    }
  }, [isAuthenticated]);

  // Handle Login
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError(null);

    const validId = "apparel@gmail.com";
    const validPassword = "apparel@123";

    if (
      emailInput.trim().toLowerCase() === validId &&
      passwordInput === validPassword
    ) {
      setIsAuthenticated(true);
      try {
        sessionStorage.setItem("apparel_admin_auth", "true");
      } catch {
        // ignore
      }
    } else {
      setAuthError("Invalid ID or password. Please use the authorized credentials.");
    }
  };

  // Handle Logout
  const handleLogout = () => {
    setIsAuthenticated(false);
    setEmailInput("");
    setPasswordInput("");
    try {
      sessionStorage.removeItem("apparel_admin_auth");
    } catch {
      // ignore
    }
  };

  // Handle Delete
  const handleDelete = async (id: string) => {
    if (!confirm(`Are you sure you want to remove quote inquiry ${id}?`)) return;

    try {
      const res = await fetch(`/api/quote?id=${encodeURIComponent(id)}`, {
        method: "DELETE",
      });
      if (res.ok) {
        setQuotes((prev) => prev.filter((item) => item.id !== id));
        if (selectedQuote?.id === id) {
          setSelectedQuote(null);
        }
      }
    } catch (err) {
      console.error("Failed to delete quote:", err);
    }
  };

  // Handle Add Test Quote
  const handleAddQuote = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newInstitution.trim() || !newEmail.trim() || !newRequirements.trim()) {
      alert("Please fill in the required fields.");
      return;
    }

    setIsSubmittingNew(true);
    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          institutionName: newInstitution,
          email: newEmail,
          phone: newPhone,
          requirements: newRequirements,
        }),
      });
      const data = await res.json();
      if (data.success && data.quote) {
        setQuotes((prev) => [data.quote, ...prev]);
        setShowAddModal(false);
        setNewInstitution("");
        setNewEmail("");
        setNewPhone("");
        setNewRequirements("");
      }
    } catch (err) {
      console.error("Failed to add test quote:", err);
    } finally {
      setIsSubmittingNew(false);
    }
  };

  // Handle Export JSON
  const handleExportJson = () => {
    const dataStr =
      "data:text/json;charset=utf-8," +
      encodeURIComponent(JSON.stringify(quotes, null, 2));
    const downloadAnchor = document.createElement("a");
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `quotes-${new Date().toISOString().slice(0, 10)}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
  };

  // Handle Copy JSON
  const handleCopyJson = () => {
    navigator.clipboard.writeText(JSON.stringify(quotes, null, 2));
    setCopiedJson(true);
    setTimeout(() => setCopiedJson(false), 2000);
  };

  // Filtered quotes
  const filteredQuotes = quotes.filter((item) => {
    const query = searchQuery.toLowerCase();
    const matchesSearch =
      item.institutionName.toLowerCase().includes(query) ||
      item.email.toLowerCase().includes(query) ||
      item.phone.toLowerCase().includes(query) ||
      item.requirements.toLowerCase().includes(query) ||
      item.id.toLowerCase().includes(query);

    const matchesStatus =
      filterStatus === "all" ||
      item.status.toLowerCase() === filterStatus.toLowerCase();

    return matchesSearch && matchesStatus;
  });

  // ==========================================
  // VIEW 1: AUTHENTICATION / SIGN IN SCREEN
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F2F3F5] flex flex-col justify-center items-center px-4 sm:px-6 py-12">
        {/* Brand Header */}
        <div className="mb-8 text-center flex flex-col items-center">
          <Link href="/" className="inline-block mb-3 hover:opacity-85 transition-opacity">
            <Image
              src="/hero_images/logo/logo.png"
              alt="Concord Apparel"
              width={220}
              height={70}
              priority
              className="h-10 sm:h-12 w-auto object-contain"
            />
          </Link>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-xs font-mono tracking-widest text-[#12161A] uppercase">
            <Lock className="w-3 h-3 text-[#B89047]" />
            <span>Authorized Access Portal</span>
          </div>
        </div>

        {/* Login Card */}
        <div className="w-full max-w-md bg-white rounded-2xl border border-black/10 shadow-[0_8px_30px_rgba(0,0,0,0.06)] p-6 sm:p-8">
          <div className="mb-6">
            <h1 className="text-xl font-bold text-[#12161A] tracking-tight">
              Inquiries Data Portal
            </h1>
            <p className="text-xs text-[#525E71] mt-1">
              Sign in with your administrator ID and password to view stored quote information.
            </p>
          </div>

          {authError && (
            <div className="mb-5 p-3 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-start gap-2 animate-shake">
              <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
              <span>{authError}</span>
            </div>
          )}

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-[#12161A] uppercase tracking-wider mb-1.5">
                Admin ID (Email)
              </label>
              <div className="relative">
                <input
                  type="email"
                  required
                  value={emailInput}
                  onChange={(e) => setEmailInput(e.target.value)}
                  placeholder="apparel@gmail.com"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none transition-colors"
                />
                <Mail className="w-4 h-4 text-[#9CA3AF] absolute right-3.5 top-1/2 -translate-y-1/2" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#12161A] uppercase tracking-wider mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  placeholder="••••••••"
                  className="w-full px-3.5 py-2.5 rounded-lg text-sm bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none transition-colors"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="p-1 text-[#9CA3AF] hover:text-[#12161A] absolute right-2.5 top-1/2 -translate-y-1/2"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff className="w-4 h-4" />
                  ) : (
                    <Eye className="w-4 h-4" />
                  )}
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-3 px-4 rounded-lg bg-[#12161A] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer mt-2"
            >
              Sign In to View JSON Data
            </button>
          </form>

          {/* Preset Credentials Helper Card */}
          <div className="mt-6 pt-5 border-t border-black/10 text-center">
            <p className="text-[11px] font-mono text-[#6B7280]">
              Authorized Credentials:
            </p>
            <div className="mt-2 inline-flex flex-col sm:flex-row items-center gap-1.5 sm:gap-3 px-3 py-2 rounded-lg bg-[#F2F3F5] border border-black/5 text-[11px] font-mono text-[#12161A]">
              <span>
                ID: <strong className="text-black">apparel@gmail.com</strong>
              </span>
              <span className="hidden sm:inline text-black/20">•</span>
              <span>
                Password: <strong className="text-black">apparel@123</strong>
              </span>
            </div>
          </div>
        </div>

        {/* Back to Homepage */}
        <Link
          href="/"
          className="mt-6 text-xs text-[#525E71] hover:text-black flex items-center gap-1.5 transition-colors"
        >
          <span>← Back to Concord Apparel Website</span>
        </Link>
      </div>
    );
  }

  // ==========================================
  // VIEW 2: AUTHENTICATED JSON INQUIRIES PAGE
  // ==========================================
  return (
    <div className="min-h-screen bg-[#F2F3F5] text-[#12161A] flex flex-col pb-16">
      {/* Top Header Bar */}
      <header className="sticky top-0 z-30 bg-[#F2F3F5]/90 backdrop-blur-md border-b border-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="h-16 sm:h-20 flex items-center justify-between gap-4">
            {/* Left: Brand Logo & Title */}
            <div className="flex items-center gap-3">
              <Link href="/" className="hover:opacity-85 transition-opacity">
                <Image
                  src="/hero_images/logo/logo.png"
                  alt="Concord Apparel"
                  width={200}
                  height={60}
                  className="h-8 sm:h-9 w-auto object-contain"
                />
              </Link>
              <div className="hidden sm:block h-5 w-[1px] bg-black/20" />
              <span className="hidden sm:inline-block text-xs font-mono uppercase tracking-widest text-[#525E71]">
                JSON Inquiries Store
              </span>
            </div>

            {/* Right: User Status & Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              <span className="hidden md:inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/5 border border-black/10 text-[11px] font-mono text-[#12161A]">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                <span>apparel@gmail.com</span>
              </span>

              <button
                onClick={fetchQuotes}
                disabled={isLoading}
                title="Refresh from server"
                className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white border border-black/10 hover:border-black text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <RefreshCw
                  className={`w-3.5 h-3.5 ${isLoading ? "animate-spin text-black" : "text-[#525E71]"}`}
                />
                <span className="hidden sm:inline">Refresh</span>
              </button>

              <button
                onClick={() => setShowAddModal(true)}
                title="Add Test Inquiry"
                className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white border border-black/10 hover:border-black text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5 text-[#B89047]" />
                <span className="hidden sm:inline">Add Record</span>
              </button>

              <button
                onClick={handleLogout}
                title="Sign Out"
                className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-[#12161A] hover:bg-black text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                <LogOut className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Sign Out</span>
              </button>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-black pointer-events-none" />
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 flex-grow w-full">
        {/* Page Title & Stats */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#12161A]">
                Quote Inquiries & Column Data
              </h1>
              <span className="px-2.5 py-0.5 rounded-full bg-[#12161A] text-white text-xs font-mono font-semibold">
                {quotes.length} total
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#525E71]">
              Live records persisted to server storage at{" "}
              <code className="px-1.5 py-0.5 bg-white border border-black/10 rounded font-mono text-[11px] text-black">
                data/quotes.json
              </code>
            </p>
          </div>

          {/* Quick Toolbar */}
          <div className="flex items-center gap-2 flex-wrap">
            <button
              onClick={() => setShowRawJson(!showRawJson)}
              className={`px-3.5 py-2 rounded-lg border text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-all cursor-pointer ${
                showRawJson
                  ? "bg-black text-white border-black"
                  : "bg-white text-[#12161A] border-black/10 hover:border-black"
              }`}
            >
              <Code className="w-3.5 h-3.5 text-[#B89047]" />
              <span>{showRawJson ? "Hide Raw JSON" : "View Raw JSON"}</span>
            </button>

            <button
              onClick={handleExportJson}
              className="px-3.5 py-2 rounded-lg bg-white hover:bg-neutral-50 text-[#12161A] border border-black/10 hover:border-black text-xs font-semibold uppercase tracking-wider flex items-center gap-2 transition-colors cursor-pointer"
            >
              <Download className="w-3.5 h-3.5 text-[#12161A]" />
              <span>Export JSON</span>
            </button>
          </div>
        </div>

        {/* Collapsible Raw JSON Viewer */}
        {showRawJson && (
          <div className="mb-6 rounded-xl bg-[#0D1522] text-[#F8FAFC] border border-[#1C2A40] overflow-hidden shadow-lg animate-fade-in">
            <div className="px-4 py-3 bg-[#162133] border-b border-[#22314A] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                <span className="text-xs font-mono text-[#94A3B8]">
                  data/quotes.json ({quotes.length} items)
                </span>
              </div>
              <button
                onClick={handleCopyJson}
                className="px-3 py-1 rounded bg-[#202E44] hover:bg-[#2A3C58] text-[11px] font-mono text-white flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {copiedJson ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-400" />
                    <span className="text-emerald-400">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3 text-[#B89047]" />
                    <span>Copy JSON</span>
                  </>
                )}
              </button>
            </div>
            <pre className="p-4 text-xs font-mono leading-relaxed overflow-x-auto max-h-96 text-emerald-300 select-all">
              {JSON.stringify(quotes, null, 2)}
            </pre>
          </div>
        )}

        {/* Search & Filter Bar */}
        <div className="bg-white rounded-xl border border-black/10 p-3 sm:p-4 mb-6 shadow-xs flex flex-col sm:flex-row items-center gap-3">
          <div className="relative flex-grow w-full">
            <Search className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search by institution, email, phone, or requirements keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none transition-colors"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto shrink-0">
            <span className="text-xs font-medium text-[#6B7280]">Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value)}
              className="px-3 py-2 text-xs rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:outline-none font-medium cursor-pointer"
            >
              <option value="all">All Inquiries</option>
              <option value="new">New</option>
              <option value="in review">In Review</option>
              <option value="contacted">Contacted</option>
            </select>
          </div>
        </div>

        {/* Main Column Data Table */}
        <div className="bg-white rounded-xl border border-black/10 shadow-xs overflow-hidden">
          {filteredQuotes.length === 0 ? (
            <div className="p-12 text-center">
              <FileText className="w-10 h-10 text-[#9CA3AF] mx-auto mb-3 stroke-[1.5]" />
              <h3 className="text-base font-semibold text-[#12161A] mb-1">
                No matching inquiries found
              </h3>
              <p className="text-xs text-[#6B7280] max-w-sm mx-auto mb-4">
                {quotes.length === 0
                  ? "No quote requests have been submitted yet. You can submit one from the website or add a test entry."
                  : "Try adjusting your search keywords or status filter."}
              </p>
              <button
                onClick={() => setShowAddModal(true)}
                className="px-4 py-2 rounded-lg bg-[#12161A] text-white text-xs font-semibold uppercase tracking-wider hover:bg-black transition-colors cursor-pointer"
              >
                + Add Test Record
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-black/10 bg-[#F2F3F5]/60 text-[11px] font-mono uppercase tracking-wider text-[#525E71]">
                    <th className="py-3.5 px-4 font-semibold"># ID</th>
                    <th className="py-3.5 px-4 font-semibold">Date & Time</th>
                    <th className="py-3.5 px-4 font-semibold">Institution Name</th>
                    <th className="py-3.5 px-4 font-semibold">Contact Email</th>
                    <th className="py-3.5 px-4 font-semibold">Phone</th>
                    <th className="py-3.5 px-4 font-semibold">Uniform Requirements</th>
                    <th className="py-3.5 px-4 font-semibold">Status</th>
                    <th className="py-3.5 px-4 font-semibold text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-black/5 text-xs text-[#12161A]">
                  {filteredQuotes.map((item) => {
                    const formattedDate = new Date(item.submittedAt).toLocaleString(
                      "en-IN",
                      {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                      }
                    );

                    return (
                      <tr
                        key={item.id}
                        className="hover:bg-neutral-50/80 transition-colors group"
                      >
                        {/* ID Column */}
                        <td className="py-3.5 px-4 font-mono font-semibold text-black whitespace-nowrap">
                          {item.id}
                        </td>

                        {/* Date Column */}
                        <td className="py-3.5 px-4 font-mono text-[11px] text-[#525E71] whitespace-nowrap">
                          <div className="flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#B89047] shrink-0" />
                            <span>{formattedDate}</span>
                          </div>
                        </td>

                        {/* Institution Name Column */}
                        <td className="py-3.5 px-4 font-semibold text-black whitespace-nowrap max-w-[220px] truncate">
                          <div className="flex items-center gap-1.5">
                            <Building2 className="w-3.5 h-3.5 text-[#12161A] shrink-0" />
                            <span title={item.institutionName}>
                              {item.institutionName}
                            </span>
                          </div>
                        </td>

                        {/* Email Column */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <a
                            href={`mailto:${item.email}`}
                            className="text-[#0F172A] hover:text-[#B89047] flex items-center gap-1.5 transition-colors font-medium"
                          >
                            <Mail className="w-3 h-3 text-[#9CA3AF]" />
                            <span>{item.email}</span>
                          </a>
                        </td>

                        {/* Phone Column */}
                        <td className="py-3.5 px-4 whitespace-nowrap font-mono text-[11px]">
                          {item.phone ? (
                            <a
                              href={`tel:${item.phone}`}
                              className="text-[#525E71] hover:text-black flex items-center gap-1.5 transition-colors"
                            >
                              <Phone className="w-3 h-3 text-[#9CA3AF]" />
                              <span>{item.phone}</span>
                            </a>
                          ) : (
                            <span className="text-[#9CA3AF] italic">—</span>
                          )}
                        </td>

                        {/* Requirements Column */}
                        <td className="py-3.5 px-4 max-w-xs">
                          <p
                            className="line-clamp-2 text-[#4B5563] text-xs leading-relaxed"
                            title={item.requirements}
                          >
                            {item.requirements}
                          </p>
                        </td>

                        {/* Status Column */}
                        <td className="py-3.5 px-4 whitespace-nowrap">
                          <span
                            className={`inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono uppercase tracking-wider font-semibold ${
                              item.status.toLowerCase() === "new"
                                ? "bg-amber-100 text-amber-800 border border-amber-200"
                                : item.status.toLowerCase() === "contacted"
                                ? "bg-blue-100 text-blue-800 border border-blue-200"
                                : "bg-emerald-100 text-emerald-800 border border-emerald-200"
                            }`}
                          >
                            {item.status}
                          </span>
                        </td>

                        {/* Actions Column */}
                        <td className="py-3.5 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-1.5">
                            <button
                              onClick={() => setSelectedQuote(item)}
                              title="View full details"
                              className="p-1.5 rounded text-[#525E71] hover:text-black hover:bg-black/5 transition-colors cursor-pointer"
                            >
                              <Eye className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => handleDelete(item.id)}
                              title="Delete inquiry"
                              className="p-1.5 rounded text-red-500 hover:text-red-700 hover:bg-red-50 transition-colors cursor-pointer"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* MODAL 1: VIEW INQUIRY DETAILS */}
      {selectedQuote && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-black/10 shadow-2xl max-w-lg w-full p-6 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <div className="flex items-center gap-2">
                <span className="font-mono font-bold text-sm text-black">
                  {selectedQuote.id}
                </span>
                <span className="px-2 py-0.5 rounded-full text-[10px] font-mono uppercase bg-emerald-50 text-emerald-700 border border-emerald-200">
                  {selectedQuote.status}
                </span>
              </div>
              <button
                onClick={() => setSelectedQuote(null)}
                className="p-1 rounded-full text-[#6B7280] hover:text-black hover:bg-black/5 text-sm font-semibold cursor-pointer"
              >
                ✕
              </button>
            </div>

            <div className="py-4 space-y-3.5 text-xs">
              <div>
                <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                  Institution Name
                </span>
                <p className="text-sm font-bold text-[#12161A]">
                  {selectedQuote.institutionName}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                    Email Address
                  </span>
                  <a
                    href={`mailto:${selectedQuote.email}`}
                    className="font-medium text-[#0F172A] hover:underline"
                  >
                    {selectedQuote.email}
                  </a>
                </div>
                <div>
                  <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                    Phone Number
                  </span>
                  <a
                    href={`tel:${selectedQuote.phone}`}
                    className="font-mono text-[#12161A] hover:underline"
                  >
                    {selectedQuote.phone || "Not provided"}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                  Submission Timestamp
                </span>
                <p className="font-mono text-[#525E71]">
                  {new Date(selectedQuote.submittedAt).toUTCString()}
                </p>
              </div>

              <div className="pt-2">
                <span className="text-[10px] font-mono text-[#6B7280] uppercase tracking-wider block mb-1">
                  Requirements Specification
                </span>
                <div className="p-3 bg-[#F2F3F5] rounded-lg border border-black/5 text-xs text-[#242B35] leading-relaxed whitespace-pre-wrap">
                  {selectedQuote.requirements}
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-black/10 flex items-center justify-end gap-2">
              <button
                onClick={() => setSelectedQuote(null)}
                className="px-4 py-2 rounded-lg bg-[#F2F3F5] hover:bg-neutral-200 text-xs font-semibold uppercase tracking-wider text-[#12161A] transition-colors cursor-pointer"
              >
                Close
              </button>
              <a
                href={`mailto:${selectedQuote.email}?subject=Quote Inquiry regarding ${encodeURIComponent(
                  selectedQuote.institutionName
                )} - Concord Apparel`}
                className="px-4 py-2 rounded-lg bg-[#12161A] hover:bg-black text-white text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center gap-1.5"
              >
                <Mail className="w-3.5 h-3.5 text-[#B89047]" />
                <span>Reply via Email</span>
              </a>
            </div>
          </div>
        </div>
      )}

      {/* MODAL 2: ADD TEST INQUIRY */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl border border-black/10 shadow-2xl max-w-md w-full p-6 animate-scale-in">
            <div className="flex items-center justify-between pb-3 border-b border-black/10">
              <h3 className="font-bold text-sm text-[#12161A]">
                Record New Quote Inquiry
              </h3>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-1 rounded-full text-[#6B7280] hover:text-black hover:bg-black/5 cursor-pointer"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleAddQuote} className="py-4 space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold uppercase tracking-wider text-[11px] mb-1">
                  Institution Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. National Public School"
                  value={newInstitution}
                  onChange={(e) => setNewInstitution(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[11px] mb-1">
                  Contact Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="e.g. contact@nps.edu"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[11px] mb-1">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. +91 98450 11223"
                  value={newPhone}
                  onChange={(e) => setNewPhone(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold uppercase tracking-wider text-[11px] mb-1">
                  Requirements Description *
                </label>
                <textarea
                  rows={3}
                  required
                  placeholder="Describe uniform types, quantity, grade levels..."
                  value={newRequirements}
                  onChange={(e) => setNewRequirements(e.target.value)}
                  className="w-full px-3 py-2 rounded-lg bg-[#F2F3F5] border border-black/10 focus:border-black focus:bg-white focus:outline-none resize-none"
                />
              </div>

              <div className="pt-3 border-t border-black/10 flex items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 rounded-lg bg-[#F2F3F5] hover:bg-neutral-200 font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmittingNew}
                  className="px-4 py-2 rounded-lg bg-[#12161A] hover:bg-black text-white font-semibold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
                >
                  {isSubmittingNew ? "Saving..." : "Save to JSON"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
