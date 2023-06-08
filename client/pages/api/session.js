import { checkSession } from '@/lib/checkSession'

export default async function handler (req, res) {
  const userData = await checkSession(req.headers)

  if (req.method === 'OPTIONS') res.status(200).send('ok')

  console.log(req.headers)
  if (userData?.success) res.status(200).json(userData.user)
  else res.status(401).json({ error: userData?.error })
}
