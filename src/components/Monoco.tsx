import React, {
	forwardRef,
	ReactNode,
	useCallback,
	useEffect,
	useState,
	type ComponentPropsWithRef,
	type ElementType
} from 'react'

import type { CornerOptions } from '@monokai/monoco'
import { addCorners, draw, unobserve } from '@monokai/monoco'

// Own props specific to the Monoco component
export interface MonocoOwnProps extends CornerOptions {
	children?: ReactNode
}

// Polymorphic component types - allows for proper type checking based on the 'as' prop
type AsProp<C extends ElementType> = {
	as?: C
}

// Props that depend on the component type specified in 'as'
// Ensure MonocoOwnProps take precedence by omitting any conflicting HTML attributes
type PolymorphicComponentProp<C extends ElementType> = AsProp<C> & 
	Omit<ComponentPropsWithRef<C>, keyof AsProp<C> | keyof MonocoOwnProps>

// Final props type combining own props and polymorphic props
export type MonocoProps<C extends ElementType = 'div'> = 
	MonocoOwnProps & PolymorphicComponentProp<C>

// Create a type for the polymorphic ref component
type PolymorphicForwardRefComponent<
	DefaultElementType extends ElementType = 'div'
> = <C extends ElementType = DefaultElementType>(
	props: MonocoProps<C>
) => React.ReactElement | null

// Create the component implementation
export const Monoco = forwardRef(
	(
		{
			as,
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
			idPrefix,
			clip,
			observe,
			onResize,
			...rest
		}: MonocoProps<any>,
		forwardedRef
	) => {
		const Element = as || 'div'
		const [element, setElement] = useState<HTMLElement | null>(null)

		const options: CornerOptions = {
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
			idPrefix,
			clip,
			observe,
			onResize
		}

		const refElement = useCallback((elementNode: HTMLElement) => {
			// Only update if the element has changed to avoid unnecessary re-renders
			if (elementNode !== element) {
				// store reference for unobserving this later
				setElement(elementNode)

				if (elementNode) {
					// when element is available, add corners
					addCorners(elementNode, options)
				}

				// Forward the ref
				if (typeof forwardedRef === 'function') {
					forwardedRef(elementNode)
				} else if (forwardedRef) {
					forwardedRef.current = elementNode
				}
			}
		}, [])

		useEffect(() => {
			// when options change, redraw element
			if (element) {
				draw(element, options)
			}
		}, [
			element,
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
			idPrefix,
			clip,
			observe,
			onResize
		])

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
) as PolymorphicForwardRefComponent