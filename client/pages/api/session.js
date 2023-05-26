import { checkSession } from '@/lib/checkSession'

export default async function handler (req, res) {
  const userData = await checkSession(req.headers)
  if (userData?.error) res.status(401).send({ error: userData?.error })
  else res.status(200).json(userData)
}
