import { Refine, WelcomePage } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { notificationProvider } from "@refinedev/antd";
import "@refinedev/antd/dist/reset.css";

import routerBindings, {
  DocumentTitleHandler,
  UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ColorModeContextProvider } from "./contexts/color-mode";
import { AntdInferencer } from "@refinedev/inferencer/antd"

function App() {
  return (
    <BrowserRouter>
      <RefineKbarProvider>
        <ColorModeContextProvider>
          <Refine
            notificationProvider={notificationProvider}
            routerProvider={routerBindings}
            dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
            options={{
              syncWithLocation: true,
              warnWhenUnsavedChanges: true,
              projectId: "njwYwY-fgNg7r-qTUshn",
            }}
            resources={[
              {
                name: "blog_posts",
                list: "/blog-posts",
                show: "/blog-posts/show/:id",
                create: "/blog-posts/create",
                edit: "/blog-posts/edit/:id",
              },
            ]}
          >
            <Routes>
              <Route index element={<WelcomePage />} />
              <Route path="blog-posts">
                <Route index element={<AntdInferencer />} />
                <Route path="create" element={<AntdInferencer />} />
                <Route path="show/:id" element={<AntdInferencer />} />
                <Route path="edit/:id" element={<AntdInferencer />} />
              </Route>
            </Routes>
            <RefineKbar />
            <UnsavedChangesNotifier />
            <DocumentTitleHandler />
          </Refine>
        </ColorModeContextProvider>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
