import React from "react";

import ModelsWrapper from "../Model/ModelsWrapper";
import ModelSection from "../Model/ModelSection";
import DefaultOverlayContent from "../DefaultOverlayContent";
import UniqueOverlay from "../UniqueOverlay";
import { Container, Spacer } from "./styles";

const Page = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Lowest Cost Solar Pannels",
            "Model S",
            "Model 3",
            "Model X",
            "Model Y",
            "Solar For New Roofs",
            "Accessories",
          ].map((modelName) => (
            <>
              <ModelSection
                key={modelName}
                className="colored"
                modelName={modelName}
                overlayNode={
                  <DefaultOverlayContent
                    label={modelName}
                    description="Order Online for Delivery"
                  />
                }
              />
            </>
          ))}
        </div>

        <Spacer />

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
