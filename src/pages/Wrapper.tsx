import React, { ReactNode } from 'react';
import AppNav from '../components/AppNav';
import { CategoriesData, FooterLinks } from '../data';
import FooterSection from '../components/Footer';

interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return (
    <>
      <AppNav links={CategoriesData.links} />
      {children}
      <FooterSection data={FooterLinks.data} />
    </>
  );
};

export default Wrapper;
