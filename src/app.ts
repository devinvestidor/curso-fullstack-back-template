import express from 'express';
import cors from 'cors';

class App {
public app: express.Application;

public constructor() {
  this.app = express();
  this.app.use(cors());
}

public listen(port: number): void {
  this.app.listen(port, () => {
    console.log(`Aplicação iniciada na porta: ${port}`);
  });
}
}

export default App;
