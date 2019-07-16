let userInput = process.argv[2];

// list of all pokemon sorted by type
let FirstGen = ['Bulbasaur','Ivysaur',"Venasaur",'Charmander',"Charmeleon","Charizard",'Squirtle','Wartortle','Blastoise','Caterpie','Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate','Spearow','Fearow',"Ekans","Arbok","Pikachu","Raichu","Sandshrew","Sandslash","Nidoran","Nidorina","Nidoqueen","Nidoran","Nidorino","Nidoking","Clefairy","Clefable","Vulpix","Ninetales","Jigglypuff","Wigglytuff","Zubat","Golbat","Oddish","Gloom","Vileplume","Paras","Parasect","Venonat","Venomoth","Diglett","Dugtrio","Meowth","Persian","Psyduck","Golduck","Mankey","Primeape","Growlithe","Arcanine","Poliwag","Poliwhirl","Poliwrath","Abra","Kadabra","Alakazam","Machop","Machoke","Machamp","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Geodude","Graveler","Golem","Ponyta","Rapidash","Slowpoke","Slowbro","Magnemite","Magneton","Farfetch'd","Doduo","Dodrio","Seel","Dewgong","Grimer","Muk","Shellder","Cloyster","Gastly","Haunter","Gengar","Onix","Drowzee","Hypno","Krabby","Kingler","Voltorb","Electrode","Exeggcute","Exeggutor","Cubone","Marowak","Hitmonlee","Hitmonchan","Lickitung","Koffing","Weezing","Rhyhorn","Rhydon","Chansey","Tangela","Kangaskhan","Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Mr. Mime","Scyther","Jynx","Electabuzz","Magmar","Pinsir","Tauros","Magikarp","Gyarados","Lapras","Ditto","Eevee","Vaporeon","Jolteon","Flareon","Porygon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl","Snorlax","Articuno","Zapdos","Moltres","Dratini","Dragonair","Dragonite","Mewtwo","Mew"];
let SecondGen = ['Chikorita','Bayleef','Meganium','Cyndaquil','Quilava','Typhlosion','Totodile','Croconaw','Feraligatr','Sentret','Furret','Hoothoot','Noctowl','Ledyba','Ledian','Spinarak','Ariados','Crobat','Chinchou','Lanturn','Pichu','Cleffa','Igglybuff','Togepi','Togetic','Natu','Xatu','Mareep','Flaaffy','Ampharos','Bellossom','Marill','Azumarill','Sudowoodo','Politoed','Hoppip','Skiploom','Jumpluff','Aipom','Sunkern','Sunflora','Yanma','Wooper','Quagsire','Espeon','Umbreon','Murkrow','Slowking','Misdreavus','Unown','Wobbuffet','Girafarig','Pineco','Forretess','Dunsparce','Gligar','Steelix','Snubbull','Granbull','Qwilfish','Scizor','Shuckle','Heracross','Sneasel','Teddiursa','Ursaring','Slugma','Magcargo','Swinub','Piloswine','Corsola','Remoraid','Octillery','Delibird','Mantine','Skarmory','Houndour','Houndoom','Kingdra','Phanpy','Donphan','Porygon2','Stantler','Smeargle','Tyrogue','Hitmontop','Smoochum','Elekid','Magby','Miltank','Blissey','Raikou','Entei','Suicune','Larvitar','Pupitar','Tyranitar','Lugia','Ho-Oh','Celebi'];
let ThirdGen = ['Treecko','Grovyle','Sceptile','Torchic','Combusken','Blaziken','Mudkip','Marshtomp','Swampert','Poochyena','Mightyena','Zigzagoon','Linoone','Wurmple','Silcoon','Beautifly','Cascoon','Dustox','Lotad','Lombre','Ludicolo','Seedot','Nuzleaf','Shiftry','Nincada','Ninjask','Shedinja','Taillow','Swellow','Shroomish','Breloom','Spinda','Wingull','Pelipper','Surskit','Masquerain','Wailmer','Wailord','Skitty','Delcatty','Kecleon','Baltoy','Claydol','Nosepass','Torkoal','Sableye','Barboach','Whiscash','Luvdisc','Corphish','Crawdaunt','Feebas','Milotic','Carvanha','Sharpedo','Trapinch','Vibrava','Flygon','Makuhita','Hariyama','Electrike','Manectric','Numel','Camerupt','Spheal','Sealeo','Walrein','Cacnea','Cacturne','Snorunt','Glalie','Lunatone','Solrock','Azurill','Spoink','Grumpig','Plusle','Minun','Mawile','Meditite','Medicham','Swablu','Altaria','Wynaut','Duskull','Dusclops','Roselia','Slakoth','Vigoroth','Slaking','Gulpin','Swalot','Tropius','Whismur','Loudred','Exploud','Clamperl','Huntail','Gorebyss','Absol','Shuppet','Banette','Serviper','Zangoose','Relicanth','Aron','Lairon','Aggron','Castform','Volbeat','Illumise','Lileep','Cradily','Anorith','Armaldo','Ralts','Kirlia','Gardevoir','Bagon','Shelgon','Salamence','Beldum','Metang','Metagross','Regirock','Regice','Registeel','Kyogre','Groudon','Rayquaza','Latias','Latios','Jirachi','Deoxys'];
let FourthGen = ['Turtwig','Grotle','Torterra','Chimchar','Monferno','Infernape','Piplup','Prinplup','Empoleon','Starly','Staravia','Staraptor','Bidoof','Bibarel','Kricketot','Kricketune','Shinx','Luxio','Luxray','Budew','Roserade','Cranidos','Rampardos','Shieldon','Bastiodon','Burmy','Wormadam','Mothim','Combee','Vespiquen','Pachirisu','Buizel','Floatzel','Cherubi','Cherrim','Shellos','Gastrodon','Ambipom','Drifloon','Drifblim','Buneary','Lopunny','Mismagius','Honchcrow','Glameow','Purugly','Chingling','Stunky','Stuntank','Bronzor','Bronzong','Bonsly','Mime Jr.','Happiny','Chatot','Spiritomb','Gible','Gabite','Garchomp','Munchlax','Riolu','Lucario','Hippopotas','Hippowdon','Skorupi','Drapion','Croagunk','Toxicroak','Carnivine','Finneon','Lumineon','Mantyke','Snover','Abomasnow','Weavile','Magnezone','Lickilicky','Rhyperior','Tangrowth','Electivire','Magmortar','Togekiss','Yanmega','Leafeon','Glaceon','Gliscor','Mamoswine','Porygon-Z','Gallade','Probopass','Dusknoir','Froslass','Rotom','Uxie','Mesprit','Azelf','Dialga','Palkia','Heatran','Regigigas','Giratina','Cresselia','Phione','Manaphy','Darkrai','Shaymin','Arceus'];
let FifthGen = ['Victini','Snivy','Servine','Serperior','Tepig','Pignite','Emboar','Oshawott','Dewott','Samurott','Patrat','Watchog','Lilipup','Herdier','Stoutland','Purrloin','Liepard','Pansage','Simisage','Pansear','Simisear','Panpour','Simipour','Munna','Musharna','Pidove','Tranquill','Unfezant','Blitzle','Zebstrika','Roggenrola','Boldore','Gigalith','Woobat','Swoobat','Drilbur','Excadrill','Audino','Timburr','Gurdurr','Conkeldurr','Tympole','Palpitoad','Seismitoad','Throh','Sawk','Sewaddle','Swadloon','Leavanny','Venipede','Whirlipede','Scolipede','Cottonee','Whimsicott','Petilil','Lilligant','Basculin','Sandile','Krokorok','Krookodile','Darumaka','Darmanitan','Maractus','Dwebble','Crustle','Scraggy','Scrafty','Sigilyph','Yamask','Cofagrigus','Tirtouga','Carracosta','Archen','Archeops','Trubbush','Garbodor','Zorua','Zoroark','Minccino','Cinccino','Gothita','Gothorita','Gothitelle','Solosis','Dousion','Reuniclus','Ducklett','Swanna','Vanillite','Vanillish','Vaniluxe','Deerling','Sawsbuck','Emolga','Karrablast','Escavalier','Foongus','Amoonguss','Frillish','Jellicent','Alomomola','Joltik','Galvantula','Ferroseed','Ferrothorn','Klink','Klang','Klinklang','Tynamo','Eelektrik','Eelektross','Elgyem','Beheeyem','Litwick','Lampent','Chandelure','Axew','Fraxure','Haxorus','Cubchoo','Beartic','Cryogonal','Shelmet','Accepgor','Stunfisk','Mienfoo','Mienshao','Druddigon','Golett','Golurk','Pawniard','Bisharp','Bouffalant','Rufflet','Braviary','Vullaby','Mandibuzz','Heatmor','Durant','Deino','Zweilous','Hydreigon','Larvesta','Volcarona','Cobalion','Terrakion','Verizion','Tornadus','Thundurus','Reshiram','Zekrom','Landorus','Kyurem','Keldeo','Meloetta','Genesect'];
let SixthGen = ['Chespin','Quilladin','Chesnaught','Fennekin','Braixen','Delphox','Froakie','Frogadier','Greninja','Bunnelby','Diggersby','Fletchling','Fletchinder','Talonflame','Scatterbug','Spewpa','Vivillon','Litleo','Pyroar','Flabebe','Floette','Florges','Skiddo','Gogoat','Pancham','Pangoro','Furfrou','Espurr','Meowstic','Honedge','Doublade','Aegislash','Spritzee','Swirlix','Slurpuff','Inkay','Malamar','Binacle','Barbaracle','Skrelp','Dragalge','Clauncher','Clawitzer','Helioptile','Heliolisk','Tyrunt','Tyrantrum','Amaura','Aurorus','Sylveon','Hawlucha','Dedenne','Carbink','Goomy','Sliggoo','Goodra','Klefki','Phantump','Trevenant','Pumpkaboo','Gourgeist','Bergmite','Avalugg','Noibat','Noivern','Xerneas','Yveltal','Zygarde','Diancie','Hoopa','Volcanion'];
let SeventhGen = ['Rowlet','Dartrix','Decidueye','Litten','Torracat','Incineroar','Popplio','Brionne','Primarina','Pikipek','Trumbeak','Toucannon','Yungoos','Gumshoos','Grubbin','Charjabug','Vikavolt','Crabrawler','Crabominable','Oricorio','Cutiefly','Ribombee','Rockruff','Lycanroc','Wishiwashi','Mareanie','Toxapex','Mudbray','Mudsdale','Dewpider','Araquanid','Fomantis','Lurantis','Morelull','Shiinotic','Salandit','Salazzle','Stufful','Bewear','Bounsweet','Steenee','Tsareena','Comfey','Oranguru','Passimian','Wimpod','Golisopod','Sandygast','Palosand','Pyukumuku','Type: Null','Silvally','Minior','Komala','Turtonator','Togedemaru','Mimikyu','Bruxish','Drampa','Dhelmise','Jangmo-o','Hakamo-o','Kommo-o','Tapu Koko','Tapu Lele','Tapu Bulu','Tapu Fini','Cosmog','Cosmoem','Solgaleo','Lunala','Nihilego','Buzzwole','Xurkitree','Celesteela','Kartana','Guzzlord','Necrozma','Magearna','Marshadow','Poipole','Naganadel','Stakataka','Blacephalon','Zeraora','Meltan','Melmetal'];
// user input and i need to determine where it goes
let allGens = [FirstGen,SecondGen,ThirdGen,FourthGen,FifthGen,SixthGen,SeventhGen];

