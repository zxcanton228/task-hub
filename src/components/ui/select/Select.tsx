// import type { FC } from 'react'
// import { useOutside } from 'src/hooks/useOutside'
// type Props = {}
// export const Select: FC<Props> = () => {
// 	const { isShow, ref, setIsShow } = useOutside(false)

// 	return<div className='relative'>
// 				<button
// 					className='px-4 flex items-center gap-1 py-1 border border-grey rounded-full'
// 					onClick={() => setIsShow(prev => !prev)}
// 				>
// 					{selectedRange.label}
// 					{isShow ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
// 				</button>
// 				{isShow && (
// 					<div
// 						ref={ref}
// 						className='absolute border border-gray-300 top-[calc(100%+0.5rem)] right-0 w-full bg-foreground rounded-xl shadow-xl'
// 					>
// 						{TIME_RANGES_DATA.map((range, i) => (
// 							<button
// 								className={`w-full text-left transition-colors p-2 hover:bg-gray-300 hover:text-black ${i === 0 ? 'border-b border-b-gray-300 rounded-t-lg' : i === TIME_RANGES_DATA.length - 1 ? 'rounded-b-lg' : 'border-b border-b-gray-300'}`}
// 								disabled={selectedRange.value === range.value}
// 								onClick={() => handleChange(range)}
// 								key={i}
// 							>
// 								{range.label}
// 							</button>
// 						))}
// 					</div>
// 				)}
// 			</div>
// 	)
// }
