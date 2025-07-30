import type { HTMLMotionProps } from 'framer-motion'

export const ROTATE_ANIM: HTMLMotionProps<'div'> = {
	initial: {
		opacity: 0,
		rotateX: 15,
		// transformPerspective: ['1000'],
		transformOrigin: 'center'
	},
	animate: {
		opacity: 1,
		rotateX: 0
	},
	exit: {
		opacity: 0,
		rotateX: -15
	},
	transition: {
		duration: 0.4,
		ease: 'easeInOut',
		type: 'tween'
	}
}
