import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.css';

import { NextLinkMenu, ReactLinkMenu } from '../components/link';

import {
  InfoCard, MainContainer, PageTitle, SectionTitle, Sidebar, SidebarProvider, ThemeProvider,
} from '../index';
import Header from '../components/header/Header';

export default {
  title: 'Sample/DefaultPage',
};

export const DefaultReact = () => (
  <ThemeProvider>
    <SidebarProvider>
      <Router>

        <Sidebar>
          <ReactLinkMenu to="/" icon="BellIcon" name="Test" />
        </Sidebar>

        <Header appName="Woogo UI" />
        <MainContainer>

          <PageTitle>Dashboard</PageTitle>
          <SectionTitle>Summary</SectionTitle>

          <div className="container grid grid-cols-4 gap-4">
            <InfoCard title="Users Account" value="566" />
            <InfoCard title="Pure Benefice" value="+8500€" />
            <InfoCard title="Open Box" value="98500" />
          </div>

        </MainContainer>
      </Router>
    </SidebarProvider>
  </ThemeProvider>
);

export const DefaultNext = () => (
  <ThemeProvider>
    <SidebarProvider>

      <Sidebar>
        <NextLinkMenu to="/" icon="BellIcon" name="Test" isActive />
        <NextLinkMenu to="/home" icon="MenuIcon" name="Home" />
      </Sidebar>

      <Header appName="Woogo UI" />
      <MainContainer>

        <PageTitle>Dashboard</PageTitle>
        <SectionTitle>Summary</SectionTitle>

        <div className="container grid grid-cols-4 gap-4">
          <InfoCard title="Users Account" value="566" />
          <InfoCard title="Pure Benefice" value="+8500€" />
          <InfoCard title="Open Box" value="98500" />
        </div>

      </MainContainer>
    </SidebarProvider>
  </ThemeProvider>
);
