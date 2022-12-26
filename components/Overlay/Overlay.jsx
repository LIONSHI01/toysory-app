import React from "react";

import { OverlayWrapper } from "./Overlay.styles";

const Overlay = ({ showup, setShowup, zIndex = 2000 }) => {
  return (
    <OverlayWrapper
      zIndex={zIndex}
      showup={showup}
      onClick={() => setShowup(false)}
    />
  );
};

export default Overlay;
