import { useState } from 'react'

import './css/output.css'
import Hamburger from 'hamburger-react'


function BuildNavbarSection({ listMenu, isOpenHumbergerMenu, setHumbergerToggle }) {
  return <>
    <div className='bg-white w-full py-2 pl-7 pr-4 sm:my-10 sm:rounded-full sm:max-w-xl lg:max-w-3xl flex justify-between md:pl-10 md:pr-7 md:py-3 sm:mx-auto fixed top-0 sm:-top-5 inset-x-0 sm:shadow-sm items-center'>
      <div>
        <a href="#" className='text-3xl font-bold text-teal-500 fl'>LOGO</a>
      </div>

      <div className='hidden lg:visible lg:flex gap-4'>
        {listMenu.map((item, index) => <a href={item.url} key={index} className='text-slate-700 hover:text-teal-500'>{item.name}</a>)}
      </div>
      <div className='visible lg:hidden'>
        <div>
          <Hamburger easing="ease-in" size={24} color="#314158" toggled={isOpenHumbergerMenu} onToggle={(value) => setHumbergerToggle(value)} />
        </div>
        <div className={isOpenHumbergerMenu ? 'visible' : 'hidden'}>
          <div className='bg-white shadow-lg px-5 w-50 rounded-2xl absolute right-0 top-18 md:top-23'>
            {listMenu.map((item, index) => <div className='my-5 text-slate-700 hover:text-teal-500' key={index}><a href={item.url} className=''>{item.name}</a></div>)}
          </div>
        </div>
      </div>

    </div>



  </>
}

function BuildHeroSection() {
  return <div className='mx-10 lg:mx-20 md:mt-40 mt-30'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='w-full row-start-2 md:row-start-1'>
        <div className='mb-10'>
          <p className='text-teal-500 font-semibold'>Halo Semua 👋, saya </p>
          <p className='font-bold text-slate-700 text-3xl md:text-4xl'>Daeng Mhd El Faritsi </p>
          <p className='text-slate-500'>Front End & Mobile Developer</p>
          <h2 className='text-slate-700 mt-2'>Saya adalah Pengembang Mobile & Web yang saat ini bekerja sebagai Mobile Developer pada perusahaan Asuransi Jiwa di Jakarta, sekarang saya berharap dapat bekerja sama dengan Anda.</h2>
        </div>

        <a href="#" className='bg-teal-500 hover:bg-teal-600 px-6 py-2 md:py-3 rounded-full text-white font-light'>Hubungi Saya</a>
      </div>

      <div className='flex justify-center'>
        <img src="src/assets/images/profile_image.jpg" alt="profile image" className='w-70 h-70 md:w-80 md:h-80 lg:w-100 lg:h-100 bg-contain rounded-full border-4 border-white shadow-lg' />
      </div>
    </div>
  </div>
}

function BuildAboutSection({ socialMedia }) {
  return <div className='mx-10 lg:mx-20 mt-20'>
    <h1 className='text-teal-500 font-semibold'>TENTANG SAYA</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div>
        <h1 className='text-3xl font-bold text-slate-700'>Yuk Belajar Web Programming!</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint libero, iste consequatur ipsum repudiandae distinctio doloribus praesentium sapiente tempora.</p>
      </div>
      <div>
        <h1 className='text-2xl font-semibold text-slate-700'>Mari Berteman</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint libero, iste consequatur ipsum</p>
        <div className='flex gap-3 mt-3'>
          {socialMedia.map((items, index) => <CustomSocialMediaIcon icon={items} key={index} />
          )}
        </div>

      </div>

    </div>

  </div>
}

function CustomSocialMediaIcon({ icon }) {
  return <a href='#' className='w-10 h-10 rounded-full border-[1px] border-slate-400 flex items-center justify-center'><h1>{icon}</h1>
  </a>

}

function PortfolioSection({ projectList }) {

  return <div className='mt-20 bg-white py-5'>
    <div>
      <h2 className='flex justify-center font-semibold text-teal-500 text-xl mt-8'>Portfolio</h2>
      <h1 className='flex justify-center font-bold text-slate-700 text-4xl mt-1'>Project Terbaru</h1>
      <h3 className='flex justify-center text-slate-400 text-center mt-3 mx-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
      <h3 className='flex justify-center text-slate-400 text-center mx-5'>Repudiandae distinctioquo voluptate cum perferendis molestias.</h3>
    </div>
    <div className='flex justify-center mt-7'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {projectList.map((item, index) => <CustomPortfolioCard projectName={item.name} desc={item.desc} image={item.image} key={index} />)}
      </div>
    </div>


  </div>
}

