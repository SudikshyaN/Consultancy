import { RenderMode } from '@angular/ssr';
export const serverRoutes = [
    {
        path: '',
        renderMode: RenderMode.Prerender
    },
    {
        path: 'destinations/:country',
        renderMode: RenderMode.Server
    },
    {
        path: '**',
        renderMode: RenderMode.Server
    }
];
