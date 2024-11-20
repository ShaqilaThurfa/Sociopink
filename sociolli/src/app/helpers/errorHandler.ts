import { ZodError } from "zod"

export class HttpError extends Error {
  status: number = 500
  constructor(message: string, status: number) {
    super(message)
    this.status = status
  }
}

export function errorHandler(error: unknown) {
  if (error instanceof HttpError) {
    return Response.json({ message: error.message }, { status: error.status })
  }

  if (error instanceof ZodError) {
    const message = error.issues[0].message.toLowerCase()
    return Response.json({ message }, { status: 400 })
  }

  return Response.json({ message: "Internal server error" }, { status: 500 })
}

