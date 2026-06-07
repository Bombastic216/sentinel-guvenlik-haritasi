# Sentinel - Mekânsal Zeka Destekli Güvenlik Haritası

Türkiye şehirleri için mahalle bazlı risk analizi yapan interaktif güvenlik haritası.

## Özellikler

- 🗺️ SVG tabanlı interaktif harita
- 📊 6 veri katmanı (Suç İstatistikleri, Aydınlatma, Kör Noktalar, Güvenlik Kameraları, Olaylar, Yapılar)
- 🎯 Risk bazlı renk kodlama (Yeşil → Sarı → Turuncu → Kırmızı)
- 📍 Yarıçap analizi (1-50 km)
- 🏙️ Şehir seçici (İstanbul, Ankara, İzmir, Bursa)
- ⏰ Canlı veri göstergesi
- 🎨 Dark tema + JetBrains Mono font

## Kurulum

```bash
npm install
npm run dev
```

## Teknolojiler

- React 18 + TypeScript
- Vite
- SVG tabanlı harita (Leaflet entegrasyonu için hazır)

## Geliştirme

```bash
npm run dev      # Geliştirme sunucusu
npm run build    # Production build
npm run preview  # Build önizleme
```

## Lisans

MIT
