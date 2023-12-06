import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <div className='max-w-full flex flex-row justify-center items-center gap-24'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-[60px]'>
            My Personal Blog
          </h1>
          <p className='text-3xl text-[#4A5568]'>Still learning...</p>
        </div>
        <Image src={"/heroimg.png"} width={476} height={323} priority alt='programming' objectFit='contain' />
      </div>
      {/* border-solid border-[1px] border-[#e2e2e2] rounded-md */}
      <div className='container max-w-[966px] flex flex-col m-auto justify-center items-center'>
        <div className='max-w-full h-[243px] flex flex-row items-center border-solid border-[1px] border-[#e2e2e2] rounded-md'>
          <div className='flex flex-col p-7 gap-7'>
            <h2 className='font-bold text-3xl'>long established</h2>
            <p className='text-sm'>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that....</p>
            <div className='flex flex-row justify-between items-center'>
              <p className='text-[#718096] text-xs'>Date Posted</p>
              <p className='font-bold text-xs'>Read More</p>
            </div>
          </div>
          <Image src={`/featured.jpg`} width={365} height={20} objectFit='cover' alt='featured' layout='intrinsic' />
        </div>
        <div className='grid grid-cols-6 gap-2 items-center max-w-full'>
          <div className='max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm col-span-6 md:col-span-3 lg:col-span-2'>
            {/* <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" /> */}
            <Image src={`/featured.jpg`} width={365} height={20} objectFit='cover' alt='featured' layout='responsive' />
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div className="flex-none w-10 h-10 rounded-full">
                {/* <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} /> */}
              </div>
              <div className="ml-3">
                <span className="block text-gray-900">testing</span>
                <span className="block text-gray-400 text-sm">date</span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">
                title
              </h3>
              <p className="text-gray-400 text-sm mt-1">blogdesc</p>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm col-span-6 md:col-span-3 lg:col-span-2'>
            {/* <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" /> */}
            <Image src={`/featured.jpg`} width={365} height={20} objectFit='cover' alt='featured' layout='responsive' />
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div className="flex-none w-10 h-10 rounded-full">
                {/* <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} /> */}
              </div>
              <div className="ml-3">
                <span className="block text-gray-900">testing</span>
                <span className="block text-gray-400 text-sm">date</span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">
                title
              </h3>
              <p className="text-gray-400 text-sm mt-1">blogdesc</p>
            </div>
          </div>
          <div className='max-w-md mx-auto mt-4 shadow-lg border rounded-md duration-300 hover:shadow-sm col-span-6 md:col-span-3 lg:col-span-2'>
            {/* <img src={items.img} loading="lazy" alt={items.title} className="w-full h-48 rounded-t-md" /> */}
            <Image src={`/featured.jpg`} width={365} height={20} objectFit='cover' alt='featured' layout='responsive' />
            <div className="flex items-center mt-2 pt-3 ml-4 mr-2">
              <div className="flex-none w-10 h-10 rounded-full">
                {/* <img src={items.authorLogo} className="w-full h-full rounded-full" alt={items.authorName} /> */}
              </div>
              <div className="ml-3">
                <span className="block text-gray-900">testing</span>
                <span className="block text-gray-400 text-sm">date</span>
              </div>
            </div>
            <div className="pt-3 ml-4 mr-2 mb-3">
              <h3 className="text-xl text-gray-900">
                title
              </h3>
              <p className="text-gray-400 text-sm mt-1">blogdesc</p>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}
