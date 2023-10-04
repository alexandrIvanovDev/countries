import { SearchBlock } from '../components/search-block/SearchBlock.tsx';
import clContainer from '../components/header/Container.module.scss';

export const MainPage = () => {
  return (
    <div>
      <div className={clContainer.container}>
        <SearchBlock />
        <div>Countries</div>
      </div>
    </div>
  );
};
