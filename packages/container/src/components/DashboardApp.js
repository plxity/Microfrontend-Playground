import { mount as DashboardMount } from 'dashboard/Dashboard';
import React, { useRef, useEffect } from 'react';

export default () => {
  const ref = useRef(null);

  useEffect(() => {
    DashboardMount(ref.current);
  }, []);
  return <div ref={ref} />;
};
