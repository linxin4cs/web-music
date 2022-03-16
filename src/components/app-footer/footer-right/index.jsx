import React, { memo } from "react";

import { footerImages } from "@/common/local_data";

import FooterLeftWrapper from "./style";

const FooterRight = memo(() => {
  return (
    <FooterLeftWrapper>
      {footerImages.map((item, index) => {
        return (
          <li className="item" key={item.key}>
            <a
              className="link"
              href={item.link}
              rel="noopener noreferrer"
              target="_blank"
            >
              {" "}
            </a>
            <span className="title">{item.title}</span>
          </li>
        );
      })}
    </FooterLeftWrapper>
  );
});

export default FooterRight;
