export interface EconomicsQuestion {
  id: string;
  chapterId: string;
  question: string;
  type: '1-mark' | '2-marks' | '4-marks' | '6-marks';
  answer: string;
  points: string[];
  examTip: string;
}

export const economicsQuestionBank: EconomicsQuestion[] = [
  // Chapter 1: Introduction to Micro and Macro Economics
  {
    id: 'eco-q1',
    chapterId: 'eco-1',
    question: 'Define Microeconomics.',
    type: '2-marks',
    answer: 'Microeconomics is a branch of economics that studies the economic behavior of individual units such as consumers, firms, and industries. It focuses on how these units make decisions regarding allocation of scarce resources and how they interact in markets.',
    points: [
      'Microeconomics deals with individual economic units',
      'Studies consumer behavior, firm decisions, and market interactions',
      'Focuses on price determination in individual markets',
      'Analyzes resource allocation at micro level'
    ],
    examTip: 'Define the term clearly and mention that it deals with individual units, not the economy as a whole.'
  },
  {
    id: 'eco-q2',
    chapterId: 'eco-1',
    question: 'Distinguish between Microeconomics and Macroeconomics.',
    type: '4-marks',
    answer: `Microeconomics and Macroeconomics differ on several grounds:

Basis of Difference:
1. Scope: Microeconomics studies individual units (consumers, firms), while Macroeconomics studies the economy as a whole (national income, employment).

2. Focus: Microeconomics focuses on individual markets and price determination, whereas Macroeconomics focuses on aggregate variables like GDP, inflation, and unemployment.

3. Tools: Microeconomics uses demand-supply analysis for individual markets. Macroeconomics uses aggregate demand-aggregate supply models.

4. Objective: Microeconomics aims at optimal resource allocation, while Macroeconomics aims at economic stability and growth.`,
    points: [
      'Scope: Individual units vs whole economy',
      'Focus: Individual markets vs aggregate variables',
      'Tools: Demand-supply vs AD-AS models',
      'Objective: Resource allocation vs economic stability'
    ],
    examTip: 'Present the distinction in a tabular format or with clear headings. Cover at least 4 points of difference.'
  },

  // Chapter 2: Utility Analysis
  {
    id: 'eco-q3',
    chapterId: 'eco-2',
    question: 'State the Law of Diminishing Marginal Utility.',
    type: '2-marks',
    answer: 'The Law of Diminishing Marginal Utility states that as a consumer consumes more and more units of a commodity, the marginal utility derived from each successive unit goes on diminishing, keeping other things constant.',
    points: [
      'Applies to successive units of consumption',
      'Marginal utility decreases with each additional unit',
      'Assumes other factors remain constant (ceteris paribus)',
      'Explains consumer satisfaction pattern'
    ],
    examTip: 'Mention "successive units" and "marginal utility diminishes" clearly. State the ceteris paribus assumption.'
  },
  {
    id: 'eco-q4',
    chapterId: 'eco-2',
    question: 'Explain the relationship between Total Utility and Marginal Utility.',
    type: '4-marks',
    answer: `The relationship between Total Utility (TU) and Marginal Utility (MU) can be explained as follows:

1. When MU is positive, TU increases: As long as marginal utility from consuming additional units is positive, total utility continues to rise.

2. When MU is zero, TU is maximum: At this point of saturation, consuming one more unit adds nothing to total satisfaction.

3. When MU is negative, TU decreases: Beyond the saturation point, additional consumption leads to dissatisfaction, reducing total utility.

4. MU is the rate of change of TU: Mathematically, MU = Change in TU / Change in Quantity.`,
    points: [
      'Positive MU leads to increasing TU',
      'Zero MU indicates maximum TU (saturation point)',
      'Negative MU results in decreasing TU',
      'MU is the slope/rate of change of TU curve'
    ],
    examTip: 'Draw a diagram showing TU and MU curves if time permits. Explain the three phases clearly.'
  },

  // Chapter 3: Demand Analysis
  {
    id: 'eco-q5',
    chapterId: 'eco-3',
    question: 'State the Law of Demand.',
    type: '2-marks',
    answer: 'The Law of Demand states that other things remaining constant (ceteris paribus), when the price of a commodity rises, its demand falls, and when the price falls, its demand rises. Thus, there is an inverse relationship between price and quantity demanded.',
    points: [
      'Inverse relationship between price and quantity demanded',
      'Higher price leads to lower demand',
      'Lower price leads to higher demand',
      'Assumes ceteris paribus (other factors constant)'
    ],
    examTip: 'Emphasize the inverse relationship and mention ceteris paribus assumption clearly.'
  },
  {
    id: 'eco-q6',
    chapterId: 'eco-3',
    question: 'Explain the determinants of demand.',
    type: '6-marks',
    answer: `The demand for a commodity is influenced by several factors:

1. Price of the Commodity: This is the most important determinant. According to the law of demand, price and demand are inversely related.

2. Income of the Consumer: For normal goods, an increase in income leads to an increase in demand. For inferior goods, the relationship is inverse.

3. Prices of Related Goods:
   - Substitute goods: If the price of tea rises, demand for coffee may increase.
   - Complementary goods: If the price of petrol rises, demand for cars may fall.

4. Tastes and Preferences: Changes in consumer preferences due to fashion, advertising, or habits affect demand. A favorable change increases demand.

5. Consumer Expectations: If consumers expect prices to rise in future, current demand may increase. Similarly, expected income changes affect present demand.

6. Population and Demographics: Larger population or changes in age structure affect market demand. For example, an aging population increases demand for healthcare.

7. Government Policy: Taxes, subsidies, and regulations can increase or decrease demand for specific products.`,
    points: [
      'Price of the commodity (inverse relationship)',
      'Income of consumers (normal vs inferior goods)',
      'Prices of related goods (substitutes and complements)',
      'Tastes and preferences (fashion, advertising)',
      'Consumer expectations about future prices',
      'Population size and demographic composition',
      'Government policies (taxes, subsidies)'
    ],
    examTip: 'Explain at least 5-6 determinants with examples. Use subheadings for clarity and give real-life examples where possible.'
  },

  // Chapter 4: Elasticity of Demand
  {
    id: 'eco-q7',
    chapterId: 'eco-4',
    question: 'Define Price Elasticity of Demand.',
    type: '2-marks',
    answer: 'Price Elasticity of Demand measures the degree of responsiveness of quantity demanded to a change in the price of a commodity. It is calculated as the percentage change in quantity demanded divided by the percentage change in price.',
    points: [
      'Measures responsiveness of demand to price changes',
      'Calculated as: Ed = (% change in Qd) / (% change in P)',
      'Indicates how sensitive consumers are to price changes',
      'Important for pricing decisions'
    ],
    examTip: 'Mention both the concept and the formula. Use the term "degree of responsiveness".'
  },
  {
    id: 'eco-q8',
    chapterId: 'eco-4',
    question: 'Explain the types of Price Elasticity of Demand.',
    type: '6-marks',
    answer: `Price Elasticity of Demand can be classified into five types:

1. Perfectly Elastic Demand (Ed = ∞):
When a small change in price leads to an infinitely large change in quantity demanded. The demand curve is horizontal. Example: Agricultural products in perfect competition.

2. Perfectly Inelastic Demand (Ed = 0):
When quantity demanded does not change at all in response to price changes. The demand curve is vertical. Example: Life-saving drugs, salt.

3. Relatively Elastic Demand (Ed > 1):
When the percentage change in quantity demanded is greater than the percentage change in price. Example: Luxury goods, branded products.

4. Relatively Inelastic Demand (Ed < 1):
When the percentage change in quantity demanded is less than the percentage change in price. Example: Necessities like food grains, medicines.

5. Unitary Elastic Demand (Ed = 1):
When the percentage change in quantity demanded is exactly equal to the percentage change in price. The demand curve is a rectangular hyperbola.

Each type has different implications for revenue and pricing strategies of firms.`,
    points: [
      'Perfectly elastic (Ed = ∞) - horizontal demand curve',
      'Perfectly inelastic (Ed = 0) - vertical demand curve',
      'Relatively elastic (Ed > 1) - luxury goods',
      'Relatively inelastic (Ed < 1) - necessities',
      'Unitary elastic (Ed = 1) - proportionate change'
    ],
    examTip: 'Define each type clearly with the value of Ed, shape of curve, and give examples. If time permits, draw diagrams for each type.'
  },

  // Chapter 5: Supply Analysis
  {
    id: 'eco-q9',
    chapterId: 'eco-5',
    question: 'State the Law of Supply.',
    type: '2-marks',
    answer: 'The Law of Supply states that other things remaining constant, when the price of a commodity rises, its supply also rises, and when the price falls, its supply also falls. Thus, there is a direct (positive) relationship between price and quantity supplied.',
    points: [
      'Direct relationship between price and quantity supplied',
      'Higher price leads to higher supply',
      'Lower price leads to lower supply',
      'Assumes ceteris paribus condition'
    ],
    examTip: 'Emphasize the direct/positive relationship and state the ceteris paribus assumption.'
  },
  {
    id: 'eco-q10',
    chapterId: 'eco-5',
    question: 'Explain the determinants of supply.',
    type: '4-marks',
    answer: `The supply of a commodity is influenced by several factors:

1. Price of the Commodity: According to the law of supply, higher prices incentivize producers to supply more, and vice versa.

2. Cost of Production: If input prices (labor, raw materials) increase, production becomes costlier, reducing supply at each price level.

3. Technology: Improved technology reduces cost per unit and increases supply. Modern machinery and methods enhance production efficiency.

4. Number of Firms: More firms in the market increase total market supply. Entry and exit of firms affect supply.

5. Government Policies: Taxes increase cost and reduce supply, while subsidies reduce cost and increase supply. Regulations also impact supply.

6. Prices of Related Goods: If a farmer can grow wheat or rice, a rise in wheat price may shift supply from rice to wheat.`,
    points: [
      'Price of the commodity (direct relationship)',
      'Cost of production (inputs, wages, raw materials)',
      'Technology and production methods',
      'Number of firms in the market',
      'Government policies (taxes, subsidies, regulations)',
      'Prices of related goods in production'
    ],
    examTip: 'Cover at least 4-5 determinants with brief explanations or examples.'
  },

  // Chapter 6: Forms of Market
  {
    id: 'eco-q11',
    chapterId: 'eco-6',
    question: 'What is a monopoly?',
    type: '1-mark',
    answer: 'A monopoly is a market structure where there is only one seller selling a product that has no close substitutes.',
    points: [
      'Single seller in the market',
      'No close substitutes available',
      'Complete control over price',
      'High barriers to entry'
    ],
    examTip: 'Keep it concise - mention single seller and no close substitutes.'
  },
  {
    id: 'eco-q12',
    chapterId: 'eco-6',
    question: 'Explain the features of Perfect Competition.',
    type: '6-marks',
    answer: `Perfect Competition is a market structure characterized by the following features:

1. Large Number of Buyers and Sellers:
There are so many buyers and sellers that no single entity can influence the market price. Each participant is a price taker.

2. Homogeneous Product:
All firms sell identical products that are perfect substitutes for each other. Consumers have no reason to prefer one seller over another.

3. Free Entry and Exit:
There are no barriers to entry or exit. Firms can freely enter when profits are available and exit when losses occur. This ensures long-run normal profits.

4. Perfect Knowledge:
All buyers and sellers have complete information about market conditions, prices, and quality. This eliminates information asymmetry.

5. No Transportation Costs:
It is assumed that there are no costs involved in transporting goods from one place to another, ensuring uniform prices.

6. Perfect Mobility of Factors:
Factors of production can move freely from one use to another, ensuring optimal resource allocation.

7. No Government Interference:
The market operates without government intervention in price determination or quantity produced.

In perfect competition, firms are price takers and can only decide the quantity to produce. Price is determined by market forces of demand and supply.`,
    points: [
      'Large number of buyers and sellers (price takers)',
      'Homogeneous/identical products',
      'Free entry and exit of firms',
      'Perfect knowledge and information',
      'No transportation costs',
      'Perfect mobility of factors of production',
      'Absence of government interference'
    ],
    examTip: 'Explain at least 5-6 features in detail. Use subheadings and conclude by stating that firms are price takers.'
  },

  // Chapter 7: Index Numbers
  {
    id: 'eco-q13',
    chapterId: 'eco-7',
    question: 'Define Index Number.',
    type: '2-marks',
    answer: 'An Index Number is a statistical measure that shows changes in a variable or group of related variables with respect to time, geographical location, or other characteristics. It is expressed as a percentage relative to a base period value, which is taken as 100.',
    points: [
      'Statistical measure of change',
      'Compares current period with base period',
      'Base period value = 100',
      'Used to measure price changes, production, etc.'
    ],
    examTip: 'Mention that it is a relative measure comparing two time periods, with base = 100.'
  },
  {
    id: 'eco-q14',
    chapterId: 'eco-7',
    question: 'Explain the uses of Index Numbers.',
    type: '4-marks',
    answer: `Index Numbers have several important uses:

1. Measuring Changes in Price Level: Consumer Price Index (CPI) and Wholesale Price Index (WPI) measure inflation and deflation, helping in economic policy formulation.

2. Deflating Money Values: Index numbers help convert nominal values into real values by removing the effect of price changes, enabling meaningful comparisons over time.

3. Formulating Economic Policies: Governments use index numbers to frame monetary policy, wage policy, and price control measures.

4. Wage Determination: Trade unions use CPI to argue for wage increases to match rising cost of living. Dearness allowance is often linked to CPI.

5. Adjusting International Comparisons: Index numbers facilitate comparison of economic variables across countries by accounting for price differences.

6. Business Planning: Firms use index numbers to forecast trends, plan production, and make investment decisions.`,
    points: [
      'Measuring inflation/deflation (CPI, WPI)',
      'Deflating money values to real values',
      'Formulating economic policies',
      'Wage determination and DA fixation',
      'International economic comparisons',
      'Business forecasting and planning'
    ],
    examTip: 'Give at least 4-5 uses with brief explanations. Mention specific indices like CPI and WPI.'
  },

  // Chapter 8: National Income
  {
    id: 'eco-q15',
    chapterId: 'eco-8',
    question: 'Define National Income.',
    type: '2-marks',
    answer: 'National Income is the total money value of all final goods and services produced in a country during a given period, usually one year. It represents the sum of all factor incomes earned by residents of a country.',
    points: [
      'Total money value of final goods and services',
      'Produced in one year',
      'Sum of all factor incomes (wages, rent, interest, profit)',
      'Measure of economic performance'
    ],
    examTip: 'Mention "final goods and services" and "one year" clearly. State it is sum of factor incomes.'
  },
  {
    id: 'eco-q16',
    chapterId: 'eco-8',
    question: 'Explain the methods of measuring National Income.',
    type: '6-marks',
    answer: `National Income can be measured using three methods:

1. Output Method (Product Method):
This method calculates national income by adding the value of output produced by all sectors of the economy.
- Calculate Gross Value Added (GVA) of each sector: Primary, Secondary, and Tertiary
- GVA = Value of Output - Intermediate Consumption
- Sum up GVA of all sectors to get GDP at market prices
- Adjust for net factor income from abroad to get GNP

2. Income Method (Factor Income Method):
This method sums up all factor incomes earned in the production process.
- Add: Wages and Salaries (compensation of employees)
- Add: Rent (rental income)
- Add: Interest (income from lending)
- Add: Profit (corporate profits and proprietor's income)
- This gives Domestic Income
- Add net factor income from abroad to get National Income

3. Expenditure Method:
This method adds up all expenditures made on final goods and services.
- Private Final Consumption Expenditure (C)
- Government Final Consumption Expenditure (G)
- Gross Domestic Capital Formation/Investment (I)
- Net Exports (X - M)
- GDP = C + G + I + (X - M)
- Adjust for depreciation and net factor income from abroad to get National Income

All three methods should theoretically give the same result as they measure the same economic flow from different angles.`,
    points: [
      'Output Method: Sum of value added by all sectors',
      'Income Method: Sum of all factor incomes (wages, rent, interest, profit)',
      'Expenditure Method: Sum of all expenditures (C + G + I + NX)',
      'All three methods give the same result',
      'Need to adjust for depreciation and NFIA',
      'Avoid double counting (use final goods or value added)'
    ],
    examTip: 'Explain all three methods clearly with their formulas. Mention that all three should give identical results. Use proper economic terminology.'
  },

  // Chapter 9: Public Finance
  {
    id: 'eco-q17',
    chapterId: 'eco-9',
    question: 'Distinguish between Direct and Indirect Taxes.',
    type: '4-marks',
    answer: `Direct and Indirect Taxes differ on the following grounds:

1. Definition:
Direct Tax: Levied directly on income and wealth of individuals and organizations.
Indirect Tax: Levied on goods and services, indirectly affecting consumers.

2. Incidence and Impact:
Direct Tax: The person who pays the tax bears its burden (incidence = impact). Cannot be shifted.
Indirect Tax: The tax can be shifted from payer to another person. The seller pays but passes it to the buyer.

3. Nature:
Direct Tax: Progressive in nature, based on ability to pay.
Indirect Tax: Regressive in nature, affects all consumers equally regardless of income.

4. Examples:
Direct Tax: Income Tax, Wealth Tax, Corporate Tax
Indirect Tax: GST, Customs Duty, Excise Duty

5. Equity:
Direct Tax: More equitable as higher income groups pay more.
Indirect Tax: Less equitable as it affects poor and rich equally.`,
    points: [
      'Definition: On income/wealth vs on goods/services',
      'Burden: Cannot be shifted vs can be shifted',
      'Nature: Progressive vs regressive',
      'Examples: Income tax, wealth tax vs GST, customs duty',
      'Equity: More equitable vs less equitable'
    ],
    examTip: 'Present in a comparative format with clear points of distinction. Give examples for each type.'
  },
  {
    id: 'eco-q18',
    chapterId: 'eco-9',
    question: 'Explain the sources of public revenue in India.',
    type: '6-marks',
    answer: `Public Revenue refers to the income of the government from various sources. In India, the main sources are:

A. Tax Revenue:

1. Direct Taxes:
   - Income Tax: Levied on personal and business income
   - Corporate Tax: Tax on profits of companies
   - Wealth Tax: On net wealth (discontinued in 2015)
   
2. Indirect Taxes:
   - Goods and Services Tax (GST): Unified tax on goods and services
   - Customs Duty: On imports and exports
   - Excise Duty: On production of goods

B. Non-Tax Revenue:

1. Interest Receipts: Government earns interest on loans given to states and public enterprises.

2. Dividends and Profits: From public sector undertakings (PSUs) like ONGC, BHEL, Coal India.

3. Fees and Fines: Court fees, license fees, penalties for violations.

4. Special Assessments: Charges for specific services like irrigation, street lighting.

5. Grants and Gifts: From foreign governments and international organizations.

C. Other Sources:

1. Borrowings: From RBI, public, and foreign sources (creates liability).
2. Deficit Financing: Printing new currency (inflationary).

Tax revenue forms the major source of government income, contributing about 70-80% of total revenue.`,
    points: [
      'Tax Revenue: Direct (income, corporate) and Indirect (GST, customs)',
      'Non-Tax Revenue: Interest, dividends from PSUs, fees',
      'Special assessments and user charges',
      'Grants and gifts from international bodies',
      'Borrowings and deficit financing',
      'Tax revenue is the major source (70-80%)'
    ],
    examTip: 'Divide answer into Tax and Non-Tax revenue with proper subheadings. Give current examples like GST. Mention the proportion of tax revenue in total revenue.'
  },

  // Chapter 10: Money and Capital Market
  {
    id: 'eco-q19',
    chapterId: 'eco-10',
    question: 'Distinguish between Money Market and Capital Market.',
    type: '4-marks',
    answer: `Money Market and Capital Market differ on the following grounds:

1. Period:
Money Market: Deals in short-term funds (up to 1 year).
Capital Market: Deals in long-term funds (more than 1 year).

2. Instruments:
Money Market: Treasury bills, commercial papers, certificates of deposit, call money.
Capital Market: Shares, debentures, bonds, mutual funds.

3. Institutions:
Money Market: RBI, commercial banks, discount houses.
Capital Market: Stock exchanges, SEBI, merchant banks, mutual funds.

4. Purpose:
Money Market: Meets short-term working capital requirements.
Capital Market: Finances long-term investment in fixed assets.

5. Risk and Return:
Money Market: Lower risk and lower returns.
Capital Market: Higher risk and higher returns.`,
    points: [
      'Period: Short-term (up to 1 year) vs Long-term (> 1 year)',
      'Instruments: T-bills, CPs vs shares, debentures',
      'Institutions: RBI, banks vs stock exchanges, SEBI',
      'Purpose: Working capital vs fixed assets',
      'Risk-Return: Low risk-low return vs high risk-high return'
    ],
    examTip: 'Present in tabular or point-wise comparative format. Cover at least 4 points of distinction.'
  },

  // Chapter 11: Foreign Trade
  {
    id: 'eco-q20',
    chapterId: 'eco-11',
    question: 'What are the major exports of India?',
    type: '2-marks',
    answer: 'India\'s major exports include: Petroleum products, Gems and Jewelry, Pharmaceuticals, Engineering goods, Textiles and garments, Chemicals, Rice, and IT services. India is also a major exporter of software services and business process outsourcing (BPO).',
    points: [
      'Petroleum products and refined oil',
      'Gems and jewelry',
      'Pharmaceuticals and drugs',
      'Engineering goods and machinery',
      'Textiles, garments, and leather',
      'IT and software services'
    ],
    examTip: 'List 5-6 major export items. Mention both goods and services.'
  },
  {
    id: 'eco-q21',
    chapterId: 'eco-11',
    question: 'Explain the problems faced by India in foreign trade.',
    type: '6-marks',
    answer: `India faces several challenges in its foreign trade:

1. Trade Deficit:
India has a persistent trade deficit, meaning imports exceed exports. This puts pressure on foreign exchange reserves and weakens the rupee. High import dependency on crude oil and gold contributes significantly.

2. Lack of Competitiveness:
Indian exports face stiff competition from countries like China, Vietnam, and Bangladesh due to lower production costs, better infrastructure, and favorable trade policies in those countries.

3. Infrastructure Bottlenecks:
Poor port facilities, inadequate road and rail connectivity, and inefficient logistics increase the cost and time for exports, making Indian products less competitive.

4. Quality and Standards:
Many Indian products do not meet international quality standards and technical regulations, creating barriers in developed markets. Certification and testing facilities need improvement.

5. Tariff and Non-Tariff Barriers:
Indian exporters face high tariffs and non-tariff barriers (quotas, standards, sanitary regulations) in foreign markets, restricting market access.

6. Dependence on Traditional Markets:
India is heavily dependent on a few markets (USA, EU, Middle East). Lack of diversification makes trade vulnerable to economic conditions in these regions.

7. Exchange Rate Fluctuations:
Volatility in exchange rates creates uncertainty for exporters and importers, affecting profitability and planning.

8. Limited Product Diversification:
India's export basket is concentrated in a few sectors. Need to diversify into high-value products and services.

Government initiatives like "Make in India," "Trade Infrastructure for Export Scheme (TIES)," and trade agreements aim to address these challenges.`,
    points: [
      'Persistent trade deficit due to high imports',
      'Lack of competitiveness compared to China, Vietnam',
      'Poor infrastructure (ports, logistics)',
      'Quality and standards issues',
      'Tariff and non-tariff barriers in foreign markets',
      'Dependence on traditional markets (USA, EU)',
      'Exchange rate volatility',
      'Limited product diversification'
    ],
    examTip: 'Explain at least 5-6 problems in detail. Give current examples and mention government initiatives to address these issues if space permits.'
  },

  // Additional questions across chapters
  {
    id: 'eco-q22',
    chapterId: 'eco-2',
    question: 'What is Consumer Equilibrium?',
    type: '1-mark',
    answer: 'Consumer Equilibrium is the situation where a consumer gets maximum satisfaction from spending his limited income on different goods, and has no tendency to change his consumption pattern.',
    points: [
      'Maximum satisfaction with given income',
      'No tendency to change consumption',
      'Optimal allocation of budget',
      'Marginal utility per rupee is equal for all goods'
    ],
    examTip: 'Mention maximum satisfaction and no tendency to change consumption.'
  },
  {
    id: 'eco-q23',
    chapterId: 'eco-4',
    question: 'What is Income Elasticity of Demand?',
    type: '2-marks',
    answer: 'Income Elasticity of Demand measures the responsiveness of quantity demanded to changes in consumer income. It is calculated as the percentage change in quantity demanded divided by the percentage change in income. It helps classify goods as normal (positive elasticity) or inferior (negative elasticity).',
    points: [
      'Measures responsiveness to income changes',
      'Formula: (% change in Qd) / (% change in Income)',
      'Positive for normal goods',
      'Negative for inferior goods'
    ],
    examTip: 'Define clearly, mention the formula, and distinguish between normal and inferior goods.'
  },
  {
    id: 'eco-q24',
    chapterId: 'eco-8',
    question: 'Distinguish between GDP and GNP.',
    type: '4-marks',
    answer: `GDP and GNP differ on the following grounds:

1. Concept:
GDP (Gross Domestic Product): Total value of goods and services produced within the domestic territory of a country.
GNP (Gross National Product): Total value of goods and services produced by nationals of a country, whether within or outside the country.

2. Formula:
GDP: Based on domestic production.
GNP = GDP + Net Factor Income from Abroad (NFIA)

3. Coverage:
GDP: Includes production by foreigners within the country but excludes production by nationals abroad.
GNP: Includes production by nationals abroad but excludes production by foreigners within the country.

4. Focus:
GDP: Focuses on domestic production (territorial concept).
GNP: Focuses on national production (nationality concept).

Example: Income earned by an Indian working in USA is part of India's GNP but not GDP. Income earned by an American working in India is part of India's GDP but not GNP.`,
    points: [
      'GDP: Production within domestic territory',
      'GNP: Production by nationals anywhere',
      'GNP = GDP + Net Factor Income from Abroad',
      'GDP uses territorial principle, GNP uses nationality principle',
      'Example: Indian in USA contributes to India's GNP, not GDP'
    ],
    examTip: 'Clearly explain the difference with the formula GNP = GDP + NFIA. Give an example to illustrate.'
  }
];

// Helper functions to filter questions
export function getEconomicsQuestionsByChapter(chapterId: string): EconomicsQuestion[] {
  return economicsQuestionBank.filter(q => q.chapterId === chapterId);
}

export function getEconomicsQuestionsByType(
  chapterId: string,
  type: EconomicsQuestion['type']
): EconomicsQuestion[] {
  return economicsQuestionBank.filter(
    q => q.chapterId === chapterId && q.type === type
  );
}
