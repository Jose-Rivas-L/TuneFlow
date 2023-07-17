import React,{useState, useEffect} from 'react';
import {useSelector} from 'react-redux';
import {Error, Loader, SongCard} from '../components'
import {useGetTopChartsQuery} from '../redux/services/shazamCore'

const TopCharts = () => {
    const [country, setCountry] = useState('');
    const [loading, setLoading] = useState(true);
    const {activeSong, isPlaying} = useSelector((state)=>state.player)

    const {data, isFetching, error} = useGetTopChartsQuery();

    if(isFetching) return <Loader title="Loading songs around you"/>

    if(error) return <Error/>


    return(
        <div className='flex flex-col'>
            <h2 className='font-bold text-3xl text-white text-left mt-4 mb-10'>Most Popular Songs</h2>
            <div className='flex flex-wrap sm:justify-start justify-center gap-8'>
                {data?.tracks?.map((song, i)=>(
                    <SongCard
                    key={song.key}
                    song={song}
                    isPlaying={isPlaying}
                    activeSong={activeSong}
                    data={data}
                    i={i}
                    />

                ))}
            </div>
        </div>
    )
}

export default TopCharts;