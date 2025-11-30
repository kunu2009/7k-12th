/**
 * Economics Mock Papers Data
 * Migrated from 7K-ECO to unified-study-hub
 * 
 * Contains 3 mock papers for board exam practice
 */

import type { MockPaper, MockPaperQuestion, MockPaperSection } from '@/types/economics';

// Re-export types for convenience
export type { MockPaper, MockPaperQuestion, MockPaperSection };

// ============================================================================
// Mock Paper 1
// ============================================================================
export const mockPaper1: MockPaper = {
  id: "eco-mock-1",
  title: "Economics Mock Paper",
  totalMarks: 80,
  duration: "3 Hours",
  sections: [
    {
      title: "Q.1 A) Choose the correct option",
      totalMarks: 5,
      questions: [
        { text: "The branch of economics that deals with the allocation of resources.", marks: 1, options: ["Microeconomics", "Macroeconomics", "Econometrics", "None of these"], answer: "Microeconomics" },
        { text: "When marginal utility is negative, total utility is:", marks: 1, options: ["Rising", "Falling", "Maximum", "Zero"], answer: "Falling" },
        { text: "Demand curve is _______.", marks: 1, options: ["Upward sloping", "Downward sloping", "Parallel to X-axis", "Parallel to Y-axis"], answer: "Downward sloping" },
        { text: "A market structure with a single seller.", marks: 1, options: ["Perfect Competition", "Monopoly", "Oligopoly", "Monopolistic Competition"], answer: "Monopoly" },
        { text: "The financial year in India is:", marks: 1, options: ["1st Jan to 31st Dec", "1st April to 31st March", "1st March to 31st April", "1st July to 30th June"], answer: "1st April to 31st March" },
      ]
    },
    {
      title: "Q.1 B) Complete the correlation",
      totalMarks: 5,
      questions: [
        { text: "Microeconomics : Slicing Method :: Macroeconomics : ?", marks: 1, answer: "Lumping Method" },
        { text: "Tea and Coffee : Substitutes :: Car and Petrol : ?", marks: 1, answer: "Complements" },
        { text: "Perfectly Elastic Demand : Ed = ∞ :: Perfectly Inelastic Demand : ?", marks: 1, answer: "Ed = 0" },
        { text: "RBI : Money Market :: SEBI : ?", marks: 1, answer: "Capital Market" },
        { text: "Income Tax : Direct Tax :: GST : ?", marks: 1, answer: "Indirect Tax" },
      ]
    },
    {
      title: "Q.1 C) Give economic term for the following statements",
      totalMarks: 5,
      questions: [
        { text: "The want satisfying power of a commodity.", marks: 1, answer: "Utility" },
        { text: "A market where there are few sellers.", marks: 1, answer: "Oligopoly" },
        { text: "The tax whose burden can be shifted to others.", marks: 1, answer: "Indirect Tax" },
        { text: "The difference between value of exports and imports of goods.", marks: 1, answer: "Balance of Trade" },
        { text: "The cost incurred on producing an additional unit.", marks: 1, answer: "Marginal Cost (MC)" },
      ]
    },
    {
      title: "Q.2 A) Identify and explain the concepts (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Identify the concept (1 mark) and explain it (1 mark).",
      questions: [
        { text: "A poor person buys more of a low-quality bread (bajra) when its price rises.", marks: 2, answer: "<b>Concept:</b> Giffen's Paradox.<br/><b>Explanation:</b> A Giffen good is a special type of inferior good where demand increases as the price rises. This happens because the negative income effect of a price rise for a staple food is stronger than the substitution effect, forcing poor consumers to buy more of it as they can no longer afford better alternatives." },
        { text: "The government of India has borrowed from the World Bank.", marks: 2, answer: "<b>Concept:</b> Public Debt (specifically External Debt).<br/><b>Explanation:</b> Public debt refers to the total borrowings of the government. When the government borrows from foreign entities like the World Bank or other countries, it is known as external debt." },
        { text: "A consumer buys more of a product at a high price because of its status symbol.", marks: 2, answer: "<b>Concept:</b> Veblen Goods or Prestige Goods.<br/><b>Explanation:</b> These are luxury goods for which demand increases as the price increases. This is an exception to the law of demand because the high price itself is a marker of status and exclusivity, making the good more desirable." },
        { text: "A country's imports of goods are valued at $500 billion, while its exports of goods are $400 billion.", marks: 2, answer: "<b>Concept:</b> Unfavourable Balance of Trade or Trade Deficit.<br/><b>Explanation:</b> Balance of Trade measures the difference between the value of a country's visible exports and visible imports. When imports are greater than exports, it results in a trade deficit, which is considered unfavourable." },
        { text: "A new technology is introduced that reduces the cost of producing mobile phones.", marks: 2, answer: "<b>Concept:</b> Increase in Supply.<br/><b>Explanation:</b> An improvement in technology is a key determinant of supply. It lowers the cost of production, making it more profitable for firms to produce. This leads to an increase in the quantity supplied at every price level, causing the supply curve to shift to the right." },
      ]
    },
    {
      title: "Q.3) Distinguish between (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Write two points of distinction for each.",
      questions: [
        { text: "Microeconomics and Macroeconomics", marks: 2, answer: "<b>Microeconomics:</b> 1) Studies individual economic units. 2) Uses the slicing method.<br/><b>Macroeconomics:</b> 1) Studies the economy as a whole and its aggregates. 2) Uses the lumping method." },
        { text: "Expansion of Demand and Increase in Demand", marks: 2, answer: "<b>Expansion of Demand:</b> 1) Caused by a fall in the price of the commodity. 2) Represented by a downward movement along the same demand curve.<br/><b>Increase in Demand:</b> 1) Caused by favourable changes in factors other than price (e.g., rise in income). 2) Represented by a rightward shift of the entire demand curve." },
        { text: "Perfect Competition and Monopoly", marks: 2, answer: "<b>Perfect Competition:</b> 1) Large number of sellers. 2) Firms are price takers.<br/><b>Monopoly:</b> 1) Single seller. 2) The firm is a price maker." },
        { text: "Direct Tax and Indirect Tax", marks: 2, answer: "<b>Direct Tax:</b> 1) The burden cannot be shifted to others. 2) Example: Income Tax.<br/><b>Indirect Tax:</b> 1) The burden can be shifted to others. 2) Example: GST." },
        { text: "Money Market and Capital Market", marks: 2, answer: "<b>Money Market:</b> 1) Deals with short-term funds (up to 1 year). 2) Regulated by RBI.<br/><b>Capital Market:</b> 1) Deals with long-term funds (more than 1 year). 2) Regulated by SEBI." },
      ]
    },
    {
      title: "Q.4) Answer the following (Any 3 out of 5)",
      totalMarks: 12,
      instructions: "Each answer should be in 3-4 points.",
      questions: [
        { text: "Explain the features of Utility.", marks: 4, answer: "1. <b>Relative Concept:</b> Utility is related to time and place. Woolen clothes have utility in winter but not summer. <br/> 2. <b>Subjective Concept:</b> It is a psychological concept and differs from person to person. A book may have utility for a student but not for an illiterate person. <br/> 3. <b>Ethically Neutral:</b> The concept of utility has no ethical consideration. A commodity has utility if it satisfies a want, regardless of whether it is morally right or wrong (e.g., a knife has utility for a chef and a killer). <br/> 4. <b>Utility differs from Usefulness:</b> A commodity may have utility but may not be useful. For example, cigarettes have utility for a smoker but are harmful to health." },
        { text: "Explain the determinants of Supply.", marks: 4, answer: "1. <b>Price of the Commodity:</b> This is the most important factor. According to the Law of Supply, more is supplied at a higher price and less at a lower price. <br/> 2. <b>State of Technology:</b> Improvements in technology reduce the cost of production and lead to an increase in supply. <br/> 3. <b>Cost of Production / Input Prices:</b> If the price of inputs like labor or raw materials rises, the cost of production increases, leading to a decrease in supply. <br/> 4. <b>Government Policies:</b> Favourable policies like subsidies reduce production costs and increase supply, while unfavourable policies like taxes increase costs and decrease supply." },
        { text: "Explain the features of Oligopoly.", marks: 4, answer: "1. <b>Few Firms or Sellers:</b> The market is dominated by a small number of large firms. <br/> 2. <b>Interdependence:</b> This is the most important feature. Since there are few firms, the actions of one firm (regarding price or output) directly affect the others, leading to reactions. <br/> 3. <b>Advertising:</b> Firms engage in aggressive advertising and sales promotion to attract customers and increase market share. <br/> 4. <b>Barriers to Entry:</b> There are significant barriers that prevent new firms from entering the market, such as economies of scale, patents, or control over raw materials." },
        { text: "Explain the components of the government budget.", marks: 4, answer: "The government budget has two main components: Revenue Budget and Capital Budget. <br/> 1. <b>Revenue Receipts:</b> These are government receipts that do not create a liability or reduce an asset. They include Tax Revenue (e.g., income tax, GST) and Non-Tax Revenue (e.g., fees, fines). <br/> 2. <b>Revenue Expenditure:</b> This is recurring government spending that does not create assets, such as salaries, pensions, and subsidies. <br/> 3. <b>Capital Receipts:</b> These receipts either create a liability (like borrowings) or reduce an asset (like disinvestment). <br/> 4. <b>Capital Expenditure:</b> This is government spending that creates assets, like building roads, hospitals, or purchasing machinery." },
        { text: "Explain the functions of the RBI.", marks: 4, answer: "1. <b>Issuer of Currency:</b> RBI has the sole right to issue currency notes of all denominations except one-rupee notes and coins. <br/> 2. <b>Banker to the Government:</b> It acts as a banker, agent, and advisor to the central and state governments. It manages their accounts and public debt. <br/> 3. <b>Bankers' Bank:</b> RBI acts as the bank for all commercial banks. It holds their cash reserves and acts as a lender of last resort. <br/> 4. <b>Controller of Credit:</b> RBI controls the money supply and credit in the economy through its monetary policy tools like Repo rate, CRR, and SLR to maintain price stability." },
      ]
    },
    {
      title: "Q.5) Answer in detail (Any 2 out of 3)",
      totalMarks: 16,
      instructions: "Answer in detail, with diagrams where necessary.",
      questions: [
        { text: "Explain the Law of Diminishing Marginal Utility with its assumptions and exceptions.", marks: 8, answer: "The answer should define the law (as stated by Marshall), provide a schedule and diagram showing TU and MU, list the assumptions (rationality, continuity, homogeneity etc.) and then explain the exceptions (hobbies, misers, addictions etc.) in detail." },
        { text: "Explain the different methods of measuring National Income.", marks: 8, answer: "The answer should explain the three main methods: <br/> 1. <b>Output/Production Method:</b> Explain how it sums the net value added by all sectors, and the precaution of avoiding double counting. <br/> 2. <b>Income Method:</b> Explain how it sums all factor incomes (rent, wages, interest, profit) and mixed-income, and the precaution of excluding transfer payments. <br/> 3. <b>Expenditure Method:</b> Explain the formula C+I+G+(X-M) and define each component, and the precaution of excluding expenditure on intermediate goods." },
        { text: "Explain the functions of a Commercial Bank.", marks: 8, answer: "The answer should be divided into two parts: <br/> 1. <b>Primary Functions:</b> Explain in detail 'Accepting Deposits' (with types like savings, current, fixed) and 'Granting Loans and Advances' (with types like cash credit, overdraft, loans). <br/> 2. <b>Secondary Functions:</b> Explain agency functions (like collecting cheques, making payments) and utility functions (like providing lockers, issuing letters of credit, forex services)." },
      ]
    }
  ]
};

