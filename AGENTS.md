# AGENTS.md

## Projekt

Udvikl en responsiv hjemmeside til en fiktiv Halloween-event (skoleopgave) med visning af *Nosferatu* (1922) og 
livemusik med det fiktive band *En Død Årstid*.

Hjemmesiden skal følge de eksisterende Figma-designs til desktop og mobil.

### Sidestruktur

Hjemmesiden skal bestå af præcis fire sider:

1. **Forside** – Introduktion til eventet, tid, 	sted og billetinformation.
2. **Om filmen** – Information om *Nosferatu* 	(1922) og filmoplevelsen.
3. **Om musikken** – Præsentation af *En Død 	Årstid* og livemusikken.
4. **Bestil Billet** – Billetbestilling, 	praktiske oplysninger og FAQ.

Brugerne skal nemt kunne finde information, forstå eventet og bestille billetter.

## Teknologier og struktur

- Brug kun HTML5 og CSS3.
- Ingen JavaScript, frameworks eller biblioteker uden 	tilladelse.
- Placér HTML-filer i projektets rodmappe.
- Placér CSS, billeder og øvrige ressourcer i `assets/`.
- Bevar eksisterende struktur, filnavne og funktionalitet.
- Brug semantisk HTML og overskuelig, genanvendelig CSS.

## Design og responsivitet

- Implementér hjemmesiden ud fra desktop-designet i Figma.
- Der skal ikke udvikles en separat mobilversion eller 	foretages en pixelpræcis implementering af mobil-designet.
- Hjemmesiden skal være responsiv, så den også kan bruges på 	mobil og mindre skærme.
- Brug fleksible layouts med CSS Grid, Flexbox og media queries 	efter behov.
- Sørg for, at tekst, billeder, navigation og knapper 	tilpasser sig skærmstørrelsen.
- Undgå overlappende elementer og utilsigtet vandret 	scrolling.
- Bevar desktop-designets visuelle udtryk så vidt muligt.
- Brug kun mobil-designet i Figma som eventuel reference til 	responsiv adfærd.



## Tilgængelighed

Følg WCAG 2.2 AA med særligt fokus på **protanopi (rødblindhed)**.

- Brug aldrig farve som eneste informationsbærer.
- Sørg for, at links, knapper og aktive tilstande kan skelnes 	uden farve alene.
- Minimum kontrast: 4,5:1 for normal tekst og 3:1 for stor 	tekst og relevante UI-elementer.
- Brug logiske overskrifter, meningsfulde links og relevante 	`alt`-tekster.
- Sørg for tastaturnavigation og synlige fokusmarkeringer.
- Brug `lang="da"` og 	semantisk HTML.
- Kontrollér farver med protanopi-simulering, hvis muligt.
- Bevar Figma-designet, men foreslå ændringer ved 	tilgængelighedsproblemer.

## SEO og GEO

- Unik `<title>` og meta 	description på hver side.
- Én primær `h1` pr. side og 	logisk overskriftstruktur.
- Klart, præcist og struktureret indhold.
- Vigtige eventoplysninger skal fremgå som HTML-tekst.
- Brug beskrivende interne links og billedtekster, hvor 	relevant.
- Optimér billeder og indlæsningstid.
- Sørg for konsistente oplysninger på tværs af sider.
- Opfind ikke datoer, adresser, billetpriser eller andre 	manglende oplysninger.

## Arbejdsregler

CODEX skal:

1. Undersøge eksisterende HTML, CSS, projektstruktur og 	tilgængelige Figma-designs før ændringer.
2. Kun ændre det, opgaven kræver.
3. Genbruge eksisterende kode og bevare funktionalitet.
4. Undgå unødvendige filer, teknologier og omskrivninger.
5. Spørge om afklaring ved væsentlige manglende oplysninger.
6. Ikke oprette ekstra sider eller ændre projektets formål.

CODEX må oprette og redigere HTML/CSS, rette fejl samt forbedre design, responsivitet, tilgængelighed, SEO og GEO 
inden for projektets krav.

## Test

Kontrollér efter ændringer:

- Alle fire sider og interne links fungerer.
- Kontrollér, at desktop-layoutet følger Figma-designet, og at hjemmesiden forbliver brugbar på mindre skærme uden 
separat mobilimplementering.
- Navigation og billetlinks fungerer.
- HTML er semantisk korrekt.
- Alle sider har unik title og meta description.
- Billeder har passende alt-tekster.
- Kontrast og farvebrug understøtter protanopi.
- Tastaturnavigation og fokusmarkeringer fungerer.

Oplys tydeligt, hvis noget ikke kan testes.

## Kommunikation

Svar altid på dansk, kort og præcist.

Efter hver opgave:

1. Opsummér ændringerne.
2. Nævn ændrede filer.
3. Beskriv udførte tests.
4. Oplys om fejl, risici eller manglende information.

**Prioritér Figma-design, funktionalitet, tilgængelighed, responsivitet og enkel, vedligeholdelsesvenlig kode.**