"use client";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
// @ts-expect-error no types available for this package
import Embed from "@editorjs/embed";
import { useEffect, useRef } from "react";

export default function TripContentBlocks() {
  const editorContainerRef = useRef<HTMLDivElement | null>(null); // voor de div
  const editorRef = useRef<EditorJS | null>(null); // voor Editor.js instantie

  useEffect(() => {
    editorRef.current = new EditorJS({
      holder: editorContainerRef.current!, // koppel aan de div
      tools: {
        header: Header,
        list: List,
        image: Image,
        embed: Embed,
      },
    });
    return () => {
      editorRef.current?.destroy();
      editorRef.current = null;
    };
  }, []);

  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">Trip Content</h2>
      <div ref={editorContainerRef} className="bg-muted" />
    </div>
  );
}
