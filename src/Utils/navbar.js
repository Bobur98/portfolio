import HomePage from "../view/HomePage";
import ResumePage from "../view/ResumePage";
import PortfolioPage from "../view/PortfolioPage";
import ContactPage from "../view/ContactPage";

export const navItems = [
  // Home
  {
    path: "/home",
    title: "home",
    component: HomePage,
  },
  {
    path: "/resume",
    title: "resume",

    component: ResumePage,
  },
  {
    path: "/portfolio",
    title: "portfolio",

    component: PortfolioPage,
  },
  {
    path: "/contact",
    title: "contact",

    component: ContactPage,
  },
];
