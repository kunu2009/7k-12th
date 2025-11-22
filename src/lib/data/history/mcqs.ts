export interface Question {
  question: string;
  options: string[];
  correctAnswer: string;
  explanation?: string;
}

export const mcqs: Record<string, Question[]> = {
  '1': [
    {
      question: 'Which period is generally considered the timeframe of the European Renaissance?',
      options: ['10th to 12th century', '14th to 17th century', '18th to 19th century', '5th to 10th century'],
      correctAnswer: '14th to 17th century',
      explanation: 'The Renaissance was a period of cultural, artistic, political, and economic "rebirth" in Europe following the Middle Ages.'
    },
    {
      question: 'Who proposed the heliocentric model of the universe?',
      options: ['Galileo Galilei', 'Isaac Newton', 'Nicolaus Copernicus', 'Johannes Kepler'],
      correctAnswer: 'Nicolaus Copernicus',
      explanation: 'Copernicus challenged the geocentric view by proposing that the Sun, not the Earth, was at the center of the universe.'
    },
    {
      question: 'Which invention by James Watt was pivotal to the Industrial Revolution?',
      options: ['The spinning jenny', 'The steam engine', 'The printing press', 'The telescope'],
      correctAnswer: 'The steam engine',
      explanation: 'James Watt\'s improvements to the steam engine made it a practical power source for factories and transport, driving the Industrial Revolution.'
    },
    {
      question: 'The "Columbian Exchange" refers to:',
      options: ['The trade of spices between India and Europe', 'The exchange of goods, ideas, and diseases between the Old World and the New World', 'The stock market in Columbia', 'A peace treaty between Spain and Portugal'],
      correctAnswer: 'The exchange of goods, ideas, and diseases between the Old World and the New World',
      explanation: 'Following Columbus\'s voyages, there was a widespread transfer of plants, animals, culture, human populations, technology, and diseases between the Americas and the Old World.'
    },
    {
      question: 'Who was the Portuguese explorer who first reached India by sea in 1498?',
      options: ['Christopher Columbus', 'Ferdinand Magellan', 'Vasco da Gama', 'Bartolomeu Dias'],
      correctAnswer: 'Vasco da Gama',
      explanation: 'Vasco da Gama\'s voyage around Africa to India opened up the lucrative spice trade to the Portuguese.'
    },
    {
      question: 'The Renaissance began in which country?',
      options: ['France', 'England', 'Italy', 'Spain'],
      correctAnswer: 'Italy',
      explanation: 'The Renaissance started in the city-states of Italy, such as Florence, due to their wealth, trade connections, and preservation of Roman history.'
    },
    {
      question: 'Which of the following was NOT a characteristic of the Renaissance?',
      options: ['Humanism', 'Secularism', 'Feudalism', 'Individualism'],
      correctAnswer: 'Feudalism',
      explanation: 'The Renaissance marked a move away from the feudal systems of the Middle Ages towards more modern social and economic structures.'
    },
    {
      question: 'Galileo Galilei is famous for using which instrument to support the heliocentric theory?',
      options: ['Microscope', 'Telescope', 'Compass', 'Astrolabe'],
      correctAnswer: 'Telescope',
      explanation: 'Galileo improved the telescope and used it to observe the moons of Jupiter and the phases of Venus, providing evidence for the Copernican system.'
    },
    {
      question: 'The Industrial Revolution began in the late 18th century in which country?',
      options: ['Germany', 'United States', 'France', 'Great Britain'],
      correctAnswer: 'Great Britain',
      explanation: 'Britain had the necessary conditions—coal, iron, capital, and a stable government—to kickstart the Industrial Revolution.'
    },
    {
      question: 'Prince Henry the Navigator was a key figure in the exploration efforts of which nation?',
      options: ['Spain', 'Portugal', 'England', 'Netherlands'],
      correctAnswer: 'Portugal',
      explanation: 'Prince Henry sponsored many voyages of exploration down the west coast of Africa, laying the groundwork for Portugal\'s maritime empire.'
    },
    {
      question: 'What was the primary motivation for Christopher Columbus\'s voyage in 1492?',
      options: ['To prove the Earth was round', 'To find a westward sea route to Asia', 'To discover the Americas', 'To spread democracy'],
      correctAnswer: 'To find a westward sea route to Asia',
      explanation: 'Columbus believed he could reach the rich markets of Asia by sailing west across the Atlantic, not realizing the Americas stood in the way.'
    },
    {
      question: 'The "Scientific Method" emphasizes:',
      options: ['Reliance on ancient texts', 'Faith and divine revelation', 'Observation and experimentation', 'Guesswork and intuition'],
      correctAnswer: 'Observation and experimentation',
      explanation: 'The scientific method, developed during the Renaissance, relies on empirical evidence gained through observation and experiments to test hypotheses.'
    },
    {
      question: 'Which industry was the first to be mechanized during the Industrial Revolution?',
      options: ['Steel', 'Textile', 'Automobile', 'Chemical'],
      correctAnswer: 'Textile',
      explanation: 'Inventions like the spinning jenny and the power loom transformed the textile industry, moving production from homes to factories.'
    },
    {
      question: 'The term "Humanism" in the Renaissance context refers to:',
      options: ['A rejection of religion', 'An intellectual movement focused on human potential and achievements', 'The study of human anatomy only', 'A political party'],
      correctAnswer: 'An intellectual movement focused on human potential and achievements',
      explanation: 'Humanism shifted the focus from the divine to the human, emphasizing the value of the individual and the study of classical texts.'
    },
    {
      question: 'Who is considered the "Father of Modern Astronomy"?',
      options: ['Ptolemy', 'Aristotle', 'Nicolaus Copernicus', 'Isaac Newton'],
      correctAnswer: 'Nicolaus Copernicus',
      explanation: 'Copernicus is often given this title for his revolutionary heliocentric theory which displaced the Earth from the center of the universe.'
    }
  ],
  '2': [
    {
      question: 'Which of the following was NOT a primary motivation for European colonialism ("Gold, Glory, God")?',
      options: ['To spread democracy', 'To acquire wealth (Gold)', 'To spread Christianity (God)', 'To increase national prestige (Glory)'],
      correctAnswer: 'To spread democracy',
      explanation: 'The spread of democracy was not a motivation; colonial powers were interested in wealth, power, and religious conversion.'
    },
    {
      question: 'The "Scramble for Africa" was formalized at which international meeting?',
      options: ['The Treaty of Versailles', 'The Berlin Conference', 'The Congress of Vienna', 'The Yalta Conference'],
      correctAnswer: 'The Berlin Conference',
      explanation: 'The Berlin Conference of 1884-85 regulated European colonization and trade in Africa, effectively partitioning the continent.'
    },
    {
      question: 'Which European powers were the first to establish colonial empires?',
      options: ['Britain and France', 'Germany and Italy', 'Portugal and Spain', 'Netherlands and Belgium'],
      correctAnswer: 'Portugal and Spain',
      explanation: 'Portugal and Spain were the pioneers of the Age of Discovery and the first to establish global empires in the 15th and 16th centuries.'
    },
    {
      question: 'What is the definition of colonialism?',
      options: ['A system of free trade', 'The policy of a nation seeking to extend its authority over other territories', 'A military alliance', 'A religious movement'],
      correctAnswer: 'The policy of a nation seeking to extend its authority over other territories',
      explanation: 'Colonialism involves the subjugation of a people or area by a foreign power, often for economic exploitation.'
    },
    {
      question: 'Which of the following was a negative impact of colonialism on indigenous populations?',
      options: ['Preservation of local cultures', 'Economic independence', 'Spread of diseases and suppression of culture', 'Establishment of democratic governments'],
      correctAnswer: 'Spread of diseases and suppression of culture',
      explanation: 'Colonialism often brought devastating diseases and actively worked to suppress or destroy indigenous languages, religions, and traditions.'
    },
    {
      question: 'The economic system where colonies existed primarily to benefit the mother country is known as:',
      options: ['Socialism', 'Mercantilism', 'Capitalism', 'Feudalism'],
      correctAnswer: 'Mercantilism',
      explanation: 'Under mercantilism, colonies were forced to supply raw materials to the mother country and buy its manufactured goods, ensuring a favorable balance of trade for the colonizer.'
    },
    {
      question: 'Which country had the largest colonial empire in history?',
      options: ['Spain', 'France', 'Great Britain', 'Russia'],
      correctAnswer: 'Great Britain',
      explanation: 'At its height, the British Empire was the largest empire in history and, for over a century, was the foremost global power.'
    },
    {
      question: 'The "White Man\'s Burden" was a poem by Rudyard Kipling that was used to justify:',
      options: ['The abolition of slavery', 'The independence of colonies', 'Imperialism and colonialism', 'The industrial revolution'],
      correctAnswer: 'Imperialism and colonialism',
      explanation: 'The poem suggested that it was the moral duty of white Europeans to "civilize" the non-white peoples of the world.'
    },
    {
      question: 'Which of these was a major cash crop introduced by colonizers in many tropical colonies?',
      options: ['Wheat', 'Rubber', 'Barley', 'Oats'],
      correctAnswer: 'Rubber',
      explanation: 'Rubber, along with sugar, cotton, and tea, was a key cash crop grown in plantations for export to Europe.'
    },
    {
      question: 'The arbitrary drawing of borders in Africa by European powers has led to:',
      options: ['Lasting peace and stability', 'Ethnic conflicts and political instability', 'Rapid economic development', 'The unification of African tribes'],
      correctAnswer: 'Ethnic conflicts and political instability',
      explanation: 'By ignoring ethnic and tribal boundaries, colonial borders forced rival groups together and split others apart, creating a legacy of conflict.'
    }
  ],
  '3': [
    {
      question: 'Who was the first European explorer to reach India by sea?',
      options: ['Christopher Columbus', 'Vasco da Gama', 'Ferdinand Magellan', 'Marco Polo'],
      correctAnswer: 'Vasco da Gama',
      explanation: 'Vasco da Gama arrived in Calicut in 1498, marking the beginning of the European maritime presence in India.'
    },
    {
      question: 'Which battle in 1757 marked the beginning of British political rule in India?',
      options: ['Battle of Buxar', 'Battle of Panipat', 'Battle of Plassey', 'Battle of Wandiwash'],
      correctAnswer: 'Battle of Plassey',
      explanation: 'The British East India Company, led by Robert Clive, defeated the Nawab of Bengal, Siraj-ud-Daulah, at Plassey.'
    },
    {
      question: 'The "Doctrine of Lapse" was introduced by which Governor-General?',
      options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Cornwallis', 'Lord Hastings'],
      correctAnswer: 'Lord Dalhousie',
      explanation: 'Lord Dalhousie used this doctrine to annex states like Jhansi, Satara, and Nagpur if the ruler died without a natural male heir.'
    },
    {
      question: 'Which European power was the main rival of the British in India during the 18th century?',
      options: ['The Portuguese', 'The Dutch', 'The French', 'The Spanish'],
      correctAnswer: 'The French',
      explanation: 'The British and French fought the Carnatic Wars for supremacy in South India, with the British ultimately prevailing.'
    },
    {
      question: 'The "Subsidiary Alliance" system was introduced by:',
      options: ['Lord Wellesley', 'Lord Dalhousie', 'Robert Clive', 'Warren Hastings'],
      correctAnswer: 'Lord Wellesley',
      explanation: 'Under this system, Indian rulers had to maintain British troops in their territory and pay for them, effectively losing their independence.'
    },
    {
      question: 'The Battle of Buxar (1764) resulted in the British gaining the "Diwani" rights, which meant:',
      options: ['The right to administer justice', 'The right to collect revenue', 'The right to build forts', 'The right to mint coins'],
      correctAnswer: 'The right to collect revenue',
      explanation: 'The Treaty of Allahabad granted the EIC the Diwani of Bengal, Bihar, and Orissa, giving them control over the region\'s vast financial resources.'
    },
    {
      question: 'Which city was the headquarters of the French in India?',
      options: ['Madras', 'Calcutta', 'Pondicherry', 'Bombay'],
      correctAnswer: 'Pondicherry',
      explanation: 'Pondicherry (Puducherry) was the capital of French India and their most important settlement.'
    },
    {
      question: 'The "De-industrialization" of India under British rule refers to:',
      options: ['The building of new factories', 'The destruction of traditional Indian handicrafts and textile industries', 'The urbanization of India', 'The introduction of railways'],
      correctAnswer: 'The destruction of traditional Indian handicrafts and textile industries',
      explanation: 'British policies favored British manufactured goods, leading to the collapse of India\'s world-renowned handloom and handicraft sectors.'
    },
    {
      question: 'Who was the Nawab of Bengal defeated at the Battle of Plassey?',
      options: ['Mir Jafar', 'Siraj-ud-Daulah', 'Mir Qasim', 'Alivardi Khan'],
      correctAnswer: 'Siraj-ud-Daulah',
      explanation: 'Siraj-ud-Daulah was betrayed by his commander Mir Jafar and defeated by Robert Clive.'
    },
    {
      question: 'The Permanent Settlement of Bengal was introduced by:',
      options: ['Lord Cornwallis', 'Lord Dalhousie', 'Lord Wellesley', 'Lord Bentinck'],
      correctAnswer: 'Lord Cornwallis',
      explanation: 'Introduced in 1793, this system fixed the land revenue demand in perpetuity and created a class of loyal landlords (zamindars).'
    }
  ],
  '4': [
    {
      question: 'Who was the founder of the Maratha Empire?',
      options: ['Sambhaji', 'Chhatrapati Shivaji Maharaj', 'Baji Rao I', 'Shahaji Raje'],
      correctAnswer: 'Chhatrapati Shivaji Maharaj',
      explanation: 'Shivaji Maharaj carved out an independent Maratha kingdom from the declining Adil Shahi sultanate of Bijapur and challenged the Mughals.'
    },
    {
      question: 'The Third Battle of Panipat (1761) was fought between the Marathas and:',
      options: ['The British', 'The Mughals', 'Ahmad Shah Abdali (Afghans)', 'The Nizam of Hyderabad'],
      correctAnswer: 'Ahmad Shah Abdali (Afghans)',
      explanation: 'The Marathas suffered a devastating defeat at the hands of the Afghan invader Ahmad Shah Abdali, checking their northern expansion.'
    },
    {
      question: 'The Treaty of Bassein (1802) was signed between the British and which Peshwa?',
      options: ['Baji Rao I', 'Madhav Rao', 'Baji Rao II', 'Nana Saheb'],
      correctAnswer: 'Baji Rao II',
      explanation: 'Baji Rao II signed this subsidiary alliance with the British to regain his throne, which led to the Second Anglo-Maratha War.'
    },
    {
      question: 'The Siddis of Janjira were known for their strength in:',
      options: ['Cavalry warfare', 'Guerrilla warfare', 'Naval warfare', 'Diplomacy'],
      correctAnswer: 'Naval warfare',
      explanation: 'The Siddis were a formidable naval power on the Konkan coast and controlled the impregnable sea fort of Janjira.'
    },
    {
      question: 'Which Maratha statesman was known as the "Maratha Machiavelli"?',
      options: ['Mahadji Scindia', 'Nana Phadnavis', 'Malhar Rao Holkar', 'Raghunath Rao'],
      correctAnswer: 'Nana Phadnavis',
      explanation: 'Nana Phadnavis played a crucial role in holding the Maratha Confederacy together and resisting the British during the First Anglo-Maratha War.'
    },
    {
      question: 'The guerrilla warfare tactics used by Shivaji Maharaj were known as:',
      options: ['Blitzkrieg', 'Ganimi Kava', 'Trench warfare', 'Gorilla warfare'],
      correctAnswer: 'Ganimi Kava',
      explanation: 'Ganimi Kava involved surprise attacks, ambushes, and high mobility, allowing the smaller Maratha army to defeat larger Mughal forces.'
    },
    {
      question: 'The First Anglo-Maratha War ended with which treaty?',
      options: ['Treaty of Surat', 'Treaty of Purandar', 'Treaty of Salbai', 'Treaty of Bassein'],
      correctAnswer: 'Treaty of Salbai',
      explanation: 'Signed in 1782, the Treaty of Salbai restored the status quo and secured peace between the Marathas and the British for 20 years.'
    },
    {
      question: 'Which British general (later Duke of Wellington) defeated the Marathas in the Second Anglo-Maratha War?',
      options: ['Robert Clive', 'Arthur Wellesley', 'Lord Lake', 'Hector Munro'],
      correctAnswer: 'Arthur Wellesley',
      explanation: 'Arthur Wellesley won decisive victories at Assaye and Argaon against the Maratha forces.'
    },
    {
      question: 'The Maratha navy was developed primarily to counter which powers?',
      options: ['The French and Dutch', 'The Portuguese and the Siddis', 'The Mughals and the British', 'The Chinese and Arabs'],
      correctAnswer: 'The Portuguese and the Siddis',
      explanation: 'Shivaji realized the importance of a navy to protect the Konkan coast from the Portuguese and the Siddi naval threats.'
    },
    {
      question: 'The final defeat of the Marathas in the Third Anglo-Maratha War led to:',
      options: ['The restoration of the Mughal Empire', 'The abolition of the Peshwaship and annexation of Maratha territories', 'The independence of the Maratha Confederacy', 'A permanent alliance with the British'],
      correctAnswer: 'The abolition of the Peshwaship and annexation of Maratha territories',
      explanation: 'The British extinguished the Maratha Empire, exiled the Peshwa, and became the undisputed masters of India.'
    }
  ],
  '5': [
    {
      question: 'Who is known as the "Father of Modern India"?',
      options: ['Swami Vivekananda', 'Raja Ram Mohan Roy', 'Mahatma Gandhi', 'Ishwar Chandra Vidyasagar'],
      correctAnswer: 'Raja Ram Mohan Roy',
      explanation: 'Raja Ram Mohan Roy is considered the pioneer of modern Indian social and religious reform.'
    },
    {
      question: 'The Brahmo Samaj was founded by:',
      options: ['Swami Dayananda Saraswati', 'Raja Ram Mohan Roy', 'Debendranath Tagore', 'Keshub Chandra Sen'],
      correctAnswer: 'Raja Ram Mohan Roy',
      explanation: 'Raja Ram Mohan Roy founded the Brahmo Sabha in 1828, which later became the Brahmo Samaj.'
    },
    {
      question: 'Which reformer gave the call "Go back to the Vedas"?',
      options: ['Swami Vivekananda', 'Raja Ram Mohan Roy', 'Swami Dayananda Saraswati', 'Ramakrishna Paramahamsa'],
      correctAnswer: 'Swami Dayananda Saraswati',
      explanation: 'Swami Dayananda Saraswati, founder of the Arya Samaj, believed the Vedas were the source of all true knowledge.'
    },
    {
      question: 'The Satyashodhak Samaj was founded by:',
      options: ['B.R. Ambedkar', 'Jyotiba Phule', 'Gopal Hari Deshmukh', 'Savitribai Phule'],
      correctAnswer: 'Jyotiba Phule',
      explanation: 'Jyotiba Phule founded the Satyashodhak Samaj in 1873 to fight for the rights of the lower castes.'
    },
    {
      question: 'Who founded the Ramakrishna Mission?',
      options: ['Ramakrishna Paramahamsa', 'Swami Vivekananda', 'Sarada Devi', 'Mahendranath Gupta'],
      correctAnswer: 'Swami Vivekananda',
      explanation: 'Swami Vivekananda founded the Ramakrishna Mission in 1897 to propagate the teachings of his guru and serve humanity.'
    },
    {
      question: 'The Aligarh Movement was led by:',
      options: ['Muhammad Ali Jinnah', 'Maulana Azad', 'Sir Syed Ahmed Khan', 'Aga Khan'],
      correctAnswer: 'Sir Syed Ahmed Khan',
      explanation: 'Sir Syed Ahmed Khan led the movement to introduce modern education to the Muslim community in India.'
    },
    {
      question: 'Who was the first woman to open a school for girls in Pune?',
      options: ['Pandita Ramabai', 'Savitribai Phule', 'Sarojini Naidu', 'Annie Besant'],
      correctAnswer: 'Savitribai Phule',
      explanation: 'Savitribai Phule, along with her husband Jyotiba Phule, opened the first school for girls in Pune in 1848.'
    },
    {
      question: 'The Bengal Sati Regulation of 1829 was passed during the tenure of which Governor-General?',
      options: ['Lord Dalhousie', 'Lord Curzon', 'Lord William Bentinck', 'Lord Cornwallis'],
      correctAnswer: 'Lord William Bentinck',
      explanation: 'Governor-General Lord William Bentinck was sympathetic to Ram Mohan Roy\'s cause and passed the regulation to make the practice of Sati illegal and punishable.'
    },
    {
      question: 'The headquarters of the Theosophical Society in India is located at:',
      options: ['Calcutta', 'Bombay', 'Adyar (Madras)', 'Pune'],
      correctAnswer: 'Adyar (Madras)',
      explanation: 'After its founding in New York, the society moved its international headquarters to Adyar, a neighborhood in present-day Chennai.'
    },
    {
      question: 'Which of these was NOT a practice condemned by the Arya Samaj?',
      options: ['Idol Worship', 'Caste System', 'Study of the Vedas', 'Child Marriage'],
      correctAnswer: 'Study of the Vedas',
      explanation: 'The Arya Samaj did not condemn the study of the Vedas; on the contrary, it held the Vedas as the supreme and infallible source of all knowledge.'
    },
    {
      question: 'Which reformer is associated with the founding of the Deccan Education Society?',
      options: ['Raja Ram Mohan Roy', 'Jyotiba Phule', 'Gopal Ganesh Agarkar and Lokmanya Tilak', 'Swami Dayananda Saraswati'],
      correctAnswer: 'Gopal Ganesh Agarkar and Lokmanya Tilak',
      explanation: 'The Deccan Education Society was founded in 1884 in Pune by prominent figures like Tilak and Agarkar to provide quality modern education, establishing Fergusson College.'
    },
    {
      question: 'The Singh Sabha movement was a social and religious reform movement among which community?',
      options: ['The Muslims', 'The Parsis', 'The Sikhs', 'The Jains'],
      correctAnswer: 'The Sikhs',
      explanation: 'The Singh Sabha movement arose in the late 19th century to revive and reform Sikhism, promote education, and counter the proselytizing activities of Christian missionaries and the Arya Samaj.'
    },
    {
      question: 'Which reformer from Maharashtra wrote the influential text "Shetkaryacha Asud" (The Cultivator\'s Whipcord)?',
      options: ['Gopal Hari Deshmukh', 'Jyotiba Phule', 'B. R. Ambedkar', 'V. D. Savarkar'],
      correctAnswer: 'Jyotiba Phule',
      explanation: '"Shetkaryacha Asud" was another critical work by Jyotiba Phule that detailed the exploitation of the peasant masses.'
    },
    {
      question: 'Debendranath Tagore, father of Rabindranath Tagore, took over the leadership of which organization after Ram Mohan Roy?',
      options: ['Arya Samaj', 'Satyashodhak Samaj', 'Brahmo Samaj', 'Ramakrishna Mission'],
      correctAnswer: 'Brahmo Samaj',
      explanation: 'Debendranath Tagore revitalized the Brahmo Samaj and gave it a formal structure and creed after the death of its founder.'
    },
    {
      question: 'The introduction of what by the British was a major catalyst for the reform movements?',
      options: ['Railways', 'The English language and Western education', 'The game of cricket', 'A new currency'],
      correctAnswer: 'The English language and Western education',
      explanation: 'Western education exposed a section of Indian society to ideas of rationalism, humanism, democracy, and science, which prompted them to re-examine their own society.'
    },
    {
      question: 'Keshub Chandra Sen was associated with a more radical branch of which reform movement?',
      options: ['Brahmo Samaj', 'Arya Samaj', 'Theosophical Society', 'Prarthana Samaj'],
      correctAnswer: 'Brahmo Samaj',
      explanation: 'Keshub Chandra Sen led a more radical faction of the Brahmo Samaj, called the Brahmo Samaj of India, which advocated for more drastic social reforms. However, a controversy over his daughter\'s child marriage led to a split.'
    },
    {
      question: 'The idea of "One religion, one caste, one God for mankind" was a teaching of which reformer from Kerala?',
      options: ['Chattampi Swamikal', 'Narayana Guru', 'Ayyankali', 'Vaikunta Swamikal'],
      correctAnswer: 'Narayana Guru',
      explanation: 'Sri Narayana Guru was a pivotal social reformer from Kerala who led a movement against the rigid caste system and preached a message of spiritual and social equality.'
    },
    {
      question: 'Pandita Ramabai was a prominent Indian social reformer whose work primarily focused on:',
      options: ['The rights of industrial workers', 'The education and emancipation of women', 'The abolition of landlordism', 'Environmental protection'],
      correctAnswer: 'The education and emancipation of women',
      explanation: 'Pandita Ramabai was a champion of women\'s rights and education, founding the Arya Mahila Samaj and the Sharada Sadan to provide housing and education for widows.'
    },
    {
      question: 'The Self-Respect Movement, a major social reform movement, was founded in which region?',
      options: ['Bengal', 'Punjab', 'Maharashtra', 'Tamil Nadu'],
      correctAnswer: 'Tamil Nadu',
      explanation: 'The Self-Respect Movement was founded by E. V. Ramasamy (Periyar) in Tamil Nadu to challenge the Brahminical social hierarchy and promote a rational, atheistic worldview.'
    },
    {
      question: 'What was the primary language used by Swami Dayananda Saraswati for his writings and speeches to reach a wider audience?',
      options: ['Sanskrit', 'English', 'Bengali', 'Hindi'],
      correctAnswer: 'Hindi',
      explanation: 'Although he was a profound Sanskrit scholar, Dayananda Saraswati chose to write his major work, "Satyartha Prakash," and preach in Hindi to make his message accessible to the common people of North India.'
    },
    {
      question: 'The main target of the Aligarh Movement was to:',
      options: ['Reconcile modern scientific knowledge with Islamic faith', 'Overthrow the British', 'Establish a separate Muslim state', 'Revive traditional Islamic education (madrasas)'],
      correctAnswer: 'Reconcile modern scientific knowledge with Islamic faith',
      explanation: 'Sir Syed Ahmed Khan believed that the Muslim community needed to embrace modern education to progress, and he worked to show that this was not incompatible with their religious beliefs.'
    },
    {
      question: 'Which of the following describes the approach of the Prarthana Samaj?',
      options: ['Radical and revolutionary', 'Focused only on political change', 'Gradual and cautious social reform', 'Exclusively religious and spiritual'],
      correctAnswer: 'Gradual and cautious social reform',
      explanation: 'Influenced by the Brahmo Samaj, the Prarthana Samaj in Maharashtra focused on promoting gradual social and religious reform through education and persuasion rather than direct confrontation.'
    },
    {
      question: 'Which reform movement is associated with Annie Besant in India?',
      options: ['Arya Samaj', 'Theosophical Society', 'Ramakrishna Mission', 'Brahmo Samaj'],
      correctAnswer: 'Theosophical Society',
      explanation: 'Annie Besant, an Irish socialist and women\'s rights activist, became the president of the Theosophical Society and played a crucial role in popularizing it in India and linking it to Indian nationalism.'
    },
    {
      question: 'The practice of untouchability was most forcefully challenged by:',
      options: ['Raja Ram Mohan Roy', 'Swami Vivekananda', 'Jyotiba Phule and later B.R. Ambedkar', 'Sir Syed Ahmed Khan'],
      correctAnswer: 'Jyotiba Phule and later B.R. Ambedkar',
      explanation: 'While many reformers opposed untouchability, Jyotiba Phule in the 19th century and Dr. B.R. Ambedkar in the 20th century made the fight against it the central part of their life\'s work.'
    },
    {
      question: 'The reformers\' emphasis on education led to the establishment of many:',
      options: ['Factories and mills', 'Schools and colleges', 'Temples and mosques', 'Political parties'],
      correctAnswer: 'Schools and colleges',
      explanation: 'A key legacy of the reform movements was the founding of numerous educational institutions, often with a focus on modern subjects and education for women and lower castes.'
    },
    {
      question: 'Gopal Hari Deshmukh, a reformer from Maharashtra, was popularly known by which pen name?',
      options: ['Lokmanya', 'Lokahitawadi', 'Mahatma', 'Gurudev'],
      correctAnswer: 'Lokahitawadi',
      explanation: 'Gopal Hari Deshmukh wrote a series of letters in a weekly paper under the pen name "Lokahitawadi" (One who works for the good of the people), in which he advocated for social reform.'
    },
    {
      question: 'A common criticism of the early reform movements was that they were:',
      options: ['Too focused on the poor', 'Largely confined to the educated, urban elite', 'Too aggressive and violent', 'Completely anti-British'],
      correctAnswer: 'Largely confined to the educated, urban elite',
      explanation: 'Initially, the message and membership of many reform movements were limited to a small class of Western-educated individuals in cities like Calcutta, Bombay, and Madras.'
    },
    {
      question: 'The work of the Ramakrishna Mission can be best described as:',
      options: ['Political activism', 'Doctrinal reform', 'Humanitarian and educational work', 'Literary revival'],
      correctAnswer: 'Humanitarian and educational work',
      explanation: 'The Mission\'s primary focus has always been on practical philanthropy, such as running hospitals, schools, rural development projects, and disaster relief, as a form of spiritual service.'
    },
    {
      question: 'The fight against which social evil was a common thread between Raja Ram Mohan Roy and Ishwar Chandra Vidyasagar?',
      options: ['The caste system', 'Idol worship', 'The oppression of women', 'British rule'],
      correctAnswer: 'The oppression of women',
      explanation: 'Both reformers dedicated a significant part of their lives to improving the status of women, with Roy focusing on abolishing Sati and Vidyasagar on legalizing widow remarriage.'
    }
  ],
  '6': [
    {
      question: 'The Indian Revolt of 1857 led to which major political change?',
      options: ['The formation of the Indian National Congress', 'The end of British rule', 'The start of direct rule by the British Crown', 'The partition of Bengal'],
      correctAnswer: 'The start of direct rule by the British Crown',
      explanation: 'After the 1857 Revolt, the rule of the East India Company was abolished, and India came under the direct control of the British government and Queen Victoria.'
    },
    {
      question: 'Who was a prominent leader of the "Extremist" faction of the Indian National Congress?',
      options: ['Gopal Krishna Gokhale', 'A.O. Hume', 'Bal Gangadhar Tilak', 'Dadabhai Naoroji'],
      correctAnswer: 'Bal Gangadhar Tilak',
      explanation: 'Bal Gangadhar Tilak, along with Lala Lajpat Rai and Bipin Chandra Pal, was a key leader of the Extremist faction that called for Swaraj.'
    },
    {
      question: 'The Dandi March is associated with which movement led by Mahatma Gandhi?',
      options: ['Non-Cooperation Movement', 'Quit India Movement', 'Swadeshi Movement', 'Civil Disobedience Movement'],
      correctAnswer: 'Civil Disobedience Movement',
      explanation: 'The Dandi Salt March in 1930 was the inaugural act of the Civil Disobedience Movement, where Gandhi and his followers protested the British salt tax.'
    },
    {
      question: 'Who formed the Indian National Army (INA) to fight the British during World War II?',
      options: ['Bhagat Singh', 'Mahatma Gandhi', 'Subhas Chandra Bose', 'Jawaharlal Nehru'],
      correctAnswer: 'Subhas Chandra Bose',
      explanation: 'Subhas Chandra Bose left the Congress and formed the INA in Southeast Asia with the help of Japan to wage a military campaign for India\'s independence.'
    },
    {
      question: 'What was the immediate spark for the Revolt of 1857?',
      options: ['High taxes', 'The Doctrine of Lapse', 'The introduction of new rifle cartridges', 'The Partition of Bengal'],
      correctAnswer: 'The introduction of new rifle cartridges',
      explanation: 'The cartridges were rumored to be greased with cow and pig fat, which was offensive to both Hindu and Muslim sepoys, providing the immediate trigger for the mutiny.'
    },
    {
      question: 'The Indian National Congress was founded in which year?',
      options: ['1857', '1905', '1885', '1915'],
      correctAnswer: '1885',
      explanation: 'The INC was founded in Bombay in 1885, with A.O. Hume, a retired British civil servant, playing a key role.'
    },
    {
      question: 'The "Moderates" in the INC believed in which method of protest?',
      options: ['Armed revolution', 'Mass civil disobedience', 'Boycotts and strikes', 'Constitutional agitation through petitions and prayers'],
      correctAnswer: 'Constitutional agitation through petitions and prayers',
      explanation: 'The Moderates had faith in the British sense of justice and preferred to use constitutional means to voice their demands.'
    },
    {
      question: 'The Partition of Bengal in 1905 was ordered by which Viceroy?',
      options: ['Lord Dalhousie', 'Lord Curzon', 'Lord Mountbatten', 'Lord Ripon'],
      correctAnswer: 'Lord Curzon',
      explanation: 'Viceroy Lord Curzon ordered the partition, ostensibly for administrative efficiency, but it was widely seen as a "divide and rule" tactic to weaken Bengali nationalism.'
    },
    {
      question: '"Swaraj is my birthright, and I shall have it!" was the famous declaration of:',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Bhagat Singh', 'Bal Gangadhar Tilak'],
      correctAnswer: 'Bal Gangadhar Tilak',
      explanation: 'This powerful slogan captured the spirit of the Extremist faction and their demand for self-rule.'
    },
    {
      question: 'The Jallianwala Bagh massacre occurred in which city in 1919?',
      options: ['Delhi', 'Lahore', 'Amritsar', 'Calcutta'],
      correctAnswer: 'Amritsar',
      explanation: 'British troops under General Dyer fired on a peaceful crowd gathered in Jallianwala Bagh, Amritsar, killing hundreds and galvanizing the nationalist movement.'
    },
    {
      question: 'The Non-Cooperation Movement (1920-22) was called off by Gandhi because of:',
      options: ['The Jallianwala Bagh massacre', 'A compromise with the British', 'The Chauri Chaura incident', 'The start of World War II'],
      correctAnswer: 'The Chauri Chaura incident',
      explanation: 'Gandhi called off the movement after an angry mob set fire to a police station in Chauri Chaura, killing several policemen, as it violated his principle of non-violence.'
    },
    {
      question: 'Who were the "Lal-Bal-Pal" of the Extremist movement?',
      options: ['Lal Bahadur Shastri, Balasaheb Thackeray, Pallavi Joshi', 'Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal', 'Lal Krishna Advani, Balram Jakhar, P. Chidambaram', 'Lala Hardayal, Balwant Singh, Palwankar Baloo'],
      correctAnswer: 'Lala Lajpat Rai, Bal Gangadhar Tilak, Bipin Chandra Pal',
      explanation: 'This trio of nationalist leaders represented the core of the Extremist faction in the early 20th century.'
    },
    {
      question: 'The Khilafat Movement was started by Indian Muslims to protest against the treatment of:',
      options: ['The Mughal Emperor', 'The Sultan of Turkey (Caliph)', 'The King of Saudi Arabia', 'The Shah of Iran'],
      correctAnswer: 'The Sultan of Turkey (Caliph)',
      explanation: 'The movement was a pan-Islamic protest against the harsh terms imposed on the Ottoman Sultan, who was the Caliph or spiritual head of Sunni Muslims, after WWI. Gandhi supported it to foster Hindu-Muslim unity.'
    },
    {
      question: 'Bhagat Singh and his associates were executed for their role in which case?',
      options: ['The Kakori train robbery', 'The Alipore bomb case', 'The Lahore Conspiracy Case (killing of Saunders)', 'The assassination of Lord Curzon'],
      correctAnswer: 'The Lahore Conspiracy Case (killing of Saunders)',
      explanation: 'Bhagat Singh, Sukhdev, and Rajguru were executed in 1931 for the assassination of British police officer John Saunders.'
    },
    {
      question: 'The slogan of the Quit India Movement was:',
      options: ['"Swaraj is my birthright"', '"Inquilab Zindabad"', '"Do or Die"', '"Jai Hind"'],
      correctAnswer: '"Do or Die"',
      explanation: 'Gandhi gave this powerful call to the nation at the launch of the Quit India Movement in August 1942, urging a final, determined struggle for freedom.'
    },
    {
      question: 'Rani Lakshmibai was the queen of which princely state?',
      options: ['Gwalior', 'Indore', 'Satara', 'Jhansi'],
      correctAnswer: 'Jhansi',
      explanation: 'Rani Lakshmibai of Jhansi was one of the most iconic figures of the 1857 Revolt, who led her troops into battle against the British.'
    },
    {
      question: 'The "Doctrine of Lapse" was a policy of annexation associated with which Governor-General that caused widespread resentment before 1857?',
      options: ['Lord Wellesley', 'Lord Dalhousie', 'Lord Canning', 'Lord Bentinck'],
      correctAnswer: 'Lord Dalhousie',
      explanation: 'This policy, which involved annexing states without a natural heir, was seen as an illegitimate land grab by the British and was a major cause of the 1857 Revolt.'
    },
    {
      question: 'The Simon Commission was boycotted by Indians because:',
      options: ['It proposed partitioning India', 'It had no Indian members', 'It recommended higher taxes', 'It was against self-rule'],
      correctAnswer: 'It had no Indian members',
      explanation: 'Indians were outraged that a commission sent to decide India\'s political future did not include a single Indian representative, leading to widespread protests with the slogan "Simon Go Back".'
    },
    {
      question: 'What was Satyagraha?',
      options: ['A form of armed struggle', 'A political party', 'Gandhi\'s philosophy of non-violent resistance', 'A religious movement'],
      correctAnswer: 'Gandhi\'s philosophy of non-violent resistance',
      explanation: 'Satyagraha, meaning "truth force" or "soul force," was Gandhi\'s core philosophy, which involved active but non-violent opposition to injustice.'
    },
    {
      question: 'The "Azad Hind Fauj" was another name for:',
      options: ['The Indian National Congress', 'The Muslim League', 'The Indian National Army', 'The Ghadar Party'],
      correctAnswer: 'The Indian National Army',
      explanation: 'Azad Hind Fauj (Free India Army) was the Hindi name for the Indian National Army (INA) formed by Subhas Chandra Bose.'
    },
    {
      question: 'The Poona Pact (1932) was an agreement between Mahatma Gandhi and:',
      options: ['Muhammad Ali Jinnah', 'Lord Irwin', 'B.R. Ambedkar', 'Jawaharlal Nehru'],
      correctAnswer: 'B.R. Ambedkar',
      explanation: 'The Poona Pact was an agreement over the political representation of the "Depressed Classes" (Dalits), where separate electorates were abandoned in favor of an increased number of reserved seats.'
    },
    {
      question: 'Who was the last Viceroy of British India?',
      options: ['Lord Wavell', 'Lord Linlithgow', 'Lord Mountbatten', 'Lord Curzon'],
      correctAnswer: 'Lord Mountbatten',
      explanation: 'Lord Mountbatten was the last Viceroy, and he was tasked with overseeing the transfer of power and the partition of India.'
    },
    {
      question: 'The Ghadar Party was a revolutionary group founded by Indians in which country?',
      options: ['Germany', 'Japan', 'USA and Canada', 'Great Britain'],
      correctAnswer: 'USA and Canada',
      explanation: 'The Ghadar Party was formed by immigrant Indians on the West Coast of North America to organize a rebellion to liberate India from British rule.'
    },
    {
      question: 'The slogan "Inquilab Zindabad" (Long Live the Revolution) was popularized by:',
      options: ['Mahatma Gandhi', 'Subhas Chandra Bose', 'Bhagat Singh', 'Bal Gangadhar Tilak'],
      correctAnswer: 'Bhagat Singh',
      explanation: 'Bhagat Singh and his comrades used this slogan frequently, and it became a rallying cry for the revolutionary movement.'
    },
    {
      question: 'The main political objective of the Muslim League, led by Muhammad Ali Jinnah, by the 1940s was:',
      options: ['A united, independent India', 'Dominion status within the British Empire', 'The creation of a separate state of Pakistan', 'An alliance with the Indian National Congress'],
      correctAnswer: 'The creation of a separate state of Pakistan',
      explanation: 'The Muslim League passed the Lahore Resolution in 1940, formally demanding separate homelands for Muslims in the northwestern and eastern zones of India.'
    },
    {
      question: 'The Swadeshi movement encouraged the boycott of:',
      options: ['Indian goods', 'Foreign goods, particularly British textiles', 'All forms of education', 'Government jobs'],
      correctAnswer: 'Foreign goods, particularly British textiles',
      explanation: 'A key component of the Swadeshi movement was the economic boycott of British manufactured goods to harm their commercial interests and promote Indian industries.'
    },
    {
      question: 'Chandrashekhar Azad was a famous Indian:',
      options: ['Moderate leader', 'Poet', 'Revolutionary', 'Social reformer'],
      correctAnswer: 'Revolutionary',
      explanation: 'Chandrashekhar Azad was a key figure in the Hindustan Socialist Republican Association and a mentor to Bhagat Singh. He died fighting the police, fulfilling his pledge never to be captured alive.'
    },
    {
      question: 'The Round Table Conferences were held in London to discuss:',
      options: ['The start of World War II', 'India\'s role in the Commonwealth', 'Future constitutional reforms in India', 'The partition of India'],
      correctAnswer: 'Future constitutional reforms in India',
      explanation: 'Three Round Table Conferences were held between 1930 and 1932 to discuss constitutional reforms based on the report of the Simon Commission. Gandhi attended the second one.'
    },
    {
      question: 'What was the main outcome of the Gandhi-Irwin Pact of 1931?',
      options: ['India was granted independence', 'The British agreed to release all political prisoners and Gandhi agreed to suspend the Civil Disobedience Movement', 'The salt tax was permanently abolished', 'The Round Table Conferences were cancelled'],
      correctAnswer: 'The British agreed to release all political prisoners and Gandhi agreed to suspend the Civil Disobedience Movement',
      explanation: 'This pact was a temporary truce that allowed for the Congress to participate in the Second Round Table Conference.'
    },
    {
      question: 'Nana Saheb was a prominent leader of the 1857 Revolt in which city?',
      options: ['Delhi', 'Lucknow', 'Kanpur', 'Jhansi'],
      correctAnswer: 'Kanpur',
      explanation: 'Nana Saheb, the adopted son of the last Peshwa, led the rebellion in Kanpur.'
    },
    {
      question: 'The Komagata Maru incident involved:',
      options: ['A ship carrying Indian immigrants being turned away from Canada', 'A train robbery by revolutionaries', 'A mutiny in the British Indian army', 'A protest against high taxes'],
      correctAnswer: 'A ship carrying Indian immigrants being turned away from Canada',
      explanation: 'The incident in 1914 highlighted the discriminatory immigration laws of the time and fueled revolutionary sentiment among Indians abroad.'
    },
    {
      question: 'The All India Forward Bloc was a political party founded by:',
      options: ['Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose', 'B.R. Ambedkar'],
      correctAnswer: 'Subhas Chandra Bose',
      explanation: 'Subhas Chandra Bose formed the Forward Bloc in 1939 after resigning from the presidency of the Indian National Congress.'
    },
    {
      question: 'The Government of India Act of 1935 introduced:',
      options: ['Complete independence', 'Direct rule from London', 'Provincial autonomy', 'The abolition of princely states'],
      correctAnswer: 'Provincial autonomy',
      explanation: 'This act was a significant step, granting Indian provinces a large measure of self-government, and formed the basis for many parts of the later Indian constitution.'
    },
    {
      question: 'The Cripps Mission of 1942 failed because:',
      options: ['The British refused to grant any concessions', 'It was rejected by all major Indian political parties as inadequate', 'World War II ended before it could be implemented', 'Lord Linlithgow vetoed the proposals'],
      correctAnswer: 'It was rejected by all major Indian political parties as inadequate',
      explanation: 'The Congress rejected it as it did not offer immediate independence, and the Muslim League rejected it as it did not explicitly promise Pakistan. Gandhi called it a "post-dated cheque on a failing bank."'
    },
    {
      question: 'The Royal Indian Navy mutiny of 1946 was a significant event because:',
      options: ['It led to a major naval battle', 'It showed that the British could no longer rely on Indian armed forces to maintain their rule', 'It was led by Mahatma Gandhi', 'It resulted in the sinking of several British ships'],
      correctAnswer: 'It showed that the British could no longer rely on Indian armed forces to maintain their rule',
      explanation: 'The widespread mutiny was a clear signal to the British government that their control over the instruments of power was collapsing, hastening their decision to leave.'
    },
    {
      question: 'Who was the first President of the Indian National Congress?',
      options: ['A.O. Hume', 'Dadabhai Naoroji', 'W.C. Bonnerjee', 'Surendranath Banerjee'],
      correctAnswer: 'W.C. Bonnerjee',
      explanation: 'Womesh Chunder Bonnerjee, a barrister from Calcutta, was the president of the first session of the INC in Bombay in 1885.'
    },
    {
      question: 'The concept of "Divide and Rule" is most associated with which British policy?',
      options: ['The introduction of railways', 'The establishment of universities', 'The Partition of Bengal and the introduction of separate electorates', 'The abolition of Sati'],
      correctAnswer: 'The Partition of Bengal and the introduction of separate electorates',
      explanation: 'Policies like the 1905 Partition of Bengal and the 1909 Morley-Minto reforms (which created separate electorates for Muslims) were seen as deliberate attempts to divide Hindus and Muslims.'
    },
    {
      question: 'The Hindustan Socialist Republican Association (HSRA) was a:',
      options: ['Social reform society', 'Moderate political group', 'Revolutionary organization', 'Literary club'],
      correctAnswer: 'Revolutionary organization',
      explanation: 'The HSRA was a prominent revolutionary group whose members included Bhagat Singh, Chandrashekhar Azad, and others who believed in armed struggle.'
    },
    {
      question: 'The "Individual Satyagraha" was launched by Gandhi as:',
      options: ['A mass movement to overthrow the British', 'A symbolic protest against India\'s forced participation in WWII', 'A campaign to promote cottage industries', 'A hunger strike for independence'],
      correctAnswer: 'A symbolic protest against India\'s forced participation in WWII',
      explanation: 'In 1940, instead of a mass movement, Gandhi chose individuals (starting with Vinoba Bhave) to court arrest by making anti-war speeches, as a limited, symbolic protest.'
    },
    {
      question: 'Who gave the famous "Tryst with Destiny" speech on the eve of India\'s independence?',
      options: ['Mahatma Gandhi', 'Sardar Patel', 'B.R. Ambedkar', 'Jawaharlal Nehru'],
      correctAnswer: 'Jawaharlal Nehru',
      explanation: 'Jawaharlal Nehru, as the first Prime Minister of India, delivered this iconic speech to the Constituent Assembly on the night of August 14-15, 1947.'
    },
    {
      question: 'The Anushilan Samiti and Jugantar were:',
      options: ['Literary societies in Bombay', 'Revolutionary groups in Bengal', 'Social reform movements in Punjab', 'Peasant uprisings in Bihar'],
      correctAnswer: 'Revolutionary groups in Bengal',
      explanation: 'These were two of the most prominent secret societies in Bengal in the early 20th century that advocated for revolutionary violence to overthrow British rule.'
    },
    {
      question: 'The Nehru Report (1928) was a document that:',
      options: ['Demanded the partition of India', 'Outlined a proposed constitution for an independent India with dominion status', 'Was a critique of Gandhian policies', 'Planned the economic development of India'],
      correctAnswer: 'Outlined a proposed constitution for an independent India with dominion status',
      explanation: 'The Nehru Report, drafted by a committee led by Motilal Nehru, was the Indian response to the challenge posed by the Simon Commission, outlining a framework for a self-governing India.'
    },
    {
      question: 'The Bardoli Satyagraha (1928) was a successful peasant movement against high taxes in Gujarat led by:',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Vallabhbhai Patel', 'Rajendra Prasad'],
      correctAnswer: 'Sardar Vallabhbhai Patel',
      explanation: 'The successful organization of this movement earned Vallabhbhai Patel the title of "Sardar" (leader) from the women of Bardoli.'
    },
    {
      question: 'The "Direct Action Day" called by the Muslim League in 1946 led to:',
      options: ['The immediate partition of India', 'A successful negotiation with the Congress', 'Widespread communal riots, especially in Calcutta', 'The British agreeing to leave immediately'],
      correctAnswer: 'Widespread communal riots, especially in Calcutta',
      explanation: 'The call for "Direct Action Day" to achieve Pakistan led to horrific communal violence, known as the Great Calcutta Killings, hardening attitudes and making partition seem inevitable.'
    },
    {
      question: 'The Chittagong Armoury Raid (1930) was a daring revolutionary act led by:',
      options: ['Bhagat Singh', 'Surya Sen', 'Rash Behari Bose', 'Batukeshwar Dutt'],
      correctAnswer: 'Surya Sen',
      explanation: 'Surya Sen, a teacher known as "Master-da," led a group of revolutionaries in a raid on the police armoury in Chittagong, Bengal, in an attempt to spark a wider uprising.'
    },
    {
      question: 'What was the primary goal of the Swaraj Party, formed by C.R. Das and Motilal Nehru?',
      options: ['To continue the boycott of all government institutions', 'To enter the legislative councils and obstruct them from within', 'To start an armed rebellion', 'To focus only on social reform'],
      correctAnswer: 'To enter the legislative councils and obstruct them from within',
      explanation: 'After the suspension of the Non-Cooperation Movement, the Swarajists argued for "council entry" as a new tactic to fight the British from within the system.'
    },
    {
      question: 'During the Quit India Movement, a parallel government ("prati sarkar") was famously established in which region of Maharashtra?',
      options: ['Nagpur', 'Pune', 'Satara', 'Bombay'],
      correctAnswer: 'Satara',
      explanation: 'The Satara "prati sarkar," led by figures like Nana Patil, was one of the most successful and long-lasting underground parallel governments established during the Quit India Movement.'
    },
    {
      question: 'The trial of INA officers Shahnawaz Khan, P.K. Sahgal and G.S. Dhillon took place at:',
      options: ['The Lahore Fort', 'The Cellular Jail in Andaman', 'The Red Fort in Delhi', 'The Tower of London'],
      correctAnswer: 'The Red Fort in Delhi',
      explanation: 'The INA trials held at the Red Fort became a major public event, galvanizing massive support for the INA and the cause of independence across India.'
    },
    {
      question: 'The final decision to partition British India was made in the:',
      options: ['Cripps Mission', 'Wavell Plan', 'Cabinet Mission Plan', 'Mountbatten Plan (3rd June Plan)'],
      correctAnswer: 'Mountbatten Plan (3rd June Plan)',
      explanation: 'The Mountbatten Plan was the final plan for Indian independence, which included the partition of the subcontinent and was accepted by the major political parties.'
    }
  ],
  '7': [
    {
      question: 'Who was primarily responsible for the integration of princely states into the Indian Union?',
      options: ['Jawaharlal Nehru', 'Mahatma Gandhi', 'Sardar Vallabhbhai Patel', 'B.R. Ambedkar'],
      correctAnswer: 'Sardar Vallabhbhai Patel',
      explanation: 'As the first Home Minister of India, Sardar Vallabhbhai Patel, along with V.P. Menon, skillfully managed the accession of over 560 princely states.'
    },
    {
      question: 'Which military action led to the integration of Hyderabad into India?',
      options: ['Operation Vijay', 'Operation Polo', 'Operation Blue Star', 'Operation Cactus'],
      correctAnswer: 'Operation Polo',
      explanation: '"Operation Polo" was the codename for the police action launched in September 1948 by the Indian Army to annex the princely state of Hyderabad.'
    },
    {
      question: 'The ruler of which princely state signed the Instrument of Accession to India after an invasion by Pakistani tribesmen?',
      options: ['Hyderabad', 'Junagadh', 'Travancore', 'Jammu and Kashmir'],
      correctAnswer: 'Jammu and Kashmir',
      explanation: 'Maharaja Hari Singh of Jammu and Kashmir acceded to India in October 1947 to get military help against an invasion from Pakistan.'
    },
    {
      question: 'How were the French territories like Puducherry integrated into India?',
      options: ['Through military conquest', 'Through a referendum', 'Through a peaceful treaty of cession', 'They were purchased by India'],
      correctAnswer: 'Through a peaceful treaty of cession',
      explanation: 'The French government, after negotiations, peacefully transferred its Indian territories to the Republic of India via a treaty in 1954.'
    },
    {
      question: '"Operation Vijay" was the codename for the military action to liberate which territories?',
      options: ['Hyderabad and Junagadh', 'Jammu and Kashmir', 'Puducherry and Karaikal', 'Goa, Daman, and Diu'],
      correctAnswer: 'Goa, Daman, and Diu',
      explanation: '"Operation Vijay" was the military operation launched by India in 1961 to end Portuguese colonial rule on the subcontinent.'
    },
    {
      question: 'What was the "lapsing of paramountcy"?',
      options: ['The end of Mughal rule', 'The transfer of power from the EIC to the Crown', 'The termination of British authority over the princely states', 'The law that allowed the British to annex states'],
      correctAnswer: 'The termination of British authority over the princely states',
      explanation: 'Paramountcy was the British Crown\'s complex set of rights and obligations over the princely states. Its lapse in 1947 left the states legally independent.'
    },
    {
      question: 'V. P. Menon, who assisted Sardar Patel, held what position?',
      options: ['Army General', 'Finance Minister', 'Secretary of the Ministry of States', 'Chief Justice of India'],
      correctAnswer: 'Secretary of the Ministry of States',
      explanation: 'V. P. Menon was a senior and highly skilled civil servant who played the crucial role of chief negotiator with the princely states.'
    },
    {
      question: 'The integration of Junagadh was ultimately decided by:',
      options: ['A war with Pakistan', 'A United Nations resolution', 'A plebiscite (public vote)', 'A decision by the British government'],
      correctAnswer: 'A plebiscite (public vote)',
      explanation: 'After the Nawab fled to Pakistan, a plebiscite was held, and the people of Junagadh voted overwhelmingly to join India.'
    },
    {
      question: 'The Razakars were a private militia associated with the ruler of which state?',
      options: ['Kashmir', 'Hyderabad', 'Mysore', 'Travancore'],
      correctAnswer: 'Hyderabad',
      explanation: 'The Razakars were a radical Islamist militia that supported the Nizam of Hyderabad\'s desire for independence and committed atrocities against the local population.'
    },
    {
      question: 'What was the Instrument of Accession?',
      options: ['A declaration of independence', 'A trade agreement', 'A legal document signed by rulers to join India or Pakistan', 'A constitution for the princely states'],
      correctAnswer: 'A legal document signed by rulers to join India or Pakistan',
      explanation: 'By signing this document, the rulers agreed to accede to the Dominion of India (or Pakistan) on three subjects: defense, foreign affairs, and communications.'
    },
    {
      question: 'Maharaja Hari Singh was the ruler of which princely state?',
      options: ['Jodhpur', 'Bhopal', 'Jammu and Kashmir', 'Baroda'],
      correctAnswer: 'Jammu and Kashmir',
      explanation: 'Maharaja Hari Singh was the Hindu Dogra ruler of the Muslim-majority state of Jammu and Kashmir at the time of independence.'
    },
    {
      question: 'Why did the Portuguese refuse to negotiate the transfer of Goa?',
      options: ['They believed Goa was not a colony but an integral part of Portugal', 'They were waiting for a higher price', 'They did not have a stable government', 'The people of Goa wanted to remain under Portuguese rule'],
      correctAnswer: 'They believed Goa was not a colony but an integral part of Portugal',
      explanation: 'The authoritarian Salazar regime in Portugal amended its constitution to designate its colonies as "overseas provinces," using this as a legal argument to refuse decolonization.'
    },
    {
      question: 'The term "balkanization" refers to:',
      options: ['The process of uniting a region', 'The fragmentation of a region into smaller, often hostile states', 'A type of economic policy', 'A military strategy'],
      correctAnswer: 'The fragmentation of a region into smaller, often hostile states',
      explanation: 'The term originates from the historical fragmentation of the Balkan peninsula. It was a major fear for Indian leaders regarding the princely states.'
    },
    {
      question: 'What was a "privy purse"?',
      options: ['A secret tax', 'A government allowance paid to the former rulers of princely states', 'A fund for military spending', 'A type of handbag'],
      correctAnswer: 'A government allowance paid to the former rulers of princely states',
      explanation: 'The offer of a privy purse was one of the inducements used by Sardar Patel to persuade the princes to accede to India.'
    },
    {
      question: 'Which country\'s government was in power in Portugal when Goa was liberated?',
      options: ['A democratic government', 'The British government', 'The Salazar authoritarian regime', 'A monarchy'],
      correctAnswer: 'The Salazar authoritarian regime',
      explanation: 'The dictatorial "Estado Novo" regime of António de Oliveira Salazar was fiercely colonial and refused to negotiate, leading to India\'s military action.'
    },
    {
      question: 'Puducherry (Pondicherry) was the capital of which European power\'s territories in India?',
      options: ['The British', 'The Portuguese', 'The Dutch', 'The French'],
      correctAnswer: 'The French',
      explanation: 'Pondicherry was the main administrative center for all French establishments in India.'
    },
    {
      question: 'The integration of the princely states was mostly completed by which date?',
      options: ['August 15, 1947', 'January 26, 1950', 'December 19, 1961', 'November 1, 1954'],
      correctAnswer: 'August 15, 1947',
      explanation: 'Remarkably, Sardar Patel and V.P. Menon managed to secure the accession of nearly all states by the day of India\'s independence, with only a few exceptions.'
    },
    {
      question: 'The ruler of Hyderabad was known by what title?',
      options: ['Maharaja', 'Nawab', 'Sultan', 'Nizam'],
      correctAnswer: 'Nizam',
      explanation: 'The title of the ruler of the princely state of Hyderabad was the Nizam.'
    },
    {
      question: 'The "police action" in Hyderabad is a euphemism for what?',
      options: ['A diplomatic meeting', 'A large-scale police raid', 'A full-scale military invasion', 'An economic blockade'],
      correctAnswer: 'A full-scale military invasion',
      explanation: 'The term "police action" was used to avoid the appearance of a war, but it involved the Indian Army invading and occupying the state of Hyderabad.'
    },
    {
      question: 'Which of these states initially wished to remain independent before joining India?',
      options: ['Mysore', 'Gwalior', 'Travancore', 'Patiala'],
      correctAnswer: 'Travancore',
      explanation: 'Travancore, along with Hyderabad and Kashmir, was one of the states that initially announced its intention to become an independent country.'
    },
    {
      question: 'The integration of the French territories into India was accomplished:',
      options: ['Peacefully through diplomacy', 'After a long and bloody war', 'Through a United Nations intervention', 'After India purchased the territory'],
      correctAnswer: 'Peacefully through diplomacy',
      explanation: 'Unlike the Portuguese, the French government was pragmatic and agreed to a peaceful transfer of power after it became clear the local population wanted to merge with India.'
    },
    {
      question: 'The Indian Independence Act of 1947 was passed by which government?',
      options: ['The Indian National Congress', 'The Constituent Assembly of India', 'The British Parliament', 'The United Nations'],
      correctAnswer: 'The British Parliament',
      explanation: 'The act that granted independence and partitioned British India was legislation passed by the Parliament of the United Kingdom.'
    },
    {
      question: 'Approximately how many princely states existed at the time of Indian independence?',
      options: ['About 50', 'About 100', 'Over 560', 'Over 1000'],
      correctAnswer: 'Over 560',
      explanation: 'The sheer number of states (565 is the most common figure) illustrates the complexity of the integration task faced by Sardar Patel.'
    },
    {
      question: 'The ruler of which state, with a Hindu majority and a Muslim ruler, tried to join Pakistan?',
      options: ['Bhopal', 'Junagadh', 'Rampur', 'Hyderabad'],
      correctAnswer: 'Junagadh',
      explanation: 'The case of Junagadh was the reverse of Kashmir: a Muslim ruler of a Hindu-majority state attempting to join Pakistan.'
    },
    {
      question: 'After its liberation, Goa was initially administered as a:',
      options: ['Separate state', 'Part of Maharashtra', 'Union Territory', 'Part of Karnataka'],
      correctAnswer: 'Union Territory',
      explanation: 'Goa, along with Daman and Diu, was administered as a Union Territory for many years before Goa was granted full statehood in 1987.'
    },
    {
      question: 'Dadra and Nagar Haveli were territories belonging to which colonial power before their integration into India?',
      options: ['France', 'Britain', 'Netherlands', 'Portugal'],
      correctAnswer: 'Portugal',
      explanation: 'Dadra and Nagar Haveli were two small Portuguese enclaves that were liberated by pro-India volunteers before the liberation of Goa.'
    },
    {
      question: 'What was the main argument used by Sardar Patel to persuade princes to join India?',
      options: ['The threat of a communist takeover', 'The promise of becoming Prime Minister', 'Appeals to patriotism and the threat of anarchy', 'A guarantee that they could keep their armies'],
      correctAnswer: 'Appeals to patriotism and the threat of anarchy',
      explanation: 'Patel argued that in the absence of a central power, there would be chaos and that it was the princes\' patriotic duty to join the new Indian nation.'
    },
    {
      question: 'The Standstill Agreement was an option for princely states to:',
      options: ['Declare independence permanently', 'Maintain existing administrative arrangements with India temporarily', 'Join the United Nations directly', 'Form their own union of states'],
      correctAnswer: 'Maintain existing administrative arrangements with India temporarily',
      explanation: 'It was a temporary measure to ensure that essential services like post and railways continued uninterrupted while negotiations for full accession were ongoing.'
    },
    {
      question: 'The States Reorganisation Act of 1956, which reorganized India on linguistic lines, was a consequence of:',
      options: ['The integration of princely states', 'A demand from the British', 'The first general election', 'The desire to create more manageable administrative units'],
      correctAnswer: 'The integration of princely states',
      explanation: 'Once the princely states were integrated, the old, arbitrary boundaries had to be redrawn to create more logical and representative states, leading to the linguistic reorganization.'
    },
    {
      question: 'What was the final outcome for the Nizam of Hyderabad after Operation Polo?',
      options: ['He was exiled to Pakistan', 'He was executed for treason', 'He was made the constitutional head (Rajpramukh) of Hyderabad state for a time', 'He fled to Britain'],
      correctAnswer: 'He was made the constitutional head (Rajpramukh) of Hyderabad state for a time',
      explanation: 'In a gesture of reconciliation, after his surrender, the Nizam was made the Rajpramukh (governor) of the state of Hyderabad within India.'
    },
    {
      question: 'The dispute over Kashmir led to the first war between which two countries?',
      options: ['India and China', 'India and Portugal', 'India and Pakistan', 'India and Afghanistan'],
      correctAnswer: 'India and Pakistan',
      explanation: 'The Indo-Pakistani War of 1947-48 began immediately after the Maharaja of Kashmir acceded to India.'
    },
    {
      question: 'The integration of the French territories is an example of decolonization through:',
      options: ['Military action', 'Diplomatic negotiation', 'Economic pressure', 'Revolution'],
      correctAnswer: 'Diplomatic negotiation',
      explanation: 'The French transfer of power was a model of peaceful decolonization achieved through talks between the two governments.'
    },
    {
      question: 'The primary political party leading the pro-merger movement in Goa was:',
      options: ['The Indian National Congress', 'The Communist Party of India', 'The Goa Liberation Army', 'There were several, including the Goa Congress'],
      correctAnswer: 'There were several, including the Goa Congress',
      explanation: 'Various groups, including the National Congress (Goa) and the Azad Gomantak Dal, organized satyagrahas and protests against Portuguese rule.'
    },
    {
      question: 'Which of the following was NOT an option given to the princely states in 1947?',
      options: ['Join India', 'Join Pakistan', 'Remain Independent', 'Become a British colony again'],
      correctAnswer: 'Become a British colony again',
      explanation: 'The Indian Independence Act made it clear that British rule was ending completely; returning to colonial status was not an option.'
    },
    {
      question: 'Chandernagore, another French territory, was integrated into which Indian state?',
      options: ['Orissa', 'Bihar', 'West Bengal', 'Andhra Pradesh'],
      correctAnswer: 'West Bengal',
      explanation: 'Chandernagore, a French enclave located north of Calcutta, was integrated into the state of West Bengal after a plebiscite.'
    },
    {
      question: 'The Indian military intervention in Goa in 1961 was met with:',
      options: ['Strong international approval', 'Fierce, prolonged Portuguese resistance', 'Criticism from some Western countries but was over quickly', 'A counter-attack by Pakistan'],
      correctAnswer: 'Criticism from some Western countries but was over quickly',
      explanation: 'While countries like the USA and UK criticized India\'s use of force, the military operation was swift and successful with minimal casualties.'
    },
    {
      question: 'The integration of the princely states is often called the:',
      options: ['Unification of India', 'Annexation of India', 'Colonization of India', 'Partition of India'],
      correctAnswer: 'Unification of India',
      explanation: 'Sardar Patel\'s successful integration of the states is hailed as the unification of India, creating a single, cohesive political entity from a patchwork of states.'
    },
    {
      question: 'The accession of which state was particularly important for India due to its strategic location and size?',
      options: ['Manipur', 'Bhopal', 'Hyderabad', 'Sikkim'],
      correctAnswer: 'Hyderabad',
      explanation: 'An independent Hyderabad, located in the center of India, would have been a major threat to the country\'s unity and stability, making its integration crucial.'
    },
    {
      question: 'Who was the ruler of Travancore who initially declared independence?',
      options: ['The Nizam', 'The Maharaja', 'The Nawab', 'The Diwan, C. P. Ramaswami Iyer'],
      correctAnswer: 'The Diwan, C. P. Ramaswami Iyer',
      explanation: 'While the Maharaja was the formal head, the decision to declare Travancore independent was driven by its powerful and ambitious Diwan (Prime Minister), C.P. Ramaswami Iyer.'
    },
    {
      question: 'The problem of integrating princely states was a direct legacy of which system of British rule?',
      options: ['Direct rule', 'Indirect rule (paramountcy)', 'The zamindari system', 'The factory system'],
      correctAnswer: 'Indirect rule (paramountcy)',
      explanation: 'The British system of ruling through local princes (indirect rule) created the complex situation where these states were not technically part of British India, leading to the integration challenge.'
    },
    {
      question: 'The liberation of Goa is celebrated annually on which date?',
      options: ['August 15', 'January 26', 'December 19', 'November 1'],
      correctAnswer: 'December 19',
      explanation: 'December 19 is celebrated as Goa Liberation Day, marking the day the Indian armed forces took control of the territory from the Portuguese in 1961.'
    },
    {
      question: 'What was the immediate trigger for the invasion of Kashmir by Pakistani tribesmen?',
      options: ['A famine in Kashmir', 'A revolt by the local population against the Maharaja', 'The Maharaja\'s decision to join India', 'The partition of Punjab'],
      correctAnswer: 'A revolt by the local population against the Maharaja',
      explanation: 'A rebellion in the western part of the state against the Maharaja\'s rule provided a pretext for the invasion by Pakistani tribesmen and irregulars.'
    },
    {
      question: 'The city of Bhopal, which also hesitated to join, was ruled by a:',
      options: ['Maharaja', 'Nawab', 'Rana', 'Raja'],
      correctAnswer: 'Nawab',
      explanation: 'The Nawab of Bhopal, who was a close friend of Jinnah, also harbored ambitions of independence before eventually acceding to India.'
    },
    {
      question: 'The successful integration of the states ensured that independent India had:',
      options: ['A weak central government', 'Many internal borders and customs duties', 'A unified political and administrative structure', 'No army'],
      correctAnswer: 'A unified political and administrative structure',
      explanation: 'This unification was crucial for creating a single economy, a single administration, and a single defense force for the new nation.'
    },
    {
      question: 'The final legal transfer of the French territories to India (de jure transfer) happened in:',
      options: ['1947', '1950', '1954', '1962'],
      correctAnswer: '1962',
      explanation: 'While the de facto (actual) transfer happened in 1954, the French Parliament only ratified the treaty of cession in 1962, making the transfer legally permanent.'
    },
    {
      question: 'Which of the following was NOT a Portuguese territory integrated into India?',
      options: ['Goa', 'Daman', 'Diu', 'Mahe'],
      correctAnswer: 'Mahe',
      explanation: 'Mahe was a French territory, located on the Malabar coast.'
    },
    {
      question: 'The Indian Army\'s advance into Kashmir in 1947 managed to secure:',
      options: ['The entire state of Jammu and Kashmir', 'Only the Jammu region', 'Roughly two-thirds of the state, including the Kashmir Valley', 'Only the city of Srinagar'],
      correctAnswer: 'Roughly two-thirds of the state, including the Kashmir Valley',
      explanation: 'The war resulted in a ceasefire line (now the Line of Control) that left about one-third of the state under Pakistani control and two-thirds under Indian control.'
    },
    {
      question: 'The policy of integrating the states can be best described as:',
      options: ['Exclusively violent', 'Exclusively peaceful', 'A mix of persuasion, diplomacy, and coercion', 'Handled entirely by the United Nations'],
      correctAnswer: 'A mix of persuasion, diplomacy, and coercion',
      explanation: 'Sardar Patel\'s approach was pragmatic, using appeals to patriotism and offering incentives (the "carrot") while also making the consequences of not joining clear (the "stick").'
    }
  ],
  '8': [
    {
      question: 'Why did mainstream Indian nationalists initially support the British war effort in World War I?',
      options: ['They were promised immediate independence.', 'They hoped it would lead to dominion status and self-government.', 'They were forced to by the British military.', 'They wanted to defeat Germany.'],
      correctAnswer: 'They hoped it would lead to dominion status and self-government.',
      explanation: 'Many Indian leaders believed that by demonstrating loyalty and contributing to the war, India would earn greater political autonomy from the British Empire.'
    },
    {
      question: 'What repressive law was passed by the British after World War I, leading to widespread protest?',
      options: ['The Morley-Minto Reforms', 'The Rowlatt Act', 'The Government of India Act, 1919', 'The Simon Commission'],
      correctAnswer: 'The Rowlatt Act',
      explanation: 'The Anarchical and Revolutionary Crimes Act of 1919, popularly known as the Rowlatt Act, allowed for the detention of political prisoners without trial, causing outrage in India.'
    },
    {
      question: 'Why did the Congress ministries in the provinces resign in 1939?',
      options: ['They were dismissed by the Viceroy.', 'The Cripps Mission failed.', 'They were protesting the Viceroy\'s decision to declare war on India\'s behalf without consultation.', 'Gandhi called for a boycott of the government.'],
      correctAnswer: 'They were protesting the Viceroy\'s decision to declare war on India\'s behalf without consultation.',
      explanation: 'The Indian National Congress was incensed that the Viceroy had committed India to World War II without consulting its elected representatives.'
    },
    {
      question: 'The Cripps Mission of 1942 offered India what status after World War II?',
      options: ['Complete independence', 'Dominion status', 'Provincial autonomy', 'Representation in the British Parliament'],
      correctAnswer: 'Dominion status',
      explanation: 'The Cripps Mission offered India dominion status but was rejected by the Congress as it did not promise full independence and gave provinces the right to secede.'
    },
    {
      question: 'Approximately how many Indian soldiers served in World War I?',
      options: ['100,000', '500,000', 'Over 1.3 million', 'Over 5 million'],
      correctAnswer: 'Over 1.3 million',
      explanation: 'India made a massive contribution to the Allied war effort, sending more than 1.3 million soldiers to fight in various theaters.'
    },
    {
      question: 'Indian soldiers in WWI played a particularly crucial role in the British campaigns in which region?',
      options: ['Russia', 'South America', 'Mesopotamia (Middle East)', 'China'],
      correctAnswer: 'Mesopotamia (Middle East)',
      explanation: 'The Indian Army was the main force used by the British in their successful campaign against the Ottoman Empire in Mesopotamia (modern Iraq).'
    },
    {
      question: 'What was the immediate political outcome in India after World War I?',
      options: ['Grant of Dominion Status', 'Grant of complete independence', 'The passing of repressive laws like the Rowlatt Act', 'A period of economic boom'],
      correctAnswer: 'The passing of repressive laws like the Rowlatt Act',
      explanation: 'Instead of being rewarded for its war effort, India was met with repressive legislation, which was seen as a betrayal.'
    },
    {
      question: 'Who described the Cripps Mission offer as "a post-dated cheque on a failing bank"?',
      options: ['Jawaharlal Nehru', 'Muhammad Ali Jinnah', 'Sardar Patel', 'Mahatma Gandhi'],
      correctAnswer: 'Mahatma Gandhi',
      explanation: 'Gandhi used this famous phrase to dismiss the Cripps offer, implying that the promise of future dominion status was worthless as the British Empire itself was collapsing.'
    },
    {
      question: 'Which political party in India cooperated with the British during World War II?',
      options: ['Indian National Congress', 'Communist Party of India', 'All India Forward Bloc', 'Muslim League'],
      correctAnswer: 'Muslim League',
      explanation: 'The Muslim League, under Jinnah, chose to cooperate with the war effort, which allowed it to gain political leverage and strengthen its demand for Pakistan.'
    },
    {
      question: 'Subhas Chandra Bose formed the Indian National Army (INA) with the help of which powers?',
      options: ['Allied Powers (USA, UK)', 'Axis Powers (Germany, Japan)', 'Soviet Union and China', 'United Nations'],
      correctAnswer: 'Axis Powers (Germany, Japan)',
      explanation: 'Based on the principle "an enemy\'s enemy is a friend," Bose sought and received assistance from the Axis powers to fight against the British.'
    },
    {
      question: 'The "Do or Die" slogan is associated with which movement?',
      options: ['Non-Cooperation Movement', 'Civil Disobedience Movement', 'Swadeshi Movement', 'Quit India Movement'],
      correctAnswer: 'Quit India Movement',
      explanation: 'This was Gandhi\'s powerful call to the Indian people in August 1942, urging them to make a final, determined push for freedom.'
    },
    {
      question: 'The trials of the INA soldiers after WWII were held at which landmark?',
      options: ['Lahore Fort', 'Cellular Jail, Andaman', 'Red Fort, Delhi', 'Viceroy\'s House, Delhi'],
      correctAnswer: 'Red Fort, Delhi',
      explanation: 'The INA trials at the Red Fort became a symbol of the independence struggle, and the widespread public support for the accused soldiers further weakened British authority.'
    },
    {
      question: 'What was a major economic effect of WWI on the Indian population?',
      options: ['Deflation and falling prices', 'High inflation and scarcity of goods', 'A decrease in taxes', 'A government surplus'],
      correctAnswer: 'High inflation and scarcity of goods',
      explanation: 'Heavy war expenditure and disruption of trade led to a sharp rise in prices, causing great hardship for ordinary Indians.'
    },
    {
      question: 'Who was the Viceroy of India at the start of World War II?',
      options: ['Lord Mountbatten', 'Lord Wavell', 'Lord Linlithgow', 'Lord Irwin'],
      correctAnswer: 'Lord Linlithgow',
      explanation: 'It was Lord Linlithgow who unilaterally declared India at war with Germany in 1939 without consulting Indian leaders.'
    },
    {
      question: 'The formation of the INA was primarily from which group of people?',
      options: ['Volunteers from India', 'Indian civilians living in Southeast Asia', 'Indian prisoners of war captured by the Japanese', 'German soldiers of Indian descent'],
      correctAnswer: 'Indian prisoners of war captured by the Japanese',
      explanation: 'The bulk of the INA was formed from Indian soldiers of the British Indian Army who had been captured by the Japanese after the fall of Singapore.'
    },
    {
      question: 'The Bengal Famine of 1943, which killed millions, occurred during which major conflict?',
      options: ['World War I', 'The 1857 Revolt', 'World War II', 'The Cold War'],
      correctAnswer: 'World War II',
      explanation: 'The devastating famine was exacerbated by wartime inflation, military needs, and the British government\'s policies of denial and inaction.'
    },
    {
      question: 'What was the main reason the Indian National Congress rejected the Cripps Mission?',
      options: ['It did not offer immediate full independence', 'It proposed partitioning India', 'It was pro-Muslim League', 'It banned the Congress party'],
      correctAnswer: 'It did not offer immediate full independence',
      explanation: 'The Congress was unwilling to accept a promise of future dominion status and demanded the immediate transfer of power to an Indian government.'
    },
    {
      question: 'The Western Front, a major theatre of WWI, was located in:',
      options: ['Russia and Poland', 'Turkey and Greece', 'France and Belgium', 'Italy and Austria'],
      correctAnswer: 'France and Belgium',
      explanation: 'The trench warfare of the Western Front in France and Belgium was one of the deadliest theatres of the war, where many Indian soldiers fought.'
    },
    {
      question: 'The slogan of the INA was:',
      options: ['"Do or Die"', '"Jai Hind"', '"Inquilab Zindabad"', '"Vande Mataram"'],
      correctAnswer: '"Jai Hind"',
      explanation: '"Jai Hind" (Victory to India) was adopted as the official slogan of the Indian National Army and was later adopted by the independent Indian government.'
    },
    {
      question: 'Which Indian industry received a major boost due to WWI?',
      options: ['The automobile industry', 'The aviation industry', 'The steel industry (Tata Steel)', 'The software industry'],
      correctAnswer: 'The steel industry (Tata Steel)',
      explanation: 'With British steel being diverted for the war effort, Indian industries like Tata Steel had to step up production to meet the demands for rails, machinery, and other materials.'
    },
    {
      question: 'The primary political impact of WWII on the British Empire was that it:',
      options: ['Strengthened its global position', 'Allowed it to gain new colonies', 'Financially and militarily weakened it, making it unable to hold onto colonies', 'Led to a stronger alliance with India'],
      correctAnswer: 'Financially and militarily weakened it, making it unable to hold onto colonies',
      explanation: 'The war left Britain with huge debts and a diminished international standing, making the cost of maintaining its empire unsustainable.'
    },
    {
      question: 'The fall of which British stronghold in Southeast Asia to the Japanese in 1942 was a major blow to British prestige?',
      options: ['Hong Kong', 'Singapore', 'Rangoon', 'Colombo'],
      correctAnswer: 'Singapore',
      explanation: 'The surrender of Singapore was a humiliating military defeat for the British and shattered the myth of their invincibility in Asia. It also led to the capture of tens of thousands of Indian soldiers who would later form the INA.'
    },
    {
      question: 'The "Home Rule" movement in India, which gained strength during WWI, was led by:',
      options: ['Mahatma Gandhi and Jawaharlal Nehru', 'Annie Besant and Bal Gangadhar Tilak', 'Subhas Chandra Bose and Sardar Patel', 'Muhammad Ali Jinnah and Liaquat Ali Khan'],
      correctAnswer: 'Annie Besant and Bal Gangadhar Tilak',
      explanation: 'The Home Rule Leagues were started in 1916 to demand self-government for India within the British Empire, inspired by a similar movement in Ireland.'
    },
    {
      question: 'What was the stance of the Communist Party of India during the Quit India Movement?',
      options: ['They led the movement', 'They remained neutral', 'They actively supported the movement', 'They opposed the movement and supported the British war effort'],
      correctAnswer: 'They opposed the movement and supported the British war effort',
      explanation: 'After the Soviet Union entered the war on the Allied side, the Communist Party of India changed its stance, calling it a "People\'s War" and opposing the Quit India Movement which they felt would weaken the Allied war effort against fascism.'
    },
    {
      question: 'The Montagu-Chelmsford Reforms of 1919 introduced a system of "dyarchy" in the provinces, which was seen as:',
      options: ['A step towards complete independence', 'A wholly unsatisfactory and complex system', 'A fair and balanced power-sharing formula', 'A system to abolish the princely states'],
      correctAnswer: 'A wholly unsatisfactory and complex system',
      explanation: 'Dyarchy, which divided provincial subjects into "transferred" and "reserved" categories, was seen as a flawed and inadequate reform, falling far short of the expectations of self-government.'
    },
    {
      question: 'The Jallianwala Bagh massacre was a direct result of protests against which Act?',
      options: ['The Government of India Act, 1919', 'The Rowlatt Act', 'The Defence of India Act', 'The Cripps Mission proposals'],
      correctAnswer: 'The Rowlatt Act',
      explanation: 'The gathering at Jallianwala Bagh was part of the widespread protests against the repressive Rowlatt Act, which allowed for indefinite detention without trial.'
    },
    {
      question: 'The Government of India Act, 1919, is also known as:',
      options: ['The Morley-Minto Reforms', 'The Montagu-Chelmsford Reforms', 'The Simon Commission Report', 'The Nehru Report'],
      correctAnswer: 'The Montagu-Chelmsford Reforms',
      explanation: 'It was named after Edwin Montagu, the Secretary of State for India, and Lord Chelmsford, the Viceroy of India.'
    },
    {
      question: 'During WWII, the British were most concerned about a potential Axis invasion of India from which direction?',
      options: ['From the North, via the Soviet Union', 'From the West, via the Middle East', 'From the East, via Burma', 'From the South, via a naval invasion'],
      correctAnswer: 'From the East, via Burma',
      explanation: 'After the Japanese conquered Burma, the threat of an overland invasion of India from the east became a major military concern for the British.'
    },
    {
      question: 'What was the "scorched earth" policy implemented by the British in Bengal during WWII?',
      options: ['A policy to improve agriculture', 'A policy to build more factories', 'A "denial policy" to destroy boats and rice stocks to hinder a potential Japanese invasion', 'A policy of planting more trees'],
      correctAnswer: 'A "denial policy" to destroy boats and rice stocks to hinder a potential Japanese invasion',
      explanation: 'This policy severely disrupted the local economy and is considered a major contributing factor to the Bengal Famine of 1943.'
    },
    {
      question: 'The Wavell Plan of 1945 proposed:',
      options: ['Immediate independence for India', 'The partition of India', 'The formation of a new Executive Council with all Indian members except the Viceroy and Commander-in-Chief', 'The abolition of the Indian Army'],
      correctAnswer: 'The formation of a new Executive Council with all Indian members except the Viceroy and Commander-in-Chief',
      explanation: 'The Wavell Plan was another attempt to break the political deadlock, but it failed due to disagreements between the Congress and the Muslim League over representation.'
    },
    {
      question: 'The August Offer (1940) was a proposal by the British government that:',
      options: ['Accepted the demand for Pakistan', 'Offered immediate independence', 'Offered future dominion status and the expansion of the Viceroy\'s Executive Council', 'Announced the British would be leaving India within a year'],
      correctAnswer: 'Offered future dominion status and the expansion of the Viceroy\'s Executive Council',
      explanation: 'The August Offer was an attempt to secure Indian cooperation in the war, but it was rejected by the Congress as it did not go far enough.'
    },
    {
      question: 'The famous Battle of Imphal and Kohima was fought between:',
      options: ['British and German forces', 'Japanese and INA forces against British and Indian forces', 'Indian and Pakistani forces', 'Chinese and Indian forces'],
      correctAnswer: 'Japanese and INA forces against British and Indian forces',
      explanation: 'This was the climactic battle of the Burma Campaign. The Japanese and INA forces attempted to invade India but were decisively defeated, marking a major turning point in the war in Asia.'
    },
    {
      question: 'Which of these was NOT a theater of war for the Indian Army in WWI?',
      options: ['The Western Front', 'Mesopotamia', 'East Africa', 'South America'],
      correctAnswer: 'South America',
      explanation: 'Indian soldiers fought across Europe, the Middle East, and Africa, but not in the Americas.'
    },
    {
      question: 'The Indian National Congress first demanded "Purna Swaraj" (complete independence) at which session?',
      options: ['The Surat Session, 1907', 'The Lucknow Session, 1916', 'The Lahore Session, 1929', 'The Bombay Session, 1942'],
      correctAnswer: 'The Lahore Session, 1929',
      explanation: 'At the Lahore session, with Jawaharlal Nehru as president, the Congress declared complete independence as its goal and decided to celebrate January 26th as Independence Day.'
    },
    {
      question: 'What was a major reason for the initial success of the Japanese in Southeast Asia in WWII?',
      options: ['They had help from the Americans', 'They used nuclear weapons', 'They achieved air and naval superiority and used effective jungle warfare tactics', 'The British and other colonial powers surrendered without a fight'],
      correctAnswer: 'They achieved air and naval superiority and used effective jungle warfare tactics',
      explanation: 'The Japanese forces were well-trained, highly motivated, and used innovative tactics that overwhelmed the unprepared Allied defenders in places like Malaya and Singapore.'
    },
    {
      question: 'The "Individual Satyagraha" of 1940 was initiated by Gandhi to:',
      options: ['Start a mass uprising', 'Protest the arrest of Subhas Chandra Bose', 'Assert the right to freedom of speech against the war', 'Demand immediate partition'],
      correctAnswer: 'Assert the right to freedom of speech against the war',
      explanation: 'It was a limited, symbolic movement where chosen individuals would make an anti-war speech and court arrest, to protest without hampering the war effort against fascism on a large scale.'
    },
    {
      question: 'Who was the first person selected by Gandhi to offer Individual Satyagraha?',
      options: ['Jawaharlal Nehru', 'Sardar Patel', 'Vinoba Bhave', 'Maulana Azad'],
      correctAnswer: 'Vinoba Bhave',
      explanation: 'Acharya Vinoba Bhave was the first satyagrahi, followed by Jawaharlal Nehru.'
    },
    {
      question: 'The political deadlock during WWII in India was primarily between:',
      options: ['The British and the princely states', 'The Indian National Congress and the Muslim League', 'The landlords and the peasants', 'The industrialists and the workers'],
      correctAnswer: 'The Indian National Congress and the Muslim League',
      explanation: 'The inability of the Congress and the League to agree on a power-sharing formula for an independent India was the main political obstacle.'
    },
    {
      question: 'The end of which war directly led to the establishment of the League of Nations?',
      options: ['The Napoleonic Wars', 'World War I', 'World War II', 'The Cold War'],
      correctAnswer: 'World War I',
      explanation: 'The League of Nations was created after WWI with the aim of preventing future global conflicts, though it ultimately failed.'
    },
    {
      question: 'The end of which war directly led to the establishment of the United Nations?',
      options: ['The Crimean War', 'World War I', 'World War II', 'The Vietnam War'],
      correctAnswer: 'World War II',
      explanation: 'The United Nations was founded in 1945 after the devastation of WWII to replace the ineffective League of Nations and to promote international peace and cooperation.'
    },
    {
      question: 'The idea of "dyarchy" introduced in 1919 meant:',
      options: ['Rule by two kings', 'A division of administrative subjects between elected Indian ministers and British-appointed councillors', 'Complete self-rule', 'Direct rule from London'],
      correctAnswer: 'A division of administrative subjects between elected Indian ministers and British-appointed councillors',
      explanation: 'Key departments like finance and law and order were "reserved" for the British, while less important ones like education and health were "transferred" to Indian ministers, making the system largely powerless.'
    },
    {
      question: 'Which of the following was a major long-term consequence of WWI?',
      options: ['The strengthening of European colonial empires', 'The rise of the United States as a major world power', 'A decrease in nationalism worldwide', 'A long period of global peace'],
      correctAnswer: 'The rise of the United States as a major world power',
      explanation: 'The war exhausted the old European powers and marked the emergence of the United States as a leading economic and political force on the world stage.'
    },
    {
      question: 'The Atlantic Charter, signed by Roosevelt and Churchill, supported the principle of:',
      options: ['Maintaining colonial empires', 'The right of all peoples to choose their own form of government', 'The supremacy of the Axis powers', 'A world government'],
      correctAnswer: 'The right of all peoples to choose their own form of government',
      explanation: 'Although Churchill later claimed it did not apply to the British Empire, Indian nationalists used the principle of self-determination mentioned in the Atlantic Charter to strengthen their case for independence.'
    },
    {
      question: 'The demand for Pakistan was formally adopted by the Muslim League at its session in which city?',
      options: ['Delhi', 'Dhaka', 'Lahore', 'Karachi'],
      correctAnswer: 'Lahore',
      explanation: 'The Lahore Resolution of 1940 is a landmark document in the history of Pakistan, where the Muslim League formally called for the creation of independent states for Muslims.'
    },
    {
      question: 'What was the main sentiment in Britain regarding its empire immediately after WWII?',
      options: ['A desire to expand the empire further', 'A realization that the empire was no longer sustainable', 'A plan to grant independence to all colonies immediately', 'A belief that the empire was stronger than ever'],
      correctAnswer: 'A realization that the empire was no longer sustainable',
      explanation: 'The new Labour government, led by Clement Attlee, was elected in 1945 and was more sympathetic to Indian independence, recognizing that Britain no longer had the resources or the will to maintain its empire.'
    },
    {
      question: 'Indian soldiers were awarded the highest British military honor, the Victoria Cross, for their bravery in which war?',
      options: ['Only in WWI', 'Only in WWII', 'In both WWI and WWII', 'Never'],
      correctAnswer: 'In both WWI and WWII',
      explanation: 'Many Indian soldiers received the Victoria Cross for exceptional bravery in both World Wars, highlighting their significant military contribution.'
    },
    {
      question: 'The Simla Conference of 1945 was an attempt by Viceroy Wavell to:',
      options: ['Plan the invasion of Japan', 'Finalize the partition of India', 'Form an executive council of Indian leaders', 'Discuss the post-war economy'],
      correctAnswer: 'Form an executive council of Indian leaders',
      explanation: 'The conference was convened to agree on the composition of a new executive council, but it failed due to disagreements between the Congress and the Muslim League over the nomination of Muslim members.'
    },
    {
      question: 'The slogan "Delhi Chalo" (On to Delhi) was given by:',
      options: ['Mahatma Gandhi', 'Jawaharlal Nehru', 'Sardar Patel', 'Subhas Chandra Bose'],
      correctAnswer: 'Subhas Chandra Bose',
      explanation: '"Delhi Chalo" was the rallying cry given by Subhas Chandra Bose to the soldiers of the INA, urging them to march to Delhi and liberate India.'
    },
    {
      question: 'Ultimately, India\'s independence in 1947 was a result of:',
      options: ['Only the non-violent movement', 'Only the revolutionary activities', 'Only the impact of the World Wars', 'A combination of mass movements, revolutionary actions, and the impact of the World Wars'],
      correctAnswer: 'A combination of mass movements, revolutionary actions, and the impact of the World Wars',
      explanation: 'Indian independence was the culmination of a long struggle with many different streams, combined with the changed global circumstances after WWII that made continued British rule impossible.'
    }
  ],
  '9': [
    {
      question: 'What was a major impact of World War II on the process of decolonisation?',
      options: ['It strengthened the colonial powers', 'It weakened the colonial powers economically and militarily', 'It stopped all independence movements', 'It led to more colonies being created'],
      correctAnswer: 'It weakened the colonial powers economically and militarily',
      explanation: 'WWII left Britain and France, the two largest colonial empires, exhausted and unable to afford the costs of maintaining their empires against growing nationalist movements.'
    },
    {
      question: 'Which two new superpowers emerged after WWII and were generally supportive of decolonisation?',
      options: ['Britain and France', 'Germany and Japan', 'USA and USSR', 'China and India'],
      correctAnswer: 'USA and USSR',
      explanation: 'Both the United States and the Soviet Union, for their own ideological and strategic reasons in the Cold War, opposed the old European colonial empires.'
    },
    {
      question: 'The year 1960 is often called the "Year of Africa" because:',
      options: ['The African Union was formed', 'A major war started in Africa', '17 African nations gained independence', 'The Scramble for Africa began'],
      correctAnswer: '17 African nations gained independence',
      explanation: '1960 saw a massive wave of decolonisation on the African continent, with 17 countries achieving sovereignty, mostly from France.'
    },
    {
      question: 'What is neocolonialism?',
      options: ['A new wave of acquiring colonies', 'The process of a colony becoming independent', 'Economic and political pressures to control or influence a country, without direct rule', 'The cultural exchange between a colony and its former ruler'],
      correctAnswer: 'Economic and political pressures to control or influence a country, without direct rule',
      explanation: 'Neocolonialism describes the situation where post-colonial nations remain economically and politically dependent on more powerful countries, particularly their former colonizers.'
    },
    {
      question: 'The principle of "self-determination" enshrined in the Atlantic Charter meant that peoples had the right to:',
      options: ['Choose their own form of government', 'Unlimited free trade', 'Join a superpower bloc', 'Maintain their colonial status'],
      correctAnswer: 'Choose their own form of government',
      explanation: 'This principle was a powerful ideological weapon used by nationalist movements to argue for their right to independence.'
    },
    {
      question: 'The French defeat at which battle led to their withdrawal from Indochina?',
      options: ['Battle of Saigon', 'Battle of Hanoi', 'Battle of Dien Bien Phu', 'Battle of the Mekong Delta'],
      correctAnswer: 'Battle of Dien Bien Phu',
      explanation: 'The decisive victory of the Viet Minh at Dien Bien Phu in 1954 was a humiliating defeat for the French army and forced them to negotiate their withdrawal.'
    },
    {
      question: 'Who was the leader of the Vietnamese independence movement against the French?',
      options: ['Pol Pot', 'Sukarno', 'Ho Chi Minh', 'Mao Zedong'],
      correctAnswer: 'Ho Chi Minh',
      explanation: 'Ho Chi Minh was the founder of the Viet Minh and a key figure in the struggle for Vietnam\'s independence from both France and later the United States.'
    },
    {
      question: 'Kwame Nkrumah was the leader who led which country to be the first in sub-Saharan Africa to gain independence?',
      options: ['Nigeria', 'Kenya', 'Congo', 'Ghana'],
      correctAnswer: 'Ghana',
      explanation: 'Kwame Nkrumah led the Gold Coast to independence in 1957, renaming it Ghana, which inspired independence movements across the continent.'
    },
    {
      question: 'The brutal Algerian War of Independence was fought against which colonial power?',
      options: ['Great Britain', 'Belgium', 'Portugal', 'France'],
      correctAnswer: 'France',
      explanation: 'France considered Algeria an integral part of its nation, leading to a particularly long and violent war for independence.'
    },
    {
      question: 'Who was the leader of the Indonesian independence movement?',
      options: ['Suharto', 'Sukarno', 'Hatta', 'Tan Malaka'],
      correctAnswer: 'Sukarno',
      explanation: 'Sukarno was a prominent leader of the Indonesian nationalist movement and became the first President of Indonesia.'
    },
    {
      question: 'The Mau Mau Uprising was a rebellion against British rule in which colony?',
      options: ['South Africa', 'India', 'Kenya', 'Egypt'],
      correctAnswer: 'Kenya',
      explanation: 'The Mau Mau Uprising in the 1950s was a militant nationalist movement by the Kikuyu people against British colonial rule in Kenya.'
    },
    {
      question: 'The Portuguese colonies of Angola and Mozambique gained independence after what event?',
      options: ['A UN resolution', 'A long war with Britain', 'The Carnation Revolution in Portugal', 'A peace treaty signed in Africa'],
      correctAnswer: 'The Carnation Revolution in Portugal',
      explanation: 'The overthrow of the authoritarian regime in Portugal in 1974 led to a new government that quickly granted independence to its remaining colonies.'
    },
    {
      question: 'The "Wind of Change" speech, acknowledging the growth of African nationalism, was made by which political leader?',
      options: ['Winston Churchill', 'Charles de Gaulle', 'Harold Macmillan', 'John F. Kennedy'],
      correctAnswer: 'Harold Macmillan',
      explanation: 'British Prime Minister Harold Macmillan\'s 1960 speech to the South African parliament recognized that the tide had turned in favor of independence, signaling a shift in British policy.'
    },
    {
      question: 'Which of these was a major problem faced by many newly independent African nations?',
      options: ['Lack of natural resources', 'Underpopulation', 'Ethnic conflicts caused by arbitrary colonial borders', 'Too much foreign investment'],
      correctAnswer: 'Ethnic conflicts caused by arbitrary colonial borders',
      explanation: 'The borders drawn by Europeans often lumped together rival ethnic groups, leading to civil wars and instability after independence.'
    },
    {
      question: 'The Suez Crisis of 1956 was a diplomatic humiliation for which two colonial powers?',
      options: ['USA and USSR', 'Britain and France', 'Portugal and Belgium', 'Netherlands and Spain'],
      correctAnswer: 'Britain and France',
      explanation: 'Their invasion of Egypt to reclaim the Suez Canal was opposed by both the US and USSR, forcing them into a humiliating withdrawal and demonstrating their diminished world status.'
    },
    {
      question: 'What was Apartheid?',
      options: ['An independence movement in Africa', 'A system of institutionalized racial segregation in South Africa', 'An economic theory', 'A treaty between colonial powers'],
      correctAnswer: 'A system of institutionalized racial segregation in South Africa',
      explanation: 'Apartheid was a system of white minority rule and racial segregation enforced by the National Party government in South Africa from 1948 to 1994.'
    },
    {
      question: 'Jomo Kenyatta was the first president of which independent nation?',
      options: ['Tanzania', 'Uganda', 'Nigeria', 'Kenya'],
      correctAnswer: 'Kenya',
      explanation: 'Jomo Kenyatta was a leading figure in the Kenyan nationalist movement and became its first president after independence in 1963.'
    },
    {
      question: 'Patrice Lumumba was the first democratically elected Prime Minister of which country, before being assassinated?',
      options: ['Ghana', 'Nigeria', 'Congo', 'Algeria'],
      correctAnswer: 'Congo',
      explanation: 'Patrice Lumumba\'s assassination in 1961, amidst the Congo Crisis and with foreign involvement, was a major tragedy of the decolonization era.'
    },
    {
      question: 'The Dutch tried to reclaim which colony after World War II?',
      options: ['Suriname', 'South Africa', 'Indonesia', 'New Guinea'],
      correctAnswer: 'Indonesia',
      explanation: 'The Indonesian War of Independence was fought from 1945 to 1949 between Indonesian nationalists and the Netherlands, who sought to re-establish their colonial rule.'
    },
    {
      question: 'The United Nations played what role in decolonization?',
      options: ['It actively opposed decolonization', 'It provided a platform for anti-colonial movements and encouraged self-determination', 'It had no role', 'It sent armies to enforce colonial rule'],
      correctAnswer: 'It provided a platform for anti-colonial movements and encouraged self-determination',
      explanation: 'The UN Charter and its Trusteeship Council provided a forum and legitimacy for colonies to demand independence.'
    },
    {
      question: 'The term "Third World" during the Cold War originally referred to:',
      options: ['The poorest countries', 'Countries not aligned with either the US or the USSR', 'Countries in the Southern Hemisphere', 'Communist countries'],
      correctAnswer: 'Countries not aligned with either the US or the USSR',
      explanation: 'The "First World" was the US and its allies, the "Second World" was the USSR and its allies, and the "Third World" comprised the non-aligned, often newly decolonized, nations.'
    },
    {
      question: 'Which of these Asian countries was NOT a European colony?',
      options: ['India', 'Indonesia', 'Vietnam', 'Thailand'],
      correctAnswer: 'Thailand',
      explanation: 'Thailand (formerly Siam) skillfully managed to remain independent by playing the British and French empires off against each other, serving as a buffer state.'
    },
    {
      question: 'The Bandung Conference of 1955 was a meeting of:',
      options: ['European colonial powers', 'The United States and the Soviet Union', 'Asian and African states', 'The United Nations Security Council'],
      correctAnswer: 'Asian and African states',
      explanation: 'The Bandung Conference was a key precursor to the Non-Aligned Movement, where leaders of newly independent nations met to promote economic and cultural cooperation and oppose colonialism.'
    },
    {
      question: 'What was the "domino theory"?',
      options: ['A theory about economic development', 'A US foreign policy theory that if one country fell to communism, surrounding countries would follow', 'A military strategy for decolonization', 'A theory about population growth'],
      correctAnswer: 'A US foreign policy theory that if one country fell to communism, surrounding countries would follow',
      explanation: 'The domino theory was a major justification for US intervention in places like Vietnam, as they feared communism would spread throughout Southeast Asia.'
    },
    {
      question: 'The partitioning of which British colony led to the creation of India and Pakistan?',
      options: ['Burma', 'Ceylon', 'British India', 'Malaya'],
      correctAnswer: 'British India',
      explanation: 'The partition of British India in 1947 was a traumatic event that accompanied the independence of the two nations.'
    },
    {
      question: 'The "French Community" was an organization similar to what British institution?',
      options: ['The National Health Service', 'The British Commonwealth', 'The House of Lords', 'The East India Company'],
      correctAnswer: 'The British Commonwealth',
      explanation: 'The French Community was an association of France and its former colonies, designed to maintain ties and influence after independence.'
    },
    {
      question: 'In what decade did most of the decolonization of Africa occur?',
      options: ['1940s', '1950s', '1960s', '1980s'],
      correctAnswer: '1960s',
      explanation: 'The 1960s saw a massive wave of independence across the African continent, beginning with the "Year of Africa" in 1960.'
    },
    {
      question: 'The Belgian Congo became which independent nation?',
      options: ['Nigeria', 'Ghana', 'The Democratic Republic of the Congo', 'Angola'],
      correctAnswer: 'The Democratic Republic of the Congo',
      explanation: 'The Belgian Congo, which was taken over by the Belgian state from King Leopold II, gained independence in 1960.'
    },
    {
      question: 'Gamal Abdel Nasser was the nationalist leader of which country?',
      options: ['Algeria', 'Libya', 'Egypt', 'Morocco'],
      correctAnswer: 'Egypt',
      explanation: 'Nasser was the second President of Egypt and a major proponent of Pan-Arabism. His nationalization of the Suez Canal led to the Suez Crisis.'
    },
    {
      question: 'The British policy of "divide and rule" involved:',
      options: ['Splitting colonies into smaller, more manageable units', 'Promoting divisions between ethnic or religious groups to maintain control', 'Dividing economic tasks between the colony and the mother country', 'Separating the military from the civilian government'],
      correctAnswer: 'Promoting divisions between ethnic or religious groups to maintain control',
      explanation: 'This strategy, famously used between Hindus and Muslims in India, was a way to prevent a unified opposition from forming against colonial rule.'
    },
    {
      question: 'Which of the following was NOT a factor that contributed to decolonization?',
      options: ['The economic and military exhaustion of colonial powers after WWII', 'The rise of strong nationalist movements', 'The desire of colonized peoples to remain under European rule', 'Pressure from the USA and the USSR'],
      correctAnswer: 'The desire of colonized peoples to remain under European rule',
      explanation: 'On the contrary, the desire for freedom and self-determination was the primary driving force behind the anti-colonial movements.'
    },
    {
      question: 'The Malayan Emergency was a guerrilla war fought by communist fighters against the rule of which colonial power?',
      options: ['France', 'The Netherlands', 'Great Britain', 'Portugal'],
      correctAnswer: 'Great Britain',
      explanation: 'The Malayan Emergency was a long and successful counter-insurgency campaign fought by British and Commonwealth forces, which eventually led to the independence of Malaya (now Malaysia).'
    },
    {
      question: 'The term "settler colonialism" best describes the situation in which of these countries?',
      options: ['India', 'Nigeria', 'Algeria', 'Indonesia'],
      correctAnswer: 'Algeria',
      explanation: 'Algeria had a large population of permanent French settlers (known as "pieds-noirs"), which made the war for independence particularly brutal and complex.'
    },
    {
      question: 'The Atlantic Charter was a joint declaration by which two leaders?',
      options: ['Stalin and Hitler', 'Churchill and Roosevelt', 'De Gaulle and Churchill', 'Roosevelt and Truman'],
      correctAnswer: 'Churchill and Roosevelt',
      explanation: 'The Atlantic Charter, signed in 1941, set out the Allied goals for the post-war world, even before the US entered the war.'
    },
    {
      question: 'The process of decolonization in the Belgian Congo was notably:',
      options: ['Peaceful and well-planned', 'Chaotic and poorly prepared, leading to immediate crisis', 'Delayed until the 1990s', 'Managed by the United Nations from the start'],
      correctAnswer: 'Chaotic and poorly prepared, leading to immediate crisis',
      explanation: 'Belgium did very little to prepare its colony for independence, leading to the Congo Crisis, a period of immense turmoil and civil war, almost immediately after.'
    },
    {
      question: 'Pan-Africanism, an ideology that inspired many independence leaders, advocated for:',
      options: ['The division of Africa into smaller states', 'The political and economic unity of the African continent', 'An alliance with the Soviet Union', 'Maintaining colonial borders'],
      correctAnswer: 'The political and economic unity of the African continent',
      explanation: 'Leaders like Kwame Nkrumah were strong proponents of Pan-Africanism, believing that unity was essential for Africa to be truly independent and strong.'
    },
    {
      question: 'The Organisation of African Unity (OAU), the precursor to the African Union, was founded in:',
      options: ['1957', '1960', '1963', '1994'],
      correctAnswer: '1963',
      explanation: 'The OAU was established in Addis Ababa, Ethiopia, to promote cooperation among African states and to help eradicate colonialism from the continent.'
    },
    {
      question: 'Which country in Southeast Asia was formerly known as Siam?',
      options: ['Vietnam', 'Cambodia', 'Malaysia', 'Thailand'],
      correctAnswer: 'Thailand',
      explanation: 'Thailand is unique in Southeast Asia for never having been formally colonized by a European power.'
    },
    {
      question: 'Robert Mugabe was a nationalist leader who fought against white minority rule in which country?',
      options: ['South Africa', 'Namibia', 'Rhodesia (now Zimbabwe)', 'Angola'],
      correctAnswer: 'Rhodesia (now Zimbabwe)',
      explanation: 'Robert Mugabe was a key figure in the guerrilla war against the white-led government of Rhodesia, becoming the first Prime Minister of independent Zimbabwe.'
    },
    {
      question: 'What was the immediate result of the end of Portuguese rule in Angola and Mozambique?',
      options: ['A period of lasting peace and prosperity', 'The peaceful establishment of democracy', 'Long and devastating civil wars fueled by Cold War rivalries', 'The immediate unification of the two countries'],
      correctAnswer: 'Long and devastating civil wars fueled by Cold War rivalries',
      explanation: 'After independence, different liberation movements, backed by opposing sides in the Cold War (USA/South Africa vs USSR/Cuba), fought for control, leading to protracted civil wars.'
    },
    {
      question: 'The term "Balkanization" is often used to describe a potential negative outcome of decolonization. It means:',
      options: ['Rapid economic growth', 'The peaceful formation of a federation', 'The fragmentation of a state into smaller, hostile units', 'The establishment of a single-party state'],
      correctAnswer: 'The fragmentation of a state into smaller, hostile units',
      explanation: 'This was a major fear for large, diverse colonies like India and Nigeria, where leaders worried the country could break apart after independence.'
    },
    {
      question: 'The official end of the British Empire is often symbolized by:',
      options: ['The independence of India in 1947', 'The Suez Crisis in 1956', 'The handover of Hong Kong to China in 1997', 'The independence of Ghana in 1957'],
      correctAnswer: 'The handover of Hong Kong to China in 1997',
      explanation: 'The return of Hong Kong, one of Britain\'s last major colonial possessions, is widely seen as the final act in the dismantling of the empire.'
    },
    {
      question: 'The Non-Aligned Movement (NAM) was a direct response by newly independent nations to:',
      options: ['The threat of climate change', 'The pressures of the Cold War', 'The spread of capitalism', 'The legacy of colonialism'],
      correctAnswer: 'The pressures of the Cold War',
      explanation: 'NAM was created so that developing countries could avoid being forced to choose between the two superpower blocs and could instead focus on their own development and interests.'
    },
    {
      question: 'The FLN (National Liberation Front) was the main nationalist organization in which country?',
      options: ['Congo', 'Kenya', 'Vietnam', 'Algeria'],
      correctAnswer: 'Algeria',
      explanation: 'The FLN led the armed struggle for independence against France from 1954 to 1962.'
    },
    {
      question: 'Léopold Sédar Senghor, a poet and politician, was the first president of which country?',
      options: ['Ivory Coast', 'Senegal', 'Mali', 'Guinea'],
      correctAnswer: 'Senegal',
      explanation: 'Senghor was a major intellectual figure, a proponent of the concept of "Négritude," and he led Senegal to independence from France.'
    },
    {
      question: 'The United Gold Coast Convention (UGCC) was the first nationalist party in:',
      options: ['Nigeria', 'Ghana', 'Sierra Leone', 'Gambia'],
      correctAnswer: 'Ghana',
      explanation: 'The UGCC initially invited Kwame Nkrumah to be its secretary, but he later broke away to form the more radical Convention People\'s Party (CPP).'
    },
    {
      question: 'The decolonization of the Philippines was primarily from which colonial power?',
      options: ['Spain, then the United States', 'Great Britain', 'The Netherlands', 'Portugal'],
      correctAnswer: 'Spain, then the United States',
      explanation: 'The Philippines was a Spanish colony for centuries before being ceded to the United States after the Spanish-American War of 1898. It gained full independence from the US in 1946.'
    },
    {
      question: 'The "Front for the Liberation of Mozambique" (FRELIMO) fought against the colonial rule of:',
      options: ['Belgium', 'Britain', 'France', 'Portugal'],
      correctAnswer: 'Portugal',
      explanation: 'FRELIMO was the main liberation movement in Mozambique and became the ruling party after independence.'
    },
    {
      question: 'Which of the following best describes the economic legacy of colonialism for many new nations?',
      options: ['Highly developed industrial economies', 'Economies structured around exporting raw materials to the former colonizer', 'Complete economic self-sufficiency', 'Equal trading partnerships with all nations'],
      correctAnswer: 'Economies structured around exporting raw materials to the former colonizer',
      explanation: 'Colonial economies were designed for extraction, not for balanced development. This legacy of dependency on a few primary commodities was a major challenge for newly independent nations.'
    }
  ],
  '10': [
    {
      question: 'The Cold War was a period of geopolitical tension between which two superpowers?',
      options: ['USA and China', 'UK and Germany', 'USA and Soviet Union', 'France and Russia'],
      correctAnswer: 'USA and Soviet Union',
      explanation: 'The Cold War was defined by the ideological, political, and military rivalry between the capitalist United States and the communist Soviet Union.'
    },
    {
      question: 'What was NATO?',
      options: ['A trade agreement', 'A cultural exchange program', 'A military alliance of communist countries', 'A military alliance of Western countries'],
      correctAnswer: 'A military alliance of Western countries',
      explanation: 'The North Atlantic Treaty Organization (NATO) was formed in 1949 as a collective defense alliance led by the United States to counter Soviet influence.'
    },
    {
      question: 'The Non-Aligned Movement (NAM) was formed by countries that wanted to:',
      options: ['Join the Soviet bloc', 'Join the Western bloc', 'Remain independent of both superpower blocs', 'Create a new military alliance'],
      correctAnswer: 'Remain independent of both superpower blocs',
      explanation: 'NAM was founded by newly independent nations to assert their neutrality and avoid being drawn into the Cold War conflicts between the US and the USSR.'
    },
    {
      question: 'What event in 1989 is widely seen as the symbolic end of the Cold War?',
      options: ['The start of the Vietnam War', 'The Cuban Missile Crisis', 'The dissolution of the Soviet Union', 'The fall of the Berlin Wall'],
      correctAnswer: 'The fall of the Berlin Wall',
      explanation: 'The fall of the Berlin Wall in November 1989 symbolized the collapse of the "Iron Curtain" and the impending end of communist rule in Eastern Europe.'
    },
    {
      question: 'The military alliance formed by the Soviet Union and its Eastern European allies was called:',
      options: ['The Moscow Agreement', 'The Eastern Bloc Alliance', 'The Warsaw Pact', 'The Comintern'],
      correctAnswer: 'The Warsaw Pact',
      explanation: 'The Warsaw Pact was created in 1955 as a direct response to West Germany joining NATO.'
    },
    {
      question: 'The term "Iron Curtain" was famously coined by whom to describe the division of Europe?',
      options: ['Harry S. Truman', 'Joseph Stalin', 'Winston Churchill', 'Franklin D. Roosevelt'],
      correctAnswer: 'Winston Churchill',
      explanation: 'Winston Churchill used the phrase in a speech in 1946 to describe the ideological and physical boundary separating Soviet-controlled Eastern Europe from the West.'
    },
    {
      question: 'What was a "proxy war"?',
      options: ['A war fought entirely with machines', 'A war instigated by a major power that does not itself become directly involved', 'A war fought over a legal document (proxy)', 'A short, limited war'],
      correctAnswer: 'A war instigated by a major power that does not itself become directly involved',
      explanation: 'During the Cold War, the US and USSR supported opposing sides in conflicts like the Korean and Vietnam Wars instead of fighting each other directly.'
    },
    {
      question: 'Which of these was a major Cold War crisis that brought the world to the brink of nuclear war?',
      options: ['The Suez Crisis', 'The Cuban Missile Crisis', 'The Falklands War', 'The Six-Day War'],
      correctAnswer: 'The Cuban Missile Crisis',
      explanation: 'The 1962 crisis over Soviet nuclear missiles placed in Cuba is considered the closest the two superpowers ever came to a full-scale nuclear exchange.'
    },
    {
      question: 'The Soviet Union\'s equivalent of the American CIA was the:',
      options: ['MI6', 'Mossad', 'Stasi', 'KGB'],
      correctAnswer: 'KGB',
      explanation: 'The KGB (Committee for State Security) was the main security agency for the Soviet Union from 1954 until its 1991 dissolution.'
    },
    {
      question: 'Which of these leaders was NOT a key founder of the Non-Aligned Movement?',
      options: ['Jawaharlal Nehru (India)', 'Gamal Abdel Nasser (Egypt)', 'Mao Zedong (China)', 'Josip Broz Tito (Yugoslavia)'],
      correctAnswer: 'Mao Zedong (China)',
      explanation: 'China, as a major communist power, was part of the Eastern Bloc and not a member of the Non-Aligned Movement.'
    },
    {
      question: 'The policy of "glasnost" introduced by Mikhail Gorbachev refers to:',
      options: ['Economic restructuring', 'Increased openness and transparency', 'Military expansion', 'Suppression of dissent'],
      correctAnswer: 'Increased openness and transparency',
      explanation: '"Glasnost" allowed for greater freedom of speech and press, which exposed the deep problems within the Soviet system.'
    },
    {
      question: 'The Cold War officially ended with what event in 1991?',
      options: ['The reunification of Germany', 'The end of the Vietnam War', 'The dissolution of the Soviet Union', 'The signing of the SALT II treaty'],
      correctAnswer: 'The dissolution of the Soviet Union',
      explanation: 'The formal dissolution of the USSR in December 1991 marked the end of the bipolar world order and the conclusion of the Cold War.'
    },
    {
      question: 'The "Space Race" began with which event?',
      options: ['The US moon landing', 'The launch of the Hubble Telescope', 'The Soviet launch of the Sputnik satellite', 'The creation of NASA'],
      correctAnswer: 'The Soviet launch of the Sputnik satellite',
      explanation: 'The successful launch of Sputnik 1 by the Soviets in 1957 shocked the United States and kicked off the intense competition for space dominance.'
    },
    {
      question: 'SAARC is a regional cooperation organization for countries in which region?',
      options: ['Southeast Asia', 'South Asia', 'South America', 'Sub-Saharan Africa'],
      correctAnswer: 'South Asia',
      explanation: 'SAARC stands for the South Asian Association for Regional Cooperation.'
    },
    {
      question: 'The concept of "Mutually Assured Destruction" (MAD) was based on the massive arsenals of what type of weapons?',
      options: ['Chemical weapons', 'Biological weapons', 'Conventional armies', 'Nuclear weapons'],
      correctAnswer: 'Nuclear weapons',
      explanation: 'MAD is a doctrine of military strategy where a full-scale use of nuclear weapons by two opposing sides would cause the complete annihilation of both the attacker and the defender.'
    },
    {
      question: 'The Truman Doctrine was a US policy aimed at:',
      options: ['Creating the United Nations', 'Containing the spread of communism', 'Promoting free trade', 'Ending colonialism'],
      correctAnswer: 'Containing the spread of communism',
      explanation: 'The Truman Doctrine, established in 1947, pledged US support for free peoples resisting subjugation by armed minorities or outside pressures, which was directed at Soviet influence.'
    },
    {
      question: 'The Marshall Plan was a US initiative to:',
      options: ['Rebuild Western Europe after WWII', 'Invade the Soviet Union', 'Develop nuclear weapons', 'Create NATO'],
      correctAnswer: 'Rebuild Western Europe after WWII',
      explanation: 'The Marshall Plan provided billions of dollars in aid to help rebuild war-torn European economies, partly to make them less susceptible to the appeal of communism.'
    },
    {
      question: 'The Berlin Blockade was a Soviet attempt to:',
      options: ['Build a wall through Berlin', 'Force the Western Allies out of West Berlin', 'Start a war with the US', 'Deliver supplies to East Berlin'],
      correctAnswer: 'Force the Western Allies out of West Berlin',
      explanation: 'The Soviets blocked all land and rail access to West Berlin in 1948, prompting the Western Allies to supply the city through a massive airlift.'
    },
    {
      question: 'In which country did the US and the USSR fight a major proxy war from 1955 to 1975?',
      options: ['Korea', 'Cuba', 'Afghanistan', 'Vietnam'],
      correctAnswer: 'Vietnam',
      explanation: 'The Vietnam War was a long and divisive conflict where the US and its allies supported South Vietnam against the communist North Vietnam, which was backed by the USSR and China.'
    },
    {
      question: 'The policy of "perestroika" introduced by Gorbachev aimed to:',
      options: ['Increase military spending', 'Restrict personal freedoms', 'Restructure the Soviet economy and political system', 'Expand the Soviet Union\'s territory'],
      correctAnswer: 'Restructure the Soviet economy and political system',
      explanation: '"Perestroika" involved introducing elements of market economics and decentralizing control to combat the stagnation of the Soviet economy.'
    },
    {
      question: 'Which of these countries is a founding member of SAARC?',
      options: ['China', 'Myanmar', 'India', 'Thailand'],
      correctAnswer: 'India',
      explanation: 'India, along with Pakistan, Bangladesh, Sri Lanka, Nepal, Maldives, and Bhutan, was a founding member of SAARC in 1985.'
    },
    {
      question: 'Yugoslavia, under Josip Broz Tito, was unique in the Eastern Bloc because it:',
      options: ['Was a member of NATO', 'Resisted Soviet domination and pursued an independent form of communism', 'Remained a monarchy', 'Had the strongest economy'],
      correctAnswer: 'Resisted Soviet domination and pursued an independent form of communism',
      explanation: 'Tito\'s break with Stalin in 1948 allowed Yugoslavia to follow its own path and become a key leader of the Non-Aligned Movement.'
    },
    {
      question: 'The "domino theory" was a US justification for its involvement in:',
      options: ['The Middle East', 'Latin America', 'Southeast Asia', 'Africa'],
      correctAnswer: 'Southeast Asia',
      explanation: 'The domino theory held that if one country in Southeast Asia fell to communism, others would follow, which was used to justify the Vietnam War.'
    },
    {
      question: 'The Commonwealth of Nations is a voluntary association of:',
      options: ['Former French colonies', 'Former British colonies', 'All European countries', 'All South Asian countries'],
      correctAnswer: 'Former British colonies',
      explanation: 'The Commonwealth is a political association of 54 member states, almost all of which are former territories of the British Empire.'
    },
    {
      question: 'The Korean War resulted in:',
      options: ['A victory for North Korea', 'A victory for South Korea', 'A stalemate, with the country remaining divided', 'The unification of Korea under a neutral government'],
      correctAnswer: 'A stalemate, with the country remaining divided',
      explanation: 'The war ended in 1953 with an armistice that established a demilitarized zone (DMZ) near the 38th parallel, roughly the original boundary.'
    },
    {
      question: 'The period of relaxed tensions between the US and USSR in the 1970s was known as:',
      options: ['Glasnost', 'Perestroika', 'Détente', 'Containment'],
      correctAnswer: 'Détente',
      explanation: 'Détente was a period of improved relations, characterized by arms control talks (SALT) and increased trade and cooperation.'
    },
    {
      question: 'The Soviet invasion of which country in 1979 effectively ended the period of détente?',
      options: ['Vietnam', 'Cuba', 'Afghanistan', 'Poland'],
      correctAnswer: 'Afghanistan',
      explanation: 'The Soviet-Afghan War was a major turning point that led to a new period of hostility, including the US boycott of the 1980 Moscow Olympics.'
    },
    {
      question: 'The "satellite states" of the Soviet Union were located in:',
      options: ['Western Europe', 'Eastern Europe', 'Central Asia', 'Latin America'],
      correctAnswer: 'Eastern Europe',
      explanation: 'Countries like Poland, Hungary, Czechoslovakia, and East Germany were under the political, economic, and military control of the Soviet Union.'
    },
    {
      question: 'What was the U-2 incident of 1960?',
      options: ['A failed US-backed invasion of Cuba', 'The shooting down of a US spy plane over the Soviet Union', 'A nuclear submarine collision', 'A secret meeting between Kennedy and Khrushchev'],
      correctAnswer: 'The shooting down of a US spy plane over the Soviet Union',
      explanation: 'The incident derailed a major summit between the two superpowers and heightened tensions.'
    },
    {
      question: 'Which of these countries was NOT a permanent member of the UN Security Council during the Cold War?',
      options: ['USA', 'USSR', 'France', 'Germany'],
      correctAnswer: 'Germany',
      explanation: 'Germany was divided for most of the Cold War. The five permanent members are the US, USSR (now Russia), UK, France, and China.'
    },
    {
      question: 'The Solidarity movement was a trade union and political movement in which Eastern Bloc country?',
      options: ['Hungary', 'Czechoslovakia', 'Poland', 'Romania'],
      correctAnswer: 'Poland',
      explanation: 'The Solidarity movement, led by Lech Wałęsa, played a central role in challenging communist rule in Poland and ultimately prevailing.'
    },
    {
      question: 'What was the main purpose of the Berlin Wall?',
      options: ['To protect West Berlin from a Soviet invasion', 'To prevent East Germans from fleeing to the West', 'To serve as a defensive fortification', 'To mark the city limits'],
      correctAnswer: 'To prevent East Germans from fleeing to the West',
      explanation: 'The wall was built by the East German government in 1961 to stop the massive "brain drain" of its citizens escaping to democratic West Berlin.'
    },
    {
      question: 'SEATO (Southeast Asia Treaty Organization) was an alliance created by which bloc?',
      options: ['The Western Bloc', 'The Eastern Bloc', 'The Non-Aligned Movement', 'The Arab League'],
      correctAnswer: 'The Western Bloc',
      explanation: 'SEATO was a US-led anti-communist alliance for Southeast Asia, though it was generally considered a failure.'
    },
    {
      question: 'The Hungarian Uprising of 1956 was:',
      options: ['A successful revolution that overthrew communist rule', 'A nationwide revolt against the communist government that was brutally crushed by the Soviet army', 'A peaceful transition to democracy', 'A pro-Soviet coup'],
      correctAnswer: 'A nationwide revolt against the communist government that was brutally crushed by the Soviet army',
      explanation: 'The Soviet invasion of Hungary showed that the USSR would not tolerate any attempt by its satellite states to leave the Warsaw Pact.'
    },
    {
      question: 'The term "bipolar world" refers to an international system dominated by:',
      options: ['One superpower', 'Two superpowers', 'Multiple superpowers', 'No superpowers'],
      correctAnswer: 'Two superpowers',
      explanation: 'The Cold War is the primary example of a bipolar international system, dominated by the US and the USSR.'
    },
    {
      question: 'Which US President famously called the Soviet Union an "evil empire"?',
      options: ['John F. Kennedy', 'Richard Nixon', 'Jimmy Carter', 'Ronald Reagan'],
      correctAnswer: 'Ronald Reagan',
      explanation: 'Reagan took a hard-line, confrontational stance against the Soviet Union in the early 1980s, departing from the policy of détente.'
    },
    {
      question: 'The Velvet Revolution refers to the non-violent overthrow of communism in which country?',
      options: ['Poland', 'Hungary', 'East Germany', 'Czechoslovakia'],
      correctAnswer: 'Czechoslovakia',
      explanation: 'The Velvet Revolution was a smooth, peaceful transition of power in Czechoslovakia in 1989.'
    },
    {
      question: 'What was the purpose of the SALT (Strategic Arms Limitation Talks) treaties?',
      options: ['To increase the number of nuclear weapons', 'To limit the number of nuclear weapons held by the US and USSR', 'To ban conventional weapons', 'To share nuclear technology'],
      correctAnswer: 'To limit the number of nuclear weapons held by the US and USSR',
      explanation: 'The SALT treaties were a key part of the détente era, aimed at controlling the nuclear arms race.'
    },
    {
      question: 'The "Red Scare" in the United States was a period of intense fear of:',
      options: ['British influence', 'Economic depression', 'Communism', 'Nuclear war'],
      correctAnswer: 'Communism',
      explanation: 'Particularly in the late 1940s and 1950s, the Red Scare led to McCarthyism and the persecution of suspected communists in the US.'
    },
    {
      question: 'Which of the following countries is NOT a member of the Commonwealth of Nations?',
      options: ['India', 'Australia', 'Canada', 'United States'],
      correctAnswer: 'United States',
      explanation: 'Although a former British colony, the United States is not a member of the Commonwealth.'
    },
    {
      question: 'The first successful artificial satellite, Sputnik 1, was launched by:',
      options: ['The United States', 'The Soviet Union', 'Great Britain', 'China'],
      correctAnswer: 'The Soviet Union',
      explanation: 'The 1957 launch of Sputnik 1 was a major technological triumph for the USSR and a shock to the US.'
    },
    {
      question: 'What was the Brezhnev Doctrine?',
      options: ['A policy of peaceful coexistence', 'A Soviet foreign policy that justified invading socialist countries that were trying to liberalize', 'A plan for economic reform', 'A treaty to ban nuclear tests'],
      correctAnswer: 'A Soviet foreign policy that justified invading socialist countries that were trying to liberalize',
      explanation: 'The Brezhnev Doctrine was used to justify the Soviet invasion of Czechoslovakia in 1968 to crush the "Prague Spring."'
    },
    {
      question: 'The Prague Spring was a period of political liberalization in 1968 in which country?',
      options: ['Poland', 'Hungary', 'East Germany', 'Czechoslovakia'],
      correctAnswer: 'Czechoslovakia',
      explanation: 'The reforms of the Prague Spring were seen as a threat by Moscow, leading to an invasion by Warsaw Pact forces.'
    },
    {
      question: 'The US policy of "containment" during the Cold War was intended to:',
      options: ['Destroy the Soviet Union militarily', 'Prevent the spread of communism beyond its existing borders', 'Convert the Soviet Union to capitalism', 'Ignore the Soviet Union completely'],
      correctAnswer: 'Prevent the spread of communism beyond its existing borders',
      explanation: 'Formulated by diplomat George F. Kennan, containment was the cornerstone of US foreign policy for much of the Cold War.'
    },
    {
      question: 'Who was the leader of the communist revolution in Cuba?',
      options: ['Che Guevara', 'Fidel Castro', 'Fulgencio Batista', 'Augusto Pinochet'],
      correctAnswer: 'Fidel Castro',
      explanation: 'Fidel Castro overthrew the US-backed dictator Batista in 1959 and established a communist state in Cuba, just off the coast of the United States.'
    },
    {
      question: 'The "Bay of Pigs" invasion was a failed attempt by:',
      options: ['The USSR to invade the US', 'Cuban exiles, backed by the CIA, to overthrow Fidel Castro', 'North Vietnam to invade South Vietnam', 'East Germany to take over West Berlin'],
      correctAnswer: 'Cuban exiles, backed by the CIA, to overthrow Fidel Castro',
      explanation: 'The failed invasion in 1961 was a major embarrassment for the Kennedy administration and pushed Cuba closer to the Soviet Union.'
    },
    {
      question: 'The first man to orbit the Earth was:',
      options: ['Neil Armstrong (USA)', 'John Glenn (USA)', 'Yuri Gagarin (USSR)', 'Alexei Leonov (USSR)'],
      correctAnswer: 'Yuri Gagarin (USSR)',
      explanation: 'Soviet cosmonaut Yuri Gagarin became the first human in space and the first to orbit the Earth in 1961, a major victory for the USSR in the Space Race.'
    },
    {
      question: 'The "revolutions of 1989" refer to the series of events that:',
      options: ['Brought communist parties to power in Western Europe', 'Led to the overthrow of communist regimes in Eastern Europe', 'Started the Cold War', 'Led to the formation of the Non-Aligned Movement'],
      correctAnswer: 'Led to the overthrow of communist regimes in Eastern Europe',
      explanation: 'In a stunningly rapid sequence, popular movements toppled communist governments in Poland, Hungary, East Germany, Bulgaria, Czechoslovakia, and Romania.'
    },
    {
      question: 'The concept of a "bipolar" international system was replaced after the Cold War by a system that is often described as:',
      options: ['Multipolar (multiple powers)', 'Unipolar (one dominant power)', 'Nonpolar (no major powers)', 'Bilateral (two allied powers)'],
      correctAnswer: 'Unipolar (one dominant power)',
      explanation: 'With the collapse of the USSR, the United States was left as the world\'s only superpower, creating a unipolar moment in international relations.'
    }
  ]
};
