import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store/store';
import { PhotoModalContextProvider } from './utils/usePhotoModalContext';
import { Theme } from '@radix-ui/themes';
import PortalComponent from './layouts/PortalComponent/PortalComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Theme accentColor="yellow" grayColor="olive">
      <BrowserRouter basename="test-task-metakam">
        <Provider store={store}>
          <PhotoModalContextProvider>
            <App />
            <PortalComponent />
          </PhotoModalContextProvider>
        </Provider>
      </BrowserRouter>
    </Theme>
  </React.StrictMode>
);
