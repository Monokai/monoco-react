import { default as React, ReactNode, ComponentPropsWithRef, ElementType } from 'react';
import { CornerOptions } from '@monokai/monoco';
export interface MonocoOwnProps extends CornerOptions {
    children?: ReactNode;
}
type AsProp<C extends ElementType> = {
    as?: C;
};
type PolymorphicComponentProp<C extends ElementType> = AsProp<C> & Omit<ComponentPropsWithRef<C>, keyof AsProp<C> | keyof MonocoOwnProps>;
export type MonocoProps<C extends ElementType = 'div'> = MonocoOwnProps & PolymorphicComponentProp<C>;
type PolymorphicForwardRefComponent<DefaultElementType extends ElementType = 'div'> = <C extends ElementType = DefaultElementType>(props: MonocoProps<C>) => React.ReactElement | null;
export declare const Monoco: PolymorphicForwardRefComponent;
export {};
