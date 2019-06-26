import MoviesDAO from "../src/dao/moviesDAO"

describe("Connection Pooling", async () => {
  beforeAll(async () => {
    await MoviesDAO.injectDB(global.mflixClient)
  })

  // test("Connection response.poolSize", async () => {
  //   const response = await MoviesDAO.getConfiguration()
  //   expect(response.poolSize).toBe(50)
  // })


  test("Connection response.authSource", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.authSource).toBe("admin")
  })
  test("Connection response.user", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.user).toBe("mongo-admin-user")
  })
  test("Connection response.retryWrites", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.retryWrites).toBe(true)
  })
  test("Connection response.ssl", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.ssl).toBe(false)
  })

  test("Connection response.connectTimeoutMS", async () => {
    const response = await MoviesDAO.getConfiguration()
    expect(response.connectTimeoutMS).toBe(50)
  })
})
