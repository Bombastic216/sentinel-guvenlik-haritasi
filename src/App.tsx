import { useState, useCallback, useEffect } from "react";

// ── Icons (inline SVG components) ──────────────────────────────────────────
const ShieldIcon = ({ size = 16, className = "" }) => (
  <svg className={className} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const MenuIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>
  </svg>
);

const XIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const CrosshairIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/><line x1="12" y1="6" x2="12" y2="2"/><line x1="12" y1="22" x2="12" y2="18"/>
  </svg>
);

const LayersIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>
  </svg>
);

const AlertIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const LightIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);

const EyeIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const CameraIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/>
  </svg>
);

const MapPinIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>
  </svg>
);

const ZapIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
  </svg>
);

const BuildingIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="2" width="7" height="20"/><rect x="14" y="8" width="7" height="14"/><rect x="6" y="6" width="1" height="2"/><rect x="6" y="10" width="1" height="2"/><rect x="6" y="14" width="1" height="2"/><rect x="17" y="12" width="1" height="2"/>
  </svg>
);

const SettingsIcon = ({ size = 16 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

// ── Data ────────────────────────────────────────────────────────────────────
const LAYER_ICONS: Record<string, React.FC<{ size?: number }>> = {
  crime: AlertIcon,
  lighting: LightIcon,
  blind_spots: EyeIcon,
  cameras: CameraIcon,
  incidents: ZapIcon,
  buildings: BuildingIcon,
};

const defaultLayers = [
  { id: "crime", label: "Suç İstatistikleri", description: "Bölgesel suç yoğunluğu haritası", color: "#ef4444", enabled: true, count: 247, risk: "yüksek" },
  { id: "lighting", label: "Aydınlatma", description: "Sokak lambası ve aydınlatma kapsamı", color: "#eab308", enabled: true, count: 1892, risk: "orta" },
  { id: "blind_spots", label: "Kör Noktalar", description: "Mimari görüş engelleri", color: "#8b5cf6", enabled: false, count: 134, risk: "yüksek" },
  { id: "cameras", label: "Güvenlik Kameraları", description: "MOBESE ve özel kamera konumları", color: "#06b6d4", enabled: true, count: 3421, risk: "düşük" },
  { id: "incidents", label: "Olaylar", description: "Son 30 günlük acil çağrılar", color: "#f97316", enabled: false, count: 89, risk: "yüksek" },
  { id: "buildings", label: "Yapılar", description: "Bina tipi ve yoğunluk analizi", color: "#64748b", enabled: false, count: 15670, risk: "düşük" },
];

const cities = [
  { id: "istanbul", name: "İstanbul", lat: 41.015, lng: 28.979, population: "15.8M", riskScore: 62 },
  { id: "ankara", name: "Ankara", lat: 39.925, lng: 32.866, population: "5.7M", riskScore: 44 },
  { id: "izmir", name: "İzmir", lat: 38.423, lng: 27.142, population: "4.4M", riskScore: 38 },
  { id: "bursa", name: "Bursa", lat: 40.183, lng: 29.066, population: "3.1M", riskScore: 35 },
];

// ── Map (SVG placeholder with animated nodes) ───────────────────────────────
const MapPlaceholder = ({ layers, radiusMode, radiusKm }: { layers: typeof defaultLayers; radiusMode: boolean; radiusKm: number }) => {
  const activeColors = layers.filter(l => l.enabled).map(l => l.color);
  const points = [
    { x: 52, y: 38, layer: "crime", pulse: true },
    { x: 61, y: 42, layer: "crime", pulse: false },
    { x: 45, y: 55, layer: "crime", pulse: true },
    { x: 70, y: 30, layer: "lighting", pulse: false },
    { x: 35, y: 45, layer: "lighting", pulse: false },
    { x: 58, y: 62, layer: "lighting", pulse: false },
    { x: 48, y: 35, layer: "blind_spots", pulse: true },
    { x: 65, y: 50, layer: "cameras", pulse: false },
    { x: 40, y: 60, layer: "cameras", pulse: false },
    { x: 55, y: 48, layer: "cameras", pulse: false },
    { x: 75, y: 45, layer: "incidents", pulse: true },
    { x: 42, y: 40, layer: "incidents", pulse: true },
    { x: 60, y: 35, layer: "buildings", pulse: false },
  ];
  const enabledIds = layers.filter(l => l.enabled).map(l => l.id);
  const visiblePoints = points.filter(p => enabledIds.includes(p.layer));

  return (
    <div style={{ position: "relative", width: "100%", height: "100%", background: "linear-gradient(135deg, #0a0f1a 0%, #0d1520 40%, #0a1018 100%)", overflow: "hidden" }}>
      <svg width="100%" height="100%" style={{ position: "absolute", top: 0, left: 0, opacity: 0.15 }}>
        <defs>
          <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
            <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#1e40af" strokeWidth="0.5"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
      </svg>
      <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: "absolute", width: "100%", height: "100%", opacity: 0.12 }}>
        <polygon points="10,80 20,65 30,70 45,58 60,63 75,55 90,60 92,80" fill="#1e3a5f" stroke="#1e40af" strokeWidth="0.3"/>
        <polygon points="15,78 25,68 38,72 50,62 65,66 80,58 90,62 90,78" fill="#162d4a" />
        <rect x="47" y="40" width="3" height="40" fill="#0d1f35" opacity="0.8"/>
        <path d="M 0 50 Q 30 45 50 50 Q 70 55 100 48" fill="none" stroke="#1e3a5f" strokeWidth="0.8"/>
        <path d="M 20 20 L 20 80" fill="none" stroke="#1e3a5f" strokeWidth="0.5"/>
        <path d="M 50 10 L 50 90" fill="none" stroke="#1e3a5f" strokeWidth="0.5"/>
        <path d="M 80 20 L 80 80" fill="none" stroke="#1e3a5f" strokeWidth="0.5"/>
      </svg>
      <svg viewBox="0 0 100 100" preserveAspectRatio="xMidYMid meet" style={{ position: "absolute", width: "100%", height: "100%" }}>
        {visiblePoints.map((p, i) => {
          const layer = layers.find(l => l.id === p.layer);
          if (!layer) return null;
          return (
            <g key={i}>
              {p.pulse && (
                <circle cx={p.x} cy={p.y} r="3" fill="none" stroke={layer.color} strokeWidth="0.5" opacity="0.4">
                  <animate attributeName="r" values="2;6;2" dur="2s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="2s" repeatCount="indefinite"/>
                </circle>
              )}
              <circle cx={p.x} cy={p.y} r="1.5" fill={layer.color} opacity="0.9">
                {p.pulse && <animate attributeName="opacity" values="1;0.5;1" dur="1.5s" repeatCount="indefinite"/>}
              </circle>
            </g>
          );
        })}
        {radiusMode && (
          <g>
            <circle cx="50" cy="50" r={radiusKm / 8} fill="none" stroke="#3b82f6" strokeWidth="0.8" strokeDasharray="3,2" opacity="0.8">
              <animate attributeName="opacity" values="0.8;0.3;0.8" dur="3s" repeatCount="indefinite"/>
            </circle>
            <circle cx="50" cy="50" r="2" fill="#3b82f6"/>
            <circle cx="50" cy="50" r="1" fill="#93c5fd"/>
          </g>
        )}
      </svg>
      {layers.filter(l => l.enabled && l.risk === "yüksek").map((l, i) => (
        <div key={l.id} style={{
          position: "absolute", width: 120 + i * 40, height: 120 + i * 30, borderRadius: "50%",
          background: `radial-gradient(circle, ${l.color}22 0%, transparent 70%)`,
          top: `${25 + i * 15}%`, left: `${30 + i * 12}%`, pointerEvents: "none",
        }} />
      ))}
      <div style={{ position: "absolute", bottom: 24, right: 24, width: 48, height: 48, borderRadius: "50%", border: "1px solid #1e3a5f", background: "rgba(10,15,26,0.8)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10, color: "#475569", fontFamily: "monospace" }}>
        <div style={{ textAlign: "center", lineHeight: 1.2 }}>
          <div style={{ color: "#ef4444", fontWeight: "bold" }}>N</div>
          <div style={{ fontSize: 8 }}>↑</div>
        </div>
      </div>
      <div style={{ position: "absolute", bottom: 24, left: "50%", transform: "translateX(-50%)", display: "flex", alignItems: "center", gap: 6, color: "#475569", fontSize: 10, fontFamily: "monospace" }}>
        <span>0</span>
        <div style={{ width: 60, height: 2, background: "linear-gradient(90deg, #ef4444, #3b82f6)" }}/>
        <span>5 km</span>
      </div>
      <div style={{ position: "absolute", top: 12, right: 12, color: "#1e40af", fontSize: 9, fontFamily: "monospace", background: "rgba(10,15,26,0.7)", padding: "4px 8px", borderRadius: 4, border: "1px solid #1e3a5f" }}>
        41.0082° K / 28.9784° D
      </div>
    </div>
  );
};

// ── Layer Toggle ─────────────────────────────────────────────────────────────
const LayerItem = ({ layer, onToggle }: { layer: typeof defaultLayers[0]; onToggle: (id: string) => void }) => {
  const Icon = LAYER_ICONS[layer.id] || LayersIcon;
  const riskColors: Record<string, string> = { yüksek: "#ef4444", orta: "#eab308", düşük: "#22c55e" };
  return (
    <div onClick={() => onToggle(layer.id)} style={{
      display: "flex", alignItems: "center", gap: 10, padding: "10px 12px", borderRadius: 8, cursor: "pointer",
      background: layer.enabled ? "rgba(30,58,95,0.3)" : "transparent",
      border: `1px solid ${layer.enabled ? layer.color + "44" : "#1e293b"}`,
      marginBottom: 6, transition: "all 0.2s", position: "relative", overflow: "hidden",
    }}>
      <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 3, background: layer.enabled ? layer.color : "#1e293b", borderRadius: "8px 0 0 8px", transition: "background 0.2s" }} />
      <div style={{ width: 28, height: 28, borderRadius: 6, background: layer.enabled ? layer.color + "22" : "#0f172a", display: "flex", alignItems: "center", justifyContent: "center", color: layer.enabled ? layer.color : "#475569", flexShrink: 0, transition: "all 0.2s", marginLeft: 6 }}>
        <Icon size={14} />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontSize: 12, fontWeight: 600, color: layer.enabled ? "#e2e8f0" : "#475569", fontFamily: "'JetBrains Mono', monospace", marginBottom: 2, transition: "color 0.2s" }}>{layer.label}</div>
        <div style={{ fontSize: 10, color: "#334155", fontFamily: "monospace" }}>{layer.count.toLocaleString("tr-TR")} nokta</div>
      </div>
      <div style={{ fontSize: 9, fontFamily: "monospace", fontWeight: 700, color: riskColors[layer.risk], background: riskColors[layer.risk] + "15", padding: "2px 6px", borderRadius: 4, textTransform: "uppercase", letterSpacing: 1, border: `1px solid ${riskColors[layer.risk]}30`, flexShrink: 0 }}>{layer.risk}</div>
      <div style={{ width: 32, height: 18, borderRadius: 9, background: layer.enabled ? layer.color : "#1e293b", position: "relative", transition: "background 0.2s", flexShrink: 0, border: `1px solid ${layer.enabled ? layer.color : "#334155"}` }}>
        <div style={{ width: 12, height: 12, borderRadius: "50%", background: "#fff", position: "absolute", top: 2, left: layer.enabled ? 16 : 2, transition: "left 0.2s", boxShadow: "0 1px 3px rgba(0,0,0,0.4)" }} />
      </div>
    </div>
  );
};

