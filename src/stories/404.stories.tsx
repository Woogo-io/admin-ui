import React from 'react';
import './tailwind.css';

import { BrowserRouter as Router } from 'react-router-dom';
import { NextLinkMenu, ReactLinkMenu } from '../components/link';

import {
  MainContainer, Sidebar, SidebarProvider, ThemeProvider,
} from '../index';
import Header from '../components/header/Header';
import { NotFoundContainer } from '../components/404';

export default {
  title: 'Sample/Page404',
};

export const React404 = () => (
  <ThemeProvider defineBodyColor>
    <SidebarProvider>
      <Router>

        <Sidebar>
          <ReactLinkMenu to="/" icon="BellIcon" name="Test" />
        </Sidebar>

        <Header title="Woogo UI" />
        <MainContainer>

          <NotFoundContainer />

        </MainContainer>
      </Router>
    </SidebarProvider>
  </ThemeProvider>
);

export const Next404 = () => (
  <ThemeProvider defineBodyColor>
    <SidebarProvider>

      <Sidebar>
        <NextLinkMenu to="/" icon="BellIcon" name="Test" />
        <NextLinkMenu to="/home" icon="MenuIcon" name="Home" />
      </Sidebar>

      <Header title="Woogo UI" />
      <MainContainer>

        <NotFoundContainer />

      </MainContainer>
    </SidebarProvider>
  </ThemeProvider>
);
