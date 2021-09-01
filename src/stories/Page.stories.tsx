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

  Table, TableBody, TableCell, TableContainer, TableFooter, TableHeader, TablePagination, TableRow,
  Badge,
  Button,

  Modal, ModalBody, ModalFooter, ModalHeader,
  PulseLoader, RoundLoader, SidebarCategory,
} from '../index';

export default {
  title: 'Sample/DefaultPage',
};

const Global = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Header title="Woogo UI" haveNotification />
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
          <RoundLoader />
          <PulseLoader />
        </div>

        <div className="mt-5 flex">
          <Button styleType="primary" onClick={() => setIsModalOpen(true)}>Open modal</Button>
        </div>

        <div className="flex mt-5">
          <div className="w-1/2 p-2">
            <TableContainer>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableCell>Ref Command</TableCell>
                    <TableCell>TVA</TableCell>
                    <TableCell>Items</TableCell>
                    <TableCell>Quantity</TableCell>
                    <TableCell>Price</TableCell>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>#45125</TableCell>
                    <TableCell>FR225412354</TableCell>
                    <TableCell>- Dongle USB</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>23€</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>#45125</TableCell>
                    <TableCell>FR225412354</TableCell>
                    <TableCell>- Dongle USB</TableCell>
                    <TableCell>1</TableCell>
                    <TableCell>23€</TableCell>
                  </TableRow>
                </TableBody>

              </Table>
              <TableFooter>
                <TablePagination totalResults={50} resultsPerPage={10} currentPage={0} setCurrentPage={() => {}} />
              </TableFooter>
            </TableContainer>
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
        <NextLinkMenu to="/" icon="BellIcon" name="Test" isActive />
        <NextLinkMenu to="/home" icon="MenuIcon" name="Home" />
      </Sidebar>

      <Global />
    </SidebarProvider>
  </ThemeProvider>
);
