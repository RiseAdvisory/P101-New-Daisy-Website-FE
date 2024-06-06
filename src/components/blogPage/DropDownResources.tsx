import Image from 'next/image';
import {
  DropdownMenu,
  DropdownMenuContent,
} from '@/components/ui/dropdown-menu';
import PrimaryPhoto from '../../assets/images/StartPhoneResources.png';
import leaf from '../../assets/images/LeafBgPrimary.png';
import Separator from '../separator/Separator';
import { resourcesLinkList } from '@/lib/constants/resourcesLink';
import Link from 'next/link';
import { useState } from 'react';
import HoverImage1 from '../../assets/images/BlogPostResources.png';
import HoverImage2 from '../../assets/images/PhoneTutorials.png';
import HoverImage3 from '../../assets/images/TestimonialResources.png';
import HoverImage4 from '../../assets/images/StartPhoneResources.png';
import { imagePositions, leafPositions } from '@/lib/constants/resourcesList';
interface IPropsResources {
  openBlog: boolean;
  setOpenBlog: any;
}
export const DropdownResources = ({
  openBlog,
  setOpenBlog,
}: IPropsResources) => {
  const [currentImage, setCurrentImage] = useState(PrimaryPhoto);
  const [imagePosition, setImagePosition] = useState({
    top: 'auto',
    bottom: '0px',
    left: 'auto',
    right: '0px',
    rotate: '0deg',
  });
  const [leafPosition, setLeafPosition] = useState({
    top: '0px',
    bottom: 'auto',
    left: '0px',
    right: 'auto',
    rotate: '0deg',
  });

  const hoverImages = [HoverImage1, HoverImage2, HoverImage3, HoverImage4];

  const handleMouseEnter = (index: any) => {
    setCurrentImage(hoverImages[index]);
    setImagePosition(imagePositions[index]);
    setLeafPosition(leafPositions[index]);
  };

  const handleMouseLeave = () => {
    setCurrentImage(PrimaryPhoto);
    setImagePosition({
      top: 'auto',
      bottom: '0px',
      left: 'auto',
      right: '0px',
      rotate: '0deg',
    });
    setLeafPosition({
      top: '0px',
      bottom: 'auto',
      left: '0px',
      right: 'auto',
      rotate: '0deg',
    });
  };

  return (
    <DropdownMenu open={openBlog} onOpenChange={() => setOpenBlog(!openBlog)}>
      <DropdownMenuContent className="w-[100vw] top-[110px] absolute hidden md:block py-10 px-16">
        <div className="flex">
          <div className="w-[420px] h-[290px] border relative bg-[#E8E9E9] rounded-lg mr-6 overflow-hidden">
            <Image
              src={currentImage}
              alt="background page"
              width={250}
              height={170}
              className="absolute z-10"
              style={{
                top: imagePosition.top,
                bottom: imagePosition.bottom,
                left: imagePosition.left,
                right: imagePosition.right,
                transform: `rotate(${imagePosition.rotate})`,
              }}
            />
            <Image
              src={leaf}
              alt="background leaf"
              width={200}
              height={200}
              className="absolute"
              style={{
                top: leafPosition.top,
                bottom: leafPosition.bottom,
                left: leafPosition.left,
                right: leafPosition.right,
                transform: `rotate(${leafPosition.rotate})`,
              }}
            />
          </div>
          <div className="w-[70%]">
            <h2 className="font-semibold text-2xl text-primary">
              Stay Updated With The Daisy News
            </h2>
            <Separator className="my-6 bg-[#E8E9E9]" />
            <ul className="grid grid-cols-2 gap-x-[100px] gap-y-4 w-[70%]">
              {resourcesLinkList.map((item, index) => (
                <li
                  key={index}
                  className="pl-4 py-[18px] hover:bg-[#E8E9E9] rounded-xl hover:outline-gray-300 hover:outline"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link href={item.nav} onClick={() => setOpenBlog(!openBlog)}>
                    <h3 className="text-base font-montserrat font-semibold">
                      {item.title}
                    </h3>
                    <p className="text-base font-montserrat text-primaryBtn">
                      {item.description}
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
