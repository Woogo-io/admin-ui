import { Form, Formik } from 'formik';
import React, { FC, PropsWithChildren, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import * as Yup from 'yup';
import Button from '../buttons/Button';
import FormikField from '../forms/FormikField';
import Modal from './Modal';
import ModalBody from './ModalBody';
import ModalContainer from './ModalContainer';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export type ModalConfirmationProps = {
  buttonText: string;
  size: 'small' | 'regular' | 'large';
  text: string;
  title: string;
  valideCb: () => void
  valideString: string;
};

const ModalConfirmation: FC<PropsWithChildren<ModalConfirmationProps>> = (
  props: PropsWithChildren<ModalConfirmationProps>,
) => {
  const {
    buttonText, children, size, title, valideCb, text, valideString,
  } = props;

  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContainer isOpen={isOpen}>
      <div onClick={() => setIsOpen(true)} role="button" tabIndex={0} onKeyPress={() => setIsOpen(true)}>{children}</div>
      <Formik
        initialValues={{
          validationInput: '',
        }}
        validationSchema={Yup.object().shape({ validationInput: Yup.string().required().equals([valideString], 'Wrong!') })}
        onSubmit={() => {
          valideCb();
          setIsOpen(false);
        }}
      >
        {({ errors, touched }) => (
          <Form className="flex flex-col p-2">
            <Modal size={size}>
              <ModalHeader closeFn={() => setIsOpen(false)}>
                {title}
              </ModalHeader>
              <ModalBody>
                <FormikField name="validationInput" type="text" placeholder={text} errors={errors.validationInput && touched.validationInput} />
              </ModalBody>
              <ModalFooter>
                <Button styleType="outline" type="button" onClick={() => setIsOpen(false)}>Cancel</Button>
                <Button styleType="primary" type="submit">{buttonText}</Button>
              </ModalFooter>
            </Modal>
          </Form>
        )}
      </Formik>
    </ModalContainer>
  );
};

export default ModalConfirmation;
