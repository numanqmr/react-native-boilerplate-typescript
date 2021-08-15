import { FC, JSX, ReactNode } from 'react';

interface ShouldRenderProps {
    if: ReactNode;
    children?: JSX.Element;
}
const ShouldRender: FC<ShouldRenderProps> = (props) => (props.if ? props.children : null);
export default ShouldRender;
