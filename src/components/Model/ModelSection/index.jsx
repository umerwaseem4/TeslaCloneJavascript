import React, { useEffect, useRef } from "react";

import useModel from "../useModel";

import { Container } from "./styles";

const ModelSection = ({
  modelName,
  overlayNode,
  children,
  ...props
}) => {
  const { registerModel } = useModel(modelName);
  const ref = useRef(null);

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref,
      });
    }
  }, [children, modelName, overlayNode, registerModel]);

  return (
    <Container ref={ref} {...props}>
      {children}
    </Container>
  );
};

export default ModelSection;
