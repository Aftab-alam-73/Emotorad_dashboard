import { sidebarType } from '../types'

const SidebarItem = ({data}:{data:sidebarType}) => {
  return (
    <div className='flex items-center  gap-5'>
        <data.icon/>
        <span>{data.title}</span>
    </div>
  )
}

export default SidebarItem