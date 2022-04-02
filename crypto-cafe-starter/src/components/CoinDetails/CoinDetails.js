import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const CoinDetails = () => {
    const { id } = useParams()
    const [coin, setCoin] = useState({})

    useEffect(() => {
        const url = `https://api.coingecko.com/api/v3/coins/${id}`

        fetch(url)
            .then(res => res.json())
            .then(data => {

                console.log(data)
                setCoin(data)
            }
            )
    }, [id])
    return (
        <div className='px-4 h-[90vh] pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 justify-items-center gap-4 content-center">
                <div className='order-2 md:order-1'>
                    <h1 className='text-3xl'>General Info:</h1>
                    <hr />
                    <h1>Coin :{coin.name}</h1>
                    <h1>Market Cap :{coin.market_cap_rank}</h1>
                    <h1>Origin :{coin.country_origin ? coin.country_origin : 'not found'} </h1>
                    <h1 className='text-3xl'>Score:</h1>
                    <hr />
                    <h1>Community score :{coin.community_score}</h1>
                    <h1>Developer score :{coin.developer_score}</h1>
                </div>


                <div className='flex justify-center items-center order-1 md:order-2 '>
                    <img src={coin.image?.large} alt={coin.name} />
                </div>

            </div>
        </div>
    );
};

export default CoinDetails;