if (userInput == 1) {
    // Makes random number
    let decimal = Math.random();

    //adjust upper limit

    let limit = decimal * (FirstGen.length);

    let integerNum = Math.floor(limit);
    console.log("The Pokemon's pokedex number is:", integerNum + 1); 
    console.log('The pokemon you should shiny hunt is:', FirstGen[integerNum]);
}

else if (userInput == 2) {
    // Makes random number
    let decimal = Math.random();

    //adjust upper limit

    let limit = decimal * (SecondGen.length);

    let integerNum = Math.floor(limit);
    console.log("The Pokemon's pokedex number is:", integerNum + 1); 
    console.log('The pokemon you should shiny hunt is:', SecondGen[integerNum]);
}

else if (userInput == 3) {
    // Makes random number
    let decimal = Math.random();

    //adjust upper limit

    let limit = decimal * (ThirdGen.length);

    let integerNum = Math.floor(limit);
    console.log("The Pokemon's pokedex number is:", integerNum + 1); 
    console.log('The pokemon you should shiny hunt is:', ThirdGen[integerNum]);
}

else if (userInput == 4) {
    // Makes random number
    let decimal = Math.random();

    //adjust upper limit

    let limit = decimal * (FourthGen.length);

    let integerNum = Math.floor(limit);
    console.log("The Pokemon's pokedex number is:", integerNum + 1); 
    console.log('The pokemon you should shiny hunt is:', FourthGen[integerNum]);
}


// Makes random number
let decimal = Math.random();

//adjust upper limit

let limit = decimal * (FirstGen.length);

let integerNum = Math.floor(limit);
console.log("The Pokemon's pokedex number is:", integerNum + 1); 
console.log('The pokemon you should shiny hunt is:', FirstGen[integerNum]);


//type assignments
let type = ['grass','fire','fighting','psychic','dark','ghost','normal','water','ice','ground','rock','steel','dragon','fairy','electric','poison','bug','flying'];
let type2 = ['grass','fire','fighting','psychic','dark','ghost','normal','water','ice','ground','rock','steel','dragon','fairy','electric','poison','bug','flying'];

