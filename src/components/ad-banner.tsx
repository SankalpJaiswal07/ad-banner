"use client";
import Image from "next/image";
import { FaEdit, FaDownload } from "react-icons/fa";
import { useMemo, useRef } from "react";
import html2canvas from "html2canvas";

interface StyleProps {
  text?: string;
  bg?: string;
}

interface AdBannerProps {
  id: number;
  title: string;
  description: string;
  cta: string;
  image: string;
  backgroundImage: string;
  style?: StyleProps;
  onEdit?: () => void;
  showEditButton?: boolean;
  isEdit?: boolean;
}

const AdBanner: React.FC<AdBannerProps> = ({
  id,
  title,
  description,
  cta,
  image,
  backgroundImage,
  style,
  onEdit,
  showEditButton = true,
  isEdit = true,
}) => {
  const isEven = id % 2 === 0;
  const bannerRef = useRef<HTMLDivElement>(null);
  const editButtonRef = useRef<HTMLButtonElement>(null);
  const downloadButtonRef = useRef<HTMLButtonElement>(null);

  const titleFontSize = useMemo(() => {
    if (title.length > 45) return "text-sm";
    if (title.length > 40) return "text-md";
    if (title.length > 35) return "text-xl";
    if (title.length > 30) return "text-2xl";
    return "text-3xl";
  }, [title.length]);

  const descriptionFontSize = useMemo(() => {
    if (description.length > 60) return "text-base";
    if (description.length > 30) return "text-lg";
    return "text-xl";
  }, [description.length]);

  const ctaFontSize = useMemo(() => {
    if (cta.length > 21) return "text-xs";
    if (cta.length > 14) return "text-sm";
    if (cta.length > 7) return "text-base";
    return "text-lg";
  }, [cta.length]);

  const handleDownload = async () => {
    if (bannerRef.current) {
      if (editButtonRef.current) editButtonRef.current.style.display = "none";
      if (downloadButtonRef.current)
        downloadButtonRef.current.style.display = "none";

      const canvas = await html2canvas(bannerRef.current, {
        width: 648,
        height: 480,
        scale: 1,
      });

      const image = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = image;
      link.download = "banner.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      if (editButtonRef.current) editButtonRef.current.style.display = "block";
      if (downloadButtonRef.current)
        downloadButtonRef.current.style.display = "block";
    }
  };
  return (
    <div
      className={`relative px-60 py-28 rounded-lg overflow-hidden flex`}
      ref={bannerRef}
    >
      {showEditButton && (
        <button
          onClick={onEdit}
          className="absolute top-2 right-2 text-xl z-20 text-white"
          ref={editButtonRef}
        >
          <FaEdit />
        </button>
      )}
      <button
        onClick={handleDownload}
        className="absolute top-2 right-12 text-xl z-20 text-white"
        ref={downloadButtonRef}
      >
        <FaDownload />
      </button>

      <div className="absolute inset-0 z-10 w-full">
        <Image
          src={backgroundImage}
          alt={title}
          layout="fill"
          objectFit="contain"
        />
      </div>
      {!isEven ? (
        <div className="absolute inset-0 left-1 w-3/4 h-full overflow-hidden">
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
        </div>
      ) : (
        <div className="absolute inset-0 left-48 w-3/4 h-full overflow-hidden">
          <Image src={image} alt={title} layout="fill" objectFit="contain" />
        </div>
      )}

      <div
        className={`relative z-50 w-fit mt-12 flex flex-col items-center justify-center px-5 ${
          style?.text
        } ${
          isEven
            ? "order-2 ml-auto flex-col right-[190px]"
            : `order-1 mr-auto flex flex-col ${
                isEdit ? "left-[160px]" : "left-[55px] w-3/4"
              }`
        }`}
      >
        <h1
          className={`${titleFontSize} font-bold mb-8 text-justify overflow-auto`}
          style={{ minHeight: "1.5em" }} // Add minHeight to ensure the element doesn't get cut off
        >
          {title}
        </h1>
        <p className={`${descriptionFontSize} mb-2 font-normal text-xs`}>
          {description}
        </p>
        <button
          className={`${style?.bg} border py-2 px-4 rounded ${ctaFontSize}`}
          disabled={true}
        >
          {cta}
        </button>
      </div>
    </div>
  );
};

export default AdBanner;
