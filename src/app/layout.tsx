import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'İYTE Yazılım Topluluğu',
  description:
    'İYTE Yazılım Topluluğu, yazılım konularında bir araya gelen bir okul topluluğudur. İYTE Yazılım Kulübü olarak, öğrenciler arası iletişimi artırmayı, projeler geliştirmeyi ve yazılım konularında birbirimizden öğrenmeyi amaçlıyoruz.',
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="../assets/images/a.png" />
        <meta
          name="google-site-verification"
          content="KuBGjSO_RU-NqkzTVBRPsasuRdG5J30kkffXQdosHSc"
        />
        <meta charSet="utf-8" />
        <link rel="icon" href="@/favicon.ico" sizes="any" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="İYTE Yazılım Topluluğu, yazılım konularında bir araya gelen bir okul topluluğudur. İYTE Yazılım Kulübü olarak, öğrenciler arası iletişimi artırmayı, projeler geliştirmeyi ve yazılım konularında birbirimizden öğrenmeyi amaçlıyoruz."
        />
        <meta
          name="keywords"
          content="iyte, Yazılım Topluluğu, İYTE Yazılım Kulübü, İYTE Yazılım, Okul Topluluğu"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
