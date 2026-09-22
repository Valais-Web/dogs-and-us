import familiaAsset from "@/assets/familia-jardin.jpg.asset.json";
import picnicAsset from "@/assets/bebe-perro-picnic.jpg.asset.json";
import embarazoAsset from "@/assets/embarazo-perro.jpg.asset.json";
import nieveAsset from "@/assets/nina-perro-nieve.jpg.asset.json";

export const IMG = {
  familia: familiaAsset.url,
  picnic: picnicAsset.url,
  embarazo: embarazoAsset.url,
  nieve: nieveAsset.url,
};

export const CATEGORIES = [
  "Todos",
  "Embarazo",
  "Presentación",
  "Lenguaje canino",
  "Bebés móviles",
  "Perros y toddlers",
  "Acompañamiento emocional madres",
  "Educación canina para niños",
] as const;

export type Block =
  | { t: "p"; text: string }
  | { t: "list"; items: Array<[string, string]> }
  | { t: "quote"; text: string }
  | { t: "img"; src: string; alt: string };

export type Section = { id: string; title: string; blocks: Block[] };

export type Post = {
  slug: string;
  title: string;
  category: string;
  image: string;
  imageAlt: string;
  date: string;
  dateLabel: string;
  metaTitle: string;
  metaDesc: string;
  keywords: string;
  excerpt: string;
  intro: string[];
  sections: Section[];
  faqs: Array<[string, string]>;
  references: Array<{ text: string; url: string }>;
};

