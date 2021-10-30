export function deobfuscate(s) {
  return decodeURIComponent(Buffer.from(s, 'base64'));
}

export function obfuscate(s) {
  return Buffer.from(encodeURIComponent(s)).toString('base64');
}