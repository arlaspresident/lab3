<template>
  <div class="info">
    <div class="container">
      <h1>Om Vue.js och det här projektet</h1>

      <section class="reflection">
        <h2>Första intryck av vue</h2>
        <p>
          Att komma igång med Vue var ganska enkelt även om det var lite förvirrande i början. 
          Inlärningskurvan är mild vilket är bra för nybörjare. Men när man gräver djupare och behöver 
          förstå sin data flow blir det komplicerat. 
        </p>
      </section>

      <section class="reflection">
        <h2>Vad gick bra</h2>
        <ul>
          <li><strong>Enkelt att komma igång:</strong> Att sätta upp ett nytt Vue projekt med Vite är snabbt och smärtfritt.</li>
          <li><strong>Component slots:</strong> Slot systemet är bra för komponentkomposition.</li>
          <li><strong>Composition API:</strong> Ett steg i rätt riktning för tydligare data flow hantering.</li>
          <li><strong>Bra dokumentation:</strong> Vues officiella docs är omfattande och nybörjarvänliga.</li>
          <li><strong>Snabb utveckling:</strong> Hot module replacement gör iterationen snabb och smidig.</li>
        </ul>
      </section>

      <section class="reflection">
        <h2>Utmaningarna</h2>
        <ul>
          <li><strong>Data flow förvirring:</strong> Att förstå hur reaktivitet fungerar kan vara överraskande.</li>
          <li><strong>För många undantag:</strong> Vue har inkonsekvent beteende beroende på kontext och datatyper.</li>
          <li><strong>Ökad svårighet vid skalning:</strong> För större projekt föredrar jag mer förutsägbara mönster som typ React </li>
        </ul>
      </section>

      <section class="reflection">
        <h2>Installation och uppsättning</h2>
        <p>
          Vue.js installerades med hjälp av Vite som är ett modernt byggverktyg och mycket snabbare än det gamla Vue CLI. 
          Jag körde <code>npm create vite@latest</code> valde Vue som mall och sedan <code>npm install</code> för att hämta alla beroenden. 
          Att starta utvecklingsservern med <code>npm run dev</code> gav mig en reloading i lokal miljö direkt.
        </p>
        <p>
          För navigering mellan flera sidor installerade jag också <strong>Vue Router</strong> via npm. Det gjorde appen till en riktigt 
          Single Page Application (SPA) med sömlös navigering mellan olika vyer utan siduppdateringar.
        </p>
      </section>

      <section class="reflection">
        <h2>Skulle jag använda vue igen?</h2>
        <p>
          Ärligt talat? Troligtvis inte. Jag har bara inte tyckt om det. 
          Om jag fick välja skulle jag gå för React alla dagar i veckan. React känns enklare och mer förutsägbar. 
          Arbetsmarknaden gynnar också React kraftigt vilket är en praktisk övervägelse för karriären.
        </p>
        <p>
          Vue är ett bra ramverk bara inte mitt favorit.
        </p>
      </section>

      <section class="reflection conclusion">
        <h2>Slutsats</h2>
        <p>
          Det här projektet var en bra lärning med Vue. Jag fick jobba med komponenter, routing, state management, 
          och API integration alla grunderna. Men det bekräftade mitt val av Reacts funktionella approach. 
          Om man precis börjar med webbutveckling är Vue en utmärkt ingång. Men om man skalerar eller vill ha maximal klarhet 
          i sin kod så ska man fortsätta utforska andra alternativ.
        </p>
      </section>
    </div>
  </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;900&display=swap');

:root {
  --primary: #4CAF50;
  --dark: #222;
  --light: #f5f5f5;
  --text: #333;
}

.info {
  width: 100%;
  background: var(--light);
  padding: 60px 20px;
  font-family: 'Inter', sans-serif;
}

.container {
  max-width: 900px;
  margin: 0 auto;
  background: white;
  padding: 60px 40px;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

h1 {
  font-size: 48px;
  font-weight: 900;
  color: var(--dark);
  margin: 0 0 50px 0;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 4px solid var(--primary);
  padding-bottom: 20px;
}

.reflection {
  margin-bottom: 50px;
}

.reflection h2 {
  font-size: 28px;
  font-weight: 700;
  color: var(--primary);
  margin: 0 0 20px 0;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.reflection p {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin: 0 0 15px 0;
}

.reflection p:last-child {
  margin-bottom: 0;
}

.reflection ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.reflection li {
  font-size: 16px;
  line-height: 1.8;
  color: var(--text);
  margin-bottom: 15px;
  padding-left: 30px;
  position: relative;
}

.reflection li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-weight: 700;
}

.reflection li strong {
  color: var(--dark);
}

code {
  background: #f0f0f0;
  padding: 4px 8px;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  color: #d63384;
  font-weight: 600;
}

.conclusion {
  background: linear-gradient(135deg, rgba(76, 175, 80, 0.1) 0%, rgba(34, 34, 34, 0.05) 100%);
  padding: 30px;
  border-left: 5px solid var(--primary);
  border-radius: 6px;
}

.conclusion p {
  margin: 0;
}

/* MOBILE */
@media (max-width: 768px) {
  .info {
    padding: 40px 15px;
  }

  .container {
    padding: 40px 25px;
  }

  h1 {
    font-size: 32px;
    margin-bottom: 35px;
  }

  .reflection h2 {
    font-size: 22px;
  }

  .reflection p,
  .reflection li {
    font-size: 15px;
  }
}
</style>