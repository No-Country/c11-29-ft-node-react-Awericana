export async function checkSession (headers) {
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/loginLocal/success`
  const request = fetch(URL, { headers })
  const response = await request
  const json = await response.json()

  return json
}