// ── Stats Bar ────────────────────────────────────────────────────────────────
const StatsBar = ({ layers, city }: { layers: typeof defaultLayers; city: typeof cities[0] | null }) => {
  const activeLayers = layers.filter(l => l.enabled);
  const highRisk = activeLayers.filter(l => l.risk === "yüksek").length;
  const totalPoints = activeLayers.reduce((sum, l) => sum + l.count, 0);
  return (
    <div style={{ display: "flex", gap: 1, background: "#080d17", borderTop: "1px solid #1e293b", flexShrink: 0 }}>
      {[
        { label: "AKTİF KATMAN", value: `${activeLayers.length}/${layers.length}`, color: "#3b82f6" },
        { label: "YÜKSEK RİSK", value: String(highRisk), color: "#ef4444" },
        { label: "TOPLAM NOKTA", value: totalPoints.toLocaleString("tr-TR"), color: "#22c55e" },
        { label: "RİSK SKORU", value: city ? `${city.riskScore}/100` : "—", color: "#eab308" },
      ].map((stat, i) => (
        <div key={i} style={{ flex: 1, padding: "10px 8px", textAlign: "center", borderRight: i < 3 ? "1px solid #1e293b" : "none" }}>
          <div style={{ fontSize: 15, fontWeight: 700, fontFamily: "'JetBrains Mono', monospace", color: stat.color, letterSpacing: 1 }}>{stat.value}</div>
          <div style={{ fontSize: 8, color: "#334155", fontFamily: "monospace", marginTop: 2, letterSpacing: 1 }}>{stat.label}</div>
        </div>
      ))}
    </div>
  );
};

