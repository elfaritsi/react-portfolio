import { useState } from 'react'

import './css/output.css'


function BuildNavbarSection() {
  return <>
    <div className='bg-white py-2 px-5 my-10 rounded-full md:max-w-7xl lg:flex lg:justify-between md:px-15 md:py-4 lg:mx-auto fixed -top-5 left-1/5 right-1/5 shadow-sm'>
      <div>
        <a href="#" className='text-3xl font-bold text-emerald-600'>LOGO</a>
      </div>

      <div className='hidden lg:visible lg:flex lg:items-center gap-4'>
        <a href="#" className='text-slate-700 font-poppins'>Beranda</a>
        <a href="#" className='text-slate-700'>Tentang Saya</a>
        <a href="#" className='text-slate-700'>Clients</a>
        <a href="#" className='text-slate-700'>Blog</a>
        <a href="#" className='text-slate-700'>Contact</a>
      </div>
    </div>
  </>
}

function BuildHeroSection() {
  return <div className='mx-10 lg:mx-20 mt-40'>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div className='w-full row-start-2 md:row-start-1'>
        <div className='mb-10'>
          <p className='text-emerald-600 font-semibold'>Halo Semua 👋, saya </p>
          <p className='font-bold text-slate-700 text-3xl md:text-4xl'>Daeng Mhd El Faritsi </p>
          <p className='text-slate-500'>Front End & Mobile Developer</p>
          <h2 className='text-slate-700 mt-2'>Saya adalah Pengembang Mobile & Web yang saat ini bekerja sebagai Mobile Developer pada perusahaan Asuransi Jiwa di Jakarta, sekarang saya berharap dapat bekerja sama dengan Anda.</h2>
        </div>

        <a href="#" className='bg-emerald-600 px-6 py-2 md:py-3 rounded-full text-white font-light'>Hubungi Saya</a>
      </div>

      <div className='w-full bg-blue-500'>gambar disini</div>
    </div>
  </div>
}

function BuildAboutSection() {
  const items = ["F", "T", "I", "L"];
  return <div className='mx-10 lg:mx-20 mt-20'>
    <h1 className='text-emerald-600 font-semibold'>TENTANG SAYA</h1>
    <div className='grid grid-cols-1 md:grid-cols-2 gap-5'>
      <div>
        <h1 className='text-3xl font-bold text-slate-700'>Yuk Belajar Web Programming!</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint libero, iste consequatur ipsum repudiandae distinctio doloribus praesentium sapiente tempora.</p>
      </div>
      <div>
        <h1 className='text-2xl font-semibold text-slate-700'>Mari Berteman</h1>
        <p className='text-slate-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque sint libero, iste consequatur ipsum</p>
        <div className='flex gap-3 mt-3'>
          {items.map((items, index) => <CustomSocialMediaIcon icon={items} key={index} />
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

function PortfolioSection() {
  let project = [
    {
      "name": "Project 1",
      "desc": "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, amet.",
      "image": ""
    },
    {
      "name": "Project 2",
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
      "image": ""
    },
    {
      "name": "Project 3",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis!",
      "image": ""
    },
    {
      "name": "Project 4",
      "desc": "Lorem ipsum dolor sit amet consectetur adipisicing.",
      "image": ""
    }
  ];
  return <div className='mt-20 bg-white py-5  rounded-2xl md:rounded-none'>
    <div>
      <h2 className='flex justify-center font-semibold text-emerald-600 text-xl mt-8'>Portfolio</h2>
      <h1 className='flex justify-center font-bold text-slate-700 text-4xl mt-1'>Project Terbaru</h1>
      <h3 className='flex justify-center text-slate-400 text-center mt-3 mx-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h3>
      <h3 className='flex justify-center text-slate-400 text-center mx-5'>Repudiandae distinctioquo voluptate cum perferendis molestias.</h3>
    </div>
    <div className='flex justify-center mt-7'>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
        {project.map((item, index) => <CustomPortfolioCard projectName={item.name} desc={item.desc} image={item.image} key={index} />)}
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

export default function App() {
  return (
    <>
      <BuildNavbarSection />
      <BuildHeroSection />
      <BuildAboutSection />
      <PortfolioSection />
    </>
  )
}
