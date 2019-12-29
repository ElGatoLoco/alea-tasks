import { DragEvent } from 'react';
import { StyledComponent } from 'styled-components';

type DragItemContainerProps = {
  highlight: boolean;
};
export type DragItemContainer = StyledComponent<'div', {}, DragItemContainerProps>;
export type ExtendedDragEvent<T extends HTMLElement> = DragEvent<T> & { target: T };
