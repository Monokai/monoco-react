import { default as React, DetailedHTMLProps, ReactNode, HTMLAttributes } from 'react';
import { CornerOptions } from '@monokai/monoco';
type Props = {
    children: ReactNode;
    as?: React.ElementType;
} & CornerOptions & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
export declare const Monoco: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<unknown>>;
export default Monoco;
