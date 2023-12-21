import {
  Shuffle,
  SkipBack,
  Play,
  SkipForward,
  Repeat,
  Mic2,
  LayoutList,
  Laptop2,
  Volume1,
  Maximize2,
} from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-800 border-t border-zinc-700 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Image
          src="/album.jpg"
          width={56}
          height={56}
          alt="Capa do álbum da banda Foo Fighters"
        />
        <div className="flex flex-col">
          <strong className="font-normal">Rope</strong>
          <span className="text-xs text-zinc-400">Foo Fighters</span>
        </div>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="flex items-center gap-6">
          <Shuffle size={20} className="text-zinc-400" />
          <SkipBack size={20} className="text-zinc-400" />
          <button className="w-10 h-10 flex items-center justify-center pl-1 rounded-full bg-white text-black">
            <Play />
          </button>

          <SkipForward size={20} className="text-zinc-400" />
          <Repeat size={20} className="text-zinc-400" />
        </div>
        <div className="flex items-center gap-2">
          <span className="text-zinc-400 text-xs">0:30</span>
          <div className="h-1 w-96 rounded-full bg-zinc-600">
            <div className="h-1 w-16 rounded-full bg-zinc-200"></div>
          </div>
          <span className="text-zinc-400 text-xs">2:10</span>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <Mic2 size={20} />
        <LayoutList size={20} />
        <Laptop2 size={20} />
        <div className="flex items-center gap-2">
          <Volume1 size={20} />
          <div className="h-1 w-16 rounded-full bg-zinc-600">
            <div className="h-1 w-6 rounded-full bg-zinc-200"></div>
          </div>
        </div>
        <Maximize2 size={20} />
      </div>
    </footer>
  );
}
