export const getEstados = async () => {
  const res = await fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados');
  const data = await res.json();
  return data.sort((a: any, b: any) => a.nome.localeCompare(b.nome));
};

export const getCidades = async (uf: string) => {
  const res = await fetch(`https://servicodados.ibge.gov.br/api/v1/localidades/estados/${uf}/municipios`);
  const data = await res.json();
  return data.sort((a: any, b: any) => a.nome.localeCompare(b.nome));
};