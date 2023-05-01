import React from 'react';
import { Flex, Heading } from '@aws-amplify/ui-react';

import Controls from './Controls';
import DataOutput from './DataOutput';

const Sidebar = ({ reconTime, setReconTime, viewName, setViewName }) => {
  return (
    <Flex
      direction="column"
      alignItems="stretch"
      justifyContent="space-between"
      className="sidebar"
      style={{ minWidth: '320px', padding: '1rem' }}
    >
      <Heading level={2}>Controls</Heading>
      <Controls
        reconTime={reconTime}
        setReconTime={setReconTime}
        viewName={viewName}
        setViewName={setViewName}
      />
      <DataOutput />
    </Flex>
  );
};

export default Sidebar;