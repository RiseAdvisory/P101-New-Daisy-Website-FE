import { redirect } from 'next/navigation';

export default function FaqPage({ params }: { params: { locale: string } }) {
  redirect(`/${params.locale}/faq/business`);
}
