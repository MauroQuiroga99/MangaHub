export type AnimeManga = {
  id: string;
  type: string;
  attributes: {
    titles: {
      en: string;
      en_jp: string;
      en_us: string;
      ja_jp: string;
    };
    status: string;
    coverImage: {
      original: string;
      large: string;
      medium: string;
      small: string;
    };
    posterImage: {
      original: string;
      large: string;
      medium: string;
      small: string;
    };
    averageRating: string;
    popularityRank: number;
    synopsis: string;
    episodeCount: number;
    youtubeVideoId: string;
    startDate: string;
    endDate: string;
  };
  relationships: {
    categories: {
      links: {
        related: string;
        self: string;
      };
    };
  };
};
