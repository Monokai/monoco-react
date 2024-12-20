import { ReactNode, ComponentPropsWithRef, ElementType, JSX, JSXElementConstructor } from 'react';
import { CornerOptions } from '@monokai/monoco';
type IntrinsicAttributes<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> = JSX.LibraryManagedAttributes<E, ComponentPropsWithRef<E>>;
export interface MonocoOwnProps<E extends ElementType = ElementType> extends CornerOptions {
    as?: E;
    children?: ReactNode;
}
export type MonocoProps<E extends ElementType> = MonocoOwnProps<E> & Omit<IntrinsicAttributes<E>, keyof MonocoOwnProps>;
export declare const Monoco: <E extends ElementType = "div">(props: MonocoProps<E>) => JSX.Element;
export default Monoco;
