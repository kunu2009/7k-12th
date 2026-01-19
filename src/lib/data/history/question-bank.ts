// Maharashtra HSC Board Class 12 History Question Bank
// All questions based on Maharashtra State Board Textbook

export interface HistoryQuestion {
  id: string;
  chapterId: string;
  question: string;
  type: '1-mark' | '2-marks' | '4-marks' | '6-marks';
  answer: string;
  points: string[];
  examTip?: string;
}

export const historyQuestionBank: HistoryQuestion[] = [
  // Chapter 1: Renaissance
  {
    id: 'h1-1',
    chapterId: '1',
    question: 'What is meant by Renaissance?',
    type: '2-marks',
    answer: `Renaissance literally means "rebirth" or "revival". It refers to the great cultural and intellectual movement that began in Italy in the 14th century and spread across Europe. The Renaissance marked a revival of interest in classical Greek and Roman learning, art, and literature. It emphasized humanism, individualism, and rational thinking, moving away from medieval scholasticism and religious dogma. The Renaissance brought about developments in art, science, literature, architecture, and philosophy.`,
    points: [
      'Means "rebirth" or "revival" of classical learning',
      'Started in Italy in 14th century',
      'Revival of Greek and Roman knowledge',
      'Emphasized humanism and rational thinking',
      'Developments in art, science, literature'
    ],
    examTip: 'Define the term, mention time and place, and list key characteristics'
  },
  {
    id: 'h1-2',
    chapterId: '1',
    question: 'Explain the causes of Renaissance.',
    type: '4-marks',
    answer: `The Renaissance emerged due to several interconnected factors:

**1. Fall of Constantinople (1453):** When Constantinople fell to Ottoman Turks, Greek scholars fled to Italy carrying ancient manuscripts and classical knowledge, sparking intellectual curiosity.

**2. Crusades:** The Crusades exposed Europeans to advanced Eastern civilizations, bringing new ideas, goods, and knowledge back to Europe.

**3. Growth of Trade and Towns:** Rise of prosperous city-states like Florence, Venice, and Genoa created wealthy merchant class who became patrons of art and learning.

**4. Invention of Printing Press:** Johannes Gutenberg's printing press (1450) made books affordable and accessible, spreading knowledge rapidly.

**5. Patronage:** Wealthy families like the Medici in Florence patronized artists, scholars, and scientists, encouraging intellectual and artistic pursuits.

**6. Spirit of Inquiry:** There was a growing desire to question medieval traditions and explore the world through observation and reason rather than blind faith.

These factors combined to create an environment conducive to intellectual and artistic flourishing.`,
    points: [
      'Fall of Constantinople - Greek scholars brought classical texts',
      'Crusades - exposure to Eastern knowledge',
      'Growth of trade and wealthy merchant class',
      'Printing press - rapid spread of knowledge',
      'Patronage by wealthy families (Medici)',
      'Spirit of inquiry and rational thinking'
    ],
    examTip: 'Organize causes into political, economic, and intellectual categories'
  },
  {
    id: 'h1-3',
    chapterId: '1',
    question: 'Discuss the contribution of Renaissance to the development of science.',
    type: '6-marks',
    answer: `The Renaissance marked a turning point in scientific thinking, laying the foundation for modern science:

**Scientific Method:**
The Renaissance introduced empirical observation and experimentation rather than relying solely on ancient authorities. Scientists began to test hypotheses through direct observation.

**Key Contributions:**

**1. Astronomy:**
- **Copernicus** proposed the heliocentric theory (1543), stating that Earth revolves around the Sun, challenging the geocentric Ptolemaic system
- **Galileo Galilei** used telescope to observe celestial bodies, supporting Copernican theory
- **Johannes Kepler** formulated laws of planetary motion

**2. Physics:**
- **Galileo** studied motion, gravity, and developed laws of falling bodies
- Laid groundwork for Newton's laws of motion

**3. Anatomy and Medicine:**
- **Andreas Vesalius** conducted human dissections and wrote "On the Fabric of the Human Body" (1543), correcting ancient errors
- **William Harvey** discovered blood circulation in the human body

**4. Mathematics:**
- Development of algebra and improvements in geometry
- Application of mathematics to solve practical problems

**5. Geography and Exploration:**
- Improved maps and navigational instruments
- Age of Exploration led to geographical discoveries

**Impact:**

**1. Rationalism:** Emphasis on reason and observation over superstition

**2. Experimental Approach:** Scientific experiments became the basis of knowledge

**3. Challenge to Authority:** Church's authority on scientific matters was questioned

**4. Practical Applications:** Scientific knowledge applied to improve navigation, medicine, and technology

**5. Foundation for Scientific Revolution:** Renaissance laid groundwork for the Scientific Revolution of 17th century

The Renaissance spirit of inquiry and human potential transformed science from speculative philosophy to evidence-based discipline.`,
    points: [
      'Introduction of empirical observation and experimentation',
      'Copernicus - heliocentric theory',
      'Galileo - telescope, laws of motion',
      'Vesalius - human anatomy through dissection',
      'Harvey - blood circulation',
      'Development of scientific method',
      'Challenge to Church authority on science',
      'Foundation for modern science'
    ],
    examTip: 'Mention specific scientists and their contributions. Link Renaissance to Scientific Revolution.'
  },

  // Chapter 3: India and European Colonialism
  {
    id: 'h3-1',
    chapterId: '3',
    question: 'State the objectives of East India Company.',
    type: '2-marks',
    answer: `The East India Company was established in 1600 with the primary objective of trading in spices, textiles, and other valuable goods from the East. The Company sought to establish trading posts in India to maximize profits through monopoly trade. Initially focused on commerce, the Company gradually became involved in politics and territorial expansion, eventually becoming the governing power in India.`,
    points: [
      'Established in 1600 for trade',
      'Trade in spices, textiles, and Eastern goods',
      'Establish trading posts in India',
      'Maximize profits through monopoly',
      'Later involved in politics and territorial control'
    ]
  },
  {
    id: 'h3-2',
    chapterId: '3',
    question: 'Explain the causes of the Battle of Plassey.',
    type: '4-marks',
    answer: `The Battle of Plassey (1757) was a decisive conflict between the East India Company and the Nawab of Bengal, Siraj-ud-Daulah:

**Causes:**

**1. Misuse of Trade Privileges:** The Company's servants misused the dastak (trade permit) to avoid paying duties, causing revenue loss to the Nawab.

**2. Fortification of Calcutta:** The Company fortified Calcutta without the Nawab's permission in preparation for war with France, which Siraj considered a threat to his sovereignty.

**3. Political Asylum:** The Company gave shelter to Nawab's political enemies like Krishna Das, angering Siraj.

**4. Company's Interference:** The Company interfered in the internal politics of Bengal, supporting rival factions.

**5. Conspiracy:** Robert Clive conspired with Mir Jafar (Nawab's commander), Rai Durlabh, and Jagat Seth (banker) to overthrow Siraj.

**6. Battle (23 June 1757):** Mir Jafar betrayed Siraj during the battle. With a small force of 3,000, Clive defeated Siraj's army of 50,000.

**Result:** British victory established Company's political supremacy in Bengal, marking the beginning of British rule in India.`,
    points: [
      'Misuse of dastak - trade privilege abuse',
      'Unauthorized fortification of Calcutta',
      'Giving asylum to Nawab\'s enemies',
      'Company\'s political interference',
      'Conspiracy with Mir Jafar',
      'Battle on 23 June 1757',
      'Beginning of British political control'
    ],
    examTip: 'Mention both political and economic causes. Include the conspiracy and result.'
  },
  {
    id: 'h3-3',
    chapterId: '3',
    question: 'Discuss the economic impact of British rule on India.',
    type: '6-marks',
    answer: `British colonial rule had a profound and largely negative impact on Indian economy:

**Destruction of Traditional Industries:**

**1. Deindustrialization:**
- Traditional handicrafts and textiles destroyed
- Indian handloom weavers couldn't compete with cheap machine-made British goods
- Artisans and craftsmen lost livelihood
- India transformed from manufacturer to supplier of raw materials

**2. Drain of Wealth:**
- Dadabhai Naoroji's "Drain Theory" showed systematic transfer of wealth from India to Britain
- Salaries of British officials, interest on loans, pensions - all paid by India
- No reinvestment of profits in India
- India's share in world trade declined from 23% to 3%

**Agricultural Changes:**

**1. Commercialization of Agriculture:**
- Emphasis on cash crops (cotton, indigo, jute) for British industries
- Food grain production neglected
- Peasants forced to grow commercial crops

**2. Land Revenue Systems:**
- Permanent Settlement, Ryotwari, Mahalwari systems imposed heavy taxation
- Led to peasant indebtedness and land alienation
- Frequent famines due to revenue pressure

**3. Decline of Village Industries:**
- Self-sufficient village economy destroyed
- Rural unemployment increased
- Mass poverty in villages

**Infrastructure Development (Limited and Biased):**

**1. Railways:**
- Built primarily for British economic and military interests
- Facilitated extraction of raw materials
- Helped drain wealth from interior to ports
- Some unintended benefits in trade and integration

**2. Irrigation:**
- Developed mainly in areas producing commercial crops
- Benefited British interests more than Indian farmers

**Industrial Policy:**

**1. Discriminatory Policies:**
- Indian industries faced higher tariffs
- British goods got preferential treatment
- Modern industries grew slowly
- Capital flight to Britain

**2. Limited Industrialization:**
- Few cotton mills and jute mills established
- Plantation industries (tea, coffee) controlled by British
- Modern industries concentrated in few cities

**Social and Economic Consequences:**

**1. Poverty:** Per capita income stagnated or declined

**2. Famines:** Numerous famines killed millions (Bengal 1943)

**3. Unemployment:** Loss of traditional occupations

**4. Economic Backwardness:** India became one of the poorest countries

**Long-term Impact:**
- Colonial exploitation retarded economic growth
- Created structural problems that persisted after independence
- Poverty, illiteracy, and economic backwardness were colonial legacy

British rule economically exploited India for nearly 200 years, leaving it impoverished at independence.`,
    points: [
      'Destruction of handicrafts and deindustrialization',
      'Drain of wealth - Dadabhai Naoroji\'s theory',
      'Commercialization of agriculture',
      'Heavy land revenue taxation',
      'Railways built for extraction, not development',
      'Discriminatory industrial policies',
      'Poverty, famines, and economic backwardness',
      'India transformed from manufacturer to raw material supplier'
    ],
    examTip: 'Structure answer: destruction of industries, agriculture, drain theory, infrastructure, and overall impact. Use specific examples.'
  },

  // Chapter 4: Marathas
  {
    id: 'h4-1',
    chapterId: '4',
    question: 'State the causes of the Third Battle of Panipat.',
    type: '2-marks',
    answer: `The Third Battle of Panipat (1761) was fought between the Marathas and Ahmad Shah Abdali. The main causes were: Maratha expansion in North India threatened Afghan interests, the Marathas' interference in Mughal succession angered Abdali, religious conflicts as Abdali claimed to fight for Islam, and the invitation by Rohilla chiefs and Mughal nobles to Abdali to check Maratha power. The battle resulted in a crushing defeat for the Marathas.`,
    points: [
      'Maratha expansion in North India',
      'Interference in Mughal politics',
      'Religious conflict with Ahmad Shah Abdali',
      'Invitation by Rohillas to check Maratha power',
      'Crushing defeat for Marathas in 1761'
    ]
  },
  {
    id: 'h4-2',
    chapterId: '4',
    question: 'Explain the causes of Anglo-Maratha Wars.',
    type: '4-marks',
    answer: `The Anglo-Maratha Wars (1775-1818) were fought in three phases due to British expansionist policies and internal Maratha conflicts:

**First Anglo-Maratha War (1775-82):**
- Struggle for power between Madhavrao II and Raghunathrao
- Raghunathrao sought British help through Treaty of Surat (1775)
- British interference in Maratha succession
- Ended with Treaty of Salbai (1782) - status quo restored

**Second Anglo-Maratha War (1803-05):**
- Internal conflicts among Peshwa, Holkar, Sindhia, and Bhonsle
- British policy of divide and rule
- Subsidiary Alliance system imposed on Maratha chiefs
- Peshwa Bajirao II signed Treaty of Bassein (1802)
- Other Maratha chiefs opposed this treaty

**Third Anglo-Maratha War (1817-18):**
- Peshwa's attempt to regain independence
- Rise of Pindari raids used as pretext by British
- British wanted complete control over India
- Resulted in complete defeat of Marathas
- End of Maratha Empire

**Common Causes:**
- British expansionism and desire for supremacy
- Internal divisions among Maratha chiefs
- Peshwa's weakening authority
- Strategic importance of Maratha territories`,
    points: [
      'Internal conflicts among Maratha chiefs',
      'British expansionist policy',
      'Succession disputes (Raghunathrao issue)',
      'Treaty of Bassein and opposition',
      'Divide and rule policy',
      'Pindari raids as pretext',
      'Complete British victory in 1818'
    ],
    examTip: 'Divide into three wars with specific causes for each. Mention treaties and outcomes.'
  },

  // Chapter 5: Social Reforms
  {
    id: 'h5-1',
    chapterId: '5',
    question: 'Who was Raja Ram Mohan Roy?',
    type: '2-marks',
    answer: `Raja Ram Mohan Roy (1772-1833) was a great social reformer known as the "Father of Modern India" and "Maker of Modern India". He founded the Brahmo Samaj in 1828 to reform Hindu society. His major achievement was the abolition of Sati practice in 1829 through British legislation. He campaigned against child marriage, caste system, and superstitions, while promoting women's education, widow remarriage, and rationalism.`,
    points: [
      'Father of Modern India (1772-1833)',
      'Founded Brahmo Samaj (1828)',
      'Abolished Sati practice (1829)',
      'Campaigned against social evils',
      'Promoted women\'s education and rationalism'
    ]
  },
  {
    id: 'h5-2',
    chapterId: '5',
    question: 'Explain the contributions of Jyotiba Phule to social reform.',
    type: '4-marks',
    answer: `Jyotiba Phule (1827-1890) was a pioneering social reformer who fought against caste discrimination and for women's rights:

**Fight Against Caste System:**
**1. Satyashodhak Samaj (1873):** Founded this organization to liberate lower castes from exploitation and establish social equality.

**2. Opposition to Brahminical Dominance:** Challenged the supremacy of Brahmins and the caste hierarchy, arguing for equal rights for all.

**3. Education for Lower Castes:** Opened schools for children from lower castes and untouchables, breaking social barriers.

**Women's Education and Rights:**
**1. First Girls' School (1848):** Opened first school for girls in Pune with his wife Savitribai Phule as the first female teacher.

**2. Widow Remarriage:** Advocated for widow remarriage and opposed child marriage.

**3. Women's Empowerment:** Believed education was key to women's liberation.

**4. Balhatya Pratibandhak Griha:** Established home for pregnant widows to prevent infanticide.

**Literary Contributions:**
Wrote books like "Gulamgiri" (Slavery) exposing caste oppression and comparing it to slavery.

**Legacy:**
Phule's work laid foundation for anti-caste movements and inspired leaders like Dr. Ambedkar.`,
    points: [
      'Founded Satyashodhak Samaj (1873)',
      'Fought against caste discrimination',
      'Opened first girls\' school (1848)',
      'Established school for lower castes',
      'Promoted widow remarriage',
      'Wrote "Gulamgiri" against caste system',
      'Inspired later reformers like Ambedkar'
    ],
    examTip: 'Cover both anti-caste work and women\'s rights. Mention specific institutions and writings.'
  },

  // Chapter 6: Freedom Struggle
  {
    id: 'h6-1',
    chapterId: '6',
    question: 'State the causes of the 1857 Revolt.',
    type: '2-marks',
    answer: `The 1857 Revolt had multiple causes: Political - annexation of Indian states through Doctrine of Lapse angered rulers and nobles; Economic - destruction of traditional industries and heavy taxation impoverished people; Social and Religious - interference in Indian customs, fear of forcible conversion; Military - discrimination against Indian sepoys, low pay, and the immediate trigger was the use of greased cartridges offensive to both Hindu and Muslim sentiments.`,
    points: [
      'Political - Doctrine of Lapse, annexations',
      'Economic - destruction of industries, taxation',
      'Social/Religious - interference in customs',
      'Military - discrimination against sepoys',
      'Immediate cause - greased cartridges'
    ]
  },
  {
    id: 'h6-2',
    chapterId: '6',
    question: 'Explain the Non-Cooperation Movement.',
    type: '4-marks',
    answer: `The Non-Cooperation Movement (1920-22) was launched by Mahatma Gandhi as a peaceful protest against British rule:

**Background:**
- Jallianwala Bagh Massacre (1919) shocked the nation
- Rowlatt Act curtailed civil liberties
- Khilafat issue agitated Indian Muslims
- Gandhi combined nationalist and Khilafat causes

**Program:**
**1. Boycott:** Boycott of foreign goods, British courts, legislatures, schools, and titles

**2. Swadeshi:** Promotion of khadi and Indian goods

**3. Constructive Work:** Promotion of Hindu-Muslim unity, removal of untouchability, women's participation

**4. Mass Participation:** Unprecedented participation of common people, students, women

**Spread:**
- Movement spread across India
- People surrendered titles, left government jobs
- Students left government schools
- Lawyers boycotted courts

**Suspension (February 1922):**
- Chauri Chaura incident: mob killed 22 policemen
- Gandhi suspended movement citing violence
- Many Congress leaders disagreed with suspension

**Significance:**
- First mass movement involving all sections
- Demonstrated power of non-violence
- Increased political consciousness
- Made Congress a mass organization`,
    points: [
      'Launched in 1920 after Jallianwala Bagh',
      'Boycott of foreign goods and institutions',
      'Promotion of swadeshi and khadi',
      'Mass participation across India',
      'Suspended after Chauri Chaura (1922)',
      'First mass nationalist movement',
      'Strengthened Congress organization'
    ],
    examTip: 'Mention background, program, spread, suspension, and significance. Include Khilafat connection.'
  },
  {
    id: 'h6-3',
    chapterId: '6',
    question: 'Discuss the Quit India Movement.',
    type: '6-marks',
    answer: `The Quit India Movement (August 1942) was the final and most powerful mass movement for independence:

**Background:**

**1. Failure of Cripps Mission (March 1942):**
- British offer of Dominion Status after war rejected
- No immediate transfer of power
- Congress demanded complete independence

**2. World War II Context:**
- Japan's advance towards India
- British weakness during war
- Opportunity for final push

**3. Rising Discontent:**
- Economic hardships due to war
- People ready for decisive action

**Launch (8 August 1942):**
- Gandhi gave "Do or Die" call at Bombay session
- Demanded immediate British withdrawal
- Resolution passed on 8 August 1942

**British Response:**

**1. Brutal Suppression:**
- Entire Congress leadership arrested immediately
- Gandhi, Nehru, Patel, and others imprisoned
- Violent crackdown on protesters

**2. Censorship:** Press censored, communication disrupted

**3. Military Force:** Army used to crush demonstrations

**Movement Spreads:**

**1. Leaderless Resistance:**
- With leaders arrested, movement became spontaneous
- Youth and students took leadership
- Parallel governments formed in places

**2. Mass Participation:**
- Workers struck work
- Students left schools
- Women actively participated

**3. Sabotage Activities:**
- Railway lines disrupted
- Telegraph wires cut
- Government buildings attacked

**4. Underground Movement:**
- Leaders like Jayaprakash Narayan, Aruna Asaf Ali continued struggle underground
- Underground radio broadcasts
- Secret literature distributed

**Regional Variations:**

**1. Parallel Governments:**
- Ballia (UP) - temporary parallel government
- Satara (Maharashtra) - Prati Sarkar
- Midnapore (Bengal) - National Government

**2. Peasant Participation:**
- Strong in Bihar, UP, Maharashtra
- No-tax campaigns

**Repression:**
- Over 1,00,000 arrested
- Thousands killed in police firing
- Heavy fines imposed
- Collective punishments

**Outcome:**

**1. Didn't Achieve Immediate Goal:**
- British didn't quit immediately
- Movement suppressed by 1944

**2. Long-term Impact:**
**a)** Proved British couldn't govern India without Indian cooperation
**b)** Demonstrated India's determination for independence
**c)** Made independence inevitable
**d)** British realized they must leave soon

**3. Mass Participation:**
- Widest mass participation in freedom struggle
- All sections - students, workers, peasants, women

**4. Changed British Attitude:**
- Weakened by World War II
- Realized cost of keeping India too high
- Started planning for transfer of power

**Significance:**

**1. Final Push:** Last major movement before independence

**2. Unity:** United people across classes, regions, religions

**3. Sacrifice:** Showed people's willingness to sacrifice for freedom

**4. Inevitability:** Made British departure inevitable

**5. International Impact:** Gained international sympathy

The Quit India Movement, though suppressed, achieved its ultimate goal - it convinced the British that they couldn't hold India much longer, leading to independence in 1947.`,
    points: [
      'Launched on 8 August 1942',
      'Gandhi\'s "Do or Die" call',
      'Immediate arrest of all leaders',
      'Leaderless spontaneous movement',
      'Mass participation - students, workers, women',
      'Parallel governments in some areas',
      'Brutal British repression',
      'Made independence inevitable',
      'Final major movement before 1947'
    ],
    examTip: 'Structure: background → launch → British response → spread → outcome → significance. Mention specific examples of parallel governments.'
  },

  // Chapter 7: Post-Independence
  {
    id: 'h7-1',
    chapterId: '7',
    question: 'State the role of Sardar Patel in integration of princely states.',
    type: '2-marks',
    answer: `Sardar Vallabhbhai Patel, as Home Minister and Deputy Prime Minister, played a crucial role in integrating 562 princely states into the Indian Union. Using diplomacy, persuasion, and when necessary, force, he convinced almost all princely states to accede to India by August 15, 1947. He handled difficult cases like Hyderabad (through Operation Polo), Junagadh, and Kashmir with skill, ensuring India's territorial integrity.`,
    points: [
      'Home Minister and Deputy PM',
      'Integrated 562 princely states',
      'Used diplomacy and persuasion',
      'Handled Hyderabad through Operation Polo',
      'Ensured India\'s territorial integrity'
    ]
  },
  {
    id: 'h7-2',
    chapterId: '7',
    question: 'Explain the liberation of Goa.',
    type: '4-marks',
    answer: `Goa, along with Daman and Diu, was a Portuguese colony that remained under foreign rule even after India's independence:

**Background:**
- Portuguese ruled Goa since 1510 (450 years)
- Refused to leave despite India's independence in 1947
- Portugal claimed Goa as its territory, not a colony

**India's Efforts:**

**1. Diplomatic Efforts (1947-1961):**
- Negotiations with Portugal failed
- Portugal refused to discuss transfer
- International opinion sought

**2. Economic Blockade:**
- Stopped railway services to Goa
- Economic pressure applied

**3. Satyagraha Movement:**
- Goan freedom fighters organized protests
- Satyagrahis entered Goa from Indian territory
- Portuguese fired on unarmed protesters

**Military Action (December 1961):**

**1. Operation Vijay:**
- Launched on 17 December 1961
- Indian armed forces entered Goa
- Quick and decisive action

**2. Portuguese Surrender:**
- Portuguese Governor General surrendered on 19 December 1961
- Minimal casualties
- Goa liberated after 451 years

**Integration:**
- Initially made Union Territory
- Later became state in 1987
- Completed India's territorial integration

**Significance:**
- End of European colonialism in India
- Demonstrated India's determination
- Completed decolonization process`,
    points: [
      'Portuguese ruled since 1510',
      'Refused to leave after 1947',
      'Diplomatic efforts failed (1947-61)',
      'Operation Vijay - 17 December 1961',
      'Portuguese surrendered on 19 Dec 1961',
      'Goa became Union Territory, later state',
      'End of colonialism in India'
    ],
    examTip: 'Cover diplomatic efforts, satyagraha, and military action. Mention dates and operation name.'
  },

  // Chapter 8: World Wars
  {
    id: 'h8-1',
    chapterId: '8',
    question: 'State the impact of World War I on India.',
    type: '2-marks',
    answer: `World War I (1914-18) had significant impact on India: Economically, it caused inflation, food shortages, and increased taxation. Politically, it raised expectations of self-government as India contributed soldiers and resources. The war exposed British vulnerability. Post-war, instead of reforms, repressive measures like Rowlatt Act were imposed, leading to Jallianwala Bagh massacre and intensifying the freedom struggle. India's participation wasn't rewarded with freedom as promised.`,
    points: [
      'Economic hardship - inflation, food shortage',
      'India contributed soldiers and resources',
      'Raised expectations of self-rule',
      'Exposed British weakness',
      'Post-war repression led to stronger freedom movement'
    ]
  },

  // Chapter 9: Decolonisation
  {
    id: 'h9-1',
    chapterId: '9',
    question: 'What is meant by decolonisation?',
    type: '2-marks',
    answer: `Decolonisation refers to the process by which colonies gained independence from European colonial powers, particularly after World War II. It involved the withdrawal of colonial rule and establishment of independent nation-states in Asia, Africa, and other regions. Major factors included weakening of European powers after World Wars, rise of nationalism in colonies, pressure from USA and USSR, and formation of United Nations supporting self-determination.`,
    points: [
      'Process of gaining independence from colonial rule',
      'Occurred mainly after World War II',
      'European powers withdrew from colonies',
      'Formation of new independent nations',
      'Driven by nationalism and international pressure'
    ]
  },

  // Chapter 10: Cold War
  {
    id: 'h10-1',
    chapterId: '10',
    question: 'What is meant by Cold War?',
    type: '2-marks',
    answer: `Cold War refers to the period of political and ideological tension between the United States and Soviet Union from 1945 to 1991. It was called "cold" because it never escalated into direct military conflict between the superpowers, though they engaged in proxy wars, arms race, space race, and propaganda battles. The world was divided into two blocs - capitalist Western bloc led by USA and communist Eastern bloc led by USSR.`,
    points: [
      'Political tension between USA and USSR (1945-1991)',
      'No direct military conflict - hence "cold"',
      'Ideological conflict - capitalism vs communism',
      'Arms race, space race, proxy wars',
      'World divided into two blocs'
    ]
  },
  {
    id: 'h10-2',
    chapterId: '10',
    question: 'Explain the features of Cold War.',
    type: '4-marks',
    answer: `The Cold War had several distinctive features:

**1. Ideological Conflict:**
- USA promoted capitalism and democracy
- USSR promoted communism and socialism
- Both claimed their system was superior
- Competed for global influence

**2. Formation of Military Alliances:**
- NATO (1949) - led by USA with Western European countries
- Warsaw Pact (1955) - led by USSR with Eastern European countries
- Both prepared for potential war

**3. Arms Race:**
- Nuclear weapons developed and stockpiled
- Both sides built massive arsenals
- Doctrine of Mutual Assured Destruction (MAD)
- Space race - competition in space exploration

**4. Proxy Wars:**
- Superpowers avoided direct conflict
- Fought through allies in Korea, Vietnam, Afghanistan
- Supported opposing sides in regional conflicts

**5. Propaganda War:**
- Extensive propaganda campaigns
- Cultural and educational exchanges
- Radio broadcasts and media influence

**6. Division of World:**
- Iron Curtain divided Europe
- Third World countries courted by both sides
- Non-Aligned Movement emerged as alternative

**7. Espionage:**
- Extensive spy networks (CIA, KGB)
- Intelligence gathering activities
- Several spy scandals`,
    points: [
      'Ideological conflict - capitalism vs communism',
      'Military alliances - NATO and Warsaw Pact',
      'Nuclear arms race and MAD doctrine',
      'Proxy wars instead of direct conflict',
      'Extensive propaganda campaigns',
      'Division of world into blocs',
      'Espionage and spy networks'
    ],
    examTip: 'Cover ideological, military, and political aspects. Give examples of proxy wars and alliances.'
  }
];

export const getHistoryQuestionsByChapter = (chapterId: string): HistoryQuestion[] => {
  return historyQuestionBank.filter(q => q.chapterId === chapterId);
};

export const getHistoryQuestionsByType = (chapterId: string, type: HistoryQuestion['type']): HistoryQuestion[] => {
  return historyQuestionBank.filter(q => q.chapterId === chapterId && q.type === type);
};
