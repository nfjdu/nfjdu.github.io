import { useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Stack, Button } from "@mui/material";
import { particles, getRandomForm, FORM_TYPES, FormType } from "./utils";
import { getALetterForm, getBLetterForm } from "./letterForms";
import { Particle } from "./Particle";

const formGettersMap = {
  [FORM_TYPES.RANDOM]: getRandomForm,
  [FORM_TYPES.A]: getALetterForm,
  [FORM_TYPES.B]: getBLetterForm,
};

const CharsMadeOfChars = () => {
  const [currentFormType, setCurrentFormType] = useState<FormType>(FORM_TYPES.A);
  const form = formGettersMap[currentFormType]();

  const handleFormChange = (formType: FormType) => {
    setCurrentFormType(FORM_TYPES.RANDOM);
    setTimeout(() => {
      setCurrentFormType(formType);
    }, 600);
  };

  return (
    <>
      <Stack direction='row' sx={{ position: "absolute", top: 0, zIndex: 1 }}>
        <Button size='large' sx={{ mr: 1 }} onClick={() => handleFormChange(FORM_TYPES.A)}>
          A
        </Button>
        <Button onClick={() => handleFormChange(FORM_TYPES.B)}>B</Button>
      </Stack>

      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Suspense>
          <group scale={[0.35, 0.35, 1]} position={[-1.7, -2, 0]}>
            {particles.map((letter, index) => (
              <Particle
                key={index}
                symbol={letter}
                formType={currentFormType}
                position={form.get(letter) || [0, 0, 0]}
              />
            ))}
          </group>
        </Suspense>
      </Canvas>
    </>
  );
};

export default CharsMadeOfChars;
