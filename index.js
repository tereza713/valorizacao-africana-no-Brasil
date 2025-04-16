import express from 'express';
import { routerPersonality } from './src/router/personalities.routes.js';
import { routerReligion } from './src/router/religions.routes.js';
import { routerKnowledge } from './src/router/knowledge.routes.js';

const app = express()
const PORT = 3000;

app.get('/', (req, res) => {
  res.send("A desvalorização da cultura africana no Brasil é um problema histórico que impacta a identidade e o legado afro-brasileiro. A escravidão e o racismo institucionalizado ao longo dos séculos criaram barreiras para a valorização das contribuições africanas à formação da cultura brasileira. Essa marginalização afetou aspectos importantes como a religião, saberes tradicionais africanos e até mesmo importantes personalidades da história.")
})

app.use("/personalidades", routerPersonality);
app.use("/saberes", routerKnowledge);
app.use("/religioes", routerReligion);

app.listen(PORT);