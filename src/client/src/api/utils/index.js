export const dataUrl = (params = []) => {
  let url = '';
  params.forEach(p => { url = url + '/' + p });
  return url
}