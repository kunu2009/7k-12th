// Maharashtra HSC Board Class 12 Political Science Question Bank
// All questions based on Maharashtra State Board Textbook

export interface Question {
  id: string;
  chapterId: string;
  question: string;
  type: '1-mark' | '2-marks' | '4-marks' | '6-marks';
  answer: string;
  points: string[];
  examTip?: string;
}

export const questionBank: Question[] = [
  // Chapter 1: Challenges of Nation Building
  {
    id: 'q1-1',
    chapterId: 'challenges-of-nation-building',
    question: 'What was the immediate outcome of Partition of India?',
    type: '2-marks',
    answer: `The immediate outcome of Partition of India in 1947 was the creation of two independent nations - India and Pakistan. This led to one of the largest mass migrations in human history, with approximately 10-12 million people crossing borders. The Partition resulted in communal violence, loss of lives (estimated 1 million deaths), and displacement of people. It also created administrative challenges as assets, resources, and civil services had to be divided between the two nations.`,
    points: [
      'Creation of India and Pakistan as independent nations',
      'Mass migration of 10-12 million people',
      'Communal violence and loss of approximately 1 million lives',
      'Division of assets, resources and administrative setup'
    ],
    examTip: 'Always mention the human cost along with political outcomes'
  },
  {
    id: 'q1-2',
    chapterId: 'challenges-of-nation-building',
    question: 'Explain the integration of Princely States.',
    type: '4-marks',
    answer: `The integration of Princely States was a major challenge after independence. There were 562 princely states which were given the option to join India or Pakistan or remain independent. 

Sardar Vallabhbhai Patel, as Home Minister and Deputy Prime Minister, along with V.P. Menon, played a crucial role in convincing most princely states to accede to India through a combination of diplomacy, persuasion and in some cases, military action.

The integration process involved:
1. **Instrument of Accession**: Most states signed the Instrument of Accession by August 15, 1947
2. **Special cases**: Hyderabad was integrated through military action (Operation Polo) in 1948
3. **Junagadh**: Despite its ruler wanting to join Pakistan, it acceded to India after a plebiscite
4. **Kashmir**: Acceded to India in October 1947, leading to ongoing disputes with Pakistan

By 1950, all princely states except Kashmir (partially integrated) were successfully integrated into the Indian Union, creating a united nation.`,
    points: [
      'Sardar Patel and V.P. Menon led the integration process',
      'Instrument of Accession signed by most states',
      'Hyderabad integrated through Operation Polo (1948)',
      'Junagadh joined India after plebiscite',
      'Kashmir accession remains disputed',
      '562 princely states successfully integrated'
    ],
    examTip: 'Mention specific examples like Hyderabad, Junagadh, and Kashmir. Credit Sardar Patel\'s role.'
  },
  {
    id: 'q1-3',
    chapterId: 'challenges-of-nation-building',
    question: 'State the importance of linguistic reorganization of states.',
    type: '2-marks',
    answer: `The linguistic reorganization of states was important because it recognized India's linguistic diversity and helped strengthen national integration. It gave people a sense of belonging and participation in democracy by allowing them to govern themselves in their own language. The States Reorganization Act of 1956 created states on linguistic basis, which reduced linguistic conflicts and ensured better administration and development.`,
    points: [
      'Recognition of linguistic diversity',
      'Strengthened national integration',
      'Enabled governance in regional languages',
      'Reduced linguistic conflicts',
      'Better administration and development'
    ]
  },
  {
    id: 'q1-4',
    chapterId: 'challenges-of-nation-building',
    question: 'Discuss the challenges to national integration faced by India.',
    type: '6-marks',
    answer: `India faced multiple challenges to national integration after independence:

**1. Communalism**: Religious divisions led to violence and mistrust between communities. The trauma of Partition, recurring communal riots, and the use of religion in politics threatened secular fabric.

**2. Casteism**: The deep-rooted caste system created social hierarchies and conflicts. Despite constitutional provisions against untouchability, caste-based discrimination and violence continued to divide society.

**3. Regionalism**: Strong regional identities sometimes competed with national identity. Demands for separate states (like Dravida movement in Tamil Nadu), linguistic conflicts, and "sons of the soil" movements created tensions.

**4. Linguistic Diversity**: With 22 official languages and hundreds of dialects, language became a source of conflict, as seen in the Hindi imposition controversy and anti-Hindi agitations in South India.

**5. Economic Disparities**: Unequal development between regions created feelings of neglect and resentment. Backward regions felt marginalized, leading to demands for special treatment.

**6. Secessionist Movements**: Some regions demanded independence (Kashmir, Punjab, North-East insurgencies), threatening territorial integrity.

**Response**: India addressed these through constitutional provisions, linguistic reorganization, reservation policies, and maintaining a democratic, secular framework that accommodated diversity.`,
    points: [
      'Communalism - religious divisions and violence',
      'Casteism - social hierarchies and discrimination',
      'Regionalism - competing regional identities',
      'Linguistic diversity - language conflicts',
      'Economic disparities - unequal development',
      'Secessionist movements - threats to territorial integrity',
      'Democratic accommodations and constitutional remedies'
    ],
    examTip: 'Structure your answer with clear headings. Mention both challenges and how India responded to them.'
  },

  // Chapter 2: Era of One Party Dominance
  {
    id: 'q2-1',
    chapterId: 'era-of-one-party-dominance',
    question: 'What is meant by "One Party Dominance"?',
    type: '2-marks',
    answer: `One Party Dominance refers to a political system where one political party continuously wins elections and forms governments over a long period, while maintaining democratic procedures. In India, the Indian National Congress dominated politics from 1952 to 1967, winning clear majorities in successive elections at both national and state levels. This dominance was based on Congress's role in freedom struggle, charismatic leadership of Nehru, inclusive ideology, and organizational strength.`,
    points: [
      'One party continuously winning elections',
      'Democratic procedures maintained',
      'Congress dominated 1952-1967',
      'Based on freedom struggle legacy and Nehru\'s leadership',
      'Strong organization and inclusive ideology'
    ]
  },
  {
    id: 'q2-2',
    chapterId: 'era-of-one-party-dominance',
    question: 'Explain the Congress System.',
    type: '4-marks',
    answer: `The Congress System refers to the unique nature of the Indian National Congress's dominance in Indian politics during the first two decades after independence (1947-1967).

**Characteristics of Congress System:**

**1. Electoral Dominance**: Congress won consecutive elections at national and state levels with comfortable majorities, despite getting only 45-48% of votes due to first-past-the-post electoral system.

**2. Internal Pluralism**: Congress was like a "coalition of interests" accommodating diverse ideologies - from conservatives to socialists, from different castes, religions, and regions. Internal debates were vigorous.

**3. Umbrella Organization**: It represented various social groups - peasants, workers, industrialists, upper and lower castes, creating a broad social coalition.

**4. Factional Competition**: Different factions existed within Congress, competing for power while maintaining party unity. This internal competition substituted for inter-party competition.

**5. Consensus Building**: Decisions were made through consensus and accommodation rather than majoritarian approach.

The Congress System ensured stability, continuity, and democratic governance while accommodating India's diversity within a single party framework.`,
    points: [
      'Electoral dominance with 45-48% vote share',
      'Internal pluralism - coalition of diverse interests',
      'Umbrella organization representing all social groups',
      'Factional competition within party',
      'Consensus-based decision making',
      'Stability and democratic governance'
    ],
    examTip: 'Explain how Congress accommodated diversity and compare it to a coalition government within a single party.'
  },
  {
    id: 'q2-3',
    chapterId: 'era-of-one-party-dominance',
    question: 'Describe the nature of opposition parties during one-party dominance.',
    type: '4-marks',
    answer: `During the era of one-party dominance (1952-1967), opposition parties played a limited but important role in Indian democracy:

**Nature of Opposition:**

**1. Fragmented Opposition**: Opposition was divided among multiple parties with different ideologies - Communist Party of India (CPI), Bharatiya Jana Sangh (BJS), Swatantra Party, Socialist parties, and others. They could not unite against Congress.

**2. Ideological Diversity**: Opposition ranged from right-wing parties like Swatantra Party (supporting free enterprise) to left-wing CPI (supporting socialism), making alliance difficult.

**3. Regional Strength**: Some opposition parties had strong regional bases (DMK in Tamil Nadu, Akali Dal in Punjab) but lacked national presence.

**4. Limited Electoral Success**: Despite significant vote share collectively, opposition parties won few seats due to divided votes and first-past-the-post system.

**5. Parliamentary Role**: Opposition parties played effective role in Parliament through debates, questioning government policies, and keeping Congress accountable, thus strengthening democracy.

Though electorally weak, opposition parties ensured democratic debate and prepared ground for future political competition.`,
    points: [
      'Fragmented and divided opposition',
      'Diverse ideologies - left to right wing',
      'Strong regional bases but weak nationally',
      'Limited electoral success despite vote share',
      'Effective parliamentary opposition',
      'Strengthened democratic debate and accountability'
    ],
    examTip: 'Mention specific opposition parties and their ideologies. Show how they contributed to democracy despite electoral weakness.'
  },

  // Chapter 3: Politics of Planned Development
  {
    id: 'q3-1',
    chapterId: 'politics-of-planned-development',
    question: 'What was the role of Planning Commission?',
    type: '2-marks',
    answer: `The Planning Commission was established in 1950 as an extra-constitutional body to formulate Five Year Plans for India's economic development. It assessed resources, determined priorities, and allocated funds for development projects. The Planning Commission prepared detailed plans for achieving self-sufficiency, industrialization, poverty reduction, and balanced regional development, playing a central role in India's mixed economy model.`,
    points: [
      'Established in 1950 as extra-constitutional body',
      'Formulated Five Year Plans',
      'Assessed resources and determined priorities',
      'Allocated funds for development',
      'Aimed at self-sufficiency and industrialization'
    ]
  },
  {
    id: 'q3-2',
    chapterId: 'politics-of-planned-development',
    question: 'Explain the objectives and achievements of Second Five Year Plan.',
    type: '4-marks',
    answer: `The Second Five Year Plan (1956-1961) was based on the Mahalanobis Model and focused on rapid industrialization:

**Objectives:**
1. Rapid industrialization with emphasis on heavy and basic industries
2. Expansion of public sector
3. Reduction of income inequalities
4. Development of machine-making industries for self-reliance

**Key Features:**
- Heavy industries like steel, coal, power were prioritized
- Public sector given commanding heights of economy
- Import substitution strategy adopted
- Three steel plants established at Bhilai, Rourkela, and Durgapur

**Achievements:**
- Industrial production increased
- Foundation of heavy industry laid
- Public sector expanded significantly
- Dams and power projects increased electricity generation

**Limitations:**
- Agriculture neglected, leading to food crisis
- Foreign exchange crisis due to imports
- Inflation increased
- Rural-urban divide widened

The Second Plan established India's industrial base but created imbalances that needed correction in subsequent plans.`,
    points: [
      'Based on Mahalanobis Model',
      'Focus on heavy and basic industries',
      'Public sector expansion',
      'Three steel plants established',
      'Agricultural neglect caused food crisis',
      'Foreign exchange and inflation problems',
      'Laid foundation for industrialization'
    ],
    examTip: 'Balance discussion of achievements and limitations. Mention Mahalanobis Model and specific steel plants.'
  },
  {
    id: 'q3-3',
    chapterId: 'politics-of-planned-development',
    question: 'Discuss the Green Revolution and its impact.',
    type: '6-marks',
    answer: `The Green Revolution was a period of agricultural transformation in India during the 1960s-70s that significantly increased food grain production through modern agricultural techniques:

**Background:**
India faced severe food shortage in 1960s, depending on food imports. The Green Revolution aimed to achieve food self-sufficiency.

**Main Features:**
1. **High Yielding Variety (HYV) Seeds**: Introduction of HYV seeds of wheat and rice developed by Norman Borlaug
2. **Chemical Fertilizers and Pesticides**: Extensive use to increase productivity
3. **Irrigation**: Expansion of irrigation facilities
4. **Mechanization**: Use of tractors and modern equipment
5. **Package Technology**: Combination of seeds, fertilizers, irrigation, and pesticides

**Positive Impacts:**
1. **Food Self-Sufficiency**: India became self-sufficient in food grains by early 1970s
2. **Increased Production**: Wheat production increased dramatically, especially in Punjab, Haryana, and Western UP
3. **Economic Growth**: Agricultural income increased
4. **Reduced Imports**: Saved foreign exchange
5. **Rural Prosperity**: Some farmers became prosperous

**Negative Impacts:**
1. **Regional Inequality**: Benefits limited to Punjab, Haryana, Western UP - other regions remained backward
2. **Crop Inequality**: Focused on wheat and rice, neglected other crops
3. **Social Inequality**: Benefited large farmers more than small and marginal farmers
4. **Environmental Degradation**: Excessive use of chemicals degraded soil, depleted water table
5. **Increased Disparities**: Rich farmers became richer, poor farmers faced difficulties

The Green Revolution solved India's food problem but created new challenges of inequality and environmental sustainability.`,
    points: [
      'Introduction of HYV seeds and modern techniques',
      'Food self-sufficiency achieved',
      'Increased wheat and rice production',
      'Limited to Punjab, Haryana, Western UP',
      'Benefited large farmers disproportionately',
      'Environmental problems - soil degradation, water depletion',
      'Created regional and social inequalities'
    ],
    examTip: 'Discuss both positive and negative impacts equally. Mention specific regions and the environmental consequences.'
  },

  // Chapter 4: India's External Relations
  {
    id: 'q4-1',
    chapterId: 'indias-external-relations',
    question: 'State the principles of Non-Alignment.',
    type: '2-marks',
    answer: `The principles of Non-Alignment included: maintaining independence in foreign policy, not joining military alliances like NATO or Warsaw Pact, promoting peaceful coexistence, supporting decolonization and anti-imperialism, fostering cooperation among developing countries, and working for world peace and disarmament. Non-Alignment was not neutrality but an active policy to maintain strategic autonomy.`,
    points: [
      'Independence in foreign policy',
      'Not joining military blocs',
      'Peaceful coexistence (Panchsheel)',
      'Anti-colonialism and anti-imperialism',
      'Cooperation among developing nations',
      'World peace and disarmament'
    ]
  },
  {
    id: 'q4-2',
    chapterId: 'indias-external-relations',
    question: 'Explain India\'s relations with China.',
    type: '4-marks',
    answer: `India's relations with China evolved from friendship to conflict and then normalization:

**Early Friendship (1950s):**
- India was among first countries to recognize Communist China (1950)
- "Hindi-Chini Bhai Bhai" (Indians and Chinese are brothers) slogan symbolized friendship
- Panchsheel Agreement (1954) established peaceful coexistence
- India supported China's entry into UN

**Deterioration:**
- Tibet issue: China's occupation of Tibet (1950) and Dalai Lama's refuge in India (1959) strained relations
- Border disputes over McMahon Line and Aksai Chin
- 1962 Sino-Indian War: China launched attack, India suffered humiliating defeat
- Relations remained frozen for decades

**Normalization (1988 onwards):**
- Rajiv Gandhi's visit to China (1988) began normalization
- Trade and economic relations expanded
- Both became major economies
- Continuing border disputes despite improved relations

India-China relations remain complex, mixing cooperation and competition.`,
    points: [
      'Early friendship - Panchsheel, Hindi-Chini Bhai Bhai',
      'Tibet issue strained relations',
      'Border disputes - McMahon Line, Aksai Chin',
      '1962 War - India\'s defeat',
      'Normalization from 1988',
      'Current mix of cooperation and competition'
    ],
    examTip: 'Divide answer chronologically: friendship, conflict, normalization. Mention specific events like 1962 war.'
  },
  {
    id: 'q4-3',
    chapterId: 'indias-external-relations',
    question: 'Discuss the causes and consequences of Indo-Pak conflicts.',
    type: '6-marks',
    answer: `India and Pakistan have fought four major wars and numerous conflicts since independence:

**Causes of Conflicts:**

**1. Kashmir Issue**: The fundamental cause - both claim Kashmir. Pakistan considers it unfinished agenda of Partition.

**2. Partition Legacy**: Communal violence, refugee crisis, and territorial disputes created lasting hostility.

**3. Water Disputes**: Sharing of river waters despite Indus Water Treaty.

**4. Cross-Border Terrorism**: Pakistan's support to militancy in Kashmir.

**5. Strategic Competition**: Arms race, nuclear weapons development.

**Major Conflicts:**

**1. First Kashmir War (1947-48)**: Pakistan sent tribal raiders, India airlifted troops, ended with UN ceasefire and Line of Control.

**2. Second War (1965)**: Pakistan's Operation Gibraltar failed, ended with Tashkent Agreement.

**3. Bangladesh War (1971)**: India supported Bangladesh liberation, Pakistan defeated, Bangladesh created.

**4. Kargil War (1999)**: Pakistani intrusion in Kargil, India recaptured positions.

**Consequences:**

**1. Military Burden**: Both countries spend heavily on defense, affecting development.

**2. Nuclear Arms Race**: Both became nuclear powers (1998), increasing stakes.

**3. Regional Instability**: Terrorism, arms race destabilize South Asia.

**4. Missed Opportunities**: Resources wasted that could be used for development.

**5. International Involvement**: UN, USA, China involved in mediating conflicts.

**6. Internal Politics**: Conflicts used for political mobilization in both countries.

Despite conflicts, there have been peace initiatives like Simla Agreement, Lahore Declaration, but Kashmir remains unresolved.`,
    points: [
      'Kashmir issue - fundamental cause',
      'Partition legacy and communal tensions',
      'Four major wars - 1947-48, 1965, 1971, 1999',
      'Heavy defense expenditure affecting development',
      'Nuclear arms race since 1998',
      'Cross-border terrorism from Pakistan',
      'Peace initiatives despite conflicts'
    ],
    examTip: 'Organize chronologically with major wars. Discuss both causes and consequences. Mention specific agreements.'
  },

  // Chapter 5: Challenges to Congress System
  {
    id: 'q5-1',
    chapterId: 'challenges-to-and-restoration-of-congress',
    question: 'What were the outcomes of 1967 elections?',
    type: '2-marks',
    answer: `The 1967 elections marked the end of Congress dominance. Congress lost power in eight states - Punjab, Haryana, UP, Bihar, West Bengal, Orissa, Madras, and Kerala. At national level, though Congress retained power, its majority was significantly reduced. This led to coalition governments in states and rise of non-Congress parties, marking the beginning of competitive politics in India.`,
    points: [
      'Congress lost in 8 states',
      'Reduced majority at national level',
      'Coalition governments formed',
      'Rise of non-Congress parties',
      'End of one-party dominance'
    ]
  },
  {
    id: 'q5-2',
    chapterId: 'challenges-to-and-restoration-of-congress',
    question: 'Explain the concept of "Non-Congressism".',
    type: '4-marks',
    answer: `Non-Congressism was a political strategy adopted by opposition parties after the 1967 elections to keep Congress out of power by forming alliances despite ideological differences:

**Meaning:**
Opposition parties believed that Congress had become authoritarian and corrupt, and removing it from power was the primary goal, even if it meant allying with parties of opposite ideologies.

**Features:**

**1. United Opposition**: Socialist, communist, right-wing parties joined hands.

**2. Coalition Governments**: Formed governments in states with no clear agenda except opposing Congress.

**3. Ideological Compromise**: Parties with contradictory ideologies (like CPI and Jana Sangh) worked together.

**4. Anti-Congressism**: United by opposition to Congress rather than common program.

**Results:**
- Coalition governments formed in several states
- Most coalitions were unstable and short-lived
- Frequent defections and political instability
- Coined the term "Aya Ram, Gaya Ram" for defections
- Eventually, many coalitions collapsed

Non-Congressism showed that opposition unity was possible but difficult to sustain without common ideology or program.`,
    points: [
      'Strategy to keep Congress out of power',
      'United opposition despite ideological differences',
      'Coalition governments in states',
      'Political instability and defections',
      'Aya Ram Gaya Ram phenomenon',
      'Short-lived coalitions'
    ],
    examTip: 'Explain both the strategy and why it failed. Mention "Aya Ram, Gaya Ram" term for political defections.'
  },
  {
    id: 'q5-3',
    chapterId: 'challenges-to-and-restoration-of-congress',
    question: 'Discuss the factors leading to Congress split in 1969.',
    type: '4-marks',
    answer: `The Congress split in 1969 into Congress (O) - Old Congress and Congress (R) - Requisitionists, led by Indira Gandhi:

**Factors:**

**1. Leadership Crisis**: After Nehru's death (1964) and Lal Bahadur Shastri's death (1966), party leadership was disputed.

**2. Syndicate vs. Indira**: Old guard leaders ("Syndicate") like Kamaraj, Nijalingappa wanted to control Indira Gandhi, but she asserted independence.

**3. Ideological Differences**: Indira Gandhi promoted socialist agenda (bank nationalization, abolition of privy purses), while Syndicate favored gradual reforms.

**4. Presidential Election (1969)**: Syndicate supported Neelam Sanjiva Reddy, but Indira supported V.V. Giri. Giri's victory with Indira's backing led to open split.

**5. Bank Nationalization**: Indira nationalized 14 major banks in July 1969, against Syndicate's wishes.

**6. Abolition of Privy Purses**: Indira's move to abolish privileges of former princes angered conservatives.

**Consequences:**
- Congress split into Congress (O) and Congress (R)
- Indira's Congress (R) won 1971 elections with "Garibi Hatao" slogan
- Syndicate's Congress (O) merged with other opposition parties
- Indira consolidated power and moved towards socialist policies

The split marked personalization of politics and decline of organizational democracy in Congress.`,
    points: [
      'Leadership dispute - Syndicate vs Indira Gandhi',
      '1969 Presidential election trigger',
      'Ideological differences on socialism',
      'Bank nationalization issue',
      'Abolition of privy purges',
      'Split into Congress (O) and Congress (R)',
      'Indira won with Garibi Hatao slogan'
    ],
    examTip: 'Explain both immediate triggers (Presidential election) and underlying causes. Mention consequences clearly.'
  },

  // Chapter 6: Crisis of Democratic Order
  {
    id: 'q6-1',
    chapterId: 'crisis-of-democratic-order',
    question: 'State the reasons for declaration of Emergency in 1975.',
    type: '2-marks',
    answer: `Emergency was declared on June 25, 1975, citing "internal disturbance". The main reasons were: Allahabad High Court judgment declaring Indira Gandhi's election invalid, mass movement led by Jayaprakash Narayan demanding her resignation, railway strike, political instability, and economic crisis. The government claimed it was necessary to maintain order and stability.`,
    points: [
      'Allahabad High Court judgment against Indira Gandhi',
      'JP Movement demanding resignation',
      'Political instability and protests',
      'Economic crisis',
      'Claimed need to maintain order'
    ]
  },
  {
    id: 'q6-2',
    chapterId: 'crisis-of-democratic-order',
    question: 'Explain the consequences of Emergency (1975-77).',
    type: '6-marks',
    answer: `The Emergency imposed from June 1975 to March 1977 was the darkest period in Indian democracy, with far-reaching consequences:

**Immediate Consequences:**

**1. Suspension of Fundamental Rights**: Article 352 invoked, Article 19 (freedom of speech) suspended, citizens could not approach courts.

**2. Press Censorship**: Newspapers were censored, critical press gagged, propaganda promoted.

**3. Mass Arrests**: Opposition leaders, activists, journalists arrested under preventive detention - estimated 1 lakh people imprisoned.

**4. Constitutional Amendments**: 42nd Amendment called "Mini Constitution" made drastic changes - extended Lok Sabha term, limited judicial review, added "Socialist" and "Secular" to Preamble.

**5. Forced Sterilizations**: Compulsory family planning drive led to excesses, particularly during Sanjay Gandhi's campaign.

**6. Demolition Drives**: Forced slum clearances in Delhi, displacement of poor.

**7. Control of Judiciary**: Judges transferred, superseded; government tried to control judiciary.

**Political Consequences:**

**1. End of Emergency**: Growing public resentment, international criticism forced Indira to call elections in 1977.

**2. Janata Party Victory**: Opposition united under Janata Party, won decisive victory ending Congress rule for first time.

**3. Awareness of Democracy**: People realized value of democratic rights and freedom.

**4. Distrust of Power**: Created permanent distrust of authoritarian tendencies.

**Long-term Impact:**

**1. Judicial Activism**: Post-Emergency, judiciary became more assertive in protecting rights.

**2. Civil Liberties Movement**: Strengthened movements for human rights and civil liberties.

**3. Constitutional Safeguards**: 44th Amendment (1978) provided safeguards against future emergencies.

**4. Political Realignment**: Showed opposition could unite and win.

**5. Lessons for Democracy**: Demonstrated that democracy needs constant vigilance.

The Emergency remains a grim reminder of how democracy can be subverted and the importance of protecting constitutional values.`,
    points: [
      'Suspension of Fundamental Rights',
      'Press censorship and propaganda',
      'Mass arrests of opposition leaders',
      '42nd Constitutional Amendment',
      'Forced sterilizations and demolitions',
      'Janata Party victory in 1977',
      'Strengthened civil liberties awareness',
      'Judicial activism increased',
      '44th Amendment provided safeguards'
    ],
    examTip: 'Organize into immediate, political, and long-term consequences. Mention both negative impacts and positive lessons learned.'
  },
  {
    id: 'q6-3',
    chapterId: 'crisis-of-democratic-order',
    question: 'Why did the Janata Party government fail?',
    type: '4-marks',
    answer: `The Janata Party, formed in 1977 by merging opposition parties, came to power with massive mandate but collapsed within two years due to:

**Internal Contradictions:**

**1. Ideological Differences**: Janata Party was coalition of parties with contradictory ideologies - Socialists, Jan Sangh (right-wing), Congress (O), BLD. They agreed only on opposing Congress.

**2. Leadership Conflicts**: Multiple leaders - Morarji Desai, Charan Singh, Jagjivan Ram - competed for leadership, leading to factionalism.

**3. Dual Membership**: RSS members in Jan Sangh faction maintained dual membership, which socialists opposed, creating conflict.

**4. Personal Ambitions**: Leaders prioritized personal ambitions over party unity and governance.

**Performance Issues:**

**1. Lack of Clear Program**: Beyond repealing Emergency excesses, party had no common development agenda.

**2. Shah Commission**: Commission to investigate Emergency excesses became tool for settling political scores.

**3. Economic Problems**: Failed to address economic crisis, inflation, unemployment.

**Fall:**
- Morarji Desai resigned in 1979 due to internal revolt
- Charan Singh formed government with Congress support, but it lasted only few months
- Fresh elections held in 1980, Indira Gandhi returned to power

The Janata experiment showed that opposition unity based only on anti-Congressism was not sustainable.`,
    points: [
      'Ideological contradictions in coalition',
      'Leadership conflicts and factionalism',
      'Dual membership issue (RSS)',
      'Personal ambitions over party unity',
      'No common development program',
      'Shah Commission controversies',
      'Collapsed within two years'
    ],
    examTip: 'Explain both why they won and why they failed. Contrast their electoral success with governance failure.'
  },

  // Chapter 7: Rise of Popular Movements
  {
    id: 'q7-1',
    chapterId: 'rise-of-popular-movements',
    question: 'What is meant by "Popular Movement"?',
    type: '2-marks',
    answer: `Popular movements are collective efforts by people outside formal political institutions to address specific issues affecting their lives. Unlike political parties seeking power, these movements focus on single issues like environment, women's rights, or farmer's problems. They use methods like protests, demonstrations, and civil disobedience to pressure government and bring about social or policy changes. They represent people's participation in democracy beyond elections.`,
    points: [
      'Collective efforts outside formal politics',
      'Focus on specific issues',
      'Use protests and demonstrations',
      'Don\'t seek political power',
      'Pressure government for policy changes',
      'Represent participatory democracy'
    ]
  },
  {
    id: 'q7-2',
    chapterId: 'rise-of-popular-movements',
    question: 'Discuss the Chipko Movement.',
    type: '4-marks',
    answer: `The Chipko Movement was an environmental movement that began in 1973 in Uttarakhand (then Uttar Pradesh) to protect forests from commercial exploitation:

**Origin and Method:**
- Started in Chamoli district when villagers, led by Gaura Devi, hugged trees to prevent contractors from cutting them
- "Chipko" means "to hug" in Hindi
- Women played leading role in the movement

**Leadership:**
- Sunderlal Bahuguna, Chandi Prasad Bhatt were key leaders
- Grassroots participation of local communities, especially women

**Objectives:**
1. Prevent deforestation by commercial contractors
2. Protect livelihood of forest-dependent communities
3. Promote ecological conservation
4. Give local communities rights over forest resources

**Achievements:**
- 15-year ban on tree felling in Himalayan forests
- Raised environmental awareness nationally
- Influenced forest policy - led to Forest Conservation Act, 1980
- Inspired similar movements elsewhere
- Showed power of grassroots environmental activism

**Significance:**
The movement demonstrated how local communities could resist destructive development and highlighted the link between ecology and livelihood.`,
    points: [
      'Started 1973 in Uttarakhand',
      'Villagers hugged trees to prevent cutting',
      'Women\'s active participation',
      'Led by Sunderlal Bahuguna, Chandi Prasad Bhatt',
      '15-year ban on tree felling achieved',
      'Led to Forest Conservation Act 1980',
      'Raised environmental awareness'
    ],
    examTip: 'Mention the unique method (hugging trees), women\'s role, and specific achievements like the 15-year ban.'
  },
  {
    id: 'q7-3',
    chapterId: 'rise-of-popular-movements',
    question: 'Explain the Narmada Bachao Andolan.',
    type: '6-marks',
    answer: `The Narmada Bachao Andolan (NBA) is one of India's most significant social movements, opposing large dams on the Narmada river:

**Background:**
The Narmada Valley Project planned 3,000 large and small dams on Narmada river - Sardar Sarovar in Gujarat, Narmada Sagar in Madhya Pradesh, and others. The project promised irrigation and power but threatened displacement of lakhs of people.

**Leadership and Organization:**
- Medha Patkar emerged as prominent leader
- Support from Baba Amte, Arundhati Roy, and others
- Mobilized tribal and rural communities facing displacement

**Issues Raised:**

**1. Displacement**: Project would displace 2-3 lakh people, mostly tribals and farmers, from their ancestral lands.

**2. Inadequate Rehabilitation**: Government failed to provide proper rehabilitation and compensation to displaced families.

**3. Environmental Damage**: Large dams would submerge forests, affect ecosystem, displace wildlife.

**4. Questioning Development Model**: Challenged the notion that big dams represent development, asking "development for whom?"

**5. Rights of Tribals**: Highlighted marginalization of tribal communities in development planning.

**Methods of Struggle:**

**1. Satyagraha**: Peaceful protests and sit-ins
**2. Jal Samarpan**: Vowing to drown rather than leave villages
**3. Public Interest Litigation**: Legal challenges in Supreme Court
**4. Rallies and Padyatras**: Mass mobilization
**5. International Advocacy**: Sought international support and pressure

**Outcomes:**

**1. Partial Success**: Supreme Court allowed construction but mandated better rehabilitation

**2. Policy Changes**: Influenced rehabilitation policies and environmental norms

**3. Global Attention**: World Bank withdrew funding due to international criticism

**4. Awareness**: Raised awareness about rights of displaced people

**5. Development Debate**: Forced national debate on development model and people's participation

**6. Continuing Struggle**: Movement continues despite court setbacks

**Significance:**
NBA represents broader question about development - who benefits and who pays the price? It highlighted the need to consider social and environmental costs of development projects and the rights of marginalized communities.`,
    points: [
      'Opposition to large dams on Narmada river',
      'Led by Medha Patkar',
      'Issue of displacement of 2-3 lakh people',
      'Inadequate rehabilitation plans',
      'Environmental concerns',
      'Used satyagraha, PIL, rallies',
      'World Bank withdrew funding',
      'Questioned development model',
      'Raised rights of displaced people'
    ],
    examTip: 'Discuss the specific issues, methods used, and outcomes. Link to larger questions about development and displacement.'
  },

  // Chapter 8: Regional Aspirations
  {
    id: 'q8-1',
    chapterId: 'regional-aspirations',
    question: 'What is meant by regionalism?',
    type: '2-marks',
    answer: `Regionalism refers to a political ideology that prioritizes the interests and identity of a particular region or state over national interests. It involves strong attachment to one's region based on language, culture, ethnicity, or economic interests. In India, regionalism has manifested in demands for greater autonomy, separate statehood, preferential treatment for locals, and sometimes in conflicts with the central government over resources and power.`,
    points: [
      'Prioritizing regional over national interests',
      'Based on language, culture, ethnicity',
      'Demands for autonomy or separate states',
      'Sons of the soil movements',
      'Centre-State conflicts',
      'Can threaten national integration if extreme'
    ]
  },
  {
    id: 'q8-2',
    chapterId: 'regional-aspirations',
    question: 'Discuss the Punjab crisis.',
    type: '6-marks',
    answer: `The Punjab crisis of the 1980s was a complex political and communal conflict that threatened national security:

**Background:**
Punjab, a prosperous state after Green Revolution, experienced growing discontent among sections of Sikh community over political, religious, and economic issues.

**Causes:**

**1. Political Marginalization**: Sikhs felt politically marginalized at national level despite economic prosperity.

**2. Anandpur Sahib Resolution (1973)**: Akali Dal's demand for greater autonomy for Punjab, protection of Sikh identity, and control over water resources.

**3. Water Disputes**: Conflicts with Haryana and Rajasthan over sharing river waters.

**4. Religious Issues**: Demand for separate Sikh personal law, recognition of Amritsar as holy city.

**5. Chandigarh Issue**: Capital shared with Haryana; Sikhs demanded it exclusively for Punjab.

**6. Political Manipulation**: Congress allegedly played communal politics, initially supporting Bhindranwale to counter Akalis.

**Escalation:**

**1. Rise of Militancy**: Jarnail Singh Bhindranwale emerged as radical leader, demanding Khalistan (separate Sikh state).

**2. Terrorism**: Increase in terrorist violence, targeting Hindus and moderate Sikhs.

**3. Golden Temple Occupation**: Militants made Golden Temple their headquarters, storing arms.

**Operation Blue Star (June 1984):**
- Indian Army entered Golden Temple to flush out militants
- Heavy casualties, damage to Akal Takht
- Deep hurt to Sikh sentiments
- Bhindranwale killed

**Consequences:**

**1. Indira Gandhi's Assassination**: Her Sikh bodyguards assassinated her on October 31, 1984, in revenge.

**2. Anti-Sikh Riots**: Massive violence against Sikhs in Delhi and other places, thousands killed.

**3. Prolonged Insurgency**: Militancy continued through 1980s-early 1990s.

**4. Community Relations**: Damaged Hindu-Sikh relations.

**Resolution:**

**1. Punjab Accord (1985)**: Rajiv Gandhi-Longowal accord tried to address issues.

**2. Chandigarh Transfer**: Promised to Punjab (not implemented).

**3. Police Action**: Intensive police operations in 1990s eliminated militancy.

**4. Political Process**: Democratic elections restored normalcy.

**Lessons:**
The crisis showed dangers of mixing religion with politics, importance of addressing regional grievances timely, and need for sensitive handling of minority concerns.`,
    points: [
      'Anandpur Sahib Resolution demands',
      'Water disputes with neighboring states',
      'Rise of Khalistan movement',
      'Bhindranwale and militancy',
      'Operation Blue Star (June 1984)',
      'Indira Gandhi\'s assassination',
      'Anti-Sikh riots (1984)',
      'Punjab Accord (1985)',
      'Resolution through police action and elections'
    ],
    examTip: 'Organize chronologically: causes → escalation → Operation Blue Star → consequences → resolution. Mention dates.'
  },
  {
    id: 'q8-3',
    chapterId: 'regional-aspirations',
    question: 'Explain the Kashmir problem.',
    type: '6-marks',
    answer: `The Kashmir problem is India's most complex and persistent regional challenge with international dimensions:

**Historical Background:**
Kashmir, a princely state with Muslim majority and Hindu ruler (Maharaja Hari Singh), faced choice of joining India or Pakistan in 1947.

**Accession to India:**
- Pakistan sent tribal raiders in October 1947
- Maharaja requested Indian help and signed Instrument of Accession
- India airlifted troops, pushed back invaders
- Nehru took issue to UN, which called for plebiscite

**Special Status:**
- Article 370 gave J&K special autonomous status
- Own constitution, flag
- Laws required state's concurrence
- Article 35A restricted property rights to permanent residents

**India-Pakistan Dimension:**

**1. Wars**: Four wars (1947-48, 1965, 1971, 1999) fought over Kashmir

**2. Line of Control (LoC)**: Divides Kashmir between India and Pakistan

**3. Pakistan's Claim**: Considers Kashmir unfinished agenda of Partition, supports militancy

**4. Cross-Border Terrorism**: Pakistan-based groups infiltrate, sponsor terrorism

**Internal Challenges:**

**1. Militancy (1989 onwards)**:
- Kashmiri youth took up arms
- Pakistan provided training and weapons
- Separatist sentiment grew

**2. Political Issues**:
- Rigging in 1987 elections alienated youth
- Demands for azadi (freedom) or merger with Pakistan
- Rise of Hurriyat Conference

**3. Human Rights**:
- AFSPA (Armed Forces Special Powers Act) gives wide powers to army
- Allegations of human rights violations
- Disappearances, encounters

**4. Exodus of Kashmiri Pandits**:
- Hindu minority forced to flee in 1990s
- Living as refugees in own country

**India's Approach:**

**1. Military**: Large military presence to counter terrorism

**2. Political**: Holding elections, supporting democratic process

**3. Development**: Special packages for economic development

**4. Diplomatic**: Rejecting third-party mediation, bilateral approach with Pakistan

**Recent Developments:**

**1. Abrogation of Article 370 (August 2019)**:
- Special status revoked
- State bifurcated into two Union Territories - J&K and Ladakh
- Controversial move with mixed reactions

**2. Security Challenges**: Terrorism continues though reduced

**3. Political Process**: Elections and democratic institutions being restored

**International Dimension:**
- Pakistan internationalized issue, raises at UN
- India maintains it's bilateral issue
- China controls Aksai Chin (part of Kashmir)

**Challenges:**
- Building trust with people
- Addressing alienation of youth
- Balancing security and human rights
- Reconciling with Pakistan
- Ensuring development and opportunities

Kashmir remains a test of India's federal structure, secularism, and commitment to democracy and human rights.`,
    points: [
      'Accession to India in 1947',
      'Article 370 - special status (revoked 2019)',
      'Four wars with Pakistan',
      'Militancy since 1989',
      'Cross-border terrorism',
      'AFSPA and human rights issues',
      'Kashmiri Pandit exodus',
      'Bifurcation into UTs (2019)',
      'Bilateral issue with Pakistan'
    ],
    examTip: 'Cover historical background, India-Pakistan dimension, internal challenges, and recent developments. Remain factual and balanced.'
  },

  // Chapter 9: Recent Developments
  {
    id: 'q9-1',
    chapterId: 'recent-developments-in-indian-politics',
    question: 'What is coalition politics?',
    type: '2-marks',
    answer: `Coalition politics refers to a system where no single party wins absolute majority in elections, and multiple parties join together to form government. In India, coalition era began after 1989 elections. Coalition governments require consensus and compromise as partners have different ideologies and regional bases. This has led to more inclusive decision-making but also sometimes policy paralysis due to coalition compulsions.`,
    points: [
      'Multiple parties forming government together',
      'No single party majority',
      'Era began after 1989',
      'Requires consensus and compromise',
      'More inclusive but sometimes unstable',
      'Coalition compulsions affect policies'
    ]
  },
  {
    id: 'q9-2',
    chapterId: 'recent-developments-in-indian-politics',
    question: 'Explain the Mandal Commission recommendations and their impact.',
    type: '6-marks',
    answer: `The Mandal Commission report on Other Backward Classes (OBCs) was one of the most controversial issues in Indian politics:

**Background:**
Second Backward Classes Commission appointed in 1979 under B.P. Mandal to identify socially and educationally backward classes and suggest measures for their advancement.

**Recommendations (submitted 1980):**

**1. Identification**: Identified 3,743 communities as OBCs, constituting 52% of population

**2. 27% Reservation**: Recommended 27% reservation for OBCs in government jobs and educational institutions (added to existing 22.5% for SC/ST, total 49.5%)

**3. Criteria**: Used 11 social, educational, and economic criteria to identify backward classes

**4. Land Reforms**: Recommended land reforms and other developmental measures

**Implementation (1990):**
V.P. Singh's government implemented job reservations in August 1990, triggering massive controversy.

**Reactions:**

**Supporters' Arguments:**
1. Necessary for social justice
2. OBCs historically marginalized
3. Representation in administration needed
4. Constitutional mandate (Article 340)

**Opponents' Arguments:**
1. Merit compromised
2. Caste-based reservation perpetuates caste system
3. Creamy layer among OBCs didn't need reservation
4. Economic criteria more relevant than caste

**Protests:**
- Student protests, some self-immolations
- Upper caste backlash
- Massive political debate

**Supreme Court Verdict (Indra Sawhney case, 1992):**
1. Upheld 27% OBC reservation
2. Introduced "creamy layer" concept - economically advanced OBCs excluded
3. Limited total reservation to 50%
4. Affirmed reservation in promotions not mandatory

**Impact:**

**Political:**
1. **Consolidation of OBC Politics**: Rise of OBC leaders and parties (Lalu Prasad, Mulayam Singh, Nitish Kumar)
2. **Vote Bank Politics**: Parties cultivated OBC support
3. **Social Coalition**: Changed electoral arithmetic
4. **New Political Leadership**: Power shifted from upper castes

**Social:**
1. **Caste Assertion**: OBCs became more politically conscious
2. **Identity Politics**: Strengthened caste-based mobilization
3. **Social Conflict**: Increased caste tensions initially
4. **Awareness**: Backward classes more aware of rights

**Economic:**
1. **Employment**: Increased OBC representation in government jobs
2. **Education**: More OBCs in higher education
3. **Mobility**: Some social and economic mobility
4. **Creamy Layer Debate**: Question of who really benefits

**Long-term Effects:**
- Permanent feature of Indian politics
- Debate continues on reservation policy
- Demands for extension to private sector
- Questions about effectiveness in addressing inequality

The Mandal issue transformed Indian politics, making caste a central political factor and changing the nature of political competition.`,
    points: [
      'Mandal Commission (1979) identified OBCs',
      '27% reservation recommended',
      'Implemented by V.P. Singh (1990)',
      'Massive protests and controversy',
      'Supreme Court upheld with creamy layer',
      'Rise of OBC politics and leaders',
      'Changed electoral calculations',
      'Strengthened identity politics',
      'Debate on merit vs social justice'
    ],
    examTip: 'Cover recommendations, implementation, controversy, Supreme Court verdict, and long-term political/social impact.'
  },
  {
    id: 'q9-3',
    chapterId: 'recent-developments-in-indian-politics',
    question: 'Discuss economic liberalization and its impact.',
    type: '6-marks',
    answer: `India's economic liberalization since 1991 transformed the economy from a controlled regime to a market-oriented system:

**Background:**
By 1991, India faced severe economic crisis - foreign exchange reserves depleted, high inflation, large fiscal deficit, and threat of default on international loans. This forced fundamental policy change.

**Liberalization, Privatization, and Globalization (LPG Reforms):**

**Key Reforms under Narasimha Rao-Manmohan Singh:**

**1. Industrial Policy**:
- Delicensing of industries
- Reduced role of public sector
- Removal of MRTP restrictions
- Welcome to foreign investment

**2. Trade Policy**:
- Reduction in import tariffs
- Rupee made convertible
- Export-oriented policies
- Integration with world economy

**3. Financial Sector**:
- Banking sector reforms
- Stock market reforms
- Foreign institutional investors allowed
- Deregulation of interest rates

**4. Fiscal Reforms**:
- Tax reforms, reduction in rates
- Disinvestment of public sector units
- Fiscal discipline measures

**Positive Impacts:**

**1. Economic Growth**:
- GDP growth rate increased (6-8% average)
- India became one of fastest growing economies
- Foreign exchange reserves increased dramatically

**2. Consumer Benefits**:
- Greater choice of goods and services
- Better quality products
- Competitive prices
- Technological advancement

**3. Employment**:
- IT and service sector jobs expanded
- New opportunities in private sector

**4. Integration**:
- India integrated with global economy
- Increased foreign investment
- Indian companies went global

**5. Middle Class Expansion**:
- Growing middle class
- Increased purchasing power
- Lifestyle changes

**Negative Impacts:**

**1. Inequality**:
- Rich-poor gap widened
- Benefits concentrated in urban areas
- Regional disparities increased

**2. Agriculture**:
- Agricultural growth slowed
- Farmer distress, suicides
- Reduced public investment in agriculture

**3. Employment**:
- Jobless growth in some sectors
- Informal sector expanded
- Job security reduced

**4. Public Sector**:
- Closure of PSUs, job losses
- Reduced social spending initially

**5. Small Industries**:
- Competition from large corporations
- Many small units closed

**Political Debates:**

**Supporters**:
- Necessary for growth and competitiveness
- No alternative to globalization
- Poverty reduction through growth

**Critics**:
- Widening inequality
- Loss of economic sovereignty
- Neglect of poor and vulnerable
- Western model imposed

**Impact on Politics:**

**1. Consensus**: Broad political consensus emerged on reforms (with variations)

**2. New Issues**: Debate shifted from ideology to governance

**3. Regional Parties**: Economic issues gave space to regional parties

**4. Coalition Compulsions**: Reforms slowed due to coalition politics

**Social Impact:**
- Consumerism increased
- Traditional values challenged
- Youth aspirations changed
- Urban-rural divide widened

**Current Scenario:**
- Reforms continue but with "Indian characteristics"
- Debate on inclusive growth
- Focus on welfare schemes alongside reforms
- Questions about sustainability and equity

Liberalization changed India's economic trajectory and social fabric, creating opportunities but also new challenges of inequality and exclusion.`,
    points: [
      '1991 economic crisis triggered reforms',
      'Narasimha Rao-Manmohan Singh led reforms',
      'Liberalization, Privatization, Globalization (LPG)',
      'Increased GDP growth to 6-8%',
      'Expanded middle class and opportunities',
      'Widened inequality and regional disparities',
      'Agricultural distress and farmer issues',
      'Debate on inclusive growth',
      'Changed political discourse'
    ],
    examTip: 'Discuss both positive and negative impacts equally. Mention the 1991 crisis as trigger and political debates around reforms.'
  }
];

export const getQuestionsByChapter = (chapterId: string): Question[] => {
  return questionBank.filter(q => q.chapterId === chapterId);
};

export const getQuestionsByType = (chapterId: string, type: Question['type']): Question[] => {
  return questionBank.filter(q => q.chapterId === chapterId && q.type === type);
};
