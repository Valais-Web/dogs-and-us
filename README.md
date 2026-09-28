# Dogs & Us web

Construye un sitio web profesional, cálido y moderno para "Dogs & Us Training",
un negocio de educación canina para familias multiespecie. Público objetivo:
familias que esperan su primer bebé y ya tienen uno o más perros en casa.
Idioma: español (neutro). Mobile-first y totalmente responsive.

STACK
- React + Tailwind CSS + Supabase para el backend (formularios, captura de
  correos para newsletter y lead magnets).
- Animaciones sutiles al hacer scroll (fade-in / slide-up) y micro-interacciones
  en botones y tarjetas (elevación suave al pasar el cursor). Transiciones
  fluidas, nada brusco.

IDENTIDAD VISUAL
Paleta y su uso (respeta el contraste, nunca texto claro sobre fondo claro):
- Fondo base: crema cálido #FAF6F0
- Color principal / textos / secciones oscuras: verde oscuro #28301C
- Acento 1 (botones secundarios, etiquetas, resaltados): verde lima #D2DB76
  (siempre con texto en verde oscuro encima)
- Acento 2 (bloques suaves, tarjetas destacadas): rosa #FFC3CC
  (siempre con texto en verde oscuro encima)
- Botón principal (CTA): fondo verde oscuro #28301C con texto crema.

Tipografía: cuerpo en una sans limpia y amable (DM Sans o Inter); títulos en
una display con carácter editorial (Fraunces). En los títulos, resalta 1 palabra
clave en cursiva con un subrayado o marcador en verde lima detrás (estilo
editorial). Esquinas muy redondeadas en imágenes, tarjetas y botones. Mucho
espacio en blanco, sensación premium pero cercana.

Inspiración de LAYOUT (distribución de títulos, imágenes y animaciones):
como psimammoliti.com pero cambiando el morado por el verde oscuro. Inspiración
de CONTENIDO y secciones: dogmeetsbaby.expert (mismo tipo de negocio).

PÁGINAS
Inicio, Sobre mí, El Programa (método insignia), Asesorías 1:1, Recursos gratis,
Blog, Tienda (enlace externo), Contacto, e Iniciar sesión / Área personal
(enlace al campus). Barra de navegación fija arriba con logo a la izquierda,
menús desplegables y un botón CTA a la derecha ("Empezar aquí").

ESTRUCTURA DEL INICIO (en este orden)
1. Hero: título grande con una palabra resaltada (ej. "Prepara a tu perro para
   la llegada de tu *bebé* con calma y seguridad"), subtítulo breve, CTA
   principal, e imagen cálida a un lado con esquinas redondeadas.
2. Franja "Como me has visto en" / medios: fila de logos en gris.
   [Dejar placeholders, NO inventar logos ni menciones de prensa.]
3. El recorrido: línea de tiempo horizontal con las etapas del método, del
   embarazo a los 4–5 años: Embarazo → Recién nacido → Bebé → Toddler →
   Niño (4–5 años). Cada etapa con ícono, título y una frase.
4. El Programa insignia "[NOMBRE DEL MÉTODO / PROGRAMA]": tarjeta destacada en
   rosa que explica que es un espacio todo-en-uno con todo el material desde el
   embarazo hasta la convivencia segura a los 4–5 años. CTA "Ver el programa".
5. Otros servicios en 3 tarjetas: Asesorías 1:1 (online en todo el mundo y
   presencial en [CIUDAD]), Cursos y guías, Curso de lenguaje canino.
6. Sobre mí: foto + texto. "Soy Silvia Gómez. Educadora canina profesional,
   psicóloga educativa y mamá de dos. Acompaño a familias multiespecie a que
   perro y bebé crezcan juntos con bienestar y seguridad." Etiquetas: Educadora
   canina · Psicóloga educativa · Especializada en familias multiespecie ·
   Mamá multiespecie.
7. Método con evidencia: sección corta que explique que el trabajo se basa en
   refuerzo positivo y bienestar animal, respetando al perro y a la familia.
8. Recursos gratis (lead magnets): cuadrícula de tarjetas con descarga a cambio
   del correo. Ej.: Checklist de preparación, Biblioteca de sonidos de bebé,
   Reglas de seguridad niño–perro, Alimentos tóxicos para el perro, Guía
   toddlers y perros. Cada una con formulario de correo (Supabase).
9. Testimonios: carrusel con reseñas reales (nombre del cliente + nombre del
   perro). [Dejar 4 espacios; pegaré reseñas reales.]
10. Cómo empezar: 3 pasos con íconos (Elige tu punto de partida → Sigue el
    material a tu ritmo → Convivencia segura y feliz).
11. Newsletter: bloque en verde lima con captura de correo.
12. Blog: 3 tarjetas de artículos recientes.
13. Footer: navegación, legal, contacto (hola@dogsandustraining.com, [CIUDAD]),
    redes (Instagram, YouTube).

TONO DE LA COPIA
Cercano y profesional, en primera persona (Silvia). Cálido, tranquilizador,
basado en experiencia profesional y personal. Prohibido el recurso de contraste
"no es X, es Y" o estructuras paralelas antitéticas. No inventes datos, cifras
ni estudios; usa placeholders donde falte información real.

NOTAS TÉCNICAS
- SEO básico: títulos, meta descripción y textos alternativos en imágenes.
- Accesibilidad: buen contraste en todos los textos.
- El área personal/campus y el checkout de cursos deben ENLAZAR a la plataforma
  de cursos y de pagos [indicar cuál], no construirse desde cero aquí.
- Usa imágenes placeholder cálidas de perros con familias/bebés hasta que suba
  las mías.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/d511e11b-8ae4-465e-9e14-983d1c36b79b).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
