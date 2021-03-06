import app from './app'

const port = 3333

app
  // notFound
  .use((request, response, next) => {
    const error = new Error('Not found')
    error.status = 404
    next(error)
  })

  // Catch all
  .use((error, request, response, next) => {
    response.status(error.status || 500)
    response.json({ error: error.message })
  })

  .listen(port, () => {
    console.log(`🚀  Server is running port: ${port}`)
  })
