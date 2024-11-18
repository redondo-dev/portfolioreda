import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['en', 'fr', 'ar', 'it', 'es'],
 
  
  defaultLocale: 'en'
});
 
export const config = {

  matcher: ['/', '/(fr|en|ar|it|es)/:path*']
};