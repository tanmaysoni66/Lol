"use client";

import React, { useState, useMemo } from 'react';
import { 
  Play, Pause, ZoomIn, ZoomOut, Expand, 
  Download, MessageCircle, Info, ChevronDown
} from 'lucide-react';
import { equipmentCategories } from './equipmentData';
import Link from 'next/link';

type Tab = 'integrated' | 'compost' | 'production';

export default function PlannerClient() {
  const [activeTab, setActiveTab] = useState<Tab>('integrated');
  const [isPlaying, setIsPlaying] = useState(false);
  const [zoom, setZoom] = useState(85);
  
  // Controls state
  const [roomSize, setRoomSize] = useState(40);
  const [roomCount, setRoomCount] = useState(4);
  const [compostUnits, setCompostUnits] = useState(1);
  const [cameraView, setCameraView] = useState('ISO');
  
  // Toggles
  const [toggles, setToggles] = useState({
    colourCode: true,
    dimensions: true,
    roofs: true,
    scaleFigures: true,
    jcbEquipment: true,
    msRacks: false,
    refrigeration: false,
    xrayWalls: false
  });

  const toggleLayer = (key: keyof typeof toggles) => {
    setToggles(prev => ({ ...prev, [key]: !prev[key] }));
  };

  // Filter equipment based on active tab
  const filteredCategories = useMemo(() => {
    if (activeTab === 'integrated') return equipmentCategories;
    return equipmentCategories.filter(cat => cat.tags.includes(activeTab) || cat.id === 'core-list');
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 pb-20">
      
      {/* Top Navigation Tabs */}
      <div className="pt-24 pb-8 flex justify-center px-4">
        <div className="flex flex-wrap gap-2 justify-center items-center">
          <button 
            onClick={() => setActiveTab('integrated')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activeTab === 'integrated' ? 'bg-emerald-600 text-white border-2 border-emerald-700' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700'}`}
          >
            Integrated Project
          </button>
          <button 
            onClick={() => setActiveTab('compost')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activeTab === 'compost' ? 'bg-blue-600 text-white border-2 border-blue-700' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700'}`}
          >
            Compost Unit
          </button>
          <button 
            onClick={() => setActiveTab('production')}
            className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm ${activeTab === 'production' ? 'bg-orange-600 text-white border-2 border-orange-700' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-2 border-transparent hover:bg-slate-100 dark:hover:bg-slate-700'}`}
          >
            Production Unit
          </button>
        </div>
      </div>

      {/* Main Builder Container */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-xl overflow-hidden border border-slate-200 dark:border-slate-800">
          
          {/* Canvas Area (Placeholder for actual 3D engine) */}
          <div className="relative aspect-[16/9] md:aspect-[21/9] bg-gradient-to-b from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900 overflow-hidden flex flex-col items-center justify-center p-8">
            
            {/* Grid background effect */}
            <div className="absolute inset-0 z-0 opacity-20 dark:opacity-10" 
                 style={{ backgroundImage: 'linear-gradient(#94a3b8 1px, transparent 1px), linear-gradient(90deg, #94a3b8 1px, transparent 1px)', backgroundSize: '40px 40px' }} 
            />

            {/* Stylized Visual Representation */}
            <div className={`relative z-10 w-full h-full flex items-center justify-center gap-12 transition-transform duration-500`} style={{ transform: `scale(${zoom / 100})` }}>
               
               {/* Compost Representation */}
               {(activeTab === 'integrated' || activeTab === 'compost') && (
                 <div className="flex flex-col items-center gap-2">
                   {Array.from({ length: compostUnits }).map((_, i) => (
                     <div key={i} className="flex gap-1 bg-slate-300/80 dark:bg-slate-700/80 p-2 rounded shadow-xl backdrop-blur-md border border-white/40">
                       <div className="w-16 h-8 bg-amber-200/90 rounded-sm"></div>
                       <div className="w-16 h-8 bg-amber-200/90 rounded-sm"></div>
                       <div className="w-16 h-8 bg-amber-200/90 rounded-sm"></div>
                     </div>
                   ))}
                   {toggles.jcbEquipment && (
                     <div className="text-xs bg-yellow-400 text-yellow-900 font-bold px-2 py-0.5 rounded shadow-sm mt-2">JCB Turner</div>
                   )}
                 </div>
               )}

               {/* Production Representation */}
               {(activeTab === 'integrated' || activeTab === 'production') && (
                 <div className={`grid gap-2 ${roomCount > 8 ? 'grid-cols-4' : 'grid-cols-2'}`}>
                   {Array.from({ length: roomCount }).map((_, i) => (
                     <div key={i} className={`w-20 md:w-28 h-12 md:h-16 rounded-sm shadow-xl backdrop-blur-md border border-white/30 flex items-center justify-center ${toggles.colourCode ? 'bg-emerald-400/80' : 'bg-slate-300/80 dark:bg-slate-700/80'}`}>
                        {toggles.roofs && <div className="absolute inset-0 bg-white/20"></div>}
                        <span className="text-[10px] font-bold text-slate-800 opacity-50">Room {i+1}</span>
                     </div>
                   ))}
                 </div>
               )}
            </div>

            {/* Bottom Floating Bar */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md px-4 py-2 rounded-full shadow-lg border border-slate-200 dark:border-slate-700 flex items-center gap-3 md:gap-5 z-20">
              <button onClick={() => setIsPlaying(!isPlaying)} className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-emerald-600 dark:text-emerald-400">
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
              </button>
              
              <div className="flex items-center gap-1.5 text-sm font-bold text-slate-700 dark:text-slate-300">
                <button onClick={() => setZoom(Math.max(50, zoom - 10))} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"><ZoomOut className="w-4 h-4" /></button>
                <span className="w-12 text-center">{zoom}%</span>
                <button onClick={() => setZoom(Math.min(150, zoom + 10))} className="p-1 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full"><ZoomIn className="w-4 h-4" /></button>
              </div>

              <button className="p-1.5 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-full text-slate-600 dark:text-slate-400">
                <Expand className="w-4 h-4" />
              </button>
              
              <div className="h-5 w-px bg-slate-300 dark:bg-slate-600"></div>

              <button className="flex items-center gap-1 px-2.5 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 hover:bg-emerald-200 rounded-full text-xs font-bold transition-colors">
                <Download className="w-3 h-3" /> PNG
              </button>
              <button className="flex items-center gap-1 px-2.5 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 rounded-full text-xs font-bold transition-colors">
                JPG
              </button>
              <Link href="https://wa.me/919203544140" target="_blank" className="flex items-center gap-1 px-3 py-1 bg-[#25D366] text-white hover:bg-[#20bd5a] rounded-full text-xs font-bold transition-colors shadow-sm">
                <MessageCircle className="w-3.5 h-3.5" /> WhatsApp
              </Link>
            </div>
          </div>

          {/* Control Panel Area */}
          <div className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 p-6 md:p-8 space-y-8">
            
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Left Column Controls */}
              <div className="space-y-6">
                
                {/* Production Room Size */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-4 h-4 text-emerald-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 4c0-1.1.9-2 2-2M2 4c0-1.1.9-2 2-2M2 20c0 1.1.9 2 2 2M14 20c0 1.1.9 2 2 2M22 14v4c0 1.1-.9 2-2 2M22 6V4c0-1.1-.9-2-2-2M2 14v4M2 6V4M6 2h4M14 2h4M6 22h4M14 22h4"/></svg></span>
                    Production Room Size
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[30, 40, 60, 70].map(size => (
                      <button 
                        key={size}
                        onClick={() => setRoomSize(size)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${roomSize === size ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm'}`}
                      >
                        {size} ft
                      </button>
                    ))}
                  </div>
                </div>

                {/* Number of Compost Units */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    <span className="w-4 h-4 text-emerald-500"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg></span>
                    Number of Compost Units
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 3, 4].map(num => (
                      <button 
                        key={num}
                        onClick={() => setCompostUnits(num)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${compostUnits === num ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm'}`}
                      >
                        {num}x
                      </button>
                    ))}
                  </div>
                </div>

                {/* Camera View */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    CAMERA VIEW
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {['ISO', 'Plan', 'Front', 'Back'].map(view => (
                      <button 
                        key={view}
                        onClick={() => setCameraView(view)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${cameraView === view ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm'}`}
                      >
                        {view}
                      </button>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right Column Controls */}
              <div className="space-y-6">
                
                {/* Number of Rooms */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    Number of Rooms
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[1, 2, 4, 6, 8, 12, 16, 20].map(num => (
                      <button 
                        key={num}
                        onClick={() => setRoomCount(num)}
                        className={`px-4 py-2 rounded-xl text-sm font-bold transition-all ${roomCount === num ? 'bg-emerald-600 text-white' : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 border border-slate-200 dark:border-slate-700 shadow-sm'}`}
                      >
                        {num}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details & Layers */}
                <div className="space-y-3">
                  <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider flex items-center gap-2">
                    Details & Layers
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {Object.entries(toggles).map(([key, value]) => {
                      // Formatting camelCase to standard text
                      const label = key.replace(/([A-Z])/g, ' $1').trim().replace(/^./, str => str.toUpperCase());
                      return (
                        <button 
                          key={key}
                          onClick={() => toggleLayer(key as keyof typeof toggles)}
                          className={`px-3 py-1.5 rounded-full text-xs font-bold transition-all shadow-sm ${value ? 'bg-emerald-600 text-white' : 'bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-300'}`}
                        >
                          {label}: {value ? 'ON' : 'OFF'}
                        </button>
                      );
                    })}
                  </div>
                </div>

              </div>
            </div>

            {/* Quick summary footer */}
            <div className="pt-6 border-t border-slate-200 dark:border-slate-800 text-center">
              <p className="text-sm font-semibold text-slate-600 dark:text-slate-400">
                {activeTab === 'integrated' ? 'Compost unit + production grow rooms' : activeTab === 'compost' ? 'Compost Phase I & II Layout' : 'Parametric grow rooms' }
                {' '}· {roomCount} Rooms · {roomSize} ft · {compostUnits} Compost Units
              </p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Feature Breakdown */}
      <div className="max-w-6xl mx-auto px-4 lg:px-8 mt-16 space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Commercial Farm Infrastructure & Machinery</h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Detailed breakdown of core equipment required for commercial mushroom cultivation. 
            Highlighting components based on your selected <strong>{activeTab.toUpperCase()}</strong> view.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((category, idx) => (
            <div key={idx} className="bg-white dark:bg-slate-900 rounded-3xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 hover:border-emerald-500/50 transition-colors">
              <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">{category.title}</h3>
              
              {category.description && (
                <p className="text-xs text-slate-500 dark:text-slate-400 mb-4 bg-slate-50 dark:bg-slate-950 p-2 rounded-lg border border-slate-100 dark:border-slate-800">
                  <Info className="inline w-3 h-3 mr-1" />{category.description}
                </p>
              )}
              
              <ul className="space-y-2 mt-4">
                {category.items.map((item, itemIdx) => (
                  <li key={itemIdx} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 shrink-0"></span>
                    <span className="leading-tight">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
