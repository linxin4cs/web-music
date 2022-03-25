import React, { memo } from 'react';

import FooterLeft from './footer-left';
import FooterRight from './footer-right';

import AppFooterWrapper from './style';

export default memo(function AppFooter() {
  return (
  <AppFooterWrapper>
    <div className="wrap-v2 content">
      <FooterLeft className="left" />
      <FooterRight className="right" />
    </div>
  </AppFooterWrapper>
  )
})
