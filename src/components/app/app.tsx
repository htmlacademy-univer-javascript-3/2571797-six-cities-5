import MainScreen from '../../pages/main-screen/main-screen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import {AppRoute} from "../../enums/app-route/app-route.tsx";
import {AuthorizationStatus} from "../../enums/authorization-status/authorization-status.tsx";
import {PrivateRoute} from "../private-route/private-route.tsx";
import LoginScreen from "../../pages/login-screen/login-screen.tsx";
import OfferScreen from "../../pages/offer-screen/offer-screen.tsx";
import FavoritesScreen from "../../pages/favorites-screen/favorites-screen.tsx";
import {NotFoundScreen} from "../../pages/not-found-screen/not-found-screen.tsx";

type AppScreenProps = {
  placesCount: number;
}

export function App({placesCount}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path={AppRoute.Main}
          element={<MainScreen placesCount={placesCount}/>}
        />
        <Route path={AppRoute.Login} element={<LoginScreen />} />
        <Route path={AppRoute.Offer} element={<OfferScreen />} />
        <Route
          path={AppRoute.Favorites}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth}>
              <FavoritesScreen />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
