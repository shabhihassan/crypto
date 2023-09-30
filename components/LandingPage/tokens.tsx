'use client'
import React,{useState} from 'react'
import TokenCard from './tokenCard'
import Image from 'next/image'
import back from '../../public/back.svg'
import forward from '../../public/forward.svg'
const Tokens = ({asset_coin_pairs}:any) => {
    const tokenData = [
        {
          name: 'Bitcoin',
          value: '124,152,512.202',
          image: '/btc.svg',
          graphimg: '/graph-pos.svg',
          graphvalue: '2.52%',
        },
        {
          name: 'ETH',
          value: '64,152,512.202',
          image: '/eth.svg',
          graphimg: '/graph-pos.svg',
          graphvalue: '1.52%',
        },
        {
          name: 'Cordo',
          value: '124,152,512.202',
          image: '/cordo.svg',
          graphimg: '/graph-pos.svg',
          graphvalue: '0.52%',
        },
        {
          name: 'Tether',
          value: '124,152,512.202',
          image: '/cordo.svg',
          graphimg: '/graph-pos.svg',
          graphvalue: '0.52%',
        },
        {
          name: 'BTC WEB3',
          value: '64,152,512.202',
          image: '/logo-sm.svg',
          graphimg: '/graph-neg.svg',
          graphvalue: '-1.52%',
        },
        {
            name: 'ETH',
            value: '64,152,512.202',
            image: '/eth.svg',
            graphimg: '/graph-pos.svg',
            graphvalue: '1.52%',
          },
          {
            name: 'Cordo',
            value: '124,152,512.202',
            image: '/cordo.svg',
            graphimg: '/graph-pos.svg',
            graphvalue: '0.52%',
          },
          {
            name: 'ETH',
            value: '64,152,512.202',
            image: '/eth.svg',
            graphimg: '/graph-pos.svg',
            graphvalue: '1.52%',
          },
          {
            name: 'BTC WEB3',
            value: '64,152,512.202',
            image: '/logo-sm.svg',
            graphimg: '/graph-neg.svg',
            graphvalue: '-1.52%',
          },
        // Add more token objects as needed
      ];
    
      const cardsPerPage = 4;
      const [currentPage, setCurrentPage] = useState(0);
    
      const totalPages = Math.ceil(tokenData.length / cardsPerPage);
    
      const handleNextPage = () => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      };
    
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => (prevPage - 1 + totalPages) % totalPages);
      };
    
      const displayTokens = asset_coin_pairs.slice(
        currentPage * cardsPerPage,
        (currentPage + 1) * cardsPerPage
      );
    
  return (
    <div className='tokens-container'>
        <p>Tokens</p>
        <h1>Most top rated <span style={{color:'#FF914D', fontWeight:700}}>Cryptocurrency</span> you can see here</h1>
        <div className='tokens-con'>
            <div className="row t-con-1">
                    {asset_coin_pairs.map((item: any, index: number) => (
                            <div key={index} className="col-md-6 col-lg-4 card-token-res">
                                <TokenCard
                                name={item?.child_coin_name+'/'+item?.parent_coin_name}
                                value={item.last_price}
                                image={item?.coin_icon || "/bitcoin.png"}
                                graphimage={item?.change_percent>0?'/graph-pos.svg':'/graph-neg.svg'}
                                graphvalue={item.price_change}
                                />
                            </div>    
                                ))}
            </div>
            <button className='btn-token-explore'>Explore More</button>                    
            <div className="row t-con-2">
                    {displayTokens.map((item: any, index: number) => (
                            <div key={index} className="col-md-6 col-lg-4 card-token-res">
                                <TokenCard
                                name={item?.child_coin_name+'/'+item?.parent_coin_name}
                                value={item.last_price}
                                image={item?.coin_icon || "/bitcoin.png"}
                                graphimage={item?.change_percent>0?'/graph-pos.svg':'/graph-neg.svg'}
                                graphvalue={item.price_change}
                                />
                            </div>
                    ))}
            </div>    
                    
                
            <div className="t-pagination">
                <Image src={back} alt='left' width={40} height={40} onClick={handlePrevPage}/>
                <Image src={forward} alt='left' width={40} height={40} onClick={handleNextPage}/>
            </div>

            
        </div>    
    </div>
  )
}

export default Tokens