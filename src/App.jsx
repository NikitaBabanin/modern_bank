// import styles from "./style";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { HomePage, LoginPage, SignupPage, ProfilePage } from './pages';

const App = () => (
  <div>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
