import Home from "./pages/home";


const routeItem = (id, title, path, component) => {
  return {
    id,
    title,
    path,
    component,
  };
};

const routes = {
  home: routeItem(1, 'home', "/", Home),


  



};

const routeArr = Object.values(routes);

export { routes, routeArr };
