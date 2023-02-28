import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactNotifications } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient();

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactNotifications />
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
