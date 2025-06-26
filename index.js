import express from 'express';
import corsMiddleware from './src/middlewares/cors.js';

// Importa o router responsável pela rota de personalidades
import { routerPersonality } from './src/router/personalities.routes.js';
// Importa o router responsável pela rota de religioes
import { routerReligion } from './src/router/religions.routes.js';
// Importa o router responsável pela rota de saberes
import { routerKnowledge } from './src/router/knowledge.routes.js';

const app = express()

// define que a porta onde o servidor vai escutar será a 3000
const PORT = 3000;

app.use(corsMiddleware); // Aplicar o middleware do CORS antes de outros middlewares

// define a rota principal ("/"), que retorna um texto explicando o contexto da desvalorização da cultura africana
app.get('/', (req, res) => {
  res.send("A desvalorização da cultura africana no Brasil é um problema histórico que impacta a identidade e o legado afro-brasileiro. A escravidão e o racismo institucionalizado ao longo dos séculos criaram barreiras para a valorização das contribuições africanas à formação da cultura brasileira. Essa marginalização afetou aspectos importantes como a religião, saberes tradicionais africanos e até mesmo importantes personalidades da história.")
})

// define que as requisições para /personalidades será tratada pelo routerPersonality
app.use("/personalidades", routerPersonality);

// define que as requisições para /saberes será tratada pelo routerKnowledge
app.use("/saberes", routerKnowledge);

// define que as requisições para /religioes será tratada pelo routerReligion
app.use("/religioes", routerReligion);

// inicia o servidor e faz ele escutar a porta definida (3000)
app.listen(PORT);