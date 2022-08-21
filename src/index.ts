import express, { Application, Request, Response } from 'express'

const app: Application = express()

app.set('port', process.env.PORT || 3000)

app.get('/', (req: Request, res: Response) => {
  res.status(200).json({ message: 'Hello world Vercel Express!' })
})

app.listen(app.get('port'), () => {
  console.log(`Server on http://localhost:${app.get('port')}/`)
})
