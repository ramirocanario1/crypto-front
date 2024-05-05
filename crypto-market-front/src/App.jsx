import { Routes, Route } from 'react-router-dom';
import Layout from './routes/Layout';
import Home from './routes/Home';
import NoMatch from './routes/NoMatch';
import Portafolio from './routes/Portafolio';
import DetalleCripto from './routes/DetalleCripto';
import Depositar from './routes/Depositar';
import Retirar from './routes/Retirar';

export default function App() {
  return (
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="portafolio" element={<Portafolio />} />
          <Route path="cripto/:id" element={<DetalleCripto />} />
          <Route path="depositar" element={<Depositar />} />
          <Route path="retirar" element={<Retirar />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
  );
}