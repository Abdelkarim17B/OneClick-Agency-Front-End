import { FaLocationDot } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { FaPhoneAlt } from "react-icons/fa";


export default function ContactForm() {
  return (
      <div className="z-[99] relative w-screen bg-[url('/linearBackground.webp')] bg-cover bg-center bg-no-repeat h-[70vh]  translate flex flex-col  items-center justify-center">
          <div className="w-[50%] h-[80%] bg-[#153C38] flex items-center justify-end "> 
            <div className="w-[20%] h-[65%] bg-[#328773] absolute left-[20%] top-[3%] px-7 py-12 flex flex-col gap-20">
              <div>
                <h2 className="text-white text-2xl font-bold">Contact Infos</h2>
              </div>
              <div className="flex flex-col gap-10">
                <div className="flex items-center gap-4">
                  <FaLocationDot className="text-white text-2xl" />
                  <h4 className="text-white opacity-70">CLS , Rue D’Alger , MEDEA - Algeria</h4>
                </div>
                  <div className="flex items-center gap-4">
                  <SiGmail className="text-white text-2xl" />
                  <h4 className="text-white opacity-70">CLS , Rue D’Alger , MEDEA - Algeria</h4>
                </div>
                <div className="flex items-center gap-4">
                  <FaPhoneAlt className="text-white text-2xl" />
                  <h4 className="text-white opacity-70">CLS , Rue D’Alger , MEDEA - Algeria</h4>
                </div>
              </div>
            </div>
            <form className="flex flex-col gap-4 pr-20">
              <div className="flex items-center gap-10">
                <input type="text" placeholder="First Name" className="bg-[#D9D9D933] py-4 px-3 w-[250px] rounded-sm focus:text-white text-white" />
                <input type="text" placeholder="Last Name" className="bg-[#D9D9D933] py-4 px-3 w-[250px] rounded-sm focus:text-white text-white" />
              </div>
              <input type="text" placeholder="E-Mail Adress" className="bg-[#D9D9D933] py-4 px-3 rounded-sm focus:text-white text-white" />
              <textarea placeholder="Message ..." className="bg-[#D9D9D933] py-4 px-3 h-[200px] rounded-sm focus:text-white text-white"></textarea>
              <div className="mt-10">
                <button className="bg-white p-3 capitalize font-bold rounded-sm ">send message</button>
              </div>
            </form>
          </div>
      </div>
  )
}
