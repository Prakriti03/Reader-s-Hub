import { loadHTML } from "../../utils/loadHtml";

export async function login(): Promise<string> {
  const html = await loadHTML("/src/components/login/login.html");

  return html.text();
}
