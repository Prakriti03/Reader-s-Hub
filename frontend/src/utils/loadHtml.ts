export async function loadHTML(url: string): Promise<Response> {
  const response = await fetch(url);
  return response;
}
