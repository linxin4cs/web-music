import React, { memo } from 'react';

import Routes from '@/router';

import AppHeader from '@/components/app-header';
import AppFooter from '@/components/app-footer';

const App = memo(() => {
  return (
    <div>
        <AppHeader />
        { Routes() }
        <AppFooter />
    </div>
  )
})

export default App;