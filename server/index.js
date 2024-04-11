const express = require('express'),
  PORT = 5000,
  app = express()

app.get('/api/v1', (req, res) => {
  const d = new Date()
  let h = ('00' + d.getUTCHours()).slice(-2)
  let m = ('00' + d.getUTCMinutes()).slice(-2)
  let s = ('00' + d.getUTCSeconds()).slice(-2)
  res.send(`${h}:${m}:${s}`)
})

app.listen(PORT, () => console.log(`start listening on port : ${PORT}`))