function CustomPortfolioCard({ projectName, desc, image }) {
  return <div className='w-70 rounded-2xl overflow-hidden m-5'>
    <div className='w-full h-50 bg-slate-300 rounded-b-2xl'></div>
    <div className='p-3'>
      <h1 className='font-semibold text-slate-700 text-lg'>{projectName}</h1>
      <p className='text-slate-500 text-sm'>{desc}</p>
    </div>


  </div>
}

function ClientSection({ clientTotal }) {
  return <div className='bg-slate-800 p-5'>
    <div className='md:max-w-2xl mx-auto'>
      <h2 className='flex justify-center font-semibold text-teal-500 text-xl mt-8'>Client</h2>
      <h1 className='text-white flex justify-center text-center text-4xl font-bold'>Yang Pernah Bekerjasama</h1>
      <h3 className='mt-3 text-slate-500 flex justify-center text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eos dolorem alias distinctio vero esse.</h3>
      <div className='flex flex-wrap gap-5 my-10 justify-center'>
        {
          clientTotal.map((item, index) => <div key={index} className='w-35 h-10 bg-slate-400 rounded-2xl '></div>)


        }

      </div>
    </div>
  </div>
}

function ContactSection() {
  return <div>
    <div className='md:max-w-2xl mx-auto p-5'>
      <h2 className='flex justify-center font-semibold text-teal-500 text-xl mt-8'>Client</h2>
      <h1 className='text-slate-700 flex justify-center text-center text-4xl font-bold'>Hubungi Kami</h1>
      <h3 className='mt-3 text-slate-400 flex justify-center text-center'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Laudantium, eos dolorem alias distinctio vero esse.</h3>
      <InputForContactSection />
    </div>
  </div>
}

function InputForContactSection() {
  return <form>
    <div className='my-5'>
      <label for="name" className='text-teal-500'>Nama</label>
      <input type="text" id="name" name="name" className='bg-slate-200 w-full h-10 px-3 rounded-lg focus:outline-teal-500' />
    </div>

    <div className='my-5'>
      <label for="email" className='text-teal-500'>Nama</label>
      <input type="email" id="email" name="email" className='bg-slate-200 w-full h-10 px-3 rounded-lg focus:outline-teal-500' />
    </div>

    <div className='my-5'>
      <label for="text-area" className='text-teal-500'>Pesan</label>
      <textarea id="w3review" name="text-area" rows="4" cols="50" className='bg-slate-200 w-full px-3  py-2 rounded-lg focus:outline-teal-500 min-h-30' />
    </div>

    <input type="submit" value="Kirim" className='block mx-auto px-25 py-2 bg-teal-500 rounded-full text-white hover:bg-teal-600' />
  </form>
}

export default function App() {
  const [isOpenHumbergerMenu, setIsOpenHumbergerMenu] = useState(false);
  const navbarListMenu = [
    {
      name: "Beranda",
      url: "#"
    }, {
      name: "Tentang Saya",
      url: "#"
    },
    {
      name: "Clients",
      url: "#"
    },
    {
      name: "Blog",
      url: "#"
    },
    {
      name: "Contact",
      url: "#"
    }
  ];
  const socialMedia = ["F", "T", "I", "L"];
  const projectList = [
    {
      name: "Project 1",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, amet.",
      image: ""
    },
    {
      name: "Project 2",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      image: ""
    },
    {
      name: "Project 3",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis!",
      image: ""
    },
    {
      name: "Project 4",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
      image: ""
    }
  ];

  return (
    <>
      <BuildNavbarSection listMenu={navbarListMenu} isOpenHumbergerMenu={isOpenHumbergerMenu} setHumbergerToggle={setIsOpenHumbergerMenu} />
      <BuildHeroSection />
      <BuildAboutSection socialMedia={socialMedia} />
      <PortfolioSection projectList={projectList} />
      <ClientSection clientTotal={socialMedia} />
      <ContactSection />
    </>
  )
}
