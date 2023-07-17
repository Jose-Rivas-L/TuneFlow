import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setActiveSong, playPause } from "../redux/features/playerSlice";
import { DetailsHeader, Error, Loader, RelatedSongs } from "../components";
import {
  useGetArtistDetailsQuery,
  useGetSongRelatedQuery,
} from "../redux/services/shazamCore";

const ArtistDetails = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const {
    data: artistData,
    isFetching: isFetchingArtistDetails,
    error,
  } = useGetArtistDetailsQuery(id);
  {
    /*const {
    data,
    isFetching: isFetchingRelatedSongs,
    error,
  } = useGetSongRelatedQuery({ songid });*/
  }

  if (isFetchingArtistDetails)
    return <Loader title="Searching artist details" />;

  if (error) return <Error />;

  console.log(Object.values(artistData)[0][0]);
  return (
    <div className="flex flex-col">
      <DetailsHeader
        artistData={Object.values(artistData)[0][0]}
        artistId={id}
      />
      <RelatedSongs
        data={Object.values(artistData)[0][0]?.songs}
        isPlaying={isPlaying}
        activeSong={activeSong}
        artistId={id}
  />
    </div>
  );
};

export default ArtistDetails;
