export async function handleRequest(request: string): Promise<Response> {
  return new Response(request, {
    headers: {
      'content-type': 'application/json;charset=UTF-8'
    }
  })
}
