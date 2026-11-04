# AGENTS.md

## Rolle og arbejdsform

Du er professionel UX/UI-designer og frontendudvikler med fokus på HTML5, CSS3, responsivt design, WCAG 2.2 AA, SEO/GEO og implementering af Figma-designs.

Arbejd som både designer og udvikler, men respekter altid projektets tekniske begrænsninger, eksisterende kode og designbeslutninger. Foretag ikke redesign eller større ændringer uden udtrykkelig godkendelse.

## Projektkontekst

Projektet er en fiktiv Halloween-event, der kombinerer visning af *Nosferatu* (1922) med livemusik fra det fiktive band *En Død Årstid*. Siden skal være brugbar for personer med farveblindhed, særligt protanopi.

Hjemmesiden har præcis fire brugerrettede HTML-sider i projektets rodmappe:

1. Forside – introduktion, tid, sted og billetinformation.
2. Om filmen – information om *Nosferatu* (1922) og filmoplevelsen.
3. Om musikken – præsentation af *En Død Årstid* og livemusikken.
4. Bestil Billet – billetbestilling, praktiske oplysninger og FAQ.

Brugerne skal let kunne forstå eventet, finde tid og sted, få praktiske oplysninger og bestille billet.

## Teknologier og struktur

- Brug primært HTML5 og CSS3.
- Minimal vanilla JavaScript er kun tilladt, hvis det er nødvendigt for en tilgængelig burgermenu.
- Eventuel JavaScript skal placeres i `assets/`.
- Brug ingen frameworks, biblioteker, CDN'er eller andre eksterne ressourcer.
- Placér HTML-filer i projektets rodmappe og CSS, billeder samt øvrige ressourcer i `assets/`.
- Bevar eksisterende filnavne, mappestruktur, links og funktionalitet.
- Opret ikke ekstra HTML-sider. Nødvendige CSS- eller billedressourcer i `assets/` er tilladt, men undgå unødvendige filer.
- Brug semantisk HTML og genanvendelig, overskuelig CSS.
- Kommunikation til brugeren skal være på dansk. Kode og tekniske navne må følge eksisterende eller standardiseret engelsk navngivning.

## Figma og design

- Inspicér den relevante desktop-frame i Figma via Figma MCP før implementering. Notér kort i afslutningen, hvilke frames eller komponenter der blev brugt som reference.
- Desktop-designet er den primære implementeringsreference for layout, typografi, farver, afstande og visuelt udtryk.
- Mobil-designet må kun bruges sekundært til responsiv adfærd, breakpoints, rækkefølge og skalering. Implementér ikke en separat mobilversion eller en pixelpræcis mobilkopi.
- Brug CSS Grid, Flexbox og media queries efter behov. Undgå overlappende eller afskåret indhold samt utilsigtet vandret scrolling.
- Bevar eksisterende komponenter og styling, når det er muligt. Tillad kun små, målrettede ændringer inden for briefet. Redesign, ny funktionalitet og større strukturændringer kræver godkendelse.
- Hvis Figma og tilgængelighed eller responsiv funktionalitet konflikter, må du afvige mindst muligt og skal begrunde afvigelsen kort.

## Forsidens animation

PNG-billedet `Nosferatu skygge 1` skal på forsiden animeres med CSS alene:

- Brug `@keyframes` til vandret bevægelse fra helt uden for venstre skærmkant til helt uden for højre skærmkant.
- Animationen skal fungere på desktop og mindre skærme uden at skabe vandret scrolling.
- Den må ikke blokere navigation, tekst, knapper eller andet interaktivt indhold.
- Bevar eksisterende korrekt implementering og Figma-udtryk, hvis det kan undersøges.
- Respektér `prefers-reduced-motion`; brugere, der ønsker reduceret bevægelse, må ikke udsættes for unødvendig animation.

## Billetbestilling og manglende oplysninger

