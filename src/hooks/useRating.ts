import { useGetRatingQuery } from '@/store/services/games';

const useRating = (game_id: number | undefined) => {
  const { data, refetch, isLoading, isSuccess } = useGetRatingQuery(game_id, {
    skip: !game_id,
    refetchOnMountOrArgChange: true,
  });

  return {
    rating: data,
    isSuccess,
    isLoading,
    refetch,
  };
};

export default useRating;
