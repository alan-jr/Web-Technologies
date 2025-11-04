// Complete list of football quiz questions
// Quiz data and state
const footballQuestions = [
     { question: "Who won the FIFA World Cup in 2010?", options: ["Netherlands", "Spain", "Germany", "Argentina"], correct: 1 },
  { question: "Who won the FIFA World Cup in 2014?", options: ["Argentina", "Germany", "Brazil", "Spain"], correct: 1 },
  { question: "Who won the FIFA World Cup in 2018?", options: ["France", "Croatia", "Germany", "Brazil"], correct: 0 },
  { question: "Who won the FIFA World Cup in 2022?", options: ["France", "Argentina", "Brazil", "Germany"], correct: 1 },
  { question: "Which country has won the most FIFA World Cups?", options: ["Germany", "Italy", "Argentina", "Brazil"], correct: 3 },
  { question: "Which country won the first FIFA World Cup in 1930?", options: ["Argentina", "Uruguay", "Brazil", "Italy"], correct: 1 },
  { question: "Which country hosted the 2014 FIFA World Cup?", options: ["Brazil", "South Africa", "Germany", "Russia"], correct: 0 },
  { question: "Which country hosted the 2018 FIFA World Cup?", options: ["Qatar", "Russia", "Brazil", "Germany"], correct: 1 },

  { question: "Who is the all-time top scorer in FIFA World Cup history?", options: ["Ronaldo", "Just Fontaine", "Miroslav Klose", "Gerd Müller"], correct: 2 },
  { question: "Who holds the record for most goals in a single World Cup tournament?", options: ["Just Fontaine", "Miroslav Klose", "Gerd Müller", "Ronaldo"], correct: 0 },
  { question: "Which player scored the fastest World Cup goal (11 seconds)?", options: ["Hakan Şükür", "Cristiano Ronaldo", "Bryan Robson", "Clint Dempsey"], correct: 0 },
  { question: "Which team won the 1950 FIFA World Cup?", options: ["Brazil", "Uruguay", "Italy", "Sweden"], correct: 1 },
  { question: "Which team won the 1966 FIFA World Cup?", options: ["Germany", "England", "Portugal", "Netherlands"], correct: 1 },
  { question: "Which team won the 1970 FIFA World Cup?", options: ["Brazil", "Italy", "Germany", "Uruguay"], correct: 0 },
  { question: "Which team won the 1986 FIFA World Cup?", options: ["Argentina", "Germany", "Brazil", "France"], correct: 0 },
  { question: "Who scored the winning goal in the 2014 World Cup Final?", options: ["Mario Götze", "Thomas Müller", "Mesut Özil", "Toni Kroos"], correct: 0 },
  { question: "Which country was runner-up at the 2018 World Cup?", options: ["France", "Croatia", "Belgium", "England"], correct: 1 },
  { question: "Which country did Spain beat in the 2010 World Cup Final?", options: ["Germany", "Netherlands", "Italy", "Argentina"], correct: 1 },

  { question: "Which club has won the most UEFA Champions League titles?", options: ["AC Milan", "Liverpool", "Real Madrid", "Bayern Munich"], correct: 2 },
  { question: "Who won the UEFA Champions League in 2019?", options: ["Barcelona", "Liverpool", "Real Madrid", "Tottenham"], correct: 1 },
  { question: "Who won the UEFA Champions League in 2020?", options: ["PSG", "Bayern Munich", "Real Madrid", "Chelsea"], correct: 1 },
  { question: "Who won the UEFA Champions League in 2021?", options: ["Manchester City", "Chelsea", "PSG", "Real Madrid"], correct: 1 },
  { question: "Who won the UEFA Champions League in 2022?", options: ["Liverpool", "Real Madrid", "Manchester City", "Bayern Munich"], correct: 1 },
  { question: "Who won the UEFA Champions League in 2018?", options: ["Liverpool", "Real Madrid", "Juventus", "Bayern Munich"], correct: 1 },
  { question: "Which club won the Champions League in 2012?", options: ["Bayern Munich", "Barcelona", "Chelsea", "Real Madrid"], correct: 2 },
  { question: "Which club won the Champions League in 2013?", options: ["Bayern Munich", "Borussia Dortmund", "Real Madrid", "Barcelona"], correct: 0 },
  { question: "Which club won the Champions League in 2014?", options: ["Real Madrid", "Atlético Madrid", "Barcelona", "Juventus"], correct: 0 },
  { question: "Which club won the Champions League in 2015?", options: ["Juventus", "Barcelona", "Real Madrid", "Atletico Madrid"], correct: 1 },

  { question: "Who is the UEFA Champions League all-time top scorer?", options: ["Lionel Messi", "Cristiano Ronaldo", "Raúl", "Robert Lewandowski"], correct: 1 },
  { question: "Which manager has won the most Champions League titles?", options: ["Pep Guardiola", "Zinedine Zidane", "Bob Paisley", "Carlo Ancelotti"], correct: 3 },
  { question: "Which player has won the Champions League with three different clubs?", options: ["Xabi Alonso", "Cristiano Ronaldo", "Clarence Seedorf", "Samuel Eto'o"], correct: 2 },
  { question: "Which UK team was the first to win the European Cup?", options: ["Liverpool", "Celtic", "Manchester United", "Nottingham Forest"], correct: 1 },
  { question: "Which Romanian club has won the European Cup?", options: ["Dinamo București", "Steaua București", "Universitatea Craiova", "Rapid București"], correct: 1 },
  { question: "Which club won back-to-back European Cups in 1979 and 1980?", options: ["Aston Villa", "Leeds United", "Nottingham Forest", "Liverpool"], correct: 2 },
  { question: "Which club won the Champions League in 1999?", options: ["Juventus", "Manchester United", "Bayern Munich", "Real Madrid"], correct: 1 },
  { question: "Which club won the Champions League in 2005?", options: ["Liverpool", "Milan", "Porto", "Barcelona"], correct: 0 },
  { question: "Which club won the Champions League in 2008?", options: ["Chelsea", "Manchester United", "Liverpool", "Barcelona"], correct: 1 },
  { question: "Which club won the Champions League in 2011?", options: ["Manchester United", "Barcelona", "Real Madrid", "Inter Milan"], correct: 1 },

  { question: "Who won the UEFA Europa League in 2020?", options: ["Inter Milan", "Sevilla", "Manchester United", "Shakhtar Donetsk"], correct: 1 },
  { question: "Which club has won the most UEFA Europa League/UEFA Cup titles?", options: ["Juventus", "Sevilla", "Liverpool", "Inter Milan"], correct: 1 },
  { question: "Who won the UEFA Super Cup in 2019?", options: ["Liverpool", "Chelsea", "Real Madrid", "Atletico Madrid"], correct: 0 },
  { question: "Which club won the Europa League in 2021?", options: ["Villarreal", "Manchester United", "Sevilla", "Arsenal"], correct: 0 },
  { question: "Which club won the Europa League in 2017?", options: ["Ajax", "Sevilla", "Manchester United", "Villarreal"], correct: 2 },
  { question: "Which club won the UEFA Cup in 2001?", options: ["Alavés", "Liverpool", "Bayern Munich", "Valencia"], correct: 1 },
  { question: "Which club won the Europa League in 2019?", options: ["Chelsea", "Arsenal", "Sevilla", "Eintracht Frankfurt"], correct: 0 },
  { question: "Which club won the Europa League in 2022?", options: ["Rangers", "Eintracht Frankfurt", "West Ham", "RB Leipzig"], correct: 1 },
  { question: "Which club won the Europa League in 2014?", options: ["Benfica", "Sevilla", "Porto", "Juventus"], correct: 1 },
  { question: "Which club won the Europa League in 2016?", options: ["Sevilla", "Liverpool", "Villarreal", "Dnipro"], correct: 0 },

  { question: "Which nation won UEFA Euro 2004?", options: ["Portugal", "Greece", "France", "Spain"], correct: 1 },
  { question: "Which nation won UEFA Euro 2008?", options: ["Germany", "Spain", "Netherlands", "Italy"], correct: 1 },
  { question: "Which nation won UEFA Euro 2012?", options: ["Italy", "Spain", "Germany", "Portugal"], correct: 1 },
  { question: "Which nation won UEFA Euro 2016?", options: ["France", "Portugal", "Germany", "Belgium"], correct: 1 },
  { question: "Which nation won UEFA Euro 2020 (played in 2021)?", options: ["England", "Italy", "Spain", "Denmark"], correct: 1 },
  { question: "Which nation won UEFA Euro 2024?", options: ["England", "Spain", "France", "Germany"], correct: 1 },
  { question: "Which trophy is awarded to the European champions?", options: ["Henri Delaunay Trophy", "Jules Rimet Trophy", "Artemio Franchi Cup", "Copa del Rey"], correct: 0 },
  { question: "Which team won the first UEFA European Championship in 1960?", options: ["Spain", "Soviet Union", "Yugoslavia", "Italy"], correct: 1 },
  { question: "Which nation is the only one to win consecutive Euros (2008 and 2012)?", options: ["Germany", "France", "Spain", "Italy"], correct: 2 },
  { question: "Which nation has won the most UEFA European Championships?", options: ["Germany", "France", "Spain", "Italy"], correct: 2 },

  { question: "Who won the Ballon d'Or in 2018?", options: ["Cristiano Ronaldo", "Lionel Messi", "Luka Modrić", "Antoine Griezmann"], correct: 2 },
  { question: "Who won the Ballon d'Or in 2019?", options: ["Virgil van Dijk", "Lionel Messi", "Cristiano Ronaldo", "Sadio Mané"], correct: 1 },
  { question: "Who won the Ballon d'Or in 2021?", options: ["Lionel Messi", "Robert Lewandowski", "Karim Benzema", "Jorginho"], correct: 0 },
  { question: "Who won the Ballon d'Or in 2022?", options: ["Kylian Mbappé", "Karim Benzema", "Lionel Messi", "Erling Haaland"], correct: 1 },
  { question: "Who won the Ballon d'Or in 2023?", options: ["Lionel Messi", "Erling Haaland", "Kylian Mbappé", "Kevin De Bruyne"], correct: 0 },
  { question: "Which player has won the most Ballon d'Or awards?", options: ["Michel Platini", "Cristiano Ronaldo", "Lionel Messi", "Johan Cruyff"], correct: 2 },
  { question: "Who won the FIFA The Best Men's Player award in 2016?", options: ["Cristiano Ronaldo", "Lionel Messi", "Luka Modrić", "Robert Lewandowski"], correct: 0 },
  { question: "Who won the FIFA The Best Men's Player award in 2020?", options: ["Robert Lewandowski", "Lionel Messi", "Cristiano Ronaldo", "Neymar"], correct: 0 },
  { question: "Who won the FIFA The Best Men's Player award in 2022?", options: ["Kylian Mbappé", "Lionel Messi", "Karim Benzema", "Erling Haaland"], correct: 1 },
  { question: "Who won the FIFA The Best Men's Player award in 2023?", options: ["Erling Haaland", "Lionel Messi", "Kylian Mbappé", "Kevin De Bruyne"], correct: 1 },

  { question: "Which club won the Premier League in 2015-16?", options: ["Manchester City", "Arsenal", "Leicester City", "Chelsea"], correct: 2 },
  { question: "Which club won the Premier League in 2017-18?", options: ["Liverpool", "Manchester City", "Chelsea", "Manchester United"], correct: 1 },
  { question: "Which club won the Premier League in 2018-19?", options: ["Liverpool", "Manchester City", "Chelsea", "Leicester City"], correct: 1 },
  { question: "Which club won the Premier League in 2019-20?", options: ["Manchester City", "Liverpool", "Chelsea", "Manchester United"], correct: 1 },
  { question: "Which club won the Premier League in 2020-21?", options: ["Manchester City", "Liverpool", "Chelsea", "Leicester City"], correct: 0 },
  { question: "Which club has won the most FA Cup titles?", options: ["Manchester United", "Liverpool", "Arsenal", "Chelsea"], correct: 2 },
  { question: "Who is the Premier League's all-time top scorer?", options: ["Wayne Rooney", "Alan Shearer", "Harry Kane", "Sergio Agüero"], correct: 1 },
  { question: "Who holds the Premier League record for most goals in a 38-game season (32)?", options: ["Alan Shearer", "Mohamed Salah", "Harry Kane", "Luis Suárez"], correct: 1 },
  { question: "Who won the Premier League Golden Boot in 2020-21?", options: ["Mohamed Salah", "Harry Kane", "Bruno Fernandes", "Jamie Vardy"], correct: 1 },
  { question: "Which goalkeeper won the Premier League Golden Glove in 2019-20?", options: ["Ederson", "Nick Pope", "Alisson", "David de Gea"], correct: 0 },

  { question: "Who won La Liga in the 2013-14 season?", options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Valencia"], correct: 2 },
  { question: "Who won La Liga in 2014-15?", options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla"], correct: 1 },
  { question: "Who won La Liga in 2015-16?", options: ["Barcelona", "Real Madrid", "Atlético Madrid", "Sevilla"], correct: 0 },
  { question: "Who won La Liga in 2016-17?", options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Valencia"], correct: 0 },
  { question: "Who won La Liga in 2019-20?", options: ["Real Madrid", "Barcelona", "Atlético Madrid", "Sevilla"], correct: 0 },
  { question: "Which player has the most La Liga goals all-time?", options: ["Cristiano Ronaldo", "Lionel Messi", "Telmo Zarra", "Raúl"], correct: 1 },
  { question: "Which club has won the most La Liga titles?", options: ["Barcelona", "Real Madrid", "Atlético Madrid", "Athletic Club"], correct: 1 },
  { question: "Which player scored 50 La Liga goals in a single season (2011-12)?", options: ["Cristiano Ronaldo", "Lionel Messi", "Luis Suárez", "Gonzalo Higuaín"], correct: 1 },
  { question: "Who won the Pichichi Trophy in 2014-15?", options: ["Lionel Messi", "Cristiano Ronaldo", "Antoine Griezmann", "Neymar"], correct: 1 },
  { question: "Which team won the Copa del Rey in 2021?", options: ["Athletic Club", "Barcelona", "Real Sociedad", "Sevilla"], correct: 1 },

  { question: "Who won Serie A in 2020-21?", options: ["Juventus", "Inter Milan", "AC Milan", "Napoli"], correct: 1 },
  { question: "Who won Serie A in 2021-22?", options: ["AC Milan", "Inter Milan", "Napoli", "Juventus"], correct: 0 },
  { question: "Who won Serie A in 2022-23?", options: ["Napoli", "Inter Milan", "Juventus", "AC Milan"], correct: 0 },
  { question: "Which player is Serie A's all-time top scorer?", options: ["Silvio Piola", "Francesco Totti", "Gunnar Nordahl", "Alessandro Del Piero"], correct: 0 },
  { question: "Which club has the most Serie A titles?", options: ["Inter Milan", "AC Milan", "Juventus", "Torino"], correct: 2 },
  { question: "Who was Capocannoniere in 2020-21?", options: ["Ciro Immobile", "Romelu Lukaku", "Cristiano Ronaldo", "Duván Zapata"], correct: 2 },
  { question: "Who won Coppa Italia in 2021?", options: ["Juventus", "Atalanta", "Napoli", "Inter Milan"], correct: 0 },
  { question: "Which club won the 2010 Champions League under José Mourinho?", options: ["Real Madrid", "Inter Milan", "Chelsea", "Porto"], correct: 1 },
  { question: "Which club did Diego Maradona lead to two Serie A titles?", options: ["AC Milan", "Juventus", "Napoli", "Inter"], correct: 2 },
  { question: "Which team won Serie A unbeaten in 2011-12?", options: ["AC Milan", "Inter Milan", "Juventus", "Napoli"], correct: 2 },

  { question: "Who won the Bundesliga in 2019-20?", options: ["Borussia Dortmund", "Bayern Munich", "RB Leipzig", "Bayer Leverkusen"], correct: 1 },
  { question: "Who won the Bundesliga in 2020-21?", options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Wolfsburg"], correct: 0 },
  { question: "Who won the Bundesliga in 2021-22?", options: ["Borussia Dortmund", "Bayern Munich", "RB Leipzig", "Union Berlin"], correct: 1 },
  { question: "Who won the Bundesliga in 2022-23 on goal difference?", options: ["Bayern Munich", "Borussia Dortmund", "RB Leipzig", "Freiburg"], correct: 0 },
  { question: "Which club has the most Bundesliga titles?", options: ["Borussia Dortmund", "Bayern Munich", "Borussia Mönchengladbach", "Hamburg"], correct: 1 },
  { question: "Who holds the record for most Bundesliga goals?", options: ["Robert Lewandowski", "Gerd Müller", "Klaus Fischer", "Jupp Heynckes"], correct: 1 },
  { question: "Which player scored 41 Bundesliga goals in 2020-21?", options: ["Robert Lewandowski", "Erling Haaland", "Timo Werner", "Thomas Müller"], correct: 0 },
  { question: "Who won the DFB-Pokal in 2021?", options: ["RB Leipzig", "Borussia Dortmund", "Bayern Munich", "Eintracht Frankfurt"], correct: 1 },
  { question: "Which team scored the most Bundesliga goals in 2020-21?", options: ["Bayern Munich", "Dortmund", "Leipzig", "Leverkusen"], correct: 0 },
  { question: "Which club won the 2013 Champions League Final at Wembley?", options: ["Borussia Dortmund", "Bayern Munich", "Chelsea", "Barcelona"], correct: 1 },

  { question: "Which club has won the most Ligue 1 titles?", options: ["Saint-Étienne", "Lyon", "Marseille", "PSG"], correct: 3 },
  { question: "Who won Ligue 1 in 2020-21?", options: ["PSG", "Lille", "Monaco", "Lyon"], correct: 1 },
  { question: "Who won Ligue 1 in 2019-20?", options: ["PSG", "Marseille", "Lille", "Monaco"], correct: 0 },
  { question: "Who is Ligue 1’s all-time top scorer?", options: ["Delio Onnis", "Kylian Mbappé", "Edinson Cavani", "Jean-Pierre Papin"], correct: 0 },
  { question: "Which club won the 1993 Champions League (later revoked for Marseille domestically)?", options: ["Milan", "Marseille", "PSG", "Barcelona"], correct: 1 },
  { question: "Which club ended PSG’s 8-year Ligue 1 streak in 2021?", options: ["Lille", "Monaco", "Lyon", "Marseille"], correct: 0 },
  { question: "Who won the Coupe de France in 2021?", options: ["Monaco", "PSG", "Rennes", "Lille"], correct: 1 },
  { question: "Which player scored in the 2018 World Cup final for France at age 19?", options: ["Ousmane Dembélé", "Kylian Mbappé", "Antoine Griezmann", "Olivier Giroud"], correct: 1 },
  { question: "Which country lost the Euro 2016 final to Portugal?", options: ["Spain", "Germany", "France", "Netherlands"], correct: 2 },
  { question: "Which club signed Neymar from Barcelona in 2017?", options: ["Real Madrid", "PSG", "Manchester City", "Manchester United"], correct: 1 },

  { question: "Who won the Copa América 2021?", options: ["Brazil", "Argentina", "Uruguay", "Chile"], correct: 1 },
  { question: "Who won the Copa América 2019?", options: ["Argentina", "Brazil", "Chile", "Uruguay"], correct: 1 },
  { question: "Which nation has the most Copa América titles (tied with Argentina)?", options: ["Brazil", "Uruguay", "Paraguay", "Chile"], correct: 1 },
  { question: "Who won the Copa América in 2015 and 2016?", options: ["Uruguay", "Chile", "Brazil", "Argentina"], correct: 1 },
  { question: "Who won the 1993 Copa América?", options: ["Argentina", "Brazil", "Uruguay", "Colombia"], correct: 0 },
  { question: "Which trophy is awarded to the Copa América champion?", options: ["Henri Delaunay", "Copa Libertadores", "Copa América Trophy", "Gold Cup"], correct: 2 },
  { question: "Which country hosted and won Copa América 2019?", options: ["Argentina", "Brazil", "Chile", "Peru"], correct: 1 },
  { question: "Who scored the only goal in the Copa América 2021 final?", options: ["Ángel Di María", "Lionel Messi", "Neymar", "Lautaro Martínez"], correct: 0 },
  { question: "Which country did Argentina beat in the 2021 Copa América final?", options: ["Brazil", "Uruguay", "Chile", "Colombia"], correct: 0 },
  { question: "Which nation won the first Copa América in 1916?", options: ["Argentina", "Uruguay", "Brazil", "Chile"], correct: 1 },

  { question: "Which country won AFCON 2019?", options: ["Algeria", "Senegal", "Egypt", "Cameroon"], correct: 0 },
  { question: "Which country won AFCON 2021 (played 2022)?", options: ["Egypt", "Senegal", "Cameroon", "Nigeria"], correct: 1 },
  { question: "Which nation has the most AFCON titles?", options: ["Cameroon", "Ghana", "Egypt", "Nigeria"], correct: 2 },
  { question: "Who won AFCON 2017?", options: ["Egypt", "Cameroon", "Ivory Coast", "Gabon"], correct: 1 },
  { question: "Which country hosted AFCON 2019?", options: ["Morocco", "Egypt", "Cameroon", "Algeria"], correct: 1 },
  { question: "Who scored the decisive penalty for Senegal in AFCON 2021 final?", options: ["Sadio Mané", "Kalidou Koulibaly", "Ismaïla Sarr", "Edouard Mendy"], correct: 0 },
  { question: "Which country won AFCON 2015?", options: ["Ghana", "Nigeria", "Ivory Coast", "Cameroon"], correct: 2 },
  { question: "Which nation did Algeria beat in AFCON 2019 final?", options: ["Senegal", "Nigeria", "Egypt", "Tunisia"], correct: 0 },
  { question: "Who won the Golden Boot at AFCON 2019?", options: ["Odion Ighalo", "Sadio Mané", "Riyad Mahrez", "Baghdad Bounedjah"], correct: 0 },
  { question: "Which nation won AFCON 2013?", options: ["Nigeria", "Burkina Faso", "Ghana", "Ivory Coast"], correct: 0 },

  { question: "Which club has won the most FIFA Club World Cups?", options: ["Barcelona", "Bayern Munich", "Real Madrid", "Corinthians"], correct: 2 },
  { question: "Who won the FIFA Club World Cup in 2019?", options: ["Flamengo", "Liverpool", "River Plate", "Real Madrid"], correct: 1 },
  { question: "Who won the FIFA Club World Cup in 2020?", options: ["Bayern Munich", "Tigres UANL", "Palmeiras", "Al Ahly"], correct: 0 },
  { question: "Which confederation has the most Club World Cup titles?", options: ["UEFA", "CONMEBOL", "CONCACAF", "AFC"], correct: 0 },
  { question: "Which club won the 2014 Club World Cup?", options: ["San Lorenzo", "Real Madrid", "Barcelona", "Auckland City"], correct: 1 },
  { question: "Which club won the 2015 Club World Cup?", options: ["River Plate", "Barcelona", "Sanfrecce Hiroshima", "Guangzhou Evergrande"], correct: 1 },
  { question: "Which club won the 2016 Club World Cup?", options: ["Kashima Antlers", "Real Madrid", "Atlético Nacional", "Club América"], correct: 1 },
  { question: "Which club won the 2017 Club World Cup?", options: ["Gremio", "Real Madrid", "Pachuca", "Al Jazira"], correct: 1 },
  { question: "Which club won the 2018 Club World Cup?", options: ["River Plate", "Real Madrid", "Kashima Antlers", "Al Ain"], correct: 1 },
  { question: "Which club won the 2021 Club World Cup (played 2022)?", options: ["Chelsea", "Palmeiras", "Al Hilal", "Al Ahly"], correct: 0 },

  { question: "Who is Brazil’s all-time leading men’s goalscorer (officially recognized historically)?", options: ["Ronaldo", "Romário", "Pelé", "Neymar"], correct: 2 },
  { question: "Who is Argentina’s all-time leading goalscorer?", options: ["Gabriel Batistuta", "Diego Maradona", "Lionel Messi", "Sergio Agüero"], correct: 2 },
  { question: "Who is Portugal’s all-time leading goalscorer?", options: ["Eusébio", "Cristiano Ronaldo", "Pauleta", "Luís Figo"], correct: 1 },
  { question: "Who is England’s all-time leading goalscorer?", options: ["Wayne Rooney", "Harry Kane", "Bobby Charlton", "Gary Lineker"], correct: 1 },
  { question: "Who is Spain’s all-time leading goalscorer (men)?", options: ["Raúl", "David Villa", "Fernando Torres", "David Silva"], correct: 1 },
  { question: "Who is France’s all-time leading goalscorer (men)?", options: ["Thierry Henry", "Olivier Giroud", "Antoine Griezmann", "Kylian Mbappé"], correct: 1 },
  { question: "Who is Germany’s all-time leading goalscorer (men, unified records)?", options: ["Gerd Müller", "Miroslav Klose", "Lukas Podolski", "Jürgen Klinsmann"], correct: 1 },
  { question: "Who is Italy’s all-time leading goalscorer (men)?", options: ["Gigi Riva", "Roberto Baggio", "Alessandro Del Piero", "Luigi Riva"], correct: 0 },
  { question: "Who is Belgium’s all-time leading goalscorer (men)?", options: ["Divock Origi", "Eden Hazard", "Romelu Lukaku", "Kevin De Bruyne"], correct: 2 },
  { question: "Who is Poland’s all-time leading goalscorer (men)?", options: ["Zbigniew Boniek", "Robert Lewandowski", "Krzysztof Piątek", "Andrzej Szarmach"], correct: 1 },

  { question: "Which player scored the 'Hand of God' goal?", options: ["Lionel Messi", "Diego Maradona", "Pelé", "Gabriel Batistuta"], correct: 1 },
  { question: "Who scored a hat-trick vs Spain at the 2018 World Cup?", options: ["Cristiano Ronaldo", "Lionel Messi", "Kylian Mbappé", "Eden Hazard"], correct: 0 },
  { question: "Who scored the 'Golden Goal' to win Euro 2000?", options: ["David Trezeguet", "Thierry Henry", "Sylvain Wiltord", "Zinédine Zidane"], correct: 0 },
  { question: "Who scored the winner in the 2013 Champions League Final?", options: ["Thomas Müller", "Arjen Robben", "Mario Mandžukić", "Ilkay Gündogan"], correct: 1 },
  { question: "Who scored the decisive goal in the 2014 World Cup Final?", options: ["Gonzalo Higuaín", "Lionel Messi", "Mario Götze", "André Schürrle"], correct: 2 },
  { question: "Who scored the extra-time winner in the 2010 World Cup Final?", options: ["David Villa", "Xavi", "Andrés Iniesta", "Fernando Torres"], correct: 2 },
  { question: "Who scored the only goal in the 2021 Copa América Final?", options: ["Ángel Di María", "Lionel Messi", "Neymar", "Lautaro Martínez"], correct: 0 },
  { question: "Who scored the winning penalty in the 2006 World Cup shootout?", options: ["Andrea Pirlo", "Fabio Grosso", "Daniele De Rossi", "Alessandro Del Piero"], correct: 1 },
  { question: "Who scored both goals for France in the Euro 2000 semi-final vs Portugal?", options: ["Zinédine Zidane", "Thierry Henry", "David Trezeguet", "Nicolas Anelka"], correct: 0 },
  { question: "Who scored four goals for Germany vs Brazil in the 2014 semi-final?", options: ["Miroslav Klose", "Toni Kroos", "André Schürrle", "Thomas Müller"], correct: 1 },

  { question: "Which club did Cristiano Ronaldo first win the Champions League with?", options: ["Manchester United", "Real Madrid", "Juventus", "Sporting CP"], correct: 0 },
  { question: "Which club did Lionel Messi debut for professionally?", options: ["Newell's Old Boys", "Barcelona", "PSG", "River Plate"], correct: 1 },
  { question: "Which club did Zinedine Zidane join from Juventus in 2001?", options: ["AC Milan", "Barcelona", "Real Madrid", "Inter Milan"], correct: 2 },
  { question: "Which club did Ronaldinho join from PSG in 2003?", options: ["Real Madrid", "Barcelona", "AC Milan", "Manchester United"], correct: 1 },
  { question: "Which club did Kylian Mbappé join permanently in 2018?", options: ["PSG", "Monaco", "Real Madrid", "Arsenal"], correct: 0 },
  { question: "Which club did Mohamed Salah join in 2017?", options: ["Chelsea", "Roma", "Liverpool", "Fiorentina"], correct: 2 },
  { question: "Which club did Erling Haaland join in 2022?", options: ["Borussia Dortmund", "Manchester City", "RB Salzburg", "Real Madrid"], correct: 1 },
  { question: "Which club did Neymar join in 2017 for a world-record fee?", options: ["Real Madrid", "PSG", "Manchester City", "Chelsea"], correct: 1 },
  { question: "Which club did Luis Suárez join from Liverpool in 2014?", options: ["Barcelona", "Real Madrid", "Atletico Madrid", "Juventus"], correct: 0 },
  { question: "Which club did Gareth Bale join from Tottenham in 2013?", options: ["Manchester United", "Real Madrid", "PSG", "Bayern Munich"], correct: 1 },

  { question: "Which team won the Premier League in 2011-12 on goal difference?", options: ["Manchester United", "Chelsea", "Manchester City", "Arsenal"], correct: 2 },
  { question: "Which team won the FA Cup in 2013 beating Man City?", options: ["Wigan Athletic", "Sunderland", "Portsmouth", "Stoke City"], correct: 0 },
  { question: "Which team won the FA Cup in 2016?", options: ["Arsenal", "Chelsea", "Manchester United", "Manchester City"], correct: 0 },
  { question: "Which team won the EFL Cup in 2018?", options: ["Chelsea", "Arsenal", "Manchester City", "Liverpool"], correct: 2 },
  { question: "Which team won the Community Shield in 2019?", options: ["Liverpool", "Manchester City", "Chelsea", "Arsenal"], correct: 1 },
  { question: "Which club won the Scottish Premiership in 2020-21, ending Celtic’s run?", options: ["Rangers", "Aberdeen", "Hearts", "Hibernian"], correct: 0 },
  { question: "Which club won the Portuguese Primeira Liga in 2019-20?", options: ["Porto", "Benfica", "Sporting CP", "Braga"], correct: 0 },
  { question: "Which club won the Dutch Eredivisie in 2020-21?", options: ["PSV", "Ajax", "Feyenoord", "AZ"], correct: 1 },
  { question: "Which club won the Turkish Süper Lig in 2020-21?", options: ["Beşiktaş", "Galatasaray", "Fenerbahçe", "Trabzonspor"], correct: 0 },
  { question: "Which club won the Russian Premier League in 2020-21?", options: ["CSKA Moscow", "Zenit", "Spartak Moscow", "Lokomotiv"], correct: 1 },

  { question: "Which nation won the first European Championship in 1960?", options: ["Spain", "Italy", "Soviet Union", "Yugoslavia"], correct: 2 },
  { question: "Which nation won Euro 1988?", options: ["Netherlands", "Germany", "Soviet Union", "Italy"], correct: 0 },
  { question: "Which nation won Euro 1992?", options: ["Germany", "Denmark", "France", "Netherlands"], correct: 1 },
  { question: "Which nation won Euro 1996?", options: ["England", "Germany", "Czech Republic", "France"], correct: 1 },
  { question: "Which nation won Euro 2000?", options: ["France", "Italy", "Netherlands", "Germany"], correct: 0 },
  { question: "Which nation won Euro 2012 final 4–0?", options: ["Spain", "Germany", "Italy", "France"], correct: 0 },
  { question: "Which nation lost Euro 2004 final to Greece?", options: ["Portugal", "France", "Czech Republic", "Netherlands"], correct: 0 },
  { question: "Which nation won Euro 2024 final 2–1 vs England?", options: ["France", "Spain", "Germany", "Portugal"], correct: 1 },
  { question: "Which nation has three Euro titles before 2024?", options: ["Germany", "Spain", "France", "Italy"], correct: 1 },
  { question: "Which nation’s trophy is named Henri Delaunay?", options: ["Copa América", "UEFA Euro", "FA Cup", "Copa del Rey"], correct: 1 },

  { question: "Which nation won the 1999 FIFA Women’s World Cup?", options: ["USA", "Norway", "Germany", "China"], correct: 0 },
  { question: "Which nation won the 2011 FIFA Women’s World Cup?", options: ["USA", "Japan", "Germany", "Sweden"], correct: 1 },
  { question: "Which nation won the 2015 FIFA Women’s World Cup?", options: ["Japan", "USA", "Germany", "France"], correct: 1 },
  { question: "Which nation won the 2019 FIFA Women’s World Cup?", options: ["Netherlands", "USA", "England", "Sweden"], correct: 1 },
  { question: "Which nation has the most Women’s World Cup titles?", options: ["USA", "Germany", "Japan", "Norway"], correct: 0 },
  { question: "Which club won the first Women’s Champions League for Lyon’s modern era run (2011)?", options: ["Lyon", "Wolfsburg", "Frankfurt", "Barcelona"], correct: 0 },
  { question: "Which club won the Women’s Champions League in 2021?", options: ["Barcelona", "Chelsea", "Lyon", "PSG"], correct: 0 },
  { question: "Which player won the Ballon d’Or Féminin in 2021?", options: ["Alexia Putellas", "Sam Kerr", "Vivianne Miedema", "Ada Hegerberg"], correct: 0 },
  { question: "Which nation won the Women’s Euro 2022?", options: ["Germany", "England", "Netherlands", "Sweden"], correct: 1 },
  { question: "Which player scored in the 2019 Women’s World Cup final for the USA (brace)?", options: ["Megan Rapinoe", "Alex Morgan", "Carli Lloyd", "Rose Lavelle"], correct: 0 },

  { question: "Which country beat Brazil in the 1950 World Cup final round decider at Maracanã?", options: ["Uruguay", "Argentina", "Sweden", "Spain"], correct: 0 },
  { question: "Which country won the first ever European Cup in 1956?", options: ["Real Madrid", "Reims", "Milan", "Barcelona"], correct: 0 },
  { question: "Which country hosted and won the 1998 World Cup?", options: ["France", "Brazil", "Germany", "England"], correct: 0 },
  { question: "Which nation did West Germany defeat in the 1954 World Cup Final?", options: ["Hungary", "Austria", "Uruguay", "Brazil"], correct: 0 },
  { question: "Which nation won the 1972 Euros?", options: ["Soviet Union", "Netherlands", "West Germany", "Italy"], correct: 2 },
  { question: "Which nation won the 1976 Euros on penalties?", options: ["Czechoslovakia", "Germany", "Netherlands", "Italy"], correct: 0 },
  { question: "Which nation won the 1984 Euros?", options: ["France", "Spain", "Portugal", "Denmark"], correct: 0 },
  { question: "Which nation won the 2001 Copa América?", options: ["Colombia", "Argentina", "Brazil", "Uruguay"], correct: 0 },
  { question: "Which nation won the 1994 World Cup?", options: ["Brazil", "Italy", "Germany", "Netherlands"], correct: 0 },
  { question: "Which nation won the 2002 World Cup?", options: ["Germany", "Brazil", "France", "Italy"], correct: 1 },

  { question: "Which player has the most World Cup goals overall?", options: ["Ronaldo", "Miroslav Klose", "Pelé", "Gerd Müller"], correct: 1 },
  { question: "Which player has the most Euro finals goals in one tournament (9)?", options: ["Michel Platini", "Cristiano Ronaldo", "Antoine Griezmann", "Patrick Kluivert"], correct: 0 },
  { question: "Which player has the most Champions League titles as a coach (5)?", options: ["Zidane", "Guardiola", "Ancelotti", "Paisley"], correct: 2 },
  { question: "Which club has 15 European Cup/Champions League titles?", options: ["Real Madrid", "Milan", "Liverpool", "Bayern"], correct: 0 },
  { question: "Which club won the European Cup in 1967 (Lisbon Lions)?", options: ["Celtic", "Rangers", "Manchester United", "Leeds United"], correct: 0 },
  { question: "Which club won the European Cup in 1968?", options: ["Manchester United", "Real Madrid", "Benfica", "Milan"], correct: 0 },
  { question: "Which club won the European Cup in 1982?", options: ["Aston Villa", "Hamburg", "Liverpool", "Juventus"], correct: 0 },
  { question: "Which club won the European Cup in 1983?", options: ["Hamburg", "Juventus", "Liverpool", "Benfica"], correct: 0 },
  { question: "Which club won the European Cup in 1986?", options: ["Steaua București", "Barcelona", "Dynamo Kyiv", "Porto"], correct: 0 },
  { question: "Which club won the European Cup in 1987?", options: ["Porto", "Bayern Munich", "Benfica", "PSV"], correct: 0 },

  { question: "Which nation did Spain defeat in the Euro 2012 final?", options: ["Germany", "Italy", "Portugal", "France"], correct: 1 },
  { question: "Which nation did Greece defeat in Euro 2004 final?", options: ["Portugal", "France", "Czech Republic", "Netherlands"], correct: 0 },
  { question: "Which nation did Germany defeat in Euro 1996 final?", options: ["Czech Republic", "England", "France", "Netherlands"], correct: 0 },
  { question: "Which nation did Denmark defeat in Euro 1992 final?", options: ["Germany", "Netherlands", "France", "Italy"], correct: 0 },
  { question: "Which nation did Netherlands defeat in Euro 1988 final?", options: ["USSR", "Germany", "Italy", "France"], correct: 0 },
  { question: "Which nation did France defeat in Euro 2000 final (Golden Goal)?", options: ["Italy", "Portugal", "Netherlands", "Spain"], correct: 0 },
  { question: "Which nation did Italy defeat in Euro 2020 final (pens)?", options: ["England", "Spain", "Germany", "Portugal"], correct: 0 },
  { question: "Which nation did Spain defeat in Euro 2024 final?", options: ["Germany", "France", "England", "Portugal"], correct: 2 },
  { question: "Which nation did Portugal defeat in Euro 2016 final?", options: ["France", "Germany", "Spain", "Netherlands"], correct: 0 },
  { question: "Which nation did Spain defeat in Euro 2008 final?", options: ["Germany", "Italy", "Netherlands", "Russia"], correct: 0 },

  { question: "Who is the all-time top scorer in the Champions League (including European Cup)?", options: ["Cristiano Ronaldo", "Lionel Messi", "Raúl", "Robert Lewandowski"], correct: 0 },
  { question: "Which player scored 17 goals in a single UCL season (2013-14)?", options: ["Lionel Messi", "Cristiano Ronaldo", "Robert Lewandowski", "Neymar"], correct: 1 },
  { question: "Which player scored the fastest Champions League hat-trick (8 minutes)?", options: ["Luiz Adriano", "Mohamed Salah", "Bafétimbi Gomis", "Mike Newell"], correct: 2 },
  { question: "Which player scored in three Champions League finals for Real Madrid?", options: ["Cristiano Ronaldo", "Gareth Bale", "Sergio Ramos", "Karim Benzema"], correct: 0 },
  { question: "Which player scored a bicycle kick in the 2018 UCL final?", options: ["Gareth Bale", "Cristiano Ronaldo", "Sadio Mané", "Mohamed Salah"], correct: 0 },
  { question: "Which club won the UCL treble in 2014-15?", options: ["Real Madrid", "Barcelona", "Bayern Munich", "Inter"], correct: 1 },
  { question: "Which club won the UCL treble in 2019-20?", options: ["PSG", "Bayern Munich", "Liverpool", "Real Madrid"], correct: 1 },
  { question: "Which club won the UCL treble in 1998-99?", options: ["Manchester United", "Barcelona", "Juventus", "Milan"], correct: 0 },
  { question: "Which club won the UCL treble in 2009-10?", options: ["Inter", "Barcelona", "Real Madrid", "Chelsea"], correct: 0 },
  { question: "Which club won back-to-back UCL titles in 2016 and 2017?", options: ["Barcelona", "Bayern Munich", "Real Madrid", "Liverpool"], correct: 2 },

  { question: "Which team did Leicester City beat to clinch the 2015-16 Premier League title indirectly?", options: ["Everton", "Chelsea", "Tottenham Hotspur", "Manchester United"], correct: 2 },
  { question: "Which manager led Leicester to the 2015-16 title?", options: ["Nigel Pearson", "Claudio Ranieri", "Brendan Rodgers", "Sven-Göran Eriksson"], correct: 1 },
  { question: "Which club did Arsenal beat in the 2006 UCL semi-final to reach the final?", options: ["Villarreal", "Real Madrid", "Juventus", "Barcelona"], correct: 0 },
  
    { question: "Who won the FIFA World Cup in 1998?", options: ["Brazil", "France", "Germany", "Argentina"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2006?", options: ["France", "Italy", "Brazil", "Germany"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2010?", options: ["Netherlands", "Spain", "Germany", "Argentina"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2014?", options: ["Argentina", "Germany", "Brazil", "Spain"], correct: 1 },
    { question: "Who won the FIFA World Cup in 2018?", options: ["France", "Croatia", "Germany", "Brazil"], correct: 0 },
    { question: "Who won the FIFA World Cup in 2022?", options: ["France", "Argentina", "Brazil", "Germany"], correct: 1 },
    // ... and all other questions
];

// Quiz state
let currentQuiz = [];
let userAnswers = {};

// Quiz Modal Management
function openQuiz() {
    document.getElementById('quizModal').style.display = 'block';
    generateNewQuiz();
}

function closeQuiz() {
    document.getElementById('quizModal').style.display = 'none';
    document.getElementById('results').style.display = 'none';
    userAnswers = {};
}

// Quiz Generation and Display
function generateNewQuiz() {
    // Reset results
    document.getElementById('results').style.display = 'none';
    userAnswers = {};
    
    // Select 5 random questions
    const shuffled = [...footballQuestions].sort(() => 0.5 - Math.random());
    currentQuiz = shuffled.slice(0, 8);
    
    const container = document.getElementById('quizContainer');
    container.innerHTML = '';
    
    currentQuiz.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.className = 'question';
        questionDiv.innerHTML = `
            <h3>Question ${index + 1}: ${q.question}</h3>
            ${q.options.map((option, optionIndex) => `
                <div class="option">
                    <input type="radio" name="q${index}" value="${optionIndex}" id="q${index}_${optionIndex}">
                    <label for="q${index}_${optionIndex}">${option}</label>
                </div>
            `).join('')}
        `;
        container.appendChild(questionDiv);
    });
}

// Quiz Submission and Results
function submitQuiz() {
    // Collect answers
    userAnswers = {};
    let answeredCount = 0;
    
    for (let i = 0; i < currentQuiz.length; i++) {
        const selected = document.querySelector(`input[name="q${i}"]:checked`);
        if (selected) {
            userAnswers[i] = parseInt(selected.value);
            answeredCount++;
        }
    }
    
    if (answeredCount < currentQuiz.length) {
        alert('Please answer all questions before submitting!');
        return;
    }
    
    displayQuizResults();
}

function displayQuizResults() {
    // Calculate score and show results
    let correctAnswers = 0;
    const resultsDiv = document.getElementById('results');
    let resultsHTML = '';
    
    for (let i = 0; i < currentQuiz.length; i++) {
        const isCorrect = userAnswers[i] === currentQuiz[i].correct;
        if (isCorrect) correctAnswers++;
        
        resultsHTML += `
            <div class="question-result ${isCorrect ? 'correct' : 'incorrect'}">
                <strong>Question ${i + 1}:</strong> ${currentQuiz[i].question}<br>
                <strong>Your answer:</strong> ${currentQuiz[i].options[userAnswers[i]]}<br>
                ${!isCorrect ? `<strong>Correct answer:</strong> ${currentQuiz[i].options[currentQuiz[i].correct]}<br>` : ''}
                ${isCorrect ? '✅ Correct!' : '❌ Incorrect'}
            </div>
        `;
    }
    
    const percentage = (correctAnswers / currentQuiz.length) * 100;
    const { scoreClass, scoreMessage } = getScoreDetails(percentage);
    
    resultsDiv.innerHTML = `
        <div class="score ${scoreClass}">
            Your Score: ${correctAnswers}/8 (${percentage}%)<br>
            ${scoreMessage}
        </div>
        ${resultsHTML}
    `;
    
    resultsDiv.style.display = 'block';
}

function getScoreDetails(percentage) {
    let scoreClass = 'poor';
    let scoreMessage = 'Keep practicing!';
    
    if (percentage >= 80) {
        scoreClass = 'excellent';
        scoreMessage = 'Excellent! You\'re a football expert! ⚽';
    } else if (percentage >= 60) {
        scoreClass = 'good';
        scoreMessage = 'Good job! You know your football! 👏';
    } else if (percentage >= 40) {
        scoreClass = 'average';
        scoreMessage = 'Not bad, but you can do better! 💪';
    }
    
    return { scoreClass, scoreMessage };
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    generateNewQuiz();

    // Handle modal close when clicking outside
    window.onclick = function(event) {
        const modal = document.getElementById('quizModal');
        if (event.target === modal) {
            closeQuiz();
        }
    };
});
