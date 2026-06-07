export const backendUrl = "http://localhost:5268";

export function buildResourcesUrl(relativePath: string){
  return `${backendUrl}${relativePath}`;
}
