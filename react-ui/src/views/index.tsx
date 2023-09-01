import { Route, Routes } from 'react-router-dom';
import { Landing } from './landing/landing';
import { Nav1 } from './nav1/nav1';
import { Nav2 } from './nav2/nav2';
import { Nav3 } from './nav3/nav3';
import { Nav4 } from './nav4/nav4';
import { Nav5 } from './nav5/nav5';

export const View = (): JSX.Element => (
  <Routes>
    <Route path="/" element={<Landing />} />
    <Route path="/nav-1" element={<Nav1 />} />
    <Route path="/nav-2" element={<Nav2 />} />
    <Route path="/nav-3" element={<Nav3 />} />
    <Route path="/nav-4" element={<Nav4 />} />
    <Route path="/nav-5" element={<Nav5 />} />
  </Routes>
);
