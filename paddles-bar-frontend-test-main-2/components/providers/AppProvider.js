import { createContext, useContext } from 'react';
const AppContext = createContext({});

AppProvider.propTypes = {
  children: PropTypes.node,
  content: PropTypes.object,
};

export function AppProvider({ children, content }) {
  console.log('content', content);

  return (
    <AppContext.Provider
      value={{
        content,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default function useAppState() {
  return useContext(AppContext);
}
