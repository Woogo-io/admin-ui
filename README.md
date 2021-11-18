# Admin UI
[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/dwyl/esta/issues)
[![npm version](https://img.shields.io/npm/v/@woogo/admin-ui.svg?style=flat)](https://www.npmjs.com/package/@woogo/admin-ui)

## Require
 - Tailwind
 - React / Next
 - Formik

## Dark Mode

You can activate Dark mode in your ``tailwind.config.js``

This package is ready for it


## Sample

```tsx
<ThemeProvider defineBodyColor>
  <SidebarProvider>

    <Sidebar>
      <NextLinkMenu to="/" icon="BellIcon" name="Test" />
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

For more exemple look stories in dir : ``src/stories``

## Sidebar Links 

### React

```tsx
<ReactLinkMenu to="/" icon="BellIcon" name="Test" />
```

### Next JS
```tsx
<NextLinkMenu to="/" icon="BellIcon" name="Test" />
```

## Production Build

To prevent purge of class in the package your need to add next line to your ``tailwind.config.js``

```js
module.exports = {
  purge: {
    enabled: true,
    content: ['./src/**/*.{js,ts,jsx,tsx}', './node_modules/@woogo/admin-ui/src/theme/default.ts'],
    safelist: ['dark']
  },
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disabled'],
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
```

If you use dark theme you must put this in safelist like above

## Background Color

You can choose to set with javascript the class to body with props ``defineBodyColor`` on ThemeProvider component

Or you can add this to your css file
```sass
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
```

## For a nice scroll bar on Chrome

Check stories/tailwind.css

Add ``::webkit*`` class in your css file 

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
- Modal
- Loader
- Text
- SelectSearch
- RichEditor

## Contributors
[<img alt="moutehard" src="https://avatars.githubusercontent.com/u/862238?v=4&s=117 width=117">](https://github.com/moutehard) |[<img alt="GautheyValentin" src="https://avatars.githubusercontent.com/u/18257114?v=4&s=117 width=117">](https://github.com/GautheyValentin) |
:---:|:---:|
[moutehard](https://github.com/moutehard)|[GautheyValentin](https://github.com/GautheyValentin)|

## Content Providers

- SVG Loader Original : Sam Herbert (@sherb) | [More Info](http://goo.gl/7AJzbL)

## Licence

``MIT``