# Träningslogg - Vue.js Applikation

En spa byggd med Vue för att logga och hantera träningspass. Appen är ansluten till ett REST API byggt med Hapi och SQLite.

## Funktioner

- **Lägg till träningspass** - registrera nya träningar med namn, varaktighet och status
- **Se träningshistorik** - visa alla dina träningspass i en tabell
- **Radera träningspass** - ta bort träningar du inte längre behöver
- **Responsiv design** - fungerar perfekt på både desktop och mobila enheter

## Teknik

- **Frontend**: Vue 3 
- **Routing**: Vue router 4
- **Byggverktyg**: Vite
- **Backend**: Hapi.js med SQLite
- **API**: REST API med full CRUD

## Installation

### Steg för steg

1. **Klona repot**
```bash
git clone https://github.com/arlaspresident/lab3.git
cd lab3/vue-spa
```

2. **Installera dependencies**
```bash
npm install
```

3. **Säkerställ backend körs**
```bash
cd ../lab2.2
npm install
npm start
# Backend ska köra på http://localhost:3000
```

4. **Starta dev-servern** (från `vue-spa` mappen)
```bash
npm run dev
```

5. **Öppna i webbläsaren**
```
http://localhost:5173
```

## Användning

### Lägg till träning
1. Gå till Trainings
2. Fyll i namn på passet
3. Skriv varaktighet i minuter
4. Checka completed om du redan är klar
5. Klicka Add

### Radera träning
- Klicka Delete knappen på det passet du vill ta bort

## Relaterade Projekt

- **Lab 2.2** - REST API backend: https://github.com/arlaspresident/lab2.2.git