// ── Radius Panel ─────────────────────────────────────────────────────────────
const RadiusPanel = ({ radiusKm, setRadiusKm, onClose }: { radiusKm: number; setRadiusKm: (v: number) => void; onClose: () => void }) => (
  <div style={{ position: "absolute", bottom: 80, right: 16, width: 220, background: "#0d1520", border: "1px solid #1e3a5f", borderRadius: 10, padding: 16, zIndex: 20, boxShadow: "0 8px 32px rgba(0,0,0,0.6)" }}>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
      <div style={{ fontSize: 11, fontWeight: 700, color: "#3b82f6", fontFamily: "monospace", letterSpacing: 2 }}>YARIÇAP ANALİZİ</div>
      <button onClick={onClose} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer" }}><XIcon size={14} /></button>
    </div>
    <div style={{ marginBottom: 10 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 6 }}>
        <span style={{ fontSize: 10, color: "#64748b", fontFamily: "monospace" }}>MESAFE</span>
        <span style={{ fontSize: 12, color: "#93c5fd", fontFamily: "monospace", fontWeight: 700 }}>{radiusKm} km</span>
      </div>
      <input type="range" min={1} max={50} value={radiusKm} onChange={e => setRadiusKm(Number(e.target.value))} style={{ width: "100%", accentColor: "#3b82f6" }} />
      <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
        <span style={{ fontSize: 9, color: "#334155", fontFamily: "monospace" }}>1 km</span>
        <span style={{ fontSize: 9, color: "#334155", fontFamily: "monospace" }}>50 km</span>
      </div>
    </div>
    <div style={{ background: "#091018", borderRadius: 6, padding: 10, border: "1px solid #1e293b", fontSize: 10, fontFamily: "monospace", color: "#64748b", lineHeight: 1.8 }}>
      <div>Alan: <span style={{ color: "#93c5fd" }}>{(Math.PI * radiusKm * radiusKm).toFixed(0)} km²</span></div>
      <div>Tahm. Nüfus: <span style={{ color: "#93c5fd" }}>{Math.round(radiusKm * radiusKm * 8500).toLocaleString("tr-TR")}</span></div>
      <div>Kamera Kapsamı: <span style={{ color: "#22c55e" }}>%{Math.min(95, 40 + radiusKm * 2)}</span></div>
    </div>
  </div>
);

