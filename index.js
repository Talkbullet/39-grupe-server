import { server } from "./lib/server.js";

const app = {};

app.init = () => {
    // susikurti pirminius objektus:
    // - folder
    // - file
    // gauti prisijungima prie DB
    // paleisti pacia serverio logika
    server.init();

    // reguliarus procesai:
    // - atsinaujinti 3rd-party info (API, pvz valiutu kursai)
    // - duomenu archivavimas
    // - agregavimas (statistika)
    // - pasalinti nebereikalingus objektus:
    //   - failai (tokens)
    //   - DB optimizavimas
}

app.init();

export { app };