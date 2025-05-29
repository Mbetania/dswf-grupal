import { createBrowserRouter } from "react-router-dom";
import Profile from "@/components/profile/Profile";
import MainLayout from "@/components/layout/MainLayout";
import Presentation from "@/components/presentation/Presentation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <Presentation /> },
      { path: "perfil", element: <Profile /> },
    ],
  },
]);
