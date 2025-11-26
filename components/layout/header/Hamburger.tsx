import { Button } from '@/components'
import { FC } from 'react'

const Hamburger: FC = () => {
  return (
    <Button noStyle={true} className="relative inline-block w-[52px] h-[52px] cursor-pointer overflow-hidden">
        <span></span>
        <span></span>
        <span></span>
    </Button>
  )
}
export default Hamburger