declare module "@/data/memories-images.json" {
  const data: {
    hero: string;
    heroSource: string;
    heroFrom: string;
    heroWidth: number;
    heroHeight: number;
    heroPixels?: number;
    images: string[];
    syncedAt: string;
    sourceDirs: string[];
    countByFolder: Record<string, number>;
    totalImages: number;
  };
  export default data;
}
