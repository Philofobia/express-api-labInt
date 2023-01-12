// DATA MODELS
export interface RegioneInt {
  nome: string;
  id: number;
  descrizione: string[];
  immagini: string[];
  provincie: { nome: string; id: number; img: string }[];
  dataPres: {
    indicatori: string;
    alloggio: string;
    paeseRes: string;
    value: number;
    anno: number;
    mese: number;
  }[];
}

export interface provsItalyInt {
  regId: number;
  prov: provInt[];
}

export interface provInt {
  id: number;
  nome: string;
  descrizione: string[];
  img: string;
}
