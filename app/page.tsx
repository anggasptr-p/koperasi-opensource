import { supabase } from '../lib/supabase'

export const revalidate = 0 // Biar data ciloknya fresh terus, gak basi!

export default async function Home() {
  // Ambil data dari tabel 'products' (sesuain nama tabel lo di Supabase ya!)
  const { data: products, error } = await supabase
    .from('products')
    .select('*')

  if (error) {
    return (
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <h1>Waduh, Koperasi Lagi Error, Ler! 😭</h1>
        <p>{error.message}</p>
      </div>
    )
  }

  return (
    <main style={{ padding: '20px', fontFamily: 'sans-serif', lineHeight: '1.6' }}>
      <header style={{ marginBottom: '40px', borderBottom: '2px solid #eee' }}>
        <h1 style={{ color: '#2c3e50' }}>🏪 Koperasi Smaneka Open Source</h1>
        <p>Halo Ardi! Ini data barang yang udah narik dari Supabase:</p>
      </header>

      <section>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {products?.map((item) => (
            <li 
              key={item.id} 
              style={{ 
                background: '#f9f9f9', 
                margin: '10px 0', 
                padding: '15px', 
                borderRadius: '8px',
                border: '1px solid #ddd'
              }}
            >
              <strong>{item.name}</strong> - Rp {item.price?.toLocaleString('id-ID')}
              <br />
              <small style={{ color: '#666' }}>Stok: {item.stock} unit</small>
            </li>
          ))}
        </ul>
      </section>

      {products?.length === 0 && <p>Kosong, Bre! Belom ada yang jualan cilok di database.</p>}
      
      <footer style={{ marginTop: '50px', fontSize: '0.8rem', color: '#999' }}>
        Built with ❤️ for SMAN 1 Kepanjen
      </footer>
    </main>
  )
}
