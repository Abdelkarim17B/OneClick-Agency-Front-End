import { ReactNode } from "react"

interface SectionLayoutProps {
    PatternModel: number,
    children: ReactNode;
}


function SectionLayout({PatternModel, children} : SectionLayoutProps) {
  return (
    <div className="relative h-screen w-screen px-16 max:px-40 med:px-28  bg-[url('/linearBackground.webp')] bg-cover bg-center bg-no-repeat py-32">
      {PatternModel===1 && (
      <div className='h-screen w-screen absolute top-0 left-0 overflow-hidden hidden max:block'>
        <img src='/Pattern.webp' alt='Pattern' className="relative top-[-120px] left-[43px]"/>
        <img src='/Pattern.webp' alt='Pattern' className="relative top-[500px] left-[1760px]"/>
      </div>
  )}    
       
        {children}
    </div>
  )
}

export default SectionLayout