// ============================================================================
// Mock Paper 2
// ============================================================================
export const mockPaper2: MockPaper = {
  id: "eco-mock-2",
  title: "Economics Mock Paper - Set 2",
  totalMarks: 80,
  duration: "3 Hours",
  sections: [
    {
      title: "Q.1 A) Choose the correct option",
      totalMarks: 5,
      questions: [
        { text: "The concept of 'Utility' is:", marks: 1, options: ["An objective concept", "A subjective concept", "A quantitative concept", "An absolute concept"], answer: "A subjective concept" },
        { text: "The demand for necessities is generally:", marks: 1, options: ["Elastic", "Inelastic", "Perfectly elastic", "Unitary elastic"], answer: "Inelastic" },
        { text: "The supply curve for labour is generally:", marks: 1, options: ["Upward sloping", "Downward sloping", "Backward bending", "Horizontal"], answer: "Backward bending" },
        { text: "Which of the following is a feature of a monopoly market?", marks: 1, options: ["Free entry", "Many sellers", "Price discrimination", "Homogeneous product"], answer: "Price discrimination" },
        { text: "The budget in which government revenue exceeds government expenditure is called:", marks: 1, options: ["Deficit budget", "Balanced budget", "Zero budget", "Surplus budget"], answer: "Surplus budget" },
      ]
    },
    {
      title: "Q.1 B) Find the odd word out",
      totalMarks: 5,
      questions: [
        { text: "Features of Microeconomics: Price theory, Slicing method, General equilibrium, Study of individual units.", marks: 1, answer: "General equilibrium" },
        { text: "Determinants of Demand: Price, Income, Tastes, Technology.", marks: 1, answer: "Technology" },
        { text: "Types of Monopoly: Natural, Legal, Pure, Duopoly.", marks: 1, answer: "Duopoly" },
        { text: "Sources of Non-Tax Revenue: Fees, Fines, Income Tax, Special levies.", marks: 1, answer: "Income Tax" },
        { text: "Money Market Instruments: Treasury Bills, Shares, Commercial Paper, Certificate of Deposit.", marks: 1, answer: "Shares" },
      ]
    },
    {
      title: "Q.1 C) Complete the following statements",
      totalMarks: 5,
      questions: [
        { text: "When marginal utility is zero, total utility is _________.", marks: 1, answer: "maximum" },
        { text: "The demand for a product with many uses is called ________ demand.", marks: 1, answer: "composite" },
        { text: "In perfect competition, firms are price ________.", marks: 1, answer: "takers" },
        { text: "The year _______ is considered the year of the Great Divide for India's population.", marks: 1, answer: "1921" },
        { text: "The difference between the value of a country's exports and imports is the Balance of ______.", marks: 1, answer: "Trade" },
      ]
    },
    {
      title: "Q.2 A) Identify and explain the concepts (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Identify the concept (1 mark) and explain it (1 mark).",
      questions: [
        { text: "The Maharashtra government has banned the use of single-use plastic bags.", marks: 2, answer: "<b>Concept:</b> Government Intervention / Regulation.<br/><b>Explanation:</b> This is an example of the government intervening in the market to correct a market failure (environmental pollution) by using its regulatory power to ban a harmful product." },
        { text: "A consumer's demand for petrol increases when they purchase a new car.", marks: 2, answer: "<b>Concept:</b> Joint Demand / Complementary Goods.<br/><b>Explanation:</b> Cars and petrol are complementary goods, meaning they are consumed together. The demand for one (petrol) is directly linked to the demand for the other (car)." },
        { text: "A country's total production of goods and services increased from $2 trillion to $2.2 trillion in a year.", marks: 2, answer: "<b>Concept:</b> Economic Growth.<br/><b>Explanation:</b> Economic growth refers to an increase in the production of economic goods and services, compared from one period of time to another. It is conventionally measured as the percent rate of increase in real gross domestic product (GDP)." },
        { text: "India imports electronic components from China and assembles them into smartphones for sale.", marks: 2, answer: "<b>Concept:</b> Global Supply Chain / International Trade.<br/><b>Explanation:</b> This describes a global supply chain where different stages of production are located in different countries to take advantage of cost or skill differences. It's a key feature of modern foreign trade." },
        { text: "A company lowers its price, but its total revenue decreases.", marks: 2, answer: "<b>Concept:</b> Inelastic Demand.<br/><b>Explanation:</b> According to the total outlay method, if a fall in price leads to a decrease in total revenue (expenditure), it means the demand for the product is inelastic (Ed < 1). The percentage increase in quantity demanded is less than the percentage fall in price." },
      ]
    },
    {
      title: "Q.3) Distinguish between (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Write two points of distinction for each.",
      questions: [
        { text: "Total Utility and Marginal Utility", marks: 2, answer: "<b>Total Utility:</b> 1) It is the aggregate utility from all units consumed. 2) It increases at a diminishing rate.<br/><b>Marginal Utility:</b> 1) It is the additional utility from the last unit consumed. 2) It continuously diminishes." },
        { text: "Stock and Supply", marks: 2, answer: "<b>Stock:</b> 1) It is the total quantity of a commodity available with the seller. 2) It is a potential supply and is a stock concept.<br/><b>Supply:</b> 1) It is the part of the stock the seller is willing to sell at a price. 2) It is the actual offered quantity and is a flow concept." },
        { text: "Simple Index and Weighted Index", marks: 2, answer: "<b>Simple Index:</b> 1) All items are given equal importance. 2) It is easier to construct but less representative.<br/><b>Weighted Index:</b> 1) Items are given weights according to their relative importance. 2) It is more complex but more accurate and representative." },
        { text: "Revenue Expenditure and Capital Expenditure", marks: 2, answer: "<b>Revenue Expenditure:</b> 1) It is recurring in nature and incurred for day-to-day functioning. 2) It does not create any assets (e.g., salaries).<br/><b>Capital Expenditure:</b> 1) It is non-recurring in nature. 2) It leads to the creation of assets (e.g., building a dam)." },
        { text: "Visible Trade and Invisible Trade", marks: 2, answer: "<b>Visible Trade:</b> 1) It is the trade of tangible goods. 2) It is recorded in the Balance of Trade.<br/><b>Invisible Trade:</b> 1) It is the trade of services. 2) It is recorded in the Current Account of the BOP, but not in the BOT." },
      ]
    },
    {
      title: "Q.4) Answer the following (Any 3 out of 5)",
      totalMarks: 12,
      instructions: "Each answer should be in 3-4 points.",
      questions: [
        { text: "Explain any four features of Macroeconomics.", marks: 4, answer: "1. <b>Study of Aggregates:</b> Macroeconomics deals with the economy as a whole, studying aggregates like national income, total employment, and the general price level. <br/> 2. <b>Income Theory:</b> It is also known as the theory of income and employment, as it focuses on determining the equilibrium level of income and employment in the economy. <br/> 3. <b>General Equilibrium Analysis:</b> It studies the equilibrium in all markets simultaneously, analyzing how demand and supply in various markets are interconnected. <br/> 4. <b>Lumping Method:</b> It uses aggregation or 'lumping' to study economic variables, for example, by studying the entire forest rather than individual trees." },
        { text: "Explain the types of Price Elasticity of Demand.", marks: 4, answer: "1. <b>Perfectly Elastic Demand (Ed = ∞):</b> An infinite quantity is demanded at a specific price. The demand curve is a horizontal line. <br/> 2. <b>Perfectly Inelastic Demand (Ed = 0):</b> Quantity demanded does not change regardless of price. The demand curve is a vertical line. <br/> 3. <b>Unitary Elastic Demand (Ed = 1):</b> The percentage change in quantity demanded is exactly equal to the percentage change in price. <br/> 4. <b>Relatively Elastic Demand (Ed > 1):</b> The percentage change in quantity demanded is greater than the percentage change in price (e.g., luxuries). <br/> 5. <b>Relatively Inelastic Demand (Ed < 1):</b> The percentage change in quantity demanded is less than the percentage change in price (e.g., necessities)." },
        { text: "Explain the features of Monopolistic Competition.", marks: 4, answer: "1. <b>Fairly Large Number of Sellers:</b> There are many firms in the market, but not as many as in perfect competition. <br/> 2. <b>Product Differentiation:</b> This is the key feature. Products are differentiated on the basis of brand, packaging, design, etc., giving each firm a mini-monopoly. <br/> 3. <b>Free Entry and Exit:</b> Firms can enter and exit the market freely, which ensures that firms only earn normal profits in the long run. <br/> 4. <b>Selling Costs:</b> Firms incur significant costs on advertising and sales promotion to attract customers and differentiate their products." },
        { text: "Explain the functions of Commercial Banks.", marks: 4, answer: "1. <b>Accepting Deposits:</b> Banks accept deposits from the public in various forms like savings accounts, current accounts, and fixed deposits. <br/> 2. <b>Providing Loans:</b> Banks provide loans and advances to individuals and businesses, which is their main source of income. This includes cash credit, overdrafts, and term loans. <br/> 3. <b>Credit Creation:</b> Banks have the ability to create credit by lending out a multiple of their primary deposits, which expands the money supply. <br/> 4. <b>Agency Functions:</b> Banks act as agents for their customers by collecting cheques, paying bills, and managing funds." },
        { text: "Explain the concept of Balance of Payments.", marks: 4, answer: "1. <b>Systematic Record:</b> The Balance of Payments (BOP) is a systematic statement of all economic transactions between the residents of a country and the rest of the world. <br/> 2. <b>Double-Entry System:</b> It is prepared using a double-entry bookkeeping system, so it always balances in an accounting sense. <br/> 3. <b>Current Account:</b> This component records trade in goods (visible trade) and services (invisible trade), as well as unilateral transfers. <br/> 4. <b>Capital Account:</b> This component records all international transactions of assets, including foreign direct investment (FDI), portfolio investment (FPI), and loans." },
      ]
    },
    {
      title: "Q.5) Answer in detail (Any 2 out of 3)",
      totalMarks: 16,
      instructions: "Answer in detail, with diagrams where necessary.",
      questions: [
        { text: "Explain the Law of Demand with its assumptions and exceptions.", marks: 8, answer: "The answer should state the law (inverse relationship between price and quantity demanded), provide a demand schedule and diagram, list the assumptions (constant income, tastes, etc.), and then explain the exceptions in detail (Giffen goods, prestige goods, speculation, etc.)." },
        { text: "What is an Index Number? Explain the steps involved in the construction of index numbers.", marks: 8, answer: "The answer should first define an index number as a statistical tool for measuring relative change. Then, it should detail the steps: 1) Purpose of the index, 2) Selection of the base year, 3) Selection of the basket of commodities, 4) Selection of prices, 5) Selection of weights (and its importance), and 6) Selection of an appropriate formula." },
        { text: "Explain the sources of Public Revenue.", marks: 8, answer: "The answer should classify public revenue into Tax Revenue and Non-Tax Revenue. <br/> 1. <b>Tax Revenue:</b> Should be further divided into Direct Taxes (explain Income Tax, Corporate Tax) and Indirect Taxes (explain GST, Customs Duty) with examples. <br/> 2. <b>Non-Tax Revenue:</b> Should explain the various sources like Fees (license fees), Fines and Penalties, Profits from Public Sector Undertakings, Gifts and Grants, and Special Levies/Assessments." },
      ]
    }
  ]
};

