/**
 * Formate un numéro de téléphone français au format "06 23 45 67 89".
 * Accepte les formats "+336..." ou "06...".
 * En cas de format inattendu (longueur incorrecte, valeur vide), retombe
 * sur la valeur brute pour ne jamais casser l'affichage.
 */
export function formatPhone(raw: string): string {
  try {
    const digits = raw.replace(/^\+33/, "0").replace(/\D/g, "");
    if (digits.length !== 10) return raw;
    return digits.replace(/(\d{2})(?=\d)/g, "$1 ").trim();
  } catch {
    return raw;
  }
}
