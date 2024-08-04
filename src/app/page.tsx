"use client";

import { useState } from "react";
import AdBanner from "@/components/ad-banner";
import EditBannerBs from "@/components/edit-banner-bs";
import { banners as initialBanners } from "./adbanners";

export default function Home() {
  const [banners, setBanners] = useState<any[]>(initialBanners);
  const [editingBanner, setEditingBanner] = useState<any | null>(null);
  const [isEdit, setIsEdit] = useState<boolean>(true);

  const handleEdit = (index: number) => {
    setEditingBanner({ ...banners[index], index });
    setIsEdit(false);
  };

  const handleSave = (updatedBanner: any) => {
    const updatedBanners = banners.map((banner, index) =>
      index === updatedBanner.index ? updatedBanner : banner
    );
    setBanners(updatedBanners);
    setEditingBanner(null);
    setIsEdit(true);
  };

  return (
    <main className="flex min-h-screen flex-col text-black bg-black items-center justify-between p-24">
      <span className="text-3xl text-white">Banners</span>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-4  ">
        {banners.map((banner, index) => (
          <AdBanner
            key={index}
            id={banner.id}
            title={banner.title}
            description={banner.description}
            cta={banner.cta}
            image={banner.image}
            backgroundImage={banner.backgroundImage}
            style={banner.style}
            onEdit={() => handleEdit(index)}
            isEdit={isEdit}
          />
        ))}
      </div>
      {editingBanner && (
        <EditBannerBs
          banner={editingBanner}
          onClose={() => {
            setEditingBanner(null);
            setIsEdit(true);
          }}
          onSave={handleSave}
          isEdit={isEdit}
          handleSetIsEdit={() => setIsEdit(false)}
        />
      )}
    </main>
  );
}
