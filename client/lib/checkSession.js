export async function checkSession (headers) {
  console.log(headers)
  const URL = `${process.env.NEXT_PUBLIC_API_URL}/auth/loginLocal/success`
  const request = fetch(URL, { headers, credentials: 'include' })
  const response = await request
  const json = await response.json()

  return json
}
