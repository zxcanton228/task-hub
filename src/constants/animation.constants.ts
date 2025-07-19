import type { HTMLMotionProps } from 'framer-motion'

export const ROTATE_ANIM: HTMLMotionProps<'div'> = {
	initial: {
		opacity: 0,
		rotateX: 15, // Начальный поворот на 90 градусов вокруг оси Y
		transformPerspective: ['1000'], // Добавляем перспективу для 3D-эффекта
		transformOrigin: 'center' // Устанавливаем центр вращения
	},
	animate: {
		opacity: 1,
		rotateX: 0 // Конечное положение без поворота
	},
	exit: {
		opacity: 0,
		rotateX: -15 // При выходе поворачиваем в другую сторону
	},
	transition: {
		duration: 0.4, // Укороченная длительность анимации
		ease: 'easeInOut', // Более резкое ускорение/замедление
		type: 'tween' // Линейная анимация вместо spring
	}
}
