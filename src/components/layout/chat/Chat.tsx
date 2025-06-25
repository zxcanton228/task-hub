import Image from 'next/image'

export const Chat = () => {
	return (
		<div className='chat w-190 h-full bg-purple-400 max-h-screen'>
			<div className='relative z-0 h-full'>
				<Image
					className='object-cover z-0'
					src='/chat-img.jpg'
					alt='chat'
					fill
				/>
			</div>

			<h2 className='text-3xl font-bold z-10'>CHAT</h2>
		</div>
	)
}
