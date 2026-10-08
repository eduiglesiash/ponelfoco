/** Lógica del comprobador «¿Me afecta?». Se usa en el servidor (estado inicial) y en el cliente. */

export type Org = "pub" | "priv" | "ong";
export type Serv = "ecom" | "bank" | "tel" | "trans" | "book" | "info";
export type Size = "micro" | "pyme" | "big";

export interface Verdict {
  /** yes: obligado o posible obligación · no: sin obligación o exento */
  tone: "yes" | "no";
  pill: string;
  title: string;
  items: string[];
}

const SERV: Record<Exclude<Serv, "info">, string> = {
  ecom: "comercio electrónico",
  bank: "servicios bancarios para consumidores",
  tel: "comunicaciones electrónicas o acceso a servicios audiovisuales",
  trans: "transporte de viajeros",
  book: "libros electrónicos",
};
/** Sectores también cubiertos por la Ley 56/2007 para grandes empresas */
const BIGSECT: Partial<Record<Serv, true>> = { bank: true, tel: true, trans: true, ecom: true };

export function verdict(org: Org, serv: Serv, size: Size): Verdict {
  if (org === "pub") {
    return {
      tone: "yes",
      pill: "Obligado",
      title: "Te aplica el Real Decreto 1112/2018",
      items: [
        "Tus webs y apps deben cumplir la UNE-EN 301 549 (WCAG nivel AA).",
        "Debes publicar una declaración de accesibilidad y revisarla periódicamente.",
        "Necesitas un canal de quejas con respuesta en 20 días hábiles y un procedimiento de reclamación.",
        "Tu Unidad responsable de accesibilidad coordina el seguimiento con el Observatorio.",
      ],
    };
  }
  if (serv === "info") {
    const big = size === "big";
    const items = big
      ? [
          "Si operas en telecomunicaciones, finanzas, suministros, viajes, transporte o comercio minorista, tu web debe ser accesible por la Ley 56/2007.",
          "Si no, no hay obligación general, pero sí riesgo de reclamaciones por discriminación.",
        ]
      : [
          "Una web solo informativa de una empresa privada no está en el ámbito del Acta Europea.",
          "Si en el futuro vendes o contratas online, pasarás a estar obligado.",
          "Hacerla accesible igualmente mejora SEO, conversión y reputación.",
        ];
    if (org === "ong") items.push("Si recibes financiación pública para prestar servicios, revisa si tu convenio exige accesibilidad.");
    return {
      tone: big ? "yes" : "no",
      pill: big ? "Posible obligación" : "Sin obligación general",
      title: big ? "Revisa la LSSI y la Ley 56/2007" : "La Ley 11/2023 no te obliga por ahora",
      items,
    };
  }
  if (size === "micro") {
    return {
      tone: "no",
      pill: "Exento en servicios",
      title: "Como microempresa, estás exenta para servicios",
      items: [
        "La Ley 11/2023 exime a las microempresas que prestan servicios, como " + SERV[serv] + ".",
        "Si fabricas, importas o distribuyes productos del ámbito de la ley (terminales, ebooks readers…), la exención no aplica a esos productos.",
        "Si creces por encima de 10 personas o 2 M€, pasarás a estar obligado.",
      ],
    };
  }
  const items = [
    "Tu web y tu app deben cumplir los requisitos del anexo I. La forma práctica de demostrarlo es la EN 301 549 (WCAG AA).",
    "Debes informar en tus condiciones generales de cómo el servicio cumple los requisitos de accesibilidad.",
    "Si el servicio ya existía antes del 28/06/2025 con productos o contratos previos, tienes hasta el 28/06/2030 para esa parte.",
    "Puedes alegar carga desproporcionada, pero debes documentarla y revisarla.",
  ];
  if (size === "big" && BIGSECT[serv]) items.push("Además, como gran empresa del sector, también te afecta la Ley 56/2007.");
  return { tone: "yes", pill: "Obligado", title: "Te aplica la Ley 11/2023 por " + SERV[serv], items };
}