// ── City Selector ─────────────────────────────────────────────────────────────
const CitySelector = ({ cities: cityList, selected, onSelect }: { cities: typeof cities; selected: typeof cities[0] | null; onSelect: (c: typeof cities[0]) => void }) => (
  <div style={{ padding: "10px 0" }}>
    {cityList.map(city => {
      const isSelected = selected?.id === city.id;
      const riskColor = city.riskScore > 55 ? "#ef4444" : city.riskScore > 40 ? "#eab308" : "#22c55e";
      return (
        <div key={city.id} onClick={() => onSelect(city)} style={{
          display: "flex", alignItems: "center", gap: 8, padding: "8px 12px", borderRadius: 6, cursor: "pointer",
          background: isSelected ? "rgba(59,130,246,0.15)" : "transparent",
          border: `1px solid ${isSelected ? "#3b82f680" : "transparent"}`,
          marginBottom: 4, transition: "all 0.15s",
        }}>
          <MapPinIcon size={12} />
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: 12, fontWeight: 600, color: isSelected ? "#93c5fd" : "#94a3b8", fontFamily: "monospace" }}>{city.name}</div>
            <div style={{ fontSize: 9, color: "#334155", fontFamily: "monospace" }}>Nüf: {city.population}</div>
          </div>
          <div style={{ fontSize: 10, fontWeight: 700, color: riskColor, fontFamily: "monospace" }}>{city.riskScore}</div>
        </div>
      );
    })}
  </div>
);