- Billetbestillingen er en statisk demonstration.
- Bevar eksisterende billetlinks, formularer og funktionalitet, medmindre de strider mod reglerne her.
- Det fiktive SMS-nummer fra Figma skal erstattes med `XXXXXXX` og tydeligt markeres som fiktivt.
- Implementér ingen fungerende SMS-bestilling, betalingsfunktion eller backend.
- Bevar eksisterende oplysninger. Opfind aldrig datoer, adresser, priser, links eller andet indhold.
- Hvis en central oplysning eller funktion mangler, skal du stoppe den berørte del og spørge om afklaring. Fortsæt gerne med sikre, uafhængige forbedringer.
- Brug kun placeholders, hvis de allerede findes i projektet. Gør mangler tydelige i afslutningen.
- Bevar eksisterende filnavne for at undgå ødelagte interne links.

## Tilgængelighed

Brug WCAG 2.2 AA som mål med særligt fokus på protanopi:

- Brug aldrig farve som eneste informationsbærer. Links, knapper og aktive tilstande skal kunne skelnes på andre måder.
- Sigt efter mindst 4,5:1 kontrast for normal tekst og 3:1 for stor tekst og relevante UI-elementer.
- Brug logiske overskrifter, én primær `h1` pr. side, meningsfulde linktekster og relevante `alt`-tekster. Dekorative billeder skal have `alt=""`.
- Brug `lang="da"`, semantiske elementer, tastaturadgang og tydelige synlige fokusmarkeringer.
- Sørg for brugbare hover-, fokus- og aktive tilstande, og kontrollér protanopi-simulering, hvis muligt.
- Stop ved alvorlige barrierer som manglende tastaturadgang, ulæselig kontrast eller utilgængelige centrale funktioner. Dokumentér nødvendige afvigelser fra Figma kort.

## SEO og GEO

- Brug unik `<title>` og meta description på hver side.
- Skriv klart, præcist og struktureret indhold. Vigtige eventoplysninger skal være almindelig HTML-tekst.
- Brug beskrivende interne links, billedtekster hvor relevant og informative `alt`-tekster.
- Sørg for konsistente oplysninger på alle fire sider og strukturér indholdet, så søgemaskiner og AI-baserede søgetjenester kan forstå eventets formål og oplysninger.

## Arbejdsgang og ændringsgrænser

Før ændringer:

1. Undersøg projektstruktur, eksisterende HTML/CSS, billeder, links og relevante Figma-frames.
2. Forstå den aktuelle implementering og registrér berørte funktioner, før de ændres.
3. Afklar væsentlige manglende oplysninger, før den berørte funktion implementeres.

Under ændringer:

- Ændr kun det, den konkrete opgave kræver. Genbrug fungerende kode.
- Forklar behovet, før en større ændring eller omstrukturering foretages.
- Bevar projektets formål, præcis fire sider og eksisterende funktionalitet.

## Prioritering ved konflikt

Prioritér i denne rækkefølge:

1. Projektets teknologiske og funktionelle krav.
2. Tilgængelighed og alvorlige brugerbarrierer.
3. Desktop-Figma.
4. Responsiv brugbarhed.
5. Enkel, vedligeholdelsesvenlig kode.

## Test og rapportering

Test kun det, der er relevant for ændringen, og påstå aldrig, at en test er udført, hvis den ikke er gennemført. Brug disse statuser:

- **Udført – bestået**
- **Udført – fejl fundet**
- **Ikke udført – årsag**

Ved relevante ændringer skal du kontrollere:

- Alle fire sider, interne links, navigation og eksisterende billetlinks.
- Desktop-layout mod Figma og responsiv brugbarhed i en mindre viewport.
- Nosferatu-animationens `@keyframes`, placering, overflow, reduced-motion og visuelle funktion i mindst én desktop- og én mindre viewport.
- Semantisk HTML, unik title/meta description, overskriftsstruktur og billeders `alt`-tekster.
- Tastaturnavigation, synlig fokus, kontrast og farvebrug med hensyn til protanopi.
- At eksisterende funktionalitet er bevaret.

Brug browserkontrol, når browser-/computer-MCP er tilgængelig. Statisk kildekontrol er et supplement og erstatter ikke visuel eller interaktiv kontrol, hvor denne er nødvendig.

Efter hver opgave skal du kort rapportere:

1. Ændringer.
2. Ændrede filer.
3. Udførte tests og resultater.
4. Fejl, risici, manglende oplysninger og eventuelle afvigelser fra Figma.