// ============================================================================
// Mock Paper 3
// ============================================================================
export const mockPaper3: MockPaper = {
  id: "eco-mock-3",
  title: "Economics Mock Paper - Set 3",
  totalMarks: 80,
  duration: "3 Hours",
  sections: [
    {
      title: "Q.1 A) Choose the correct option",
      totalMarks: 5,
      questions: [
        { text: "Macroeconomics is also known as:", marks: 1, options: ["Price Theory", "Income and Employment Theory", "Demand Theory", "Production Theory"], answer: "Income and Employment Theory" },
        { text: "A downward movement along the same demand curve is called:", marks: 1, options: ["Contraction of demand", "Decrease in demand", "Expansion of demand", "Increase in demand"], answer: "Expansion of demand" },
        { text: "The relationship between price and quantity supplied is:", marks: 1, options: ["Inverse", "Direct", "No relationship", "Negative"], answer: "Direct" },
        { text: "In a monopoly, there is/are:", marks: 1, options: ["One seller", "Few sellers", "Many sellers", "Two sellers"], answer: "One seller" },
        { text: "The body that regulates the capital market in India is:", marks: 1, options: ["RBI", "SEBI", "IRDA", "NABARD"], answer: "SEBI" },
      ]
    },
    {
      title: "Q.1 B) Give economic terms",
      totalMarks: 5,
      questions: [
        { text: "Utility of a commodity that increases with an increase in its stock.", marks: 1, answer: "Marginal Utility (in case of exceptions like hobbies)" },
        { text: "A market structure with only two sellers.", marks: 1, answer: "Duopoly" },
        { text: "The tax whose burden is borne by the person on whom it is levied.", marks: 1, answer: "Direct Tax" },
        { text: "The net market value of all final goods and services produced within the country.", marks: 1, answer: "Net Domestic Product (NDP) at Market Price" },
        { text: "A quantitative limit on the imports of a commodity.", marks: 1, answer: "Quota" },
      ]
    },
    {
      title: "Q.1 C) State whether the following statements are True or False",
      totalMarks: 5,
      questions: [
        { text: "Microeconomics uses the lumping method.", marks: 1, answer: "False" },
        { text: "The demand for luxury goods is elastic.", marks: 1, answer: "True" },
        { text: "The supply of perishable goods is inelastic.", marks: 1, answer: "True" },
        { text: "Fisher's index is the arithmetic mean of Laspeyres' and Paasche's index.", marks: 1, answer: "False" },
        { text: "A trade deficit is a favorable condition for a country.", marks: 1, answer: "False" },
      ]
    },
    {
      title: "Q.2 A) Identify and explain the concepts (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Identify the concept (1 mark) and explain it (1 mark).",
      questions: [
        { text: "A furniture maker buys wood to make chairs.", marks: 2, answer: "<b>Concept:</b> Intermediate Good / Derived Demand.<br/><b>Explanation:</b> The wood is an intermediate good because it is a raw material used in the production of another good (chairs). The demand for wood is a derived demand, as it depends on the demand for the final product." },
        { text: "The government imposes a higher tax on individuals earning over Rs. 15 lakhs per year.", marks: 2, answer: "<b>Concept:</b> Progressive Taxation.<br/><b>Explanation:</b> This is a tax system where the tax rate increases as the taxable income increases. It is based on the principle of ability to pay, where high-income earners contribute a larger percentage of their income in taxes." },
        { text: "Due to a good monsoon, the production of rice in India increased substantially.", marks: 2, answer: "<b>Concept:</b> Increase in Supply.<br/><b>Explanation:</b> A good monsoon is a favorable natural condition that acts as a determinant of supply for agricultural products. It leads to higher output, causing the supply curve for rice to shift to the right." },
        { text: "The RBI increased the Repo Rate to combat rising prices.", marks: 2, answer: "<b>Concept:</b> Monetary Policy / Control of Credit.<br/><b>Explanation:</b> The Repo Rate is a key tool of monetary policy used by the RBI. By increasing it, the RBI makes borrowing more expensive for commercial banks, which in turn reduces the overall money supply and credit in the economy to control inflation." },
        { text: "A Japanese company sets up a new car manufacturing plant in India.", marks: 2, answer: "<b>Concept:</b> Foreign Direct Investment (FDI).<br/><b>Explanation:</b> FDI is an investment made by a company from one country into business interests in another country. It involves a long-term relationship and reflects a lasting interest and control by a foreign entity." },
      ]
    },
    {
      title: "Q.3) Distinguish between (Any 3 out of 5)",
      totalMarks: 6,
      instructions: "Write two points of distinction for each.",
      questions: [
        { text: "Expansion of supply and Increase in supply", marks: 2, answer: "<b>Expansion of Supply:</b> 1) Caused by a rise in the price of the commodity. 2) Represented by an upward movement along the same supply curve.<br/><b>Increase in Supply:</b> 1) Caused by favourable changes in factors other than price (e.g., better technology). 2) Represented by a rightward shift of the entire supply curve." },
        { text: "Perfect Competition and Monopolistic Competition", marks: 2, answer: "<b>Perfect Competition:</b> 1) Product is homogeneous. 2) Firms are price takers and there are no selling costs.<br/><b>Monopolistic Competition:</b> 1) Products are differentiated. 2) Firms have some control over price and incur selling costs." },
        { text: "Laspeyres' Index and Paasche's Index", marks: 2, answer: "<b>Laspeyres' Index:</b> 1) Uses base year quantities as weights. 2) Tends to have an upward bias.<br/><b>Paasche's Index:</b> 1) Uses current year quantities as weights. 2) Tends to have a downward bias." },
        { text: "GNP and NNP", marks: 2, answer: "<b>GNP:</b> 1) It is the gross market value of all final goods and services. 2) It does not account for depreciation.<br/><b>NNP:</b> 1) It is the net market value. 2) It is calculated as GNP minus depreciation (NNP = GNP - Depreciation)." },
        { text: "Primary Market and Secondary Market", marks: 2, answer: "<b>Primary Market:</b> 1) Deals with the issue of new securities (e.g., IPOs). 2) Capital is directly formed here.<br/><b>Secondary Market:</b> 1) Deals with the trading of existing securities. 2) It provides liquidity to securities." },
      ]
    },
    {
      title: "Q.4) Answer the following (Any 3 out of 5)",
      totalMarks: 12,
      instructions: "Each answer should be in 3-4 points.",
      questions: [
        { text: "Explain the features of Utility.", marks: 4, answer: "1. <b>Ethically Neutral:</b> Utility has no moral consideration. A good may have utility even if it is socially undesirable (e.g., a gun). <br/> 2. <b>Differs from Usefulness:</b> A commodity may have utility but may not be useful (e.g., cigarettes). <br/> 3. <b>Subjective Concept:</b> It is psychological and varies from person to person based on their tastes and preferences. <br/> 4. <b>Relative Concept:</b> Utility is relative to time and place. A sweater has utility in winter, not summer." },
        { text: "Explain the determinants of Supply.", marks: 4, answer: "1. <b>Price of the Commodity:</b> According to the law of supply, more quantity is supplied at a higher price and vice-versa. <br/> 2. <b>State of Technology:</b> An improvement in technology reduces production cost and increases supply. <br/> 3. <b>Cost of Production:</b> A rise in the price of inputs like labor or raw materials increases production cost and decreases supply. <br/> 4. <b>Government Policies:</b> Subsidies increase supply by lowering costs, while taxes decrease supply by increasing costs." },
        { text: "Explain the features of Monopoly.", marks: 4, answer: "1. <b>Single Seller:</b> There is only one producer or seller of the product in the entire market. <br/> 2. <b>No Close Substitutes:</b> The product sold by the monopolist has no close substitutes, giving the firm significant market power. <br/> 3. <b>Barriers to Entry:</b> There are strong barriers (legal, natural, or technological) that prevent new firms from entering the market. <br/> 4. <b>Price Maker:</b> The monopolist has considerable control over the price of the product." },
        { text: "Explain the functions of RBI.", marks: 4, answer: "1. <b>Issuer of Currency:</b> RBI has the monopoly on issuing currency notes (except one-rupee notes and coins). <br/> 2. <b>Banker to the Government:</b> It acts as a banker, agent, and advisor to the central and state governments. <br/> 3. <b>Bankers' Bank and Lender of Last Resort:</b> It supervises all commercial banks and provides them with financial assistance in times of need. <br/> 4. <b>Controller of Credit:</b> It uses monetary policy tools (like repo rate, CRR) to control the supply of money and credit in the economy." },
        { text: "Explain the components of the Balance of Payments.", marks: 4, answer: "1. <b>Current Account:</b> This records all transactions related to the trade of goods (visible) and services (invisible), as well as income from investments and unilateral transfers. <br/> 2. <b>Capital Account:</b> This records all transactions that involve a change in the assets or liabilities of a country, such as foreign direct investment (FDI), portfolio investments (FPI), and external borrowings. <br/> 3. <b>Official Reserves Account:</b> This shows the change in a country's foreign exchange reserves held by the central bank. It is used to settle the final BOP position. <br/> 4. <b>Errors and Omissions:</b> This is a balancing item to account for statistical discrepancies." },
      ]
    },
    {
      title: "Q.5) Answer in detail (Any 2 out of 3)",
      totalMarks: 16,
      instructions: "Answer in detail, with diagrams where necessary.",
      questions: [
        { text: "Explain the Law of Diminishing Marginal Utility and its practical significance.", marks: 8, answer: "The answer should state the law, provide a schedule and diagram, and then focus on its practical significance: 1) Basis for the law of demand, 2) Usefulness to the consumer in making choices, 3) Usefulness to the government for fiscal policy (taxation), and 4) Explaining the Paradox of Value." },
        { text: "Explain the methods of measuring National Income, and explain any two difficulties in its measurement.", marks: 8, answer: "The answer should first detail the three methods: Output, Income, and Expenditure methods. Then, it should explain any two difficulties in detail, such as: 1) The problem of the non-monetized sector, 2) The problem of the underground/black economy, 3) The problem of double counting, or 4) Inadequate and unreliable data." },
        { text: "What is Foreign Trade? Explain the role of foreign trade in an economy.", marks: 8, answer: "The answer should first define foreign trade as the exchange of goods and services between countries. Then, explain its role: 1) Earning foreign exchange, 2) Encouraging investment, 3) Division of labor and specialization, 4) Optimal allocation and utilization of resources, and 5) Providing access to a wider variety of goods and services." },
      ]
    }
  ]
};

// ============================================================================
// Export all mock papers as an array
// ============================================================================
export const mockPapers: MockPaper[] = [mockPaper1, mockPaper2, mockPaper3];

export default mockPapers;
