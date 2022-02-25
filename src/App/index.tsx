import { FC, useMemo, useState } from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import logo from '../assets/logo.svg';
import { AppModule } from '../utils';
import './index.css';

interface Props {
  modules: AppModule[];
}

const App: FC<Props> = ({ modules }) => {
  const { pathname } = useLocation();
  const lastModule = pathname.split('/')?.[1];
  const [currentModule, setCurrentModule] = useState(lastModule || 'dashboard');

  const links = useMemo(
    () =>
      modules.map(module => (
        <li
          key={module.key}
          className={currentModule === module.key ? 'active' : ''}
        >
          <Link
            to={module.routeProps.path}
            onClick={() => setCurrentModule(module.key)}
          >
            {module.label}
          </Link>
        </li>
      )),
    [currentModule],
  );

  const routes = useMemo(
    () =>
      modules.map(module => (
        <Route {...module.routeProps} key={module.label} />
      )),
    [],
  );

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Clean Architecture + Modules + Recoil</p>
        <ul className="App-nav">{links}</ul>
      </header>

      <div className="App-content">
        <Routes>{routes}</Routes>
      </div>
    </div>
  );
};

export default App;
