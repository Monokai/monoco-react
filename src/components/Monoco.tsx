import React, {
	forwardRef,
	ReactNode,
	useCallback,
	useEffect,
	useState,
	type ComponentPropsWithRef,
	type ElementType,
	type JSX,
	type JSXElementConstructor,
	type Ref
} from 'react'

import type { CornerOptions } from '@monokai/monoco'
import { addCorners, draw, unobserve } from '@monokai/monoco'

type IntrinsicAttributes<E extends keyof JSX.IntrinsicElements | JSXElementConstructor<any>> =
	JSX.LibraryManagedAttributes<E, ComponentPropsWithRef<E>>

export interface MonocoOwnProps<E extends ElementType = ElementType> extends CornerOptions {
	as?: E
	children?: ReactNode
}

export type MonocoProps<E extends ElementType> = MonocoOwnProps<E> & Omit<IntrinsicAttributes<E>, keyof MonocoOwnProps>

export const Monoco = forwardRef(
	(
		{
			as: Element = 'div',
			children,

			width,
			height,
			smoothing,
			borderRadius,
			offset,
			cornerType,
			precision,
			isRounded,
			background,
			border,
			strokeDrawType,
			clipID,
			clip,
			observe,
			onResize,

			...rest
		}: MonocoOwnProps,
		forwardedRef: Ref<Element>
	) => {
		// const Component = as || 'div'
		const [element, setElement] = useState<HTMLElement | null>(null)

		const options:CornerOptions = {
			width,
			height,
			smoothing,
			borderRadius,
			offset,
			cornerType,
			precision,
			isRounded,
			background,
			border,
			strokeDrawType,
			clipID,
			clip,
			observe,
			onResize
		}

		const refElement = useCallback((element: HTMLElement) => {
			// store reference for unobserving this later
			setElement(element);

			if (element) {
				// when element is available, add corners
				addCorners(element, options)
			}

			if (typeof forwardedRef === 'function') {
				forwardedRef(element);
			} else if (forwardedRef) {
				forwardedRef.current = element;
			}
		}, [])

		useEffect(() => {
			// when options change, redraw element

			if (element) {
				draw(element, options)
			}
		}, [...Object.values(options)])

		useEffect(() => {
			return () => {
				// when element is unmounted, unobserve it

				if (element) {
					unobserve(element)
				}
			}
		}, [])

		return (
			<Element {...rest} ref={refElement}>
				{children}
			</Element>
		)
	}
) as <E extends ElementType = "div">(props: MonocoProps<E>) => JSX.Element

export default Monoco