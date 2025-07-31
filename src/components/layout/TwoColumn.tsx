import React from "react";

type TwoColumnLayoutProps = {
  sideBar: React.ReactNode;
  content: React.ReactNode;
};

export function TwoColumnLayout({ sideBar, content }: TwoColumnLayoutProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 min-h-screen">
      <aside className="md:col-span-1 p-4">{sideBar}</aside>
      <main className="md:col-span-3 p-4">{content}</main>
    </div>
  );
}
