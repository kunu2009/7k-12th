export type Video = {
  id: string;
  title: string;
  description: string;
  fileName: string;
  chapterPart: string;
  duration?: string;
  thumbnailUrl?: string;
  videoUrl: string;
  downloadUrl?: string;
  fileSize?: string;
};

export const videos: Record<string, Video[]> = {
  'the-world-since-1991': [
      {
        id: 'video-1-1',
        title: 'World Since 1991 - Part 01',
        description: 'Introduction to the post-Cold War world and major transformations since 1991',
        fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv",
        chapterPart: 'PART 01',
        videoUrl: "/pol videos/12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 01｜ HSC ARTS STREAM [TFFi8aaIfdA].mkv",
      },
      {
        id: 'video-1-2',
        title: 'World Since 1991 - Part 02: Towards Unipolarity',
        description: 'Understanding the shift towards a unipolar world dominated by the United States',
        fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv",
        chapterPart: 'PART 02',
        videoUrl: "/pol videos/12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 02｜ Towards｜ Unipolarity｜ HSC ARTS STREAM [io6JND19kbY].mkv",
      },
      {
        id: 'video-1-3',
        title: 'World Since 1991 - Part 04',
        description: 'Key developments and challenges in the post-Cold War international system',
        fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv",
        chapterPart: 'PART 04',
        videoUrl: "/pol videos/12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 04｜｜ HSC ARTS STREAM｜ HSC Exam [DyQ6eoHVXow].mkv",
      },
      {
        id: 'video-1-4',
        title: 'World Since 1991 - Part 05',
        description: 'Continuation of post-Cold War developments and their global impact',
        fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv",
        chapterPart: 'PART 05',
        videoUrl: "/pol videos/12th Pol. Science｜ Chp：-01 'World Since 1991｜ PART 05｜｜ HSC ARTS STREAM｜ HSC Exam [1_-yLD7DNoI].mkv",
      },
      {
        id: 'video-1-5',
        title: 'World Since 1991 - Full Exercise Solution (Part 06)',
        description: 'Complete exercise solutions and exam preparation for Chapter 1',
        fileName: "12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv",
        chapterPart: 'PART 06',
        videoUrl: "/pol videos/12th Pol. Science｜ Chp：-01 'World Since 1991｜ Full Exercise Solution｜PART 06｜HSC ARTS STREAM [y59tcIx_4DA].mkv",
      }
    ],
  'globalisation': [
      {
        id: 'video-2-1',
        title: 'Globalisation - Part 01',
        description: 'Introduction to globalization concepts and its impact on the modern world',
        fileName: "12th Pol. Science｜ Chp：-02 'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv",
        chapterPart: 'PART 01',
        videoUrl: '/pol videos/12th Pol. Science｜ Chp：-02 \'Globalisation｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [qGth0gOgIIY].mkv',
      },
      {
        id: 'video-2-2',
        title: 'Globalization - Part 06',
        description: 'Advanced concepts in globalization and exam preparation',
        fileName: "12th Pol.Science｜ Chp：-02 'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv",
        chapterPart: 'PART 06',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-02 \'Globalization｜ PART 06｜ HSC ARTS STREAM｜ HSC Exam [iyJ1dbJ9doA].mkv',
      }
    ],
  'humanitarian-issues': [
      {
        id: 'video-3-1',
        title: 'Humanitarian Issues - Part 01',
        description: 'Introduction to humanitarian issues and international challenges',
        fileName: "12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv",
        chapterPart: 'PART 01',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-03｜ Humanitarian Issues｜ PART 01｜ HSC ARTS STREAM｜ HSC Exam [jcgRuy16KqM].mkv',
      },
      {
        id: 'video-3-2',
        title: 'Humanitarian Issues - Part 02',
        description: 'Exploring humanitarian crises and global responses',
        fileName: "12th Pol.Science｜ Chp：-03 'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv",
        chapterPart: 'PART 02',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-03 \'Humanitarian Issues ｜ PART 02｜ HSC ARTS STREAM ｜ HSC Exam [LaWVaR1PuK0].mkv',
      },
      {
        id: 'video-3-3',
        title: 'Humanitarian Issues - Part 03',
        description: 'Continuation of humanitarian issues study',
        fileName: "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv",
        chapterPart: 'PART 03',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-03 \' Humanitarian Issues｜ PART 03｜ HSC ARTS STREAM｜ HSC Exam [69afqeeo7hs].mkv',
      },
      {
        id: 'video-3-4',
        title: 'Humanitarian Issues - Part 04',
        description: 'Advanced topics in humanitarian law and intervention',
        fileName: "12th Pol.Science｜ Chp：-03 'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv",
        chapterPart: 'PART 04',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-03 \'Humanitarian Issues｜ PART 04｜ HSC ARTS STREAM｜ HSC Exam [EW_skgOb6d8].mkv',
      },
      {
        id: 'video-3-5',
        title: 'Humanitarian Issues - Part 05',
        description: 'Case studies and examples in humanitarian interventions',
        fileName: "12th Pol.Science｜ Chp：-03 ' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv",
        chapterPart: 'PART 05',
        videoUrl: '/pol videos/12th Pol.Science｜ Chp：-03 \' Humanitarian Issues｜ PART 05｜ HSC ARTS STREAM｜ HSC Exam [EVSiUlB3oPs].mkv',
      },
      {
        id: 'video-3-6',
        title: 'Humanitarian Issues - Part 06',
        description: 'Final part covering humanitarian issues and exam preparation',
        fileName: "12th Pol.Science ｜ Chp：-03 ' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv",
        chapterPart: 'PART 06',
        videoUrl: '/pol videos/12th Pol.Science ｜ Chp：-03 \' Humanitarian Issues｜ PART 06｜HSC ARTS STREAM｜ HSC Exam [a0gPdnJ-_ac].mkv',
      }
    ],
  'india-challenges': [],
};
