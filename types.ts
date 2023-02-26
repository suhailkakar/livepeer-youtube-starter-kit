export interface MainVideo {
  id: number;
  name: string;
  image: string;
  channelName: string;
  channelImage: string;
  createdAt: string;
  views: number;
  playbackId: string;
}

export interface ShortsVideo {
  id: number;
  name: string;
  channelName: string;
  playbackId: string;
}
