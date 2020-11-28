import express from 'express'
const app:express.Application = express()
const PORT = 8000

app.use(express.static(__dirname))
app.get('**', (req, res) =>{
    res.sendFile('./index.html', {root: __dirname })
})

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`)
})