// ── Main App ─────────────────────────────────────────────────────────────────
export default function SentinelApp() {
  const [layers, setLayers] = useState(defaultLayers);
  const [selectedCity, setSelectedCity] = useState(cities[0]);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [radiusMode, setRadiusMode] = useState(false);
  const [radiusKm, setRadiusKm] = useState(15);
  const [activeTab, setActiveTab] = useState("layers");
  const [showAdmin, setShowAdmin] = useState(false);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setTick(x => x + 1), 1000);
    return () => clearInterval(t);
  }, []);

  const now = new Date();
  const timeStr = now.toLocaleTimeString("tr-TR", { hour: "2-digit", minute: "2-digit", second: "2-digit" });

  const handleToggleLayer = useCallback((layerId: string) => {
    setLayers(prev => prev.map(l => l.id === layerId ? { ...l, enabled: !l.enabled } : l));
  }, []);

  const activeLayers = layers.filter(l => l.enabled);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh", width: "100%", background: "#060b14", color: "#e2e8f0", fontFamily: "'JetBrains Mono', 'Courier New', monospace", overflow: "hidden" }}>
      {/* ── Top Bar ── */}
      <header style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 16px", height: 48, background: "#080d17", borderBottom: "1px solid #1e293b", flexShrink: 0, zIndex: 10 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", color: "#475569", cursor: "pointer", padding: 4 }}>
            {sidebarOpen ? <XIcon size={16} /> : <MenuIcon size={16} />}
          </button>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 28, height: 28, borderRadius: 6, background: "rgba(59,130,246,0.2)", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(59,130,246,0.4)" }}>
              <ShieldIcon size={14} className="" style={{ color: "#3b82f6" }} />
            </div>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: 3, color: "#e2e8f0" }}>SENTINEL</div>
              <div style={{ fontSize: 8, color: "#334155", letterSpacing: 2 }}>Mekânsal Zeka</div>
            </div>
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: "#0f172a", padding: "4px 10px", borderRadius: 6, border: "1px solid #1e293b" }}>
            <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e" }}>
              <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#22c55e", animation: "ping 1.5s ease-in-out infinite" }} />
            </div>
            <span style={{ fontSize: 10, color: "#64748b", letterSpacing: 1 }}>CANLI</span>
            <span style={{ fontSize: 10, color: "#94a3b8", letterSpacing: 1 }}>{timeStr}</span>
          </div>
          {selectedCity && (
            <div style={{ fontSize: 11, color: "#3b82f6", fontWeight: 700, letterSpacing: 2 }}>{selectedCity.name.toUpperCase()}</div>
          )}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setRadiusMode(!radiusMode)} style={{
            display: "flex", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 6,
            border: `1px solid ${radiusMode ? "#3b82f6" : "#1e293b"}`,
            background: radiusMode ? "rgba(59,130,246,0.15)" : "transparent",
            color: radiusMode ? "#3b82f6" : "#475569", cursor: "pointer", fontSize: 10, fontFamily: "monospace", letterSpacing: 1,
          }}>
            <CrosshairIcon size={12} /> YARIÇAP
          </button>
          <button onClick={() => setShowAdmin(!showAdmin)} style={{ width: 28, height: 28, borderRadius: 6, border: "1px solid #1e293b", background: "transparent", color: "#475569", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <SettingsIcon size={13} />
          </button>
        </div>
      </header>

      {/* ── Body ── */}
      <div style={{ display: "flex", flex: 1, overflow: "hidden" }}>
        {/* ── Sidebar ── */}
        {sidebarOpen && (
          <aside style={{ width: 280, background: "#080d17", borderRight: "1px solid #1e293b", display: "flex", flexDirection: "column", flexShrink: 0, overflow: "hidden" }}>
            <div style={{ display: "flex", borderBottom: "1px solid #1e293b", flexShrink: 0 }}>
              {([
                { id: "layers" as const, label: "KATMANLAR", icon: LayersIcon },
                { id: "cities" as const, label: "ŞEHİRLER", icon: MapPinIcon },
              ]).map(tab => {
                const TabIcon = tab.icon;
                return (
                  <button key={tab.id} onClick={() => setActiveTab(tab.id)} style={{
                    flex: 1, padding: "10px 0", background: "none", border: "none",
                    borderBottom: activeTab === tab.id ? "2px solid #3b82f6" : "2px solid transparent",
                    color: activeTab === tab.id ? "#3b82f6" : "#475569", cursor: "pointer",
                    fontSize: 9, fontFamily: "monospace", letterSpacing: 2, fontWeight: 700,
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 6, transition: "all 0.15s",
                  }}>
                    <TabIcon size={11} /> {tab.label}
                  </button>
                );
              })}
            </div>
            <div style={{ flex: 1, overflow: "auto", padding: "12px 12px 0" }}>
              {activeTab === "layers" && (
                <>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 10 }}>
                    <div style={{ fontSize: 9, color: "#334155", letterSpacing: 2 }}>{activeLayers.length} AKTİF / {layers.length} TOPLAM</div>
                    <button onClick={() => setLayers(prev => prev.map(l => ({ ...l, enabled: activeLayers.length < layers.length })))} style={{ fontSize: 9, color: "#3b82f6", background: "none", border: "none", cursor: "pointer", fontFamily: "monospace", letterSpacing: 1 }}>
                      {activeLayers.length < layers.length ? "TÜMÜNÜ AÇ" : "TÜMÜNÜ KAPAT"}
                    </button>
                  </div>
                  {layers.map(layer => (<LayerItem key={layer.id} layer={layer} onToggle={handleToggleLayer} />))}
                  {activeLayers.length > 0 && (
                    <div style={{ margin: "12px 0", padding: 12, background: "#091018", borderRadius: 8, border: "1px solid #1e293b" }}>
                      <div style={{ fontSize: 9, color: "#334155", letterSpacing: 2, marginBottom: 8 }}>AKTİF KATMAN RENKLERİ</div>
                      <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>
                        {activeLayers.map(l => (
                          <div key={l.id} style={{ display: "flex", alignItems: "center", gap: 4, fontSize: 9, color: "#64748b", fontFamily: "monospace" }}>
                            <div style={{ width: 8, height: 8, borderRadius: "50%", background: l.color }} />
                            {l.label.split(" ")[0]}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}
              {activeTab === "cities" && (
                <>
                  <div style={{ fontSize: 9, color: "#334155", letterSpacing: 2, marginBottom: 8 }}>ŞEHİR SEÇ — RİSK SKORU</div>
                  <CitySelector cities={cities} selected={selectedCity} onSelect={setSelectedCity} />
                  {selectedCity && (
                    <div style={{ margin: "8px 0 12px", padding: 12, background: "#091018", borderRadius: 8, border: "1px solid #1e3a5f", fontSize: 10, fontFamily: "monospace", lineHeight: 2, color: "#64748b" }}>
                      <div style={{ color: "#3b82f6", fontWeight: 700, marginBottom: 4 }}>{selectedCity.name}</div>
                      <div>Enlem: <span style={{ color: "#94a3b8" }}>{selectedCity.lat}°</span></div>
                      <div>Boylam: <span style={{ color: "#94a3b8" }}>{selectedCity.lng}°</span></div>
                      <div>Nüfus: <span style={{ color: "#94a3b8" }}>{selectedCity.population}</span></div>
                      <div>Risk: <span style={{ color: selectedCity.riskScore > 55 ? "#ef4444" : selectedCity.riskScore > 40 ? "#eab308" : "#22c55e", fontWeight: 700 }}>{selectedCity.riskScore}/100</span></div>
                    </div>
                  )}
                </>
              )}
            </div>
            <div style={{ padding: "10px 12px", borderTop: "1px solid #1e293b", fontSize: 9, color: "#1e3a5f", fontFamily: "monospace", letterSpacing: 1, flexShrink: 0 }}>
              SENTINEL v2.1.0 · BETA · İBB VERİ ENTEGRASYONU
            </div>
          </aside>
        )}

        {/* ── Map Area ── */}
        <main style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden", position: "relative" }}>
          <div style={{ flex: 1, position: "relative" }}>
            <MapPlaceholder layers={layers} radiusMode={radiusMode} radiusKm={radiusKm} />
            {radiusMode && <RadiusPanel radiusKm={radiusKm} setRadiusKm={setRadiusKm} onClose={() => setRadiusMode(false)} />}
            {activeLayers.length === 0 && (
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", textAlign: "center", color: "#1e3a5f", fontFamily: "monospace" }}>
                <LayersIcon size={32} />
                <div style={{ marginTop: 8, fontSize: 11, letterSpacing: 2 }}>KATMAN SEÇİNİZ</div>
              </div>
            )}
          </div>
          <StatsBar layers={layers} city={selectedCity} />
        </main>
      </div>

      <style>{`
        @keyframes ping { 0%, 100% { transform: scale(1); opacity: 1; } 50% { transform: scale(2); opacity: 0; } }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: #060b14; }
        ::-webkit-scrollbar-thumb { background: #1e293b; border-radius: 2px; }
      `}</style>
    </div>
  );
}
