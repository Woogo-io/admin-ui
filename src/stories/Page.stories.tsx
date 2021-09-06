import React, { useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './tailwind.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';
import {
  Form, Formik,
} from 'formik';
import {
  NextLinkMenu, ReactLinkMenu,
  Header,
  InfoCard, MainContainer, PageTitle, SectionTitle, Sidebar, SidebarProvider, ThemeProvider,
  FormikField, FormLabel, FormGroup,

  Table,
  Badge,
  Button,
  Text,
  Modal, ModalBody, ModalFooter, ModalHeader,
  PulseLoader, RoundLoader, SidebarCategory,
  HeaderAccount, HeaderNotify, TableRow, TableCell,
} from '../index';

export default {
  title: 'Sample/DefaultPage',
};

const Global = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header title="Woogo UI">
        <HeaderNotify haveNotification>
          <span>View All</span>
        </HeaderNotify>
        <HeaderAccount>
          <span>Logout</span>
        </HeaderAccount>
      </Header>
      <MainContainer>
        <Modal size="regular" isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
          <ModalHeader onClose={() => setIsModalOpen(false)}>
            Header Title
          </ModalHeader>
          <ModalBody>
            <span>Coucou</span>
            <span>Salut</span>
          </ModalBody>
          <ModalFooter>
            <Button styleType="primary" onClick={() => setIsModalOpen(false)}>Close</Button>
          </ModalFooter>
        </Modal>
        <PageTitle>Dashboard</PageTitle>
        <SectionTitle>Summary</SectionTitle>

        <div className="container grid grid-cols-4 gap-4">
          <InfoCard title="Users Account">556</InfoCard>
          <InfoCard title="Pure Benefice">+8500€</InfoCard>
          <InfoCard title="Open Box">5</InfoCard>
        </div>

        <div className="space-x-5 mt-5">
          <Button styleType="primary" icon="EditIcon">
            Update
          </Button>
          <Button styleType="primary" icon="DeleteIcon" />
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

        <div className="mt-5 flex space-x-5">
          <RoundLoader className="text-gray-700 dark:text-white" />
          <PulseLoader className="text-gray-700 dark:text-white" />
        </div>

        <div className="mt-5 flex">
          <Button styleType="primary" onClick={() => setIsModalOpen(true)}>Open modal</Button>
        </div>

        <div className="mt-5">
          <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente facilis inventore autem a quis. Sunt repudiandae esse aspernatur atque, magnam facere quidem. Cumque fuga dicta nesciunt labore nostrum cum molestias!</Text>
        </div>

        <div className="flex mt-5">
          <div className="w-1/2 p-2">
            <Table
              headers={['Ref Command', 'TVA', 'Name', 'Quantity', 'Price', '']}
              data={[
                {
                  id: '#45125', tva: 'FR225412354', name: 'Dongle USB', quantity: 1, price: '23€',
                },
                {
                  id: '#45124', tva: 'FR225412354', name: 'Dongle USB', quantity: 1, price: '23€',
                },
                {
                  id: '#45123', tva: 'FR225412354', name: 'Dongle USB', quantity: 1, price: '23€',
                },
              ]}
              paginationActive
              resultsPerPage={2}
            >
              {({
                id, tva, name, quantity, price,
              }) => (
                <TableRow key={id} className="cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600">
                  <TableCell>{id}</TableCell>
                  <TableCell>{tva}</TableCell>
                  <TableCell>{name}</TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>{price}</TableCell>
                  <TableCell>
                    <Button styleType="primary" icon="DeleteIcon" size="small" />
                  </TableCell>
                </TableRow>
              )}
            </Table>
          </div>
          <Formik
            initialValues={{
              firstName: '',
              lastName: '',
              agreeWithTerms: false,
              gender: 'man',
              country: 'NY',
              message: '',
            }}
            validationSchema={
            Yup.object().shape({
              firstName: Yup.string().min(2, 'Too Short'),
              agreeWithTerms: Yup.boolean().equals([true], 'You must be agree'),

            })
          }
            onSubmit={() => {}}
          >
            {({ errors, touched }) => (
              <Form className="flex flex-col space-y-4 w-1/2 p-2">
                <FormGroup>
                  <FormLabel htmlFor="firstName" errors={touched.firstName && errors.firstName}>
                    FirstName
                  </FormLabel>
                  <FormikField name="firstName" type="text" placeholder="Your firstname" errors={errors.firstName && touched.firstName} />
                </FormGroup>
                <FormGroup>
                  <FormLabel htmlFor="lastName">LastName</FormLabel>
                  <FormikField name="lastName" type="text" placeholder="Your firstname" />
                </FormGroup>

                <FormGroup type="checkbox">
                  <FormLabel type="checkbox">
                    <FormikField name="agreeWithTerms" type="checkbox" errors={errors.agreeWithTerms && touched.agreeWithTerms} />
                    <span>You are agree with terms and services</span>
                  </FormLabel>
                </FormGroup>

                <FormGroup type="radio">
                  <FormLabel type="radio">
                    <FormikField name="gender" type="radio" value="man" />
                    <span>Man</span>
                  </FormLabel>

                  <FormLabel type="radio">
                    <FormikField name="gender" type="radio" value="woman" />
                    <span>Woman</span>
                  </FormLabel>
                </FormGroup>

                <FormGroup type="select">
                  <FormLabel type="select">
                    Country
                  </FormLabel>
                  <FormikField name="country" type="select" component="select">
                    <option value="NY">New York</option>
                    <option value="SF">San Francisco</option>
                    <option value="CH">Chicago</option>
                    <option value="OTHER">Other</option>
                  </FormikField>
                </FormGroup>

                <FormGroup type="textarea">
                  <FormLabel type="textarea">
                    Message
                  </FormLabel>
                  <FormikField name="message" type="textarea" component="textarea" placeholder="Your message" />
                </FormGroup>

                <div className="flex items-end justify-end">
                  <Button type="submit">Submit</Button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </MainContainer>
    </>
  );
};

export const DefaultReact = () => (
  <ThemeProvider defineBodyColor>
    <SidebarProvider>
      <Router>

        <Sidebar>
          <ReactLinkMenu to="/" icon="BellIcon" name="Test" />
          <ReactLinkMenu to="/" icon="HomeIcon" name="Test" />
          <SidebarCategory name="Content" />
          <ReactLinkMenu to="/" icon="LanguageIcon" name="Test" />
          <ReactLinkMenu to="/" icon="PageIcon" name="Test" />
        </Sidebar>

        <Global />
      </Router>
    </SidebarProvider>
  </ThemeProvider>
);

export const DefaultNext = () => (
  <ThemeProvider defineBodyColor>
    <SidebarProvider>

      <Sidebar>
        <NextLinkMenu to="/" icon="BellIcon" name="Test" />
        <NextLinkMenu to="/home" icon="MenuIcon" name="Home" />
      </Sidebar>

      <Global />
    </SidebarProvider>
  </ThemeProvider>
);
