import { FastifyRequest, FastifyReplay } from 'fastify'

export async function checkSessionIdExists(
  req: FastifyRequest,
  reply: FastifyReplay,
) {
  const sessionId = req.cookies.sessionId

  if (!sessionId) {
    return reply.status(401).send({
      error: 'Unauthorized.',
    })
  }
}
