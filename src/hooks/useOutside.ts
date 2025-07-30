import { type Dispatch, type SetStateAction, useCallback, useEffect, useRef, useState } from 'react'

type TUseOutsideOut = {
	setIsShow: Dispatch<SetStateAction<boolean>>
	isShow: boolean
	ref: any
}

type TOutside = (initialIsVisible?: boolean) => TUseOutsideOut

export const useOutside: TOutside = (initialIsVisible = false) => {
	const [isShow, setIsShow] = useState(initialIsVisible)
	const ref = useRef<HTMLElement>(null)
	const closeModal = useCallback(() => setIsShow(false), [])

	const handleClickOutside = (event: any) => {
		if (ref.current && !ref.current.contains(event.target)) closeModal()
	}

	useEffect(() => {
		document.addEventListener('click', handleClickOutside, true)
		return () => {
			document.removeEventListener('click', handleClickOutside, true)
		}
	})
	return { ref, isShow, setIsShow }
}
