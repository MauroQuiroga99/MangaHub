export type AnimeManga = {
  id: number;
  title: string[];
  averageRating?: number;
  status: "airing" | "completed" | "upcoming";
  popularityRank?: number;
  coverImage: string;
  synopsis: string;
};
export const animeMangaDatabase: AnimeManga[] = [
  {
    id: 1,
    title: ["My Hero Academia", "Boku no Hero Academia"],
    averageRating: 8.5,
    status: "airing",
    popularityRank: 1,
    coverImage: "/img/portada_bocchi-the-rock-26.jpg",
    synopsis:
      "An actionLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.-packed story about young heroes.",
  },
  {
    id: 2,
    title: ["Attack on Titan", "Shingeki no Kyojin"],
    averageRating: 9.2,
    status: "completed",
    popularityRank: 2,
    coverImage: "img/portada_bocchi-the-rock-26.jpg",
    synopsis:
      "Humans vLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.s Titans in an epic battle for survival.",
  },
  {
    id: 3,
    title: ["Naruto", "ナルト"],
    averageRating: 8.3,
    status: "completed",
    popularityRank: 3,
    coverImage: "/img/naruto.jpg",
    synopsis:
      "Naruto Uzumaki, a young ninja, seeks recognition and dreams of becoming the Hokage, the strongLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.est ninja in his village.",
  },
  {
    id: 4,
    title: ["Demon Slayer", "Kimetsu no Yaiba"],
    averageRating: 8.9,
    status: "airing",
    popularityRank: 4,
    coverImage: "/img/demon-slayer.jpg",
    synopsis:
      "Tanjiro Kamado becomes a demon slayer after his family is slaugLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.htered and his sister is turned into a demon.",
  },
  {
    id: 5,
    title: ["One Piece", "ワンピース"],
    averageRating: 9.0,
    status: "airing",
    popularityRank: 5,
    coverImage: "/img/one-piece.jpg",
    synopsis:
      "Monkey D. Luffy and his crew search for the One Piece, a legendary treasure that will make him the PiraLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.te King.",
  },
  {
    id: 6,
    title: ["Jujutsu Kaisen", "呪術廻戦"],
    averageRating: 8.7,
    status: "airing",
    popularityRank: 6,
    coverImage: "/img/jujutsu-kaisen.jpg",
    synopsis:
      "Yuji Itadori joins a secret organization of Jujutsu SorcereLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.rs to fight powerful curses and spirits.",
  },
  {
    id: 7,
    title: ["Fullmetal Alchemist: Brotherhood", "鋼の錬金術師"],
    averageRating: 9.1,
    status: "completed",
    popularityRank: 7,
    coverImage: "/img/fullmetal-alchemist-brotherhood.jpg",
    synopsis:
      "Two brothers search for the Philosopher’s Stone after a failed alchemy experiment leaves them in damaLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.ged physical forms.",
  },
  {
    id: 8,
    title: ["Tokyo Ghoul", "東京喰種"],
    averageRating: 7.8,
    status: "completed",
    popularityRank: 8,
    coverImage: "/img/tokyo-ghoul.jpg",
    synopsis:
      "Ken Kaneki, a young man who becomes part-ghoul, must naLight Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.vigate the violent conflict between ghouls and humans.",
  },
  {
    id: 9,
    title: ["Sword Art Online", "ソードアート・オンライン"],
    averageRating: 7.5,
    status: "airing",
    popularityRank: 9,
    coverImage: "/img/sword-art-online.jpg",
    synopsis:
      "Players of a virtual reality MMORPG must fight their way out of the game or face death in the real world.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.",
  },
  {
    id: 10,
    title: ["Death Note", "デスノート"],
    averageRating: 8.9,
    status: "completed",
    popularityRank: 10,
    coverImage: "/img/death-note.jpg",
    synopsis:
      "Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.Light Yagami, a high school student, discovers a notebook that allows him to kill anyone whose name he writes in it.",
  },
];
