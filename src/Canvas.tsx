import React from "react";
import { atom, useRecoilState, useRecoilValue } from "recoil";
import { Rectangle } from "./components/Rectangle/Rectangle";
import { EditProperties } from "./EditProperties";
import { PageContainer } from "./PageContainer";
import { Toolbar } from "./Toolbar";

export const selectedElementState = atom<number | null>({
  key: "selectedElement",
  default: null,
});

export const elementsState = atom<number[]>({
  key: "elements",
  default: [],
});

function Canvas() {
  const [selectedElement, setSelectedElement] =
    useRecoilState(selectedElementState);
  const elements = useRecoilValue(elementsState);

  return (
    <PageContainer
      onClick={() => {
        setSelectedElement(null);
      }}
    >
      <Toolbar />
      <EditProperties />
      {elements.map((id) => (
        <Rectangle key={id} id={id} />
      ))}
    </PageContainer>
  );
}

export default Canvas;
