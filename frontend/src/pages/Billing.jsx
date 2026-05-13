import { Link } from "react-router-dom";
import { useState } from "react"
import RecentInvoices from "../components/RecentInvoices"
import CreateInvoice from "../components/CreateInvoice"
import PaidInvoice from "../components/PaidInvoice"
import PendingInvoice from "../components/PendingInvoice"
import TotalMonthly from "../components/TotalMonthly"

export default function Billing() {
  const [showCreateInvoice, setShowCreateInvoice] = useState(false)
  const [refreshKey, setRefreshKey] = useState(0)

  const handleShowCreateInvoice = () => {
    setShowCreateInvoice(!showCreateInvoice)
  }

  const handleInvoiceCreated = () => {
    setShowCreateInvoice(false)
    setRefreshKey((k) => k + 1)
  }

  return (
    <div className="bg-background font-body-md text-on-background min-h-screen">
      <main className="pt-16 pb-20 md:pb-8 px-6 md:pl-52 md:pr-12 max-w-screen-2xl mx-auto">
        <div className="flex justify-between items-center px-0 py-4 w-full docked full-width top-0 border-b border-emerald-50/50 dark:border-zinc-800 shadow-[0_12px_24px_rgba(22,101,52,0.06)] sticky">
          <div className="flex items-center gap-3">
            <h1 className="font-h1 text-h1 text-primary">Facturación</h1>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="bg-primary-container text-white px-5 py-2.5 rounded-xl font-label-sm text-label-sm flex items-center gap-2 hover:bg-secondary transition-all active:scale-95 duration-150"
              type="button"
              onClick={handleShowCreateInvoice}>
              <span className="material-symbols-outlined text-[20px]">add</span>
              + Nueva Factura
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* total mes*/}
          <TotalMonthly refreshKey={refreshKey}/>

          { /* pagadas */}
          <PaidInvoice refreshKey={refreshKey}/>

          {/* pendientes */}
          <PendingInvoice refreshKey={refreshKey}/>
        </div>

        {showCreateInvoice && (
          <CreateInvoice
            onClose={handleShowCreateInvoice}
            onInvoiceCreated={handleInvoiceCreated}
          />
        )}

        <RecentInvoices
          refreshKey={refreshKey}
          onStatusChange={()=>setRefreshKey((k)=> k+1)} />
      </main>
    </div>
  );
}
