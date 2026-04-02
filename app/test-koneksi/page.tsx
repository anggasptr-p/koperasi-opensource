'use client'
import { useEffect, useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function TestKoneksi() {
  const [products, setProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function ambilData() {
      // Narik data dari tabel 'products' yang lo bikin di SQL tadi
      const { data, error } = await supabase.from('products').select('*')
      
      if (error) {
        console.error("Waduh Ardi, error nih:", error.message)
      } else {
        setProducts(data || [])
      }
      setLoading(false)
    }
    ambilData()
  }, [])

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h1>🚀 Test Koneksi Koperasi Smaneka</h1>
      <hr />
      {loading ? (
        <p>Lagi loading data Cilok, sabar ya Ler...</p>
      ) : (
        <ul>
          {products.map((item) => (
            <li key={item.id} style={{ marginBottom: '10px' }}>
              <strong>{item.name}</strong> - Rp{Number(item.price).toLocaleString()} 
              <br />
              <small>Stok: {item.stock} | Kategori: {item.category}</small>
            </li>
          ))}
        </ul>
      )}
      {products.length === 0 && !loading && <p>Kosong melompong, Bre! Cek SQL lo udah di-Run belom?</p>}
    </div>
  )
}
