import { PROJECTS } from './sidebar.data'
import { SidebarHeading } from './SidebarHeading'

export const Projects = () => {
	return (
		<div>
			<SidebarHeading>Projects</SidebarHeading>
			<div className='flex flex-col gap-4 px-5 text-lg text-grey'>
				{PROJECTS.map(({ name, icon }, index) => (
					<div
						key={index}
						className='flex items-center gap-2'
					>
						<span
							style={{ background: icon }}
							className={`w-4 h-4 bg-[${icon}]`}
						></span>
						<span>{name}</span>
					</div>
				))}
			</div>
		</div>
	)
}
