import { useState } from "react";
type NavigationPointsProps = {
  stepsParent: Array<any>;
};
const NavigationPoints = ({ stepsParent }: NavigationPointsProps) => {
  const [selectedStep, setSelectedStep] = useState("logo");
  const [steps, setSteps] = useState(stepsParent);
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const gotoBottom = () => {
    console.log(document.documentElement.scrollHeight);
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const scrollToReference = (reference) => {
    window.scrollTo({
      top: reference.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="fixed top-[15%] md:top-[30%] right-4 md:right-8 flex flex-col gap-2 md:gap-4 justify-center">
      {steps.map((step) =>
        selectedStep === step.key ? (
          <div
            key={step.key}
            className="rounded-[50%] bg-white solid border w-4 h-4"
            onClick={(e) => {
              if (step.key === "logo") {
                goToTop();
              } else if (step.key === "entrenamientos") {
                gotoBottom();
              }else{
                scrollToReference(step.reference);
              }
              setSelectedStep(step.key);
            }}
          ></div>
        ) : (
          <div
            className="rounded-[50%] border-white solid border w-4 h-4 cursor-pointer"
            key={step.key}
            onClick={(e) => {
              setSelectedStep(step.key);
            }}
          ></div>
        )
      )}
    </div>
  );
};

export default NavigationPoints;
