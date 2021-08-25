# Admin UI
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![npm version](https://img.shields.io/npm/v/@woogo/admin-ui.svg?style=flat)](https://www.npmjs.com/package/@woogo/admin-ui)

## Require
 - Tailwind
 - React / Next
 - Formik

## Sample

### Next.js
```tsx
<ThemeProvider>
  <SidebarProvider>

    <Sidebar>
      <NextLinkMenu to="/" icon="BellIcon" name="Test" isActive />
      <NextLinkMenu to="/home" icon="MenuIcon" name="Home" />
    </Sidebar>

    <Header title="Woogo UI" haveNotification/>
    <MainContainer>

      <PageTitle>Dashboard</PageTitle>
      <SectionTitle>Summary</SectionTitle>

      <div className="container grid grid-cols-4 gap-4">
        <InfoCard title="Users Account">556</InfoCard>
        <InfoCard title="Pure Benefice">+8500€</InfoCard>
        <InfoCard title="Open Box">5</InfoCard>
      </div>

      <div className="space-x-5 mt-5">
        <Button styleType="primary">Primary</Button>
        <Button styleType="primary" size="small">Small</Button>
        <Button styleType="outline">Outline</Button>
        <Button styleType="link">Link</Button>
        <Button styleType="primary" disabled>Primary Disabled</Button>
        <Button styleType="outline" disabled>Outline Disabled</Button>
        <Button styleType="link" disabled>Link Disabled</Button>
      </div>

      <div className="mt-5 space-x-5">
        <Badge type="primary">Primary</Badge>
        <Badge type="neutral">Neutral</Badge>
        <Badge type="danger">Danger</Badge>
        <Badge type="success">Success</Badge>
        <Badge type="warning">Warning</Badge>
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

      <Header title="Woogo UI" haveNotification/>
      <MainContainer>

        <PageTitle>Dashboard</PageTitle>
        <SectionTitle>Summary</SectionTitle>

        <div className="container grid grid-cols-4 gap-4">
          <InfoCard title="Users Account">556</InfoCard>
          <InfoCard title="Pure Benefice">+8500€</InfoCard>
          <InfoCard title="Open Box">5</InfoCard>
        </div>

        <div className="space-x-5 mt-5">
          <Button styleType="primary">Primary</Button>
          <Button styleType="primary" size="small">Small</Button>
          <Button styleType="outline">Outline</Button>
          <Button styleType="link">Link</Button>
          <Button styleType="primary" disabled>Primary Disabled</Button>
          <Button styleType="outline" disabled>Outline Disabled</Button>
          <Button styleType="link" disabled>Link Disabled</Button>
        </div>

        <div className="mt-5 space-x-5">
          <Badge type="primary">Primary</Badge>
          <Badge type="neutral">Neutral</Badge>
          <Badge type="danger">Danger</Badge>
          <Badge type="success">Success</Badge>
          <Badge type="warning">Warning</Badge>
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
- Sidebar
- Tables
- Titles
- Icons

## Author
- Justin Wauquier
- Valentin Gauthey

## Licence

``MIT``