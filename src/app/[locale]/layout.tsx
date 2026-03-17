import { Header } from '@/components/header/Header';
import { Footer } from '@/components/footer/Footer';
import { MyUserTypeProvider } from '../MyContext';
import ClientSideEffect from '@/helpers/ClientSideEffect';
import { LocaleHtmlUpdater } from '@/components/locale/LocaleHtmlUpdater';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'ar' }];
}

export default function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  return (
    <MyUserTypeProvider>
      <LocaleHtmlUpdater locale={locale} />
      <ClientSideEffect />
      <Header />
      <div className="pt-[100px]">{children}</div>
      <Footer />
    </MyUserTypeProvider>
  );
}
