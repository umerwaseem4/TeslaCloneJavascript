import React, { useCallback, useRef, useState } from "react";

import ModelsContext from "../ModelsContext";
import ModelOverlay from "../ModelOverlay";

import { Container, OverlaysRoot } from "./styles";

const ModelsWrapper = ({ children }) => {
  const wrapperRef = useRef(null);

  const [registeredModels, setRegisteredModels] = useState([]);

  const registerModel = useCallback((model) => {
    setRegisteredModels((state) => [...state, { ...model }]);
  }, []);

  const unregisterModel = useCallback((modelName) => {
    setRegisteredModels((state) =>
      state.filter((model) => model.modelName !== modelName)
    );
  }, []);

  const getModelByName = useCallback(
    (modelName) => {
      return (
        registeredModels.find((item) => item.modelName === modelName) || null
      );
    },
    [registeredModels]
  );

  return (
    <ModelsContext.Provider
      value={{
        wrapperRef,
        registeredModels,
        registerModel,
        unregisterModel,
        getModelByName,
      }}
    >
      <Container ref={wrapperRef}>
        <OverlaysRoot>
          {registeredModels.map((item) => (
            <ModelOverlay key={item.modelName} model={item}>
              {item.overlayNode}
            </ModelOverlay>
          ))}
        </OverlaysRoot>

        {children}
      </Container>
    </ModelsContext.Provider>
  );
};

export default ModelsWrapper;
