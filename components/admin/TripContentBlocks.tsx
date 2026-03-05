"use client";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
import embed from "@editorjs/embed";
import { useEffect, useRef } from "react";

export default function TripContentBlocks() {
  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Content Blocks</h2>
      <p className="text-sm text-gray-500 mb-6">
        Add content blocks to your trip page. You can add text, images, videos,
        and more.
      </p>
    </div>
  );
}
