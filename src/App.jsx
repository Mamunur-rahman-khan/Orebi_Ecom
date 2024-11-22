
import './App.css'
import Container from './components/Container'
import Flex from './components/Flex'
import Image from './components/Image'
import Menu from './components/Menu'
import Logo from '../src/assets/logo.png'
import { HiBars3BottomLeft } from "react-icons/hi2";
import { FaSearch,FaUser,FaCaretDown,FaShoppingCart,FaTruck,FaUndoAlt } from "react-icons/fa";
import { PiNumberTwoBold } from "react-icons/pi";
import Heading from './components/Heading'
import adOne from './assets/Adone.jpg'
import adTwo from './assets/Adtwo.png'
import adThree from './assets/Adthree.jpg'
import Product from './components/Product'

function App() {


  return (
    <>
      {/* Header part Start */}
      <div className="w-full py-[25px]">
        <Container className={'max-w-headerContainer'}>
          <Flex>
            <div className="w-logoW">
              <Image imgSrc={Logo}/>
            </div>
            <div className="w-menuW ml-24">
              <Flex>
              <Menu menuName={'Home'}/>
              <Menu menuName={'Shop'}/>
              <Menu menuName={'About'}/>
              <Menu menuName={'Contacts'}/>
              <Menu menuName={'Journal'}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Header part end */}

      {/* Category part start */}
      <div className="w-full bg-categoryBg py-[30px]">
        <Container className={'max-w-headerContainer'}>
          <Flex className={'items-center'}>
            <div className="w-1/5">
            <Flex className={'gap-x-2'}>
              <HiBars3BottomLeft />
              <Heading as={'h3'} text={'Shop By Category'} className={'font-dm text-sm text-menuTextHov'}/>
            </Flex>
            </div>
            <div className="w-2/4 relative ml-20">
              <input type="text" className='bg-white p-4 rounded-sm w-full' placeholder='Search Products'/>
              <FaSearch className='absolute top-1/2 right-5 -translate-y-1/2'/>
            </div>
            <div className="w-1/5">
              <Flex className='justify-end'>
                <FaUser />
                <FaCaretDown />
                <FaShoppingCart className='ml-4'/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Category part start */}

      {/* Banner part start */}
      <div className="bg-banneerBg w-full py-[300px] bg-no-repeat bg-center"></div>
      {/* Banner part end */}

      {/* Information part start */}
      <div className="w-full py-[25px] border-y-[1px]">
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between gap-x-96'}>
            <div className="w-[30%]">
              <Flex className={'gap-x-2 items-center'}>
                <PiNumberTwoBold className='text-2xl'/>
                <Heading as={'h3'} text={'Two years warranty'} className={'font-dm text-[16px] text-infoText'}/>
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-2'}>
                <FaTruck className='text-xl'/>
                <Heading as={'h3'} text={'Free shipping'} className={'font-dm text-[16px] text-infoText'}/>
              </Flex>
            </div>
            <div className="w-[30%]">
              <Flex className={'gap-x-2'}>
                <FaUndoAlt className='text-xl'/>
                <Heading as={'h3'} text={'Return policy in 30 days'} className={'font-dm text-[16px] text-infoText'}/>
              </Flex>
            </div>
          </Flex>
        </Container>
      </div>
      {/* Information part end */}

      {/* Ads part start */}
      <div className="w-full py-[140px]">
        <Container className={'max-w-headerContainer'}>
          <Flex className={'justify-between'}>
            <div className="w-[49%]">
              <img src={adOne} alt={'adOne'} />
            </div>
            <div className="w-[49%]">
              <img src={adTwo} alt={'adTwo'} />
              <img src={adThree} alt={'adThree'} className={'mt-[38px]'}/>
            </div>
          </Flex>
        </Container>

      </div>
      {/* Ads part end */}

      {/* New arrivals part start */}
      <div className="w-full bg-purple-700">
        <Container className={'max-w-headerContainer'}>
          <Flex>
            <div className="w-[25%] bg-red-400">
              <Product />
            </div>
          </Flex>
        </Container>
      </div>
      {/* New arrivals part end */}
    </>
  )
}

export default App
