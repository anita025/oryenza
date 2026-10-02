import type { Metadata } from 'next';
import { Header, Footer, Effects } from './ui';
import './globals.css';
export const metadata: Metadata = {title:{default:'Oryenza Talent Services | Win With the Right Hire',template:'%s | Oryenza Talent Services'},description:'IT and Non-IT recruitment, executive search, and talent solutions across India and global markets. Build winning teams with Oryenza Talent Services.',icons:{icon:'/images/mark.png'}};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Header/><main>{children}</main><Footer/><Effects/></body></html>}
