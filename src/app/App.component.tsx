import React, { useState } from 'react';
import * as S from './App.styles';

const App: React.FC = () => {
  const [descriptionState] = useState<string>('React app dev architecture.');

  return (
    <>
      <S.GlobalStyle />
      {descriptionState}
    </>
  );
};

export default App;
