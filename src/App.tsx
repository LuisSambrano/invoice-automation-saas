import { GlassCard } from "@/components/ui/GlassCard";
import { motion } from "framer-motion";
import { Plus, LayoutGrid, FileText, Settings } from "lucide-react";
import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { cn } from "@/lib/utils";

interface Invoice {
  id: string;
  client_name: string;
  amount: number;
  status: string;
  created_at: string;
}

function App() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchInvoices = async () => {
    try {
      setLoading(true);
      // "get_invoices" must match the command name in lib.rs
      const data = await invoke<Invoice[]>("get_invoices");
      setInvoices(data);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground p-8 font-sans selection:bg-white/20">
      {/* Header */}
      <header className="flex justify-between items-center mb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-br from-white via-white/80 to-white/40">
            Invoice Zero
          </h1>
          <p className="text-muted-foreground mt-1">Local. Private. Luxury.</p>
        </motion.div>

        <div className="flex gap-4">
          <GlassCard
            className="flex items-center gap-2 px-4 py-2 cursor-pointer"
            hoverEffect
          >
            <Plus className="w-4 h-4" />
            <span>New Invoice</span>
          </GlassCard>
        </div>
      </header>

      {/* Main Grid */}
      <div className="grid grid-cols-[250px_1fr] gap-8">
        {/* Sidebar */}
        <aside className="space-y-4">
          <GlassCard
            intent="ghost"
            paddings="sm"
            className="flex items-center gap-3 cursor-pointer text-white/80 hover:text-white"
          >
            <LayoutGrid className="w-5 h-5" />
            <span>Dashboard</span>
          </GlassCard>
          <GlassCard
            intent="ghost"
            paddings="sm"
            className="flex items-center gap-3 cursor-pointer text-white/80 hover:text-white"
          >
            <FileText className="w-5 h-5" />
            <span>Invoices</span>
          </GlassCard>
          <GlassCard
            intent="ghost"
            paddings="sm"
            className="flex items-center gap-3 cursor-pointer text-white/80 hover:text-white"
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </GlassCard>
        </aside>

        {/* Content */}
        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {loading ? (
            <div className="col-span-full text-center text-white/40 py-20">
              Initializing Secure Vault...
            </div>
          ) : invoices.length === 0 ? (
            <div className="col-span-full flex flex-col items-center justify-center p-12 border border-white/5 rounded-2xl bg-white/[0.02]">
              <FileText className="w-12 h-12 text-white/10 mb-4" />
              <p className="text-white/40">No invoices found in local vault.</p>
            </div>
          ) : (
            invoices.map((invoice) => (
              <GlassCard
                key={invoice.id}
                className="h-64 flex flex-col justify-between"
              >
                <div className="flex justify-between items-start">
                  <div className="bg-white/10 p-2 rounded-full">
                    <FileText className="w-6 h-6 text-white/60" />
                  </div>
                  <span
                    className={cn(
                      "text-xs font-mono px-2 py-1 rounded-full border",
                      invoice.status === "PAID"
                        ? "text-emerald-400 bg-emerald-500/10 border-emerald-500/20"
                        : "text-amber-400 bg-amber-500/10 border-amber-500/20",
                    )}
                  >
                    {invoice.status}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-mono font-semibold">
                    ${invoice.amount.toFixed(2)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {invoice.client_name}
                  </p>
                  <p className="text-xs text-white/20 mt-2 font-mono">
                    {new Date(invoice.created_at).toLocaleDateString()}
                  </p>
                </div>
              </GlassCard>
            ))
          )}
        </main>
      </div>
    </div>
  );
}

export default App;
