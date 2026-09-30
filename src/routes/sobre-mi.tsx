import { createFileRoute } from "@tanstack/react-router"; import { ContentPage } from "@/components/content-page";
export const Route=createFileRoute("/sobre-mi")({head:()=>({meta:[{title:"Sobre Silvia Gómez | Dogs & Us Training"},{name:"description",content:"Conoce a Silvia Gómez, educadora canina, psicóloga educativa y mamá multiespecie."},{property:"og:title",content:"Sobre Silvia Gómez"},{property:"og:description",content:"Experiencia profesional y personal al servicio de familias con perros y bebés."},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary_large_image"}]}),component:Page});
function Page(){return <ContentPage eyebrow="Sobre mí" title="Experiencia profesional, mirada humana y amor por los perros." intro="Acompaño a familias en un momento lleno de cambios para que puedan vivirlo con herramientas, confianza y apoyo."><div className="grid items-center gap-12 md:grid-cols-2"><img src="/media/silvia-sobremi.jpg" loading="lazy" width={1024} height={960} alt="Silvia Gómez en su escritorio con su portátil y una taza de té" className="rounded-[2.5rem]"/><div className="space-y-5 text-lg leading-relaxed"><p>{`Soy Silvia Gómez:
- Educadora canina profesional
- Psicóloga 
- Maestría en Psicología de la educación
- Maestría en psicoterapia TCC
- Formación en terapias contextuales y
- Formación en análisis funcional de la conducta. 
También soy mamá perruna de Moka y mamá humana de Thiago y Olivia.`}</p><p>{"\n"}</p><p className="text-sm text-muted-foreground">{"\n"}</p></div></div></ContentPage>}