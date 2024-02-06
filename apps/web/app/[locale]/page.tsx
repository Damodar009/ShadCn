import { useTranslations } from 'next-intl';
import { ImageComponent } from '../components/images-container';
export default function Index() {
  const t = useTranslations('Index');
 
  return (
    <div className="bg-background">
      {/* <HeaderNavbar />
      <div className="border-t">
        <div className="grid lg:grid-cols-5">
          <Sidebar /> */}
          <div className=" p-11 h-750 w-300">
            <ImageComponent imageUrl={"https://www.mrporter.com/variants/images/1647597305742625/in/w1200_q60.jpg"}/>
          </div>
        </div>
    //   </div>
    // </div>
  );
}