export const posts: Post[] = [
  {
    slug: "como-preparar-a-tu-perro-para-la-llegada-del-bebe",
    title: "Cómo preparar a tu perro para la llegada del bebé: guía basada en evidencia",
    category: "Embarazo",
    image: IMG.embarazo,
    imageAlt: "Mujer embarazada acariciando a su perro en casa mientras preparan la llegada del bebé",
    date: "2026-09-12",
    dateLabel: "12 de septiembre de 2026",
    metaTitle: "Cómo preparar a tu perro para la llegada del bebé",
    metaDesc: "Guía basada en evidencia para preparar a tu perro durante el embarazo: rutinas, espacios, sonidos y señales de estrés antes de que llegue el bebé.",
    keywords: "preparar al perro para la llegada del bebé, perro y embarazo, perro y recién nacido, cambios de rutina del perro",
    excerpt: "Los cambios que puedes empezar durante el embarazo para que tu perro viva la llegada del bebé con calma, según lo que dice la investigación.",
    intro: [
      "Durante el embarazo la casa cambia poco a poco: muebles nuevos, olores distintos, horarios que se mueven. Tu perro registra cada uno de esos cambios. Preparar al perro para la llegada del bebé consiste en hacer esos ajustes con tiempo, para que no coincidan todos con el día en que el bebé llega a casa.",
    ],
    sections: [
      {
        id: "que-dice-la-investigacion",
        title: "Qué dice la investigación sobre perros y bebés",
        blocks: [
          { t: "p", text: "Un estudio con 402 familias con niños de hasta 6 años encontró que los perros que ya vivían en casa antes de que naciera el niño mostraban menos conductas afiliativas hacia él y más conductas relacionadas con el miedo que los perros que crecieron con niños (Arhant et al., 2017). Los autores concluyen que la prevención debe dirigirse a madres y padres desde muy temprano en la relación niño-perro." },
          { t: "p", text: "Una revisión sistemática de 43 estudios y 86.880 pacientes confirmó que los menores de 9 años concentran la mayor carga de mordeduras, y que los menores de 6 tienen más riesgo de lesiones en cabeza, cuello y cara (Patterson et al., 2022). Por eso conviene empezar a trabajar la convivencia antes del parto." },
        ],
      },
      {
        id: "cambios-de-rutina",
        title: "Cambios de rutina que puedes hacer desde el embarazo",
        blocks: [
          { t: "p", text: "Estos ajustes se integran en el día a día y no requieren sesiones largas:" },
          { t: "list", items: [
            ["Mueve los horarios con anticipación.", "Si los paseos o las comidas van a cambiar de hora, empieza semanas antes del parto."],
            ["Define una zona de descanso.", "Un lugar tranquilo donde tu perro pueda retirarse y donde nadie lo moleste."],
            ["Presenta los objetos del bebé uno a uno.", "Carriola, cuna, silla del coche. Deja que los explore y refuerza la calma."],
            ["Trabaja los sonidos del bebé.", "Audios de llanto a volumen bajo asociados a algo agradable, subiendo poco a poco."],
            ["Refuerza conductas útiles.", "Ir a su cama, esperar en una puerta, soltar un objeto."],
          ]},
          { t: "img", src: IMG.familia, alt: "Familia en el jardín con su perra antes de la llegada del bebé" },
        ],
      },
      {
        id: "refuerzo-positivo",
        title: "Por qué usar refuerzo positivo durante el embarazo",
        blocks: [
          { t: "p", text: "En un estudio con 92 perros de compañía, los entrenados con métodos aversivos mostraron más conductas de estrés y mayores aumentos de cortisol después del entrenamiento que los entrenados con recompensas (Vieira de Castro et al., 2020). Si tu perro va a vivir muchos cambios a la vez, conviene que aprenda las nuevas rutinas en un contexto que no le añada estrés." },
          { t: "quote", text: "La meta es que tu perro se sienta seguro en su propia casa cuando llegue el bebé." },
        ],
      },
      {
        id: "ayuda-profesional",
        title: "Cuándo pedir ayuda profesional",
        blocks: [
          { t: "p", text: "Si tu perro ya muestra miedo o reactividad ante niños, gruñe al acercarse a su comida o se esconde con frecuencia, busca una valoración con una profesional de conducta canina antes del parto. Es más sencillo trabajar estas conductas con tiempo." },
        ],
      },
    ],
    faqs: [
      ["¿Cuándo empiezo a preparar a mi perro para la llegada del bebé?", "Lo ideal es empezar en el segundo trimestre del embarazo, para introducir los cambios de rutina de forma gradual."],
      ["¿Debo dejar de darle atención a mi perro durante el embarazo?", "No hace falta. Lo recomendable es ajustar los momentos de atención a como serán cuando llegue el bebé, para que el cambio no sea brusco."],
      ["¿Es peligroso tener perro durante el embarazo?", "Convivir con un perro sano y con sus vacunas al día es compatible con el embarazo. Consulta con tu ginecóloga cualquier duda sobre higiene o salud."],
    ],
    references: [
      { text: "Arhant C, Beetz AM, Troxler J. Caregiver reports of interactions between children up to 6 years and their family dog: implications for dog bite prevention. Front Vet Sci. 2017;4:130.", url: "https://pubmed.ncbi.nlm.nih.gov/28913340/" },
      { text: "Patterson KN, Horvath KZ, Minneci PC, et al. Pediatric dog bite injuries in the USA: a systematic review. World J Pediatr Surg. 2022;5:e000281.", url: "https://pubmed.ncbi.nlm.nih.gov/36474513/" },
      { text: "Vieira de Castro AC, Fuchs D, Morello GM, et al. Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare. PLoS One. 2020;15(12):e0225023.", url: "https://doi.org/10.1371/journal.pone.0225023" },
    ],
  },
  {
    slug: "senales-de-estres-en-perros",
    title: "Señales de estrés en perros: las que casi nadie reconoce",
    category: "Lenguaje canino",
    image: IMG.picnic,
    imageAlt: "Perra tumbada junto a una bebé mostrando lenguaje corporal relajado",
    date: "2026-09-02",
    dateLabel: "2 de septiembre de 2026",
    metaTitle: "Señales de estrés en perros: cómo reconocerlas",
    metaDesc: "Aprende a identificar las señales de estrés en perros que suelen pasar desapercibidas: bostezos, lamidos, orejas hacia atrás. Guía basada en estudios.",
    keywords: "señales de estrés en perros, lenguaje corporal del perro, señales de calma, perro incómodo con bebé",
    excerpt: "Bostezos, lamidos, orejas hacia atrás: lo que tu perro comunica mucho antes de gruñir, y lo que dice la ciencia sobre cómo lo interpretamos.",
    intro: [
      "Tu perro se comunica todo el tiempo con su cuerpo. Aprender a leer las señales de estrés en perros es una de las herramientas más útiles para una convivencia segura con un bebé, porque te permite intervenir antes de que la incomodidad aumente.",
    ],
    sections: [
      {
        id: "que-senales-reconocemos",
        title: "Qué señales de estrés reconocemos y cuáles pasamos por alto",
        blocks: [
          { t: "p", text: "En una encuesta a 1.190 tutores de perros, las señales de estrés identificadas con más frecuencia fueron temblar y gemir, seguidas de agresividad, ladrido excesivo y jadeo (Mariti et al., 2012). Las señales sutiles quedaron en segundo plano." },
          { t: "p", text: "Incluso estudiantes de veterinaria identificaron con facilidad las conductas estereotipadas o el ladrido excesivo, pero reconocieron menos el bostezo, la baja actividad o levantar una pata como indicadores de estrés (Menor-Campos et al., 2022)." },
        ],
      },
      {
        id: "senales-conviene-conocer",
        title: "Señales de estrés en perros que conviene conocer",
        blocks: [
          { t: "p", text: "Estas son algunas de las señales tempranas más frecuentes:" },
          { t: "list", items: [
            ["Bostezar", "fuera de contexto de sueño o cansancio."],
            ["Lamerse el hocico", "con movimientos rápidos de lengua."],
            ["Ojo de ballena:", "se ve el blanco del ojo mientras gira la cabeza."],
            ["Orejas hacia atrás y cola baja", "o entre las patas."],
            ["Quedarse inmóvil", "o alejarse de la situación."],
            ["Levantar una pata delantera", "en una situación de tensión."],
          ]},
        ],
      },
      {
        id: "leer-al-perro-con-ninos",
        title: "Por qué cuesta leer al perro cuando está con niños",
        blocks: [
          { t: "p", text: "En un estudio, 71 adultos vieron vídeos de interacciones cotidianas entre perros y niños. La mayoría describió a los perros con impresiones generales, como \"el perro está feliz\", en lugar de fijarse en conductas concretas del cuerpo (Demirbas et al., 2016). Otro estudio mostró que la capacidad de percibir miedo en un perro varía según la experiencia previa con perros (Wan et al., 2012)." },
          { t: "p", text: "La buena noticia es que esta habilidad se puede entrenar: observar orejas, boca, cola y postura por separado ayuda a tener una lectura más precisa." },
          { t: "img", src: IMG.nieve, alt: "Perro en la nieve observando a su familia con postura atenta" },
        ],
      },
      {
        id: "que-hacer",
        title: "Qué hacer cuando ves señales de estrés",
        blocks: [
          { t: "p", text: "Si tu perro muestra estas señales cerca del bebé, crea distancia con calma: llama a tu perro hacia su zona de descanso o aleja al bebé. Evita regañarlo, porque la señal es información útil sobre cómo se siente." },
        ],
      },
    ],
    faqs: [
      ["¿Qué significa que mi perro bostece cerca del bebé?", "Puede ser una señal de incomodidad o tensión. Observa el resto del cuerpo y, si hay otras señales, dale espacio."],
      ["¿Mover la cola significa que el perro está feliz?", "No siempre. La posición, la velocidad y el resto del lenguaje corporal dan más información que el movimiento por sí solo."],
    ],
    references: [
      { text: "Mariti C, Gazzano A, Moore JL, et al. Perception of dogs’ stress by their owners. J Vet Behav. 2012;7(4):213-219.", url: "https://doi.org/10.1016/j.jveb.2011.09.004" },
      { text: "Menor-Campos DJ, Williams JM, Gazzano A, Mariti C. Student veterinarians’ ability to recognize behavioral signs of stress in dogs. J Vet Behav. 2022.", url: "https://www.sciencedirect.com/science/article/abs/pii/S1558787821001842" },
      { text: "Demirbas YS, Ozturk H, Emre B, et al. Adults’ ability to interpret canine body language during a dog–child interaction. Anthrozoös. 2016;29(4):581-596.", url: "https://doi.org/10.1080/08927936.2016.1228750" },
      { text: "Wan M, Bolger N, Champagne FA. Human perception of fear in dogs varies according to experience with dogs. PLoS One. 2012;7(12):e51775.", url: "https://doi.org/10.1371/journal.pone.0051775" },
    ],
  },
  {
    slug: "como-presentar-al-perro-y-al-bebe",
    title: "Cómo presentar al perro y al bebé al llegar del hospital",
    category: "Presentación",
    image: IMG.familia,
    imageAlt: "Familia presentando a su bebé recién nacido a su perra en el jardín",
    date: "2026-08-24",
    dateLabel: "24 de agosto de 2026",
    metaTitle: "Cómo presentar al perro y al bebé de forma segura",
    metaDesc: "Pasos para presentar al perro y al bebé al llegar del hospital: preparación, primer encuentro y supervisión, con base en estudios sobre convivencia.",
    keywords: "presentar al perro y al bebé, primer encuentro perro bebé, llegar del hospital con el bebé, perro y recién nacido",
    excerpt: "Qué hacer en el primer encuentro para que la presentación sea tranquila y segura, y por qué la supervisión es la clave.",
    intro: [
      "El primer encuentro entre tu perro y tu bebé suele generar muchas dudas. Hay pocos estudios que evalúen protocolos de presentación concretos, pero la investigación sobre supervisión y mordeduras en niños pequeños da pautas claras para planificarlo.",
    ],
    sections: [
      {
        id: "antes-de-llegar",
        title: "Antes de llegar a casa",
        blocks: [
          { t: "p", text: "Si es posible, pide que alguien lleve a casa una prenda que haya usado el bebé para que tu perro la huela con calma. Mantén sus paseos y rutinas esos días para que el cambio sea menos brusco." },
        ],
      },
      {
        id: "primer-encuentro",
        title: "El primer encuentro paso a paso",
        blocks: [
          { t: "p", text: "Estos pasos ayudan a que la presentación sea tranquila:" },
          { t: "list", items: [
            ["Saluda primero a tu perro sin el bebé.", "Llevas días fuera y tu perro querrá recibirte."],
            ["Entra con calma y con otra persona.", "Una sostiene al bebé y la otra atiende al perro."],
            ["Deja que el perro se acerque por su cuenta.", "Sin forzar el contacto ni acercarle al bebé a la cara."],
            ["Refuerza la calma.", "Premia cuando olfatea tranquilo y se aleja."],
            ["Termina pronto.", "Un encuentro breve y tranquilo es mejor que uno largo."],
          ]},
          { t: "img", src: IMG.picnic, alt: "Perra olfateando con calma a una bebé en brazos de su mamá" },
        ],
      },
      {
        id: "supervision",
        title: "Por qué la supervisión importa tanto",
        blocks: [
          { t: "p", text: "Las mordeduras a niños pequeños suelen venir del perro de la familia y estar precedidas por una interacción (Arhant et al., 2016). En ese estudio, madres y padres intervenían con menos frecuencia que los expertos en prevención de mordeduras y confiaban más en la tolerancia de su propio perro." },
          { t: "p", text: "Otro estudio encontró que, en niños de hasta 6 años, tanto interferir con los recursos del perro como conductas amables (por ejemplo, acariciarlo) suelen preceder a un incidente con el perro familiar (Arhant et al., 2017)." },
          { t: "quote", text: "Supervisar significa estar presente, mirando y lista para intervenir." },
        ],
      },
      {
        id: "dias-siguientes",
        title: "Los días siguientes",
        blocks: [
          { t: "p", text: "Mantén momentos de atención exclusivos para tu perro y usa barreras o puertas para separar espacios cuando no puedas supervisar. Cuando el bebé duerma, tu perro también necesita descansar en su lugar." },
        ],
      },
    ],
    faqs: [
      ["¿Debo dejar que mi perro huela al bebé?", "Sí, a una distancia prudente y sin forzarlo, siempre con un adulto sosteniendo al bebé y otro pendiente del perro."],
      ["¿Puedo dejar al perro y al bebé solos un momento?", "No se recomienda. Incluso con perros muy tranquilos, lo más seguro es supervisar o separar con una barrera."],
    ],
    references: [
      { text: "Arhant C, Landenberger R, Beetz A, Troxler J. Attitudes of caregivers to supervision of child–family dog interactions in children up to 6 years: an exploratory study. J Vet Behav. 2016;14:10-16.", url: "https://www.sciencedirect.com/science/article/abs/pii/S1558787816300557" },
      { text: "Arhant C, Beetz AM, Troxler J. Caregiver reports of interactions between children up to 6 years and their family dog: implications for dog bite prevention. Front Vet Sci. 2017;4:130.", url: "https://pubmed.ncbi.nlm.nih.gov/28913340/" },
      { text: "Patterson KN, Horvath KZ, Minneci PC, et al. Pediatric dog bite injuries in the USA: a systematic review. World J Pediatr Surg. 2022;5:e000281.", url: "https://pubmed.ncbi.nlm.nih.gov/36474513/" },
    ],
  },
  {
    slug: "bebe-gateando-y-perro-en-casa",
    title: "Bebé gateando y perro: cómo adaptar la convivencia en casa",
    category: "Bebés móviles",
    image: IMG.nieve,
    imageAlt: "Bebé gateando en casa mientras su perro descansa en su zona segura",
    date: "2026-08-10",
    dateLabel: "10 de agosto de 2026",
    metaTitle: "Bebé gateando y perro: cómo adaptar tu casa",
    metaDesc: "Cuando tu bebé empieza a gatear, la convivencia con el perro cambia. Zonas seguras, recursos y supervisión según la evidencia científica.",
    keywords: "bebé gateando y perro, bebé móvil y perro, seguridad perro bebé en casa, recursos del perro",
    excerpt: "Zonas seguras, recursos y descanso para tu perro cuando el bebé empieza a moverse y explorar.",
    intro: [
      "Cuando el bebé empieza a gatear, deja de ser un bebé que se queda en brazos y se convierte en alguien que se acerca al perro, a su cama y a sus juguetes. Para muchos perros esta etapa es la que más cambios trae.",
    ],
    sections: [
      {
        id: "por-que-esta-etapa",
        title: "Por qué esta etapa pide más atención",
        blocks: [
          { t: "p", text: "En un estudio con 402 familias, interferir con los recursos del perro, como su comida o sus juguetes, era una de las interacciones que con más frecuencia precedían a un incidente. Las lesiones reportadas en estos contextos ocurrieron al dar premios o al quitarle objetos al perro durante el juego (Arhant et al., 2017)." },
          { t: "p", text: "Una revisión sistemática confirma que los menores de 6 años tienen más riesgo de lesiones graves en cabeza, cuello y cara (Patterson et al., 2022), en parte por su estatura." },
        ],
      },
      {
        id: "adaptar-la-casa",
        title: "Cómo adaptar la casa cuando el bebé gatea",
        blocks: [
          { t: "p", text: "Estos cambios ayudan a prevenir conflictos:" },
          { t: "list", items: [
            ["Zona segura para el perro.", "Un espacio al que el bebé no pueda llegar, con barrera o puerta."],
            ["Comida en un lugar separado.", "Tu perro debe poder comer sin que nadie se acerque."],
            ["Juguetes y huesos fuera del alcance.", "Guárdalos cuando el bebé esté en el suelo."],
            ["Rutas de escape.", "Que tu perro siempre pueda alejarse si lo desea."],
            ["Supervisión activa o separación.", "Si no puedes mirar, usa una barrera."],
          ]},
          { t: "img", src: IMG.familia, alt: "Casa preparada con barrera de seguridad entre el perro y el bebé" },
        ],
      },
      {
        id: "temperamento",
        title: "El temperamento del bebé también cuenta",
        blocks: [
          { t: "p", text: "Un estudio observó a 88 niños de entre 3,5 y 6 años interactuando con un perro desconocido y analizó rasgos como la impulsividad y el control inhibitorio (Davis et al., 2012). Los niños más impulsivos tienden a tener más riesgo de lesiones en general, así que ajusta la supervisión al carácter de tu hijo." },
        ],
      },
    ],
    faqs: [
      ["¿A qué edad es más delicada la convivencia entre bebé y perro?", "La etapa en la que el bebé empieza a gatear y caminar suele traer más cambios, porque el bebé se acerca por su cuenta al perro y a sus cosas."],
      ["¿Tengo que separar siempre al perro y al bebé?", "No siempre. Pueden compartir tiempo con supervisión activa, y separarse con barreras cuando no puedas estar pendiente."],
    ],
    references: [
      { text: "Arhant C, Beetz AM, Troxler J. Caregiver reports of interactions between children up to 6 years and their family dog: implications for dog bite prevention. Front Vet Sci. 2017;4:130.", url: "https://pubmed.ncbi.nlm.nih.gov/28913340/" },
      { text: "Patterson KN, Horvath KZ, Minneci PC, et al. Pediatric dog bite injuries in the USA: a systematic review. World J Pediatr Surg. 2022;5:e000281.", url: "https://pubmed.ncbi.nlm.nih.gov/36474513/" },
      { text: "Davis AL, Schwebel DC, Morrongiello BA, et al. Dog bite risk: an assessment of child temperament and child-dog interactions. Int J Environ Res Public Health. 2012.", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3447601/" },
    ],
  },
  {
    slug: "perro-celoso-del-bebe",
    title: "¿Mi perro está celoso del bebé? Lo que dice la ciencia",
    category: "Acompañamiento emocional madres",
    image: IMG.picnic,
    imageAlt: "Perra observando a su tutora mientras abraza a su bebé",
    date: "2026-07-28",
    dateLabel: "28 de julio de 2026",
    metaTitle: "¿Mi perro está celoso del bebé? Lo que dice la ciencia",
    metaDesc: "Los estudios muestran que los perros pueden mostrar conductas de celos. Cómo reconocerlas y repartir la atención entre tu perro y tu bebé.",
    keywords: "perro celoso del bebé, celos en perros, perro y bebé atención, cambios de conducta del perro",
    excerpt: "Qué han encontrado los estudios sobre celos en perros y cómo repartir la atención entre tu perro y tu bebé.",
    intro: [
      "Muchas familias notan que su perro cambia cuando llega el bebé: se pega más, empuja con el hocico o se pone entre ellos. La pregunta de si un perro puede estar celoso del bebé tiene respaldo en la investigación.",
    ],
    sections: [
      {
        id: "estudios-celos",
        title: "Qué han encontrado los estudios sobre celos en perros",
        blocks: [
          { t: "p", text: "En el primer experimento sobre celos en perros, los animales mostraron más conductas como empujar, meterse entre su tutor y el objeto o intentar morderlo cuando su tutor era cariñoso con lo que parecía otro perro (un perro de peluche que se movía) que cuando lo era con un objeto o leía un libro (Harris y Prouvost, 2014)." },
          { t: "p", text: "Un estudio posterior, basado en la similitud entre el apego perro-tutor y el apego madre-bebé, encontró más conductas de celos cuando el tutor atendía a un compañero social que a un objeto (Abdai et al., 2018). Otro equipo mostró que estas conductas aparecían solo ante un rival social percibido, incluso cuando la interacción ocurría fuera de la vista del perro (Bastos et al., 2021)." },
        ],
      },
      {
        id: "reconocer-celos",
        title: "Cómo reconocer conductas de celos",
        blocks: [
          { t: "p", text: "Algunas conductas frecuentes son empujar con el hocico para pedir atención, colocarse entre tú y el bebé, ladrar o gemir cuando cargas al bebé, o buscar atención justo en esos momentos. También puede haber cambios en el sueño o el apetito." },
          { t: "img", src: IMG.embarazo, alt: "Perro buscando la atención de su tutora durante el embarazo" },
        ],
      },
      {
        id: "repartir-atencion",
        title: "Cómo repartir la atención sin culpa",
        blocks: [
          { t: "p", text: "Estas estrategias ayudan a que tu perro asocie la presencia del bebé con cosas agradables:" },
          { t: "list", items: [
            ["Atención cuando el bebé está presente.", "Háblale, dale un premio o un juguete mientras alimentas o cargas al bebé."],
            ["Momentos exclusivos.", "Unos minutos al día solo para tu perro, aunque sean pocos."],
            ["Enriquecimiento ambiental.", "Juguetes de olfato o para rellenar con comida que lo mantengan ocupado."],
            ["Rutinas previsibles.", "Paseos y comidas a horas parecidas cada día."],
          ]},
        ],
      },
    ],
    faqs: [
      ["¿Los perros sienten celos de los bebés?", "Los estudios muestran que los perros pueden presentar conductas de celos cuando su tutor da atención a un rival social. Lo importante es ayudarlos a asociar al bebé con experiencias positivas."],
      ["¿Debo regañar a mi perro si empuja al bebé?", "Es mejor redirigirlo con calma hacia otra conducta y premiarlo, y darle atención en momentos en que el bebé también está presente."],
    ],
    references: [
      { text: "Harris CR, Prouvost C. Jealousy in dogs. PLoS One. 2014;9(7):e94597.", url: "https://pubmed.ncbi.nlm.nih.gov/25054800/" },
      { text: "Abdai J, Terencio CB, Fraga PP, Miklósi Á. Investigating jealous behaviour in dogs. Sci Rep. 2018;8:8911.", url: "https://pubmed.ncbi.nlm.nih.gov/29891847/" },
      { text: "Bastos APM, Neilands PD, Hassall RS, Lim BC, Taylor AH. Dogs mentally represent jealousy-inducing social interactions. Psychol Sci. 2021.", url: "https://doi.org/10.1177/0956797620979149" },
    ],
  },
  {
    slug: "juegos-seguros-entre-ninos-y-perros",
    title: "Juegos seguros entre niños y perros: ideas para la etapa toddler",
    category: "Perros y toddlers",
    image: IMG.familia,
    imageAlt: "Niña pequeña jugando con su perra en el jardín con supervisión de su familia",
    date: "2026-07-15",
    dateLabel: "15 de julio de 2026",
    metaTitle: "Juegos seguros entre niños y perros en casa",
    metaDesc: "Ideas de juegos seguros entre niños pequeños y perros, qué juegos evitar y cómo supervisar, según estudios sobre convivencia familiar.",
    keywords: "juegos entre niños y perros, toddler y perro, juegos seguros con perro, niños pequeños y perros",
    excerpt: "Actividades para fortalecer el vínculo entre tu hijo y tu perro con límites claros para los dos.",
    intro: [
      "Entre el año y los tres años, los niños quieren tocar, abrazar y perseguir al perro. Jugar juntos puede fortalecer su vínculo si eliges bien los juegos y acompañas cada interacción.",
    ],
    sections: [
      {
        id: "juegos-a-evitar",
        title: "Qué juegos conviene evitar",
        blocks: [
          { t: "p", text: "En un estudio con familias con niños de hasta 6 años, las lesiones reportadas en situaciones de recursos ocurrieron al dar premios o al quitarle objetos al perro durante juegos de traer la pelota (Arhant et al., 2017). También conviene evitar abrazos, perseguir al perro, tirarle de las orejas o la cola y los juegos de tirar de la cuerda con niños pequeños." },
        ],
      },
      {
        id: "juegos-seguros",
        title: "Juegos seguros entre niños y perros",
        blocks: [
          { t: "p", text: "Estas actividades funcionan bien con supervisión de un adulto:" },
          { t: "list", items: [
            ["Esconder premios.", "El niño esconde comida con ayuda de un adulto y el perro la busca."],
            ["Lanzar la pelota sin quitarla.", "El adulto recoge la pelota; el niño solo la lanza."],
            ["Premios en el suelo.", "El niño deja caer el premio en lugar de darlo en la mano."],
            ["Trucos sencillos.", "El niño dice \"siéntate\" y el adulto refuerza al perro."],
            ["Cepillado acompañado.", "Con la mano del adulto guiando la del niño, si el perro lo disfruta."],
          ]},
          { t: "img", src: IMG.picnic, alt: "Madre guiando a su bebé para interactuar con suavidad con la perra" },
        ],
      },
      {
        id: "leer-al-perro",
        title: "Enseñar a los niños a leer al perro",
        blocks: [
          { t: "p", text: "Una revisión sobre educación en prevención señala que hay poco conocimiento sobre el comportamiento canino y la seguridad en interacciones niño-perro, y que es necesario aumentar la conciencia de madres y padres sobre las situaciones de casa que pueden desencadenar una mordedura (Meints et al., 2018)." },
          { t: "quote", text: "Un buen juego termina cuando el perro quiere, y el perro siempre puede irse." },
        ],
      },
    ],
    faqs: [
      ["¿Mi hijo pequeño puede darle premios al perro?", "Es más seguro que los deje caer al suelo, con un adulto al lado, en lugar de darlos en la mano."],
      ["¿Cuánto tiempo pueden jugar juntos?", "Sesiones cortas de pocos minutos, terminando antes de que el perro o el niño se cansen o se sobreexciten."],
    ],
    references: [
      { text: "Arhant C, Beetz AM, Troxler J. Caregiver reports of interactions between children up to 6 years and their family dog: implications for dog bite prevention. Front Vet Sci. 2017;4:130.", url: "https://pubmed.ncbi.nlm.nih.gov/28913340/" },
      { text: "Meints K, Brelsford V, De Keuster T. Teaching children and parents to understand dog signaling. Front Vet Sci. 2018;5:257.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6256863/" },
    ],
  },
  {
    slug: "acostumbrar-al-perro-al-llanto-del-bebe",
    title: "Cómo acostumbrar al perro al llanto del bebé antes del parto",
    category: "Embarazo",
    image: IMG.embarazo,
    imageAlt: "Perro descansando tranquilo junto a su tutora embarazada mientras suenan audios de bebé",
    date: "2026-07-01",
    dateLabel: "1 de julio de 2026",
    metaTitle: "Cómo acostumbrar al perro al llanto del bebé",
    metaDesc: "Pasos para acostumbrar a tu perro al llanto y los sonidos del bebé antes del parto, de forma gradual y sin estrés, con base en estudios.",
    keywords: "acostumbrar al perro al llanto del bebé, sonidos del bebé para perros, perro miedo a ruidos, desensibilización",
    excerpt: "Cómo usar audios de llanto y juguetes sonoros de forma gradual para que tu perro reciba los sonidos del bebé con calma.",
    intro: [
      "El llanto de un recién nacido es agudo, repentino y frecuente. Para algunos perros puede ser un sonido estresante. Trabajarlo durante el embarazo ayuda a que no sea una novedad cuando llegue el bebé.",
    ],
    sections: [
      {
        id: "ruidos-de-casa",
        title: "Cómo reaccionan los perros a los ruidos de casa",
        blocks: [
          { t: "p", text: "Un estudio analizó cómo reaccionan los perros de compañía a ruidos domésticos comunes y cómo interpretan esas reacciones sus tutores (Grigg et al., 2021). Estudiar este tema importa porque los sonidos cotidianos pueden generar estrés que no siempre se detecta a simple vista." },
        ],
      },
      {
        id: "paso-a-paso",
        title: "Paso a paso para trabajar los sonidos del bebé",
        blocks: [
          { t: "p", text: "La clave es empezar con un volumen tan bajo que tu perro apenas reaccione:" },
          { t: "list", items: [
            ["Elige audios reales.", "Llanto, balbuceos, juguetes sonoros y el sonido de la carriola."],
            ["Empieza muy bajo.", "A un volumen en el que tu perro siga relajado."],
            ["Asocia con algo agradable.", "Un premio o su comida mientras suena el audio."],
            ["Sube poco a poco.", "Solo cuando tu perro esté tranquilo en el nivel anterior."],
            ["Sesiones cortas.", "Pocos minutos al día son suficientes."],
          ]},
          { t: "img", src: IMG.familia, alt: "Perra relajada en casa mientras su familia practica con sonidos del bebé" },
        ],
      },
      {
        id: "sin-castigos",
        title: "Sin castigos ni sustos",
        blocks: [
          { t: "p", text: "Si tu perro ladra o se inquieta, baja el volumen en la siguiente sesión. Los métodos aversivos se asocian a más conductas de estrés y mayores aumentos de cortisol (Vieira de Castro et al., 2020), justo lo contrario de lo que buscas con los sonidos del bebé." },
        ],
      },
    ],
    faqs: [
      ["¿Cuándo empiezo con los sonidos del bebé?", "Unos dos o tres meses antes del parto es un buen momento, para avanzar poco a poco."],
      ["¿Qué hago si mi perro se asusta con el llanto?", "Baja el volumen hasta un nivel en el que esté tranquilo y avanza más despacio. Si el miedo es intenso, consulta con una profesional."],
    ],
    references: [
      { text: "Grigg EK, Chou J, Parker E, et al. Stress-related behaviors in companion dogs exposed to common household noises, and owners’ interpretations of their dogs’ behaviors. Front Vet Sci. 2021;8:760845.", url: "https://doi.org/10.3389/fvets.2021.760845" },
      { text: "Vieira de Castro AC, Fuchs D, Morello GM, et al. Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare. PLoS One. 2020;15(12):e0225023.", url: "https://doi.org/10.1371/journal.pone.0225023" },
    ],
  },
  {
    slug: "mi-perro-le-grune-a-mi-bebe",
    title: "Mi perro le gruñe a mi bebé: qué hacer y qué evitar",
    category: "Lenguaje canino",
    image: IMG.nieve,
    imageAlt: "Perro con postura tensa y orejas hacia atrás, señal de incomodidad",
    date: "2026-06-18",
    dateLabel: "18 de junio de 2026",
    metaTitle: "Mi perro le gruñe a mi bebé: qué hacer y qué evitar",
    metaDesc: "Si tu perro le gruñe a tu bebé, esto es lo que conviene hacer y lo que conviene evitar, con base en estudios sobre bienestar y seguridad infantil.",
    keywords: "mi perro le gruñe a mi bebé, perro gruñe al bebé, gruñido del perro, qué hacer si el perro gruñe",
    excerpt: "Por qué el gruñido es información valiosa, cómo responder en el momento y cuándo pedir ayuda profesional.",
    intro: [
      "Escuchar a tu perro gruñirle a tu bebé asusta. El gruñido es una forma de comunicación: tu perro te está diciendo que algo le incomoda. Responder bien en ese momento protege a los dos.",
    ],
    sections: [
      {
        id: "que-hacer-en-el-momento",
        title: "Qué hacer en el momento",
        blocks: [
          { t: "p", text: "Actúa con calma y sin gritos:" },
          { t: "list", items: [
            ["Separa con tranquilidad.", "Aleja al bebé o llama al perro hacia otro lugar."],
            ["No castigues el gruñido.", "Si el perro aprende a no avisar, puede pasar directo a otra conducta."],
            ["Observa el contexto.", "¿Estaba comiendo, descansando, con un juguete o siendo tocado?"],
            ["Anota lo que pasó.", "Te servirá para identificar patrones y para la profesional."],
          ]},
        ],
      },
      {
        id: "no-castigar",
        title: "Por qué no conviene castigar",
        blocks: [
          { t: "p", text: "En un estudio con 92 perros, los entrenados con métodos aversivos mostraron más conductas de estrés durante el entrenamiento, mayores aumentos de cortisol y, con proporciones altas de estos métodos, un estado emocional más negativo fuera del entrenamiento (Vieira de Castro et al., 2020). Un perro más estresado es un perro con menos margen de tolerancia." },
        ],
      },
      {
        id: "tomarlo-en-serio",
        title: "Por qué tomarlo en serio",
        blocks: [
          { t: "p", text: "Una revisión sistemática de 43 estudios encontró que los menores de 6 años tienen más riesgo de lesiones graves en cabeza, cuello y cara (Patterson et al., 2022). Además, una revisión reciente describe efectos psicológicos de las mordeduras en niños (Westgarth et al., 2024). Por eso un gruñido merece atención inmediata." },
          { t: "img", src: IMG.picnic, alt: "Madre sosteniendo a su bebé mientras su perra descansa a una distancia segura" },
        ],
      },
      {
        id: "ayuda-profesional",
        title: "Cuándo pedir ayuda profesional",
        blocks: [
          { t: "p", text: "Si el gruñido se repite, aparece en varias situaciones o va acompañado de rigidez, enseñar los dientes o intentos de morder, busca una valoración con una profesional de conducta canina o una veterinaria etóloga. También conviene descartar dolor u otro problema de salud." },
          { t: "quote", text: "El gruñido es un aviso. Escucharlo te da tiempo para actuar." },
        ],
      },
    ],
    faqs: [
      ["¿Es normal que mi perro le gruña a mi bebé?", "Es una señal de incomodidad que conviene atender. Identifica en qué situaciones ocurre y ajusta el entorno para evitarlas."],
      ["¿Debo deshacerme de mi perro si gruñe al bebé?", "No necesariamente. Muchas situaciones mejoran con cambios en el entorno, supervisión y acompañamiento profesional."],
    ],
    references: [
      { text: "Vieira de Castro AC, Fuchs D, Morello GM, et al. Does training method matter? Evidence for the negative impact of aversive-based methods on companion dog welfare. PLoS One. 2020;15(12):e0225023.", url: "https://doi.org/10.1371/journal.pone.0225023" },
      { text: "Patterson KN, Horvath KZ, Minneci PC, et al. Pediatric dog bite injuries in the USA: a systematic review. World J Pediatr Surg. 2022;5:e000281.", url: "https://pubmed.ncbi.nlm.nih.gov/36474513/" },
      { text: "Westgarth C, Provazza S, Nicholas J, et al. Review of psychological effects of dog bites in children. BMJ Paediatr Open. 2024;8:e000922.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Review+of+psychological+effects+of+dog+bites+in+children" },
    ],
  },
  {
    slug: "ensenar-a-los-ninos-a-respetar-al-perro",
    title: "Cómo enseñar a los niños a respetar al perro de la familia",
    category: "Educación canina para niños",
    image: IMG.picnic,
    imageAlt: "Niña aprendiendo a acariciar a su perra con suavidad",
    date: "2026-06-04",
    dateLabel: "4 de junio de 2026",
    metaTitle: "Cómo enseñar a los niños a respetar al perro",
    metaDesc: "Reglas sencillas para enseñar a los niños a respetar al perro y leer sus señales. Qué dice la investigación sobre prevención de mordeduras.",
    keywords: "enseñar a los niños a respetar al perro, niños y perros reglas, prevención de mordeduras en niños, educación canina para niños",
    excerpt: "Reglas simples para que tus hijos aprendan a leer y cuidar a su perro, con base en programas de prevención estudiados.",
    intro: [
      "Los niños pueden aprender desde pequeños a tratar al perro con respeto. Las reglas funcionan mejor cuando son pocas, concretas y las practica toda la familia.",
    ],
    sections: [
      {
        id: "que-dice-la-investigacion",
        title: "Qué dice la investigación",
        blocks: [
          { t: "p", text: "Una revisión sobre cómo enseñar a niños y a madres y padres a entender las señales de los perros concluye que hay poco conocimiento general sobre el comportamiento canino y que la interacción del niño con el perro suele ser la que desencadena una mordedura (Meints et al., 2018). Por eso recomienda trabajar con niños y adultos a la vez." },
          { t: "p", text: "El programa de prevención \"The Blue Dog\" fue evaluado con niños pequeños y fue uno de los primeros en estudiar si los niños aprendían a elegir conductas seguras con su perro (Meints y De Keuster, 2009)." },
        ],
      },
      {
        id: "reglas-sencillas",
        title: "Reglas sencillas para niños",
        blocks: [
          { t: "p", text: "Adapta estas reglas a la edad de tus hijos:" },
          { t: "list", items: [
            ["Al perro que duerme o come, no se le molesta.", "Es su momento de descanso."],
            ["Su cama es su lugar seguro.", "Nadie entra ni se sube."],
            ["Se acaricia con permiso.", "Primero se pregunta a un adulto y se deja que el perro se acerque."],
            ["Caricias suaves en el lomo.", "Sin abrazos, sin besos en la cara."],
            ["Si el perro se va, se le deja ir.", "Alejarse es su forma de decir que ya no quiere."],
          ]},
          { t: "img", src: IMG.familia, alt: "Niña pequeña y perra compartiendo un momento tranquilo en el jardín" },
        ],
      },
      {
        id: "papel-de-los-adultos",
        title: "El papel de los adultos",
        blocks: [
          { t: "p", text: "Los estudios coinciden en que la supervisión y la educación de los adultos son fundamentales, sobre todo con niños menores de 6 años (Arhant et al., 2017). Modela tú las conductas que quieres que tus hijos aprendan y refuérzalas cuando las hagan." },
        ],
      },
    ],
    faqs: [
      ["¿A qué edad puedo enseñarle a mi hijo a tratar al perro?", "Desde que empieza a gatear puedes guiarle la mano para acariciar con suavidad. Las reglas verbales funcionan mejor a partir de los 2 o 3 años."],
      ["¿Por qué los niños no deben abrazar al perro?", "Muchos perros se sienten incómodos con los abrazos, y la cara del niño queda muy cerca de la del perro."],
    ],
    references: [
      { text: "Meints K, Brelsford V, De Keuster T. Teaching children and parents to understand dog signaling. Front Vet Sci. 2018;5:257.", url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC6256863/" },
      { text: "Meints K, De Keuster T. Brief report: Don’t kiss a sleeping dog: the first assessment of “The Blue Dog” bite prevention program. J Pediatr Psychol. 2009.", url: "https://pubmed.ncbi.nlm.nih.gov/?term=Don%27t+kiss+a+sleeping+dog+Blue+Dog+bite+prevention" },
      { text: "Arhant C, Beetz AM, Troxler J. Caregiver reports of interactions between children up to 6 years and their family dog: implications for dog bite prevention. Front Vet Sci. 2017;4:130.", url: "https://pubmed.ncbi.nlm.nih.gov/28913340/" },
    ],
  },
  {
    slug: "tener-perro-causa-alergia-o-asma-en-el-bebe",
    title: "¿Tener perro causa alergia o asma en el bebé? Lo que dice un metaanálisis",
    category: "Embarazo",
    image: IMG.familia,
    imageAlt: "Familia con su bebé y su perra al aire libre",
    date: "2026-05-20",
    dateLabel: "20 de mayo de 2026",
    metaTitle: "¿Tener perro causa alergia o asma en el bebé?",
    metaDesc: "Un metaanálisis de más de 77.000 niños estudió si convivir con perro en los primeros años aumenta el riesgo de asma. Esto es lo que encontró.",
    keywords: "perro y alergia en bebés, perro asma niños, mascotas y alergias bebé, tener perro con recién nacido",
    excerpt: "Resultados de un metaanálisis con más de 77.000 niños sobre perros, gatos, asma y sensibilización alérgica.",
    intro: [
      "Una de las preguntas más frecuentes durante el embarazo es si convivir con un perro puede causar alergia o asma en el bebé. Hay estudios de gran tamaño que ayudan a responderla.",
    ],
    sections: [
      {
        id: "metaanalisis-europeo",
        title: "Qué encontró el metaanálisis europeo",
        blocks: [
          { t: "p", text: "Un metaanálisis usó datos de 77.434 parejas madre-hijo de 9 cohortes de nacimiento europeas, con niños de 5 a 11 años (Pinot de Moira et al., 2022). Analizó si tener perro o gato durante el embarazo o los primeros dos años de vida se asociaba con asma en edad escolar." },
          { t: "p", text: "Los autores concluyen que sus resultados no apoyan que tener perro o gato en los primeros años aumente por sí mismo el riesgo de asma en edad escolar. Sí sugieren que, en niños ya sensibilizados a alérgenos de perro o gato, la convivencia podría agravar ese riesgo." },
        ],
      },
      {
        id: "que-significa",
        title: "Qué significa para tu familia",
        blocks: [
          { t: "p", text: "Una revisión posterior sobre alérgenos y asma infantil coincide en que no se observa asociación entre tener perro en los primeros años y asma en la población general, aunque la relación puede variar según factores genéticos (Custovic et al., 2023)." },
          { t: "p", text: "Si hay antecedentes de alergia en la familia o tu bebé presenta síntomas respiratorios o de piel, consulta con tu pediatra o alergóloga." },
          { t: "img", src: IMG.picnic, alt: "Bebé en brazos de su mamá junto a su perra en un picnic" },
        ],
      },
      {
        id: "higiene",
        title: "Higiene y convivencia",
        blocks: [
          { t: "p", text: "Estas medidas sencillas ayudan en el día a día:" },
          { t: "list", items: [
            ["Vacunas y desparasitación al día.", "Sigue el calendario de tu veterinaria."],
            ["Lavado de manos.", "Después de tocar al perro y antes de atender al bebé."],
            ["Espacios separados para dormir.", "La cuna es solo para el bebé."],
            ["Limpieza regular.", "Aspirar y lavar la cama del perro con frecuencia."],
          ]},
        ],
      },
    ],
    faqs: [
      ["¿Tener perro durante el embarazo aumenta el riesgo de asma en mi bebé?", "Según un metaanálisis con más de 77.000 niños, tener perro en el embarazo o los primeros años no aumenta por sí mismo el riesgo de asma en edad escolar."],
      ["¿Qué hago si mi bebé tiene alergia al perro?", "Consulta con tu pediatra o alergóloga para valorar el caso y las medidas en casa."],
    ],
    references: [
      { text: "Pinot de Moira A, Strandberg-Larsen K, Bishop T, et al. Associations of early-life pet ownership with asthma and allergic sensitization: a meta-analysis of more than 77,000 children from the EU Child Cohort Network. J Allergy Clin Immunol. 2022;150(1):82-92.", url: "https://pubmed.ncbi.nlm.nih.gov/35150722/" },
      { text: "Custovic A, et al. Environmental influences on childhood asthma: allergens. Pediatr Allergy Immunol. 2023.", url: "https://onlinelibrary.wiley.com/doi/10.1111/pai.13915" },
    ],
  },
];

export function readingMinutes(post: Post) {
  let words = post.intro.join(" ").split(/\s+/).length;
  for (const s of post.sections) {
    words += s.title.split(/\s+/).length;
    for (const b of s.blocks) {
      if (b.t === "p" || b.t === "quote") words += b.text.split(/\s+/).length;
      if (b.t === "list") words += b.items.join(" ").split(/\s+/).length;
    }
  }
  for (const [q, a] of post.faqs) words += (q + " " + a).split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
