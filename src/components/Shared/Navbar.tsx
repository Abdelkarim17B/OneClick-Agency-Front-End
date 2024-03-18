import { useZoom } from '../Responsiveness/ZoomContext';
import Button from '../Utils/Button'

function Navbar() {
  const zoom  = useZoom();

  return (
    <div className='w-[100%] flex items-center justify-between h-16'>
        <img src='/oneClickMaxLogo.webp' alt='OneClick Logo' className={`h-16 w-auto ${zoom > 1 && "h-12"}`}/>
        <ul className={`med:flex items-center gap-8 text-white text-[1.75rem] hidden ${zoom > 1 && "text-[1.35rem]"}`}>
            <li>Home</li>
            <li>Our Work</li>
        </ul>
        <Button text='Contact us' textSize={zoom > 1 ? 1.1 : 1.3} paddingHorizontal={zoom>1 ? 10 : 14} paddingVertical={zoom > 1 ? 4 : 6}/>
    </div>
  )
}

export default Navbar