import React, {
	forwardRef,
	ReactElement,
	DetailedHTMLProps,
	ReactNode,
	HTMLAttributes,
	useCallback,
	useEffect,
	useState
} from 'react'
import type { CornerOptions } from '@monokai/monoco'
import { addCorners, draw, unobserve } from '@monokai/monoco'

type Props = {
  children: ReactNode,
  as?: React.ElementType
} & CornerOptions & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>

export const Monoco =  forwardRef<unknown, Props>(
	({
		as: Component = 'div',
		children,

		width,
		height,
		smoothing,
		radius,
		offset,
		type,
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
	}, forwardedRef):ReactElement => {
		const [element, setElement] = useState<HTMLElement | undefined>(undefined)

		const options:CornerOptions = {
			width,
			height,
			smoothing,
			radius,
			offset,
			type,
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

			if (typeof forwardedRef === "function") {
				forwardedRef(element);
			} else if (forwardedRef) {
				forwardedRef.current = element;
			}
		}, []);

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
			<Component {...rest} ref={refElement}>
				{children}
			</Component>
		)
	}
)

export default Monoco