import type { BankQuestion } from "../types";
import { ADMINISTRATIVO_SERVIDORES } from "./administrativo-servidores";
import { ETICA_LAI_PCD } from "./etica-lai-pcd";
import { INFORMATICA_RACIOCINIO } from "./informatica-raciocinio";
import { PORTUGUES_CONSTITUCIONAL } from "./portugues-constitucional";
import { TEMAS_ESPECIFICOS } from "./temas-especificos";

/** Banco curado: questões estilo FCC com letra da lei conferida (usado sem IA premium e como contingência). */
export const BANK: BankQuestion[] = [
  ...PORTUGUES_CONSTITUCIONAL,
  ...ADMINISTRATIVO_SERVIDORES,
  ...INFORMATICA_RACIOCINIO,
  ...ETICA_LAI_PCD,
  ...TEMAS_ESPECIFICOS,
];

export function bankFor(subjects: string[]): BankQuestion[] {
  const set = new Set(subjects);
  return BANK.filter((q) => set.has(q.subject));
}
