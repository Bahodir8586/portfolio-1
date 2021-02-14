import React from "react";

import TopPanel from "./TopPanel/TopPanel";
import IconsPanel from "./IconsPanel/IconsPanel";

const header = (props) => {
  return (
    <header>
      <TopPanel />
      <IconsPanel />
    </header>
  );
};

export default header;
