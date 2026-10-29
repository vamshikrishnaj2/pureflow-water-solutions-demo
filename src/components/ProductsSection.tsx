import React, { useState } from 'react';
import { DEMO_PRODUCTS } from '../data/mockData';
import { ProductItem } from '../types';
import { Droplets, Gauge, Shield, ArrowUpRight, Check, SlidersHorizontal, Info } from 'lucide-react';

interface ProductsSectionProps {
  onEnquireProduct: (productName: string) => void;
}

export const ProductsSection: React.FC<ProductsSectionProps> = ({ onEnquireProduct }) => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'under_sink' | 'wall_mount' | 'commercial'>('all');
  const [selectedProductForModal, setSelectedProductForModal] = useState<ProductItem | null>(null);

  const filteredProducts = activeCategory === 'all'
    ? DEMO_PRODUCTS
    : DEMO_PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="py-16 md:py-24 bg-[#F8FAFC] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-semibold text-sky-700 uppercase tracking-wider mb-2">
              02. Purification Systems
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#0F172A]">
              Engineered water purifiers for every source
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl leading-relaxed">
              Explore our line-up of domestic and commercial water purifiers. Engineered for high TDS borewell supplies and treated municipal connections.
            </p>
          </div>

          {/* Interactive Filter Segmented Control (allowed as functional buttons) */}
          <div className="flex items-center gap-1 p-1 bg-slate-200/70 rounded-xl self-start md:self-auto overflow-x-auto max-w-full">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              All Systems
            </button>
            <button
              onClick={() => setActiveCategory('under_sink')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'under_sink'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Under-Sink RO
            </button>
            <button
              onClick={() => setActiveCategory('wall_mount')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'wall_mount'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Wall-Mount UV
            </button>
            <button
              onClick={() => setActiveCategory('commercial')}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all whitespace-nowrap cursor-pointer ${
                activeCategory === 'commercial'
                  ? 'bg-white text-slate-900 shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              Commercial
            </button>
          </div>
        </div>

        {/* Fictional Products Disclaimer Note */}
        <div className="mb-8 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-900 flex items-center justify-between gap-3">
          <span>
            <strong>Demo Product Showcase:</strong> The models listed below are fictional sample configurations illustrating technical specifications and layout design.
          </span>
          <span className="font-mono text-[11px] uppercase tracking-wider text-amber-800 shrink-0">
            Sample Specifications
          </span>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs hover:shadow-md hover:border-sky-300 transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Image Header with Aspect Ratio & Fallback */}
                <div className="relative aspect-[16/9] bg-slate-100 overflow-hidden border-b border-slate-200">
                  <img
                    src={product.image || fallbackPurifierImage}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      const fallback = e.currentTarget.parentElement?.querySelector('.prod-fallback');
                      if (fallback) (fallback as HTMLElement).style.display = 'flex';
                    }}
                  />
                  <div className="prod-fallback hidden absolute inset-0 bg-gradient-to-br from-sky-50 to-slate-100 flex-col items-center justify-center p-4 text-center">
                    <Droplets className="w-8 h-8 text-sky-600 mb-1" />
                    <span className="text-xs font-semibold text-slate-700">{product.name}</span>
                  </div>

                  {/* Clean unboxed metadata overlay */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-md text-[11px] font-mono font-medium text-slate-800 shadow-xs border border-slate-200/80">
                    {product.demoModelNumber}
                  </div>

                  <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-xs text-white px-2.5 py-1 rounded-md text-[11px] font-medium shadow-xs">
                    {product.categoryLabel}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                    {product.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-600">
                    {product.tagline}
                  </p>

                  {/* Technical Specifications Matrix */}
                  <div className="mt-5 grid grid-cols-2 gap-3 p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 text-xs">
                    <div>
                      <span className="text-slate-400 block text-[11px]">TDS Capability</span>
                      <span className="font-semibold text-slate-800">{product.tdsRange}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Flow Rate</span>
                      <span className="font-semibold text-slate-800">{product.flowRate}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Tank Capacity</span>
                      <span className="font-semibold text-slate-800">{product.capacity}</span>
                    </div>
                    <div>
                      <span className="text-slate-400 block text-[11px]">Power Draw</span>
                      <span className="font-semibold text-slate-800">{product.powerConsumption}</span>
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="mt-4 space-y-1.5">
                    {product.highlightSpecs.slice(0, 3).map((spec, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-slate-600">
                        <Check className="w-3.5 h-3.5 text-sky-600 mt-0.5 shrink-0" />
                        <span>{spec}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Bar */}
              <div className="p-6 pt-0 flex items-center justify-between gap-3 border-t border-slate-100 mt-4">
                <button
                  onClick={() => setSelectedProductForModal(product)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-sky-600 transition-colors cursor-pointer"
                >
                  <Info className="w-3.5 h-3.5" />
                  <span>Full Spec Sheet</span>
                </button>
                <button
                  onClick={() => onEnquireProduct(product.name)}
                  className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg transition-all shadow-xs inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>Enquire for Demo</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Product Spec Sheet Modal */}
      {selectedProductForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
          <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 md:p-8 shadow-2xl border border-slate-200 relative animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <span className="text-xs font-mono text-sky-700 bg-sky-50 px-2 py-0.5 rounded border border-sky-200">
                  {selectedProductForModal.demoModelNumber}
                </span>
                <h3 className="text-2xl font-bold text-slate-900 mt-1">
                  {selectedProductForModal.name}
                </h3>
                <p className="text-xs text-slate-500">{selectedProductForModal.categoryLabel} · Sample Demonstration Unit</p>
              </div>
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="text-slate-400 hover:text-slate-700 text-lg font-bold p-1"
                aria-label="Close modal"
              >
                ✕
              </button>
            </div>

            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              {selectedProductForModal.description}
            </p>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Filtration Architecture & Stages
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
              {selectedProductForModal.filtrationStages.map((stage, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-sky-100 text-sky-700 flex items-center justify-center font-bold text-[10px] shrink-0">
                    {idx + 1}
                  </span>
                  <span>{stage}</span>
                </div>
              ))}
            </div>

            <h4 className="text-xs font-bold text-slate-900 uppercase tracking-wider mb-3">
              Technical Parameters
            </h4>
            <div className="border border-slate-200 rounded-xl overflow-hidden mb-6 text-xs">
              <table className="w-full text-left">
                <tbody className="divide-y divide-slate-200">
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-medium text-slate-500 w-1/3">Raw Water TDS Limit</td>
                    <td className="p-3 font-semibold text-slate-900">{selectedProductForModal.tdsRange}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-500">Storage Reservoir</td>
                    <td className="p-3 text-slate-900">{selectedProductForModal.capacity}</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-medium text-slate-500">Flow Output</td>
                    <td className="p-3 text-slate-900">{selectedProductForModal.flowRate}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-500">Chassis Dimensions</td>
                    <td className="p-3 text-slate-900">{selectedProductForModal.dimensions}</td>
                  </tr>
                  <tr className="bg-slate-50/50">
                    <td className="p-3 font-medium text-slate-500">Power Rating</td>
                    <td className="p-3 text-slate-900">{selectedProductForModal.powerConsumption}</td>
                  </tr>
                  <tr>
                    <td className="p-3 font-medium text-slate-500">Demo Warranty Scope</td>
                    <td className="p-3 text-slate-900">{selectedProductForModal.warrantyDemo}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-200">
              <button
                onClick={() => setSelectedProductForModal(null)}
                className="px-4 py-2 text-xs font-medium text-slate-600 hover:text-slate-900 cursor-pointer"
              >
                Close
              </button>
              <button
                onClick={() => {
                  const name = selectedProductForModal.name;
                  setSelectedProductForModal(null);
                  onEnquireProduct(name);
                }}
                className="px-4 py-2 text-xs font-semibold text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-sm cursor-pointer"
              >
                Enquire About This Purifier
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
