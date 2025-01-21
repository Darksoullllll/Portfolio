// Import necessary libraries
import 'react';
import { createRoot } from 'react-dom/client'; 
import App from "./App"


const rootElement = document.getElementById("root");


const root = createRoot(rootElement);

root.render(
  <App/>
);
