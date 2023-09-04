import Steam from '@/components/icons/Steam';
import PS from '@/components/icons/PS';
import Xbox from '@/components/icons/Xbox';
import EpicGames from '@/components/icons/EpicGames';
import Gog from '@/components/icons/Gog';

const setPlatforms = (platform: string) => {
  switch (platform) {
    case 'steam':
      return <Steam />;
    case 'playstation-store':
      return <PS />;
    case 'xbox-store':
      return <Xbox />;
    case 'epic-games':
      return <EpicGames />;
    case 'gog':
      return <Gog />;
    default:
      return null;
  }
};

export default setPlatforms;
