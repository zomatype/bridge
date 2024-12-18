import SearchBox from "../components/SearchBox";
import Button from "../components/Button";
import FilterButton from "../components/FilterButton"; // FilterButtonコンポーネントをインポート
import ResetButton from "../components/ResetButton"; // ResetButtonコンポーネントをインポート

import { useState } from "react";
import InfoWindow from "../components/InfoWindow";

export default function About() {
  const [searchResult, setSearchResult] = useState('');
  const handleSearch = (query) => {
    console.log('Search query:', query);
    setSearchResult(query); // 実際にはAPI呼び出しなどに利用
  };

  const handleButtonClick = () => {
    console.log('Buttonがクリックされました');
    // ボタンがクリックされたときの処理をここに追加
  };

  const handleFilterResults = (results) => {
    console.log(results);
  };

  // components 内のコンポーネントを表示する
  return (
    <div>
      <h1>コンポーネント一覧</h1>
      <div style={{ padding: '16px' }}>
        <h1>Search Box Example</h1>
        <SearchBox onSearch={handleSearch} />
        {searchResult && (
          <p>
            Search Result: <strong>{searchResult}</strong>
          </p>
        )}
        <div style={{ padding: '16px' }}>
          {/* Button コンポーネントを追加 */}
          <h1>Button Example</h1>
          <Button onClick={handleButtonClick} text="ボタン"></Button>
        </div>
        <div style={{ padding: '16px' }}>
          {/* FilterButton コンポーネントを追加 */}
          <h1>Filter Button Example</h1>
          <FilterButton
            column="Rank"
            value="Ⅱ"
            onResults={handleFilterResults}
            text="Ⅱ"
          />
        </div>
        <div style={{ padding: '16px' }}>
          {/* ResetButton コンポーネントを追加 */}
          <h1>Reset Button Example</h1>
          <ResetButton />
        </div>
        <div style={{ padding: '16px' }}>
          <h1>InfoWindow Example</h1>
          <InfoWindow  data={{_id: "123456-78-90", name: "橋梁名", Id: "37,135"}} />
        </div>
      </div>
    </div>
  );
}
