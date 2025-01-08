import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ThemeProvider } from '@mui/material/styles'
import theme from './themeConfig.ts';

createRoot(document.getElementById('root')!).render(
<ThemeProvider theme={theme}>
    <App/>
</ThemeProvider>
)
