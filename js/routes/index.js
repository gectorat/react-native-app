import React from 'react';
import { ExNavigator } from 'react-native-autopilot';
import Login from './../components/login/';
import Home from './../components/home/';
import TabMenu from './../components/tabMenu/';
import CardList from './../components/cardList/';
import BlankPage from './../components/blankPage/';
import NewItem from './../components/newItem/';
import SplashPage from './../components/splashscreen/';
import SideBar from './../components/sideBar/';
import HomeTabs from './../components/common/HomeTabs';
import RegularTitle from './../components/common/RegularTitle';

import { statusBarColor } from './../themes/base-theme';


export function getLoginScene() {
  return {
    renderScene() {
      return <Login />;
    },
  };
}

export function getSettingsModalRouteScene() {
  return {
    renderScene(navigator) {
      return (
        <ExNavigator
          navigator={navigator}
          initialRoute={getSettingsRoute()}
        />
      );
    },
  };
}

export function getRenderedRouteScene(route) {
  return {
    renderTitle() {
      if (route === 'home' || route === 'home.drawer') {
        return (
          <HomeTabs />
        );
      }

      return (
        <RegularTitle />
      );
    },

    getTitle() {
      return 'Home';
    },

    renderScene() {
      switch (route) {
        case 'home' :
          return <Home />;
        case 'login' :
          return <Login />;
        case 'card.list' :
          return <CardList />;
        case 'card.cards' :
          return <TabMenu />;
        case 'card.create' :
          return <NewItem />;
        case 'textPage' :
          return <BlankPage />;
        default:
          return <Login />;
      }
    },
  };
}
export function mapRoute(props, route) {
  console.log(route); // TODO 
  return getRenderedRouteScene(route);
  // switch (route.id) {
  //   case 'splashscreen':
  //     return <SplashPage navigator={navigator} />;
  //   case 'nav.cards':
  //     return <TabMenu navigator={navigator} />;
  //   case 'login':
  //     return <Login navigator={navigator} />;
  //   case 'home':
  //     return <Home navigator={navigator} />;
  //   case 'nav.home':
  //     return <Home navigator={navigator} />;
  //   case 'open.drawer':
  //     return <Home drawerState="opened" navigator={navigator} />;
  //   case 'blankPage':
  //     return <BlankPage navigator={navigator} />;
  //   case 'nav.create':
  //     return <NewItem navigator={navigator} />;
  //   default :
  //     return <Login navigator={navigator} />;
  // }
}
