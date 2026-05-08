export function formatCamperPrice(price) {
  const n = Number(price);
  if (Number.isNaN(n)) return '€0,00';
  return `€${n.toFixed(2).replace('.', ',')}`;
}
