import { useEffect, useState } from "react";
import { getClients } from "../services/ClientService";
import { createInvoice, getInvoices } from "../services/invoiceService";

const TAX_RATE = 0.19;

export default function CreateInvoice({ onClose, onInvoiceCreated, handleShowCreateInvoice }) {
  const [clients, setClients] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedClient, setSelectedClient] = useState(null);
  const [selectedPet, setSelectedPet] = useState(null);
  const [items, setItems] = useState([{ concept: "", qty: 1, price: 0 }]);
  const [discount, setDiscount] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    getClients().then(setClients);
  }, []);

  const filteredClients = clients.filter((c) =>
    `${c.name} ${c.pets.map((p) => p.name).join(" ")}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const subtotal = items.reduce((acc, i) => acc + i.qty * i.price, 0);
  const discountAmt = subtotal * (discount / 100);
  const tax = (subtotal - discountAmt) * TAX_RATE;
  const total = subtotal - discountAmt + tax;

  const handleAddItem = () =>
    setItems((prev) => [...prev, { concept: "", qty: 1, price: 0 }]);

  const handleRemoveItem = (idx) =>
    setItems((prev) => prev.filter((_, i) => i !== idx));

  const handleItemChange = (idx, field, value) =>
    setItems((prev) =>
      prev.map((item, i) => (i === idx ? { ...item, [field]: value } : item))
    );

  const handleSubmit = async () => {
    if (!selectedClient || !selectedPet) return;
    setLoading(true);
    try {
      await createInvoice({
        client: selectedClient.id,
        pet: selectedPet.id,
        amount: total.toFixed(2),
        status: "pending",
        notes: items.map((i) => `${i.concept} x${i.qty} $${i.price}`).join(" | "),
      });
      setSuccess(true);
      setTimeout(() => onInvoiceCreated?.(), 1500);
    } finally {
      setLoading(false);
    }
  };

  const PAYMENT_OPTIONS = [
    { key: "card", icon: "credit_card", label: "Tarjeta" },
    { key: "cash", icon: "payments", label: "Efectivo" },
    { key: "transfer", icon: "account_balance", label: "Transferencia" },
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div className="absolute inset-0 bg-on-background/40 backdrop-blur-sm" onClick={ handleShowCreateInvoice } />

      <div className="relative bg-white w-full max-w-2xl rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[795px]">
        {/* Header */}
        <div className="px-8 py-6 flex items-center justify-between border-b border-emerald-50">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-primary/10 text-primary rounded-xl">
              <span className="material-symbols-outlined">receipt</span>
            </div>
            <h2 className="text-h3 font-h3 text-on-surface">Nueva Factura</h2>
          </div>
          <button
            onClick={ handleShowCreateInvoice }
            className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-slate-100 transition-colors text-slate-400"
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-grow overflow-y-auto p-8 space-y-8">
          {/* Cliente / Mascota */}
          <section>
            <label className="block font-label-sm text-label-sm text-on-surface-variant mb-2">
              Cliente / Mascota
            </label>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400">search</span>
              <input
                className="w-full pl-12 pr-4 py-4 bg-surface rounded-2xl border border-emerald-100 focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none text-body-md"
                placeholder="Buscar por nombre de dueño o mascota..."
                type="text"
                value={search}
                onChange={(e) => { setSearch(e.target.value); setSelectedClient(null); setSelectedPet(null); }}
              />
            </div>

            {/* Resultados búsqueda */}
            {search && !selectedClient && (
              <div className="mt-2 border border-emerald-100 rounded-2xl overflow-hidden">
                {filteredClients.map((c) => (
                  <div key={c.id} className="px-4 py-3 hover:bg-emerald-50 cursor-pointer border-b border-emerald-50 last:border-0">
                    <p className="font-label-sm text-on-surface">{c.name}</p>
                    <div className="flex gap-2 mt-1 flex-wrap">
                      {c.pets.map((p) => (
                        <span
                          key={p.id}
                          onClick={() => { setSelectedClient(c); setSelectedPet(p); setSearch(""); }}
                          className="flex items-center gap-1 px-3 py-1 bg-emerald-50 rounded-full border border-emerald-100 cursor-pointer hover:bg-emerald-100 transition-colors"
                        >
                          {p.photo && (
                            <img src={p.photo} className="w-5 h-5 rounded-full object-cover" alt={p.name} />
                          )}
                          <span className="text-xs font-bold text-emerald-700">{p.name} ({p.species})</span>
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Seleccionado */}
            {selectedClient && selectedPet && (
              <div className="mt-3 flex items-center gap-2 px-3 py-2 bg-emerald-50 rounded-full border border-emerald-100 w-fit">
                {selectedPet.photo && (
                  <img src={selectedPet.photo} className="w-6 h-6 rounded-full object-cover" alt={selectedPet.name} />
                )}
                <span className="text-xs font-bold text-emerald-700">
                  {selectedPet.name} — {selectedClient.name}
                </span>
                <button onClick={() => { setSelectedClient(null); setSelectedPet(null); }} className="text-slate-400 hover:text-red-500 ml-1">
                  <span className="material-symbols-outlined text-[14px]">close</span>
                </button>
              </div>
            )}
          </section>

          {/* Items */}
          <section>
            <div className="flex justify-between items-center mb-4">
              <h3 className="font-label-sm text-on-surface">Detalle de Servicios</h3>
              <button
                onClick={handleAddItem}
                className="text-primary font-bold text-sm flex items-center gap-1 hover:underline"
              >
                <span className="material-symbols-outlined text-sm">add</span>
                Agregar ítem
              </button>
            </div>
            <div className="space-y-3">
              {items.map((item, idx) => (
                <div key={idx} className="grid grid-cols-12 gap-4 items-center bg-surface-container-low p-4 rounded-2xl border border-emerald-50/50">
                  <div className="col-span-6">
                    <p className="text-xs text-slate-500 mb-1 uppercase font-black tracking-widest">Concepto</p>
                    <input
                      className="w-full bg-transparent border-none p-0 font-bold text-on-surface focus:ring-0 outline-none"
                      type="text"
                      value={item.concept}
                      onChange={(e) => handleItemChange(idx, "concept", e.target.value)}
                      placeholder="Ej: Consulta"
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-500 mb-1 uppercase font-black tracking-widest text-center">Cant.</p>
                    <input
                      className="w-full bg-transparent border-none p-0 text-center font-bold text-on-surface focus:ring-0 outline-none"
                      type="number"
                      min="1"
                      value={item.qty}
                      onChange={(e) => handleItemChange(idx, "qty", Number(e.target.value))}
                    />
                  </div>
                  <div className="col-span-2">
                    <p className="text-xs text-slate-500 mb-1 uppercase font-black tracking-widest text-right">P. Unit</p>
                    <input
                      className="w-full bg-transparent border-none p-0 text-right font-bold text-on-surface focus:ring-0 outline-none"
                      type="number"
                      min="0"
                      value={item.price}
                      onChange={(e) => handleItemChange(idx, "price", Number(e.target.value))}
                    />
                  </div>
                  <div className="col-span-2 flex justify-end">
                    <button onClick={() => handleRemoveItem(idx)} className="text-red-300 hover:text-red-500 transition-colors">
                      <span className="material-symbols-outlined">delete</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Pago y Totales */}
          <div className="grid md:grid-cols-2 gap-8 pt-4 border-t border-emerald-50">
            <section>
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-3">Método de Pago</label>
              <div className="grid grid-cols-1 gap-2">
                {PAYMENT_OPTIONS.map((opt) => (
                  <div
                    key={opt.key}
                    onClick={() => setPaymentMethod(opt.key)}
                    className={`flex items-center gap-3 p-3 rounded-2xl cursor-pointer transition-colors ${
                      paymentMethod === opt.key
                        ? "border-2 border-primary bg-primary/5"
                        : "border border-emerald-100 bg-white hover:bg-emerald-50"
                    }`}
                  >
                    <span className={`material-symbols-outlined ${paymentMethod === opt.key ? "text-primary" : "text-slate-400"}`}>
                      {opt.icon}
                    </span>
                    <span className={`font-medium ${paymentMethod === opt.key ? "font-bold text-primary" : "text-slate-600"}`}>
                      {opt.label}
                    </span>
                    {paymentMethod === opt.key && (
                      <span className="material-symbols-outlined ml-auto text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>
                        check_circle
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-4">
              <div className="flex justify-between text-on-surface-variant">
                <span className="text-body-md">Subtotal</span>
                <span className="font-bold">${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant">
                <span className="text-body-md">Descuento (%)</span>
                <input
                  className="w-16 text-right py-1 px-2 border-b border-emerald-200 focus:border-primary outline-none bg-transparent font-bold"
                  type="number"
                  min="0"
                  max="100"
                  value={discount}
                  onChange={(e) => setDiscount(Number(e.target.value))}
                />
              </div>
              <div className="flex justify-between text-on-surface-variant">
                <span className="text-body-md">IVA (19%)</span>
                <span className="font-bold">${tax.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center pt-4 border-t-2 border-dotted border-emerald-100">
                <span className="text-h3 font-h3 text-on-surface">Total Final</span>
                <span className="text-h3 font-h3 text-primary">${total.toFixed(2)}</span>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-6 bg-slate-50 flex justify-end gap-4 border-t border-emerald-50">
          <button
            onClick={handleShowCreateInvoice}
            className="px-6 py-3 rounded-xl font-label-sm border-2 border-outline text-outline hover:bg-slate-100 transition-colors"
          >
            Cancelar
          </button>
          <button
            onClick={handleSubmit}
            disabled={loading || !selectedClient || !selectedPet || success}
            className="px-10 py-3 rounded-xl font-label-sm bg-primary text-on-primary shadow-xl shadow-emerald-900/10 hover:bg-secondary transition-colors active:scale-95 flex items-center gap-2 disabled:opacity-50"
          >
            <span className="material-symbols-outlined">{success ? "check" : "send"}</span>
            {success ? "¡Emitida!" : loading ? "Guardando..." : "Emitir Factura"}
          </button>
        </div>
      </div>
    </div>
  );
}
