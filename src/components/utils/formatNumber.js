

export default function formatNumber(num, decimales = 0) {
  if (num >= 1e12) {
    return (num / 1e12).toFixed(decimales) + 'T'; // Trillones
} else if (num >= 1e9) {
    return (num / 1e9).toFixed(decimales) + 'B'; // Billones
} else if (num >= 1e6) {
    return (num / 1e6).toFixed(decimales) + 'M'; // Millones
} else if (num >= 1e3) {
    return (num / 1e3).toFixed(decimales) + 'K'; // Mil
}
return num.toString();
}