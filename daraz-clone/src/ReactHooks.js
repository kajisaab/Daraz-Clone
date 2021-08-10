import React, { useState } from "react";

const ReactHooks = (props) => {
  const [state, setState] = useState({
    selectedCharacter: 1,
    side: "light",
    destroyed: false,
  });
};

export default ReactHooks;
