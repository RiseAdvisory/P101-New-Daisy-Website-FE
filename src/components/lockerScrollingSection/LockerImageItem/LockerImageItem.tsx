import React from 'react';
import styles from './LockerImageItem.module.css';
import Image from 'next/image';
import leaf from '../../../assets/images/LeafBg.png';
import stars from '../../../assets/images/Stars.png';
import phone from '../../../assets/images/PHONE.png';

const LockerImageItem = ({ isActive, imageUrl }: any) => {
  return (
    // <div className="w-[600px] h-[500px] bg-primaryBtn rounded-[16px] relative ml-auto">
      <Image
        src={imageUrl}
        className={styles.image + (isActive ? ' ' + styles.active : '')}
        alt="daw"
        width={100}
        height={100}
      />
    // </div>
    // <div className="w-[600px] h-[500px] bg-primaryBtn rounded-[16px] relative ml-auto">
    //         <Image
    //           className="absolute bottom-0 left-0"
    //           src={leaf}
    //           alt="leaf"
    //           width={300}
    //         />
    //         <Image
    //           className="absolute top-[60px] right-[50px]"
    //           src={stars}
    //           alt="start"
    //           width={100}
    //         />
    //         <Image
    //           className="absolute bottom-0 right-[50%] translate-x-1/2"
    //           src={phone}
    //           alt="start"
    //           width={300}
    //         />
    //       </div>
  );
};

export default LockerImageItem;
