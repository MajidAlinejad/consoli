export function isHex(type: string): type is HEX {
  const regex = /^#([0-9a-fA-F]{6})$/;
  const result = regex.test(type);
  return result;
}
