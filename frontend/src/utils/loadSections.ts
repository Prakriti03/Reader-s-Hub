export async function loadSection(url: string, elementId: string) {
  const response = await fetch(url);  
  const content = await response.text();

  
  document.getElementById(elementId)!.innerHTML = content;
}
