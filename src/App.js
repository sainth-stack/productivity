import './App.css';
import { AdminLayout } from './layout';
import { KProcess } from './pages/KProcess';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { InnerProductivity } from './pages/InnerProductivity';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AdminLayout />}>
          {/* <Route path="/" element={<ResourceManagement />} /> */}
          <Route path="/" element={<KProcess />} />
          <Route path='/productivity' element={<InnerProductivity />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
