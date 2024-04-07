import { ReactNode } from "react"

interface SectionLayoutProps {
    PatternModel: number,
    children: ReactNode;
}


function SectionLayout({PatternModel, children} : SectionLayoutProps) {
  return (
    <div className="h-screen w-screen px-16 max:px-40 med:px-28  bg-[url('/linearBackground.webp')] bg-cover bg-center bg-no-repeat py-32">
      {PatternModel===1 && (
      <div className='h-screen w-screen absolute top-0 left-0 overflow-hidden hidden max:block'>
          <div className="h-screen w-screen relative">
            <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-120px] left-[43px]"/>
            <img src='/Pattern.webp' alt='Pattern' className="absolute top-[721px] left-[1743px]"/>
          </div>
      </div>
      )}    
      {PatternModel===2 && (
      <div className='h-screen w-screen absolute top-0 left-0 overflow-hidden hidden max:block'>
          <div className="h-screen w-screen relative">
            <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-145px] left-[281px]"/>
            <img src='/Pattern.webp' alt='Pattern' className="absolute top-[1000px] left-[-128px]"/>
            <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-144px] left-[1800px]"/>
          </div>
      </div>
      )}   
      {PatternModel===3 && (
          <div className='h-screen w-screen absolute top-0 left-0 overflow-hidden hidden max:block'>
            <div className="h-screen w-screen relative">
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-145px] left-[281px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[1006px] left-[1132px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[615px] left-[-228px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[246px] left-[1786px]"/>
            </div>
          </div>
      )}   
      {PatternModel===4 && (
          <div className='h-screen w-screen absolute top-0 left-0 overflow-hidden hidden max:block'>
            <div className="h-screen w-screen relative">
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-91px] left-[299px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[-144px] left-[1800px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[601px] -left-[205px]"/>
              <img src='/Pattern.webp' alt='Pattern' className="absolute top-[879px] left-[1736px]"/>
            </div>
          </div>
      )}  
       
        {children}
    </div>
  )
}

export default SectionLayout