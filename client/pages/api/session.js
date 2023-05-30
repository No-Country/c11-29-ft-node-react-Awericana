import { checkSession } from '@/lib/checkSession'

export default async function handler (req, res) {
  const userData = await checkSession(req.headers)
  if (userData?.user) res.status(200).json(userData.user)
  else res.status(401).send({ error: userData?.error })
}
