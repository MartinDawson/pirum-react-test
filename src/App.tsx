import React from 'react';
import './App.css';
import MusicListContainer from './MusicList/MusicListContainer';

export interface IAppProps {
  getMusicData: () => void;
}

const App: React.FC<IAppProps> = (props) => {
  React.useEffect(() => {
    props.getMusicData()
  }, [props]);

  return (
    <div className="App">
      <MusicListContainer />
    </div>
  );
}

export default App;