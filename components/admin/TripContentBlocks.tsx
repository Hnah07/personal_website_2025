"use client";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";
import Image from "@editorjs/image";
// @ts-expect-error no types available for this package
import Embed from "@editorjs/embed";
import { useEffect, useRef } from "react";
import { createClient } from "@/utils/supabase/client";
const supabase = createClient();

export default function TripContentBlocks() {
  const editorContainerRef = useRef<HTMLDivElement | null>(null); // voor de div
  const editorRef = useRef<EditorJS | null>(null); // voor Editor.js instantie

  useEffect(() => {
    const editor = new EditorJS({
      holder: editorContainerRef.current!,
      tools: {
        header: Header,
        list: List,
        image: {
          class: Image,
          config: {
            uploader: {
              uploadByFile: async (file: File) => {
                const { data, error } = await supabase.storage
                  .from("trip-images")
                  .upload(`public/${file.name}`, file);

                if (error) {
                  console.error("Error uploading image:", error);
                  return { success: 0 };
                }

                const { data: urlData } = supabase.storage
                  .from("trip-images")
                  .getPublicUrl(data.path);

                return {
                  success: 1,
                  file: {
                    url: urlData.publicUrl,
                  },
                };
              },
            },
          },
        },
        embed: Embed,
      },
    });

    editorRef.current = editor;

    return () => {
      editor.isReady.then(() => {
        editor.destroy();
        editorRef.current = null;
      });
    };
  }, []);

  return (
    <div className="w-full px-3 mb-6 md:mb-0">
      <h2 className="text-2xl font-bold mb-4">Trip Content</h2>
      <div ref={editorContainerRef} className="bg-muted min-h-[300px]"></div>
    </div>
  );
}
