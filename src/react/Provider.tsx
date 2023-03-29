import React, { FC, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from '@/core/senders'
// Provider Props type
type ProviderProps = {
  children: React.ReactNode;
};

const Provider: FC<ProviderProps> = ({ children }) => {
  const { pathname } = useLocation();

  useEffect(() => {
    pageView.send(pathname)
  }, [pathname]);


  return <>{children}</>
};

export { Provider };