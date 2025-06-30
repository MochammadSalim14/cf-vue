import { Hono } from 'hono'

const app = new Hono()

app.get('/api/transaksi', async (c) => {
  const db = c.env.DB
  const { results } = await db.prepare('SELECT * FROM transaksi ORDER BY created_at DESC').all()
  return c.json(results)
})

app.post('/api/transaksi', async (c) => {
  const db = c.env.DB
  const data = await c.req.json()

  await db.prepare(`
    INSERT INTO transaksi (nama, harga, jumlah)
    VALUES (?, ?, ?)
  `).bind(data.nama, data.harga, data.jumlah).run()

  return c.text('Transaksi berhasil ditambahkan', 201)
})

app.put('/api/transaksi/:id', async (c) => {
  const db = c.env.DB
  const id = c.req.param('id')
  const data = await c.req.json()

  await db.prepare(`
    UPDATE transaksi SET nama = ?, harga = ?, jumlah = ?
    WHERE id = ?
  `).bind(data.nama, data.harga, data.jumlah, id).run()

  return c.text('Transaksi berhasil diperbarui')
})

app.delete('/api/transaksi/:id', async (c) => {
  const db = c.env.DB
  const id = c.req.param('id')

  await db.prepare(`DELETE FROM transaksi WHERE id = ?`).bind(id).run()

  return c.text('Transaksi berhasil dihapus')
})

export default app