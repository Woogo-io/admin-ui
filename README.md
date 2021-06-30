# Admin UI
[![https://nodei.co/npm/@woogo/admin-ui.png?downloads=true&downloadRank=true&stars=true](https://nodei.co/npm/@woogo/admin-ui.png?downloads=true&downloadRank=true&stars=true)](https://www.npmjs.com/package/@woogo/admin-ui)


Private ✔️

Version ```1.1.3```

## Require
 - Tailwind
 - React / Next

## Sample

### Next.js
```tsx
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
```

### React
```tsx
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
```

## List Components
- Badges
- Buttons
- Cards
- Contexts
- Froms
- Header
- Pages
- Sidebar
- Tables
- Titles
- Icons

## Author
- Justin Wauquier
- Valentin Gauthey