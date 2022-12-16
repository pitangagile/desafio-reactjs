export function formatarDataBrasil(data: string): string {
  // divide a data em suas partes individuais
  const partesData = data.split("-");

  // rearrange as partes da data no formato brasileiro
  const dataFormatada = `${partesData[2]}/${partesData[1]}/${partesData[0]}`;

  return dataFormatada;
}
