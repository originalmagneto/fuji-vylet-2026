// Obsah stránky (slovensky). Súradnice: [lat, lon]
window.ORIX=[35.72285,139.81769];
window.STATION=[35.49803,138.76898];
window.COIN=[35.7205,139.8200];

// Hlavné zastávky (číslovaný pin)
window.STOPS=[
 {n:0,id:'orix',name:'Orix Mukōjima – prevzatie auta',ll:[35.72285,139.81769],when:'9:00',note:'Pobočka Orix Mukōjima. Streda 9:00 prevzatie, auto zostáva cez noc, vrátenie vo štvrtok 12. 11. o 8:00. Pobočka: 03-3612-0543.'},
 {n:1,id:'shiraito',name:'Fujinomiya – Širaito a Otodome',ll:[35.31299,138.5872],when:'12:15–13:15',note:'Parkovisko 500 ¥, 105 áut, 9:00–17:00 (vjazd do 16:30). Vodopády zadarmo.'},
 {n:2,id:'aoki',name:'Aokigahara – chodník (parkovisko Fugaku)',ll:[35.4775,138.6575],when:'14:00–14:40',note:'Len značený chodník Tokai Nature Trail lávovým lesom, bez jaskýň. Parkovisko zadarmo.'},
 {n:3,id:'station',name:'Kawaguchiko – stanica, požičovňa bicyklov (A)',ll:[35.49884,138.76825],when:'14:55–15:05',note:'Fujiyama Parking pri stanici (200 ¥/30 min, prvých 30 min zadarmo). E-bicykle Soranoshita.'},
 {n:4,id:'ubuya',name:'Ubuyagasaki + most Ohashi',ll:[35.51285,138.76613],when:'15:20–15:30',note:'Prvé fotenie Fuji cestou na sever.'},
 {n:5,id:'oishi',name:'Oishi Park',ll:[35.52329,138.74654],when:'15:45–16:10',note:'Promenáda pri jazere a terasa Natural Living Center.'},
 {n:6,id:'nagasaki',name:'Nagasaki Park – západ slnka 16:41',ll:[35.5218,138.75748],when:'16:15–17:00',note:'Mys v jazere. Odporúčané miesto na samotný západ.'},
 {n:7,id:'gotemba',name:'Gotemba Premium Outlets',ll:[35.3078,138.9651],when:'~18:25–20:00',note:'Obchody 10:00–20:00, parkovisko zadarmo.'}
];

// Miesta na západ slnka (S1–S6)
window.SUNSET=[
 {id:'S1',name:'Oishi Park, promenáda pri jazere',ll:[35.52329,138.74654],comp:'Fuji nad jazerom, v popredí trstina a záhony. Levanduľa kvitne v lete, v polovici novembra bude popredie skôr hnedé a zlaté.',light:'Pohľad na juh (~185°), Fuji ~18 km ďaleko. Slnko o 16:41 na ~249°, teda ~64° vpravo od hory a mimo záberu. Svetlo na Fuji prichádza zboku sprava.'},
 {id:'S2',name:'Oishi, terasa Natural Living Center (2. poschodie)',ll:[35.52289,138.74551],comp:'Vyšší pohľad cez promenádu na jazero a Fuji, čistejší než zospodu. Prístupnosť terasy som neoveril.',light:'Rovnaký smer ako S1, ~100 m od neho. Dá sa spojiť s S1 do jednej zastávky.'},
 {id:'S3',name:'Nagasaki Park – mys v jazere (odporúčané na samotný západ)',ll:[35.5218,138.75748],comp:'Najčistejšie „Fuji a jazero“: mys bez budov, protiľahlý breh je nízky, vidno dlhú súmernú siluetu hory.',light:'Pohľad ~189°, slnko o 16:41 na ~249° (60° vpravo). Pri jasnej oblohe tu je najlepšia šanca na ružové zafarbenie Fuji po západe (nie je zaručené).'},
 {id:'S4',name:'Ubuyagasaki – mys so svätyňou a mostom Ohashi',ll:[35.51285,138.76613],comp:'Fuji s mostom Kawaguchiko Ohashi a svätyňou na kopčeku. Zrkadlenie (sakasa Fuji) býva skôr ráno pri bezvetrí, popoludní ho nečakaj.',light:'Pohľad ~192°, slnko ~56° vpravo. Je cestou zo stanice, preto 10 min cestou tam okolo 15:20. Pri návrate už bude súmrak.'},
 {id:'S5',name:'Záloha 1: most Kawaguchiko Ohashi (chodník)',ll:[35.51175,138.76457],comp:'Fuji pred tebou a jazero popri moste. Po moste sa jazdí po chodníku s prednosťou chodcov.',light:'Rovnaký smer ako S4, ~150 m od neho.'},
 {id:'S6',name:'Záloha 2: Oike Park (južný breh)',ll:[35.50716,138.76304],comp:'Fuji pred tebou, ale jazero máš za chrbtom, takže bez vody v zábere. Pokojnejšie, 1,0 km od stanice; vhodné, ak sever zrušíš.',light:'Pohľad ~191°, slnko ~58° vpravo.'}
];

// Požičovne bicyklov A–E
window.SHOPS=[
 {id:'A',name:'Soranoshita Kawaguchiko-ekimae (odporúčané)',ll:[35.49884,138.76825],approx:false,ok:true,hours:'9:00–18:00 (samostatný čas vrátenia neuvádzajú, ber 18:00)',price:'E-bicykel 3 000 ¥ / 3 h, 4 000 ¥ / deň. Obyčajný 1 000 ¥ / 3 h, 1 500 ¥ / deň (po 15:00 aj 500 ¥ / h).',note:'Funatsu 3631-2, naproti stanici, 3–5 min k jazeru. Treba preukaz totožnosti, platba na mieste. Overené na oficiálnej stránke soranoshita.net, 10. 11. 2026. Tel. 080-5882-8850.'},
 {id:'B',name:'Fuji Kanko Travel',ll:[35.49886,138.7699],approx:false,ok:false,hours:'Zimné hodiny: prenájom 9:00–17:00, posledný prenájom 15:00; vrátenie do 17:00 (údaje na ich stránkach si protirečia)',price:'E-bicykel 600 ¥ / h, 3 000 ¥ / deň. Obyčajný 400 ¥ / h, 2 000 ¥ / deň, minimum 2 h, prilba zadarmo.',note:'Funatsu 3644-1, ~2 min pešo od stanice. Vrátenie 17:00 je po západe 16:41 + cesta späť príliš tesné – NEVHODNÉ na západ slnka. Tel. 0555-73-1391.'},
 {id:'C',name:'Rent-a-cycle Pooh-san',ll:[35.4986,138.7687],approx:true,ok:true,hours:'9:00–18:00, nepravidelné voľno, pri dažde zatvorené (neoficiálne zdroje)',price:'E-bicykel okolo 2 500 ¥ / deň (neoficiálne, stav 2023–2026).',note:'Funatsu 3636, ~1 min pešo od stanice. Presný pin som nenašiel – poloha na mape je PRIBLIŽNÁ. Oficiálnu stránku som nenašiel, pred príchodom zavolaj: 090-2469-3373. NEOVERENÉ.'},
 {id:'D',name:'Q-BIKE (Fujikyu, zdieľané e-bicykle)',ll:[35.49835,138.76849],approx:true,ok:true,hours:'7:00–22:00 alebo 24 h (zdroje sa líšia); 1-dňový pass treba vrátiť do 17:00',price:'1 100 ¥ / h, max 4 400 ¥ / 24 h.',note:'Port pri stanici – presné miesto portu som neoveril, poloha na mape je PRIBLIŽNÁ. Registrácia v appke (SMS, karta). Na pár hodín drahšie než A.'},
 {id:'E',name:'fujisanbike Kawaguchiko (južný breh)',ll:[35.50707,138.76201],approx:false,ok:true,hours:'9:00–18:00',price:'E-bicykel 4 000 ¥ / deň, obyčajný 500 ¥ / h, 2 000 ¥ / deň. Bez rezervácie OK.',note:'Funatsu 6713-19, recepcia hotela Shiki no Yado Fujisan pri Herb Hall. Oishi je odtiaľ bližšie, ale auto musíš nechať tu, nie pri stanici. Parkovanie neoverené.'}
];

// Voliteľné/kandidátske miesta s fotkami (kľúč = kľúč v PHOTOS)
window.SPOTS=[
 {key:'shiraito',tag:'main',num:1,name:'Fujinomiya – Širaito a Otodome',ll:[35.31299,138.5872],
  light:'Odhad: vodopády sú v úzkej doline pod lesom, najjemnejšie a rovnomerné svetlo je okolo poludnia až 13:00 (plán: príchod 12:15). Voda v zrázke je celoročne ~12 °C, v novembri bývajú pri vode okolo listy.',
  off:'Hlavná zastávka č. 1. Orix → Fujinomiya OSRM 2 h 9 min (156 km), s rezervou plánujem 2 h 45 min. Potom 21 min k Aokigahare.',
  note:'Parkovisko 500 ¥, 105 áut, 9:00–17:00 (zimný režim 9:00–16:30), vjazd 30 min pred zatvorením. Vstup k vodopádom zadarmo. Otodome je 5 min pešo od parkoviska, Širaito ďalších 5 min.',
  gm:'Shiraito Falls Fujinomiya'},
 {key:'aoki',tag:'main',num:2,name:'Aokigahara – chodník Tokai Nature Trail (bez jaskýň)',ll:[35.4775,138.6575],
  light:'Odhad: v lese je rozptýlené svetlo, najlepšie 11:00–15:00; po 15:30 sa v lese rýchlo stmieva (plán: 14:00–14:40). Po daždi 10. 11. bude mokro.',
  off:'Hlavná zastávka č. 2: z Fujinomiye OSRM 21 min (v pláne 45 min s obedom), potom 12 min na stanicu Kawaguchiko.',
  note:'Parkuj na parkovisku Fugaku (zadarmo, 150 áut podľa prefektúry) a choď iba po značenom Tokai Nature Trail lávovým lesom s machom a koreňmi, ~1,4 km jedným smerom k Narusawa; na 40 min stačí ~20 min tam a späť. DO JASKÝŇ SA NEIDE. Zostaň na chodníku (mimo je zákaz). Poznámka: parkovisko patrí k jaskyni a obchodu Mori-no-Eki, či sa tam smie parkovať iba kvôli chodníku, som neoveril. Jaskyne ani Bat Cave už nie sú súčasťou plánu.',
  gm:'Fugaku Wind Cave parking Aokigahara'},
 {key:'lawson',tag:'opt',num:null,name:'Lawson Kawaguchiko-ekimae (slávny záber Fuji)',ll:[35.4985,138.7672],
  light:'Odhad: fotíš na juh, takže poludnie je protisvetlo; lepšie ráno alebo po ~15:00, keď svetlo prichádza zboku sprava.',
  off:'0 km: ~2 min pešo od požičovne A. Voliteľné 5–10 min pred požičaním alebo po vrátení bicyklov, nie na úkor západu slnka.',
  note:'Stoj na verejnom chodníku, cez cestu iba na semafore, nestoj pred zubnou ambulanciou ani na jej pozemku, neparkuj pri obchode, hluk drž nízko. Pozícia fotografa z tejto fotky nie je v Commons uvedená.',
  gm:'Lawson Kawaguchiko Ekimae'},
 {key:'ubuya',tag:'main',num:4,name:'Ubuyagasaki – mys so svätyňou',ll:[35.51285,138.76613],
  light:'Pohľad ~192° na juh. O 15:20 svetlo zboku sprava (slnko ~225°). Zrkadlenie ráno pri bezvetrí; popoludní ho nečakaj.',
  off:'2,9 km zo stanice po severnom brehu (cyklotrasa OSM), ~12 min e-bicyklom, leží priamo na trase.',
  note:'Svätyňa na kopčeku a most Ohashi v zábere. Fotky 2–4 sú z blízkeho okolia (do ~100–200 m).',
  gm:'Ubuyagasaki Fujikawaguchiko'},
 {key:'ohashi',tag:'opt',num:null,name:'Most Kawaguchiko Ohashi',ll:[35.51175,138.76457],
  light:'Pri bezvetrí zrkadlenie ráno alebo pri súmraku; popoludní okolo 15:30 svetlo zboku sprava. Foto 4 (záverečný západ/oblaky) je ukážka obrazu pri súmraku.',
  off:'~190 m vzdušne od Ubuyagasaki, malá odbočka (+5 min). Stihneš cestou tam alebo späť.',
  note:'Po moste sa jazdí po chodníku s prednosťou chodcov; bicykle dole z mosta tlačiť, ak je preplnený.',
  gm:'Kawaguchiko Ohashi Bridge'},
 {key:'yagizaki',tag:'skip',num:null,name:'Yagizaki Park',ll:[35.51211,138.75586],
  light:'Fuji je pred tebou, ale jazero máš za chrbtom, preto sa „voda + hora“ nedá spojiť (kawaguchiko.net, tessomewhere). V Commons som k Yagizaki nenašiel fotku s Fuji, preto sú tu len fotky okolia jazera.',
  off:'~1,2 km od mosta Ohashi a ~4–5 km od Oishi pre bicykel (OSM). Odbočka +8–10 min. NEODPORÚČAM – vynechať.',
  note:'Levanduľové pole na foto 4 je letná scenéria (kvitne v júli), nie z novembra.',
  gm:'Yagizaki Park Fujikawaguchiko'},
 {key:'oishi',tag:'main',num:5,name:'Oishi Park',ll:[35.52329,138.74654],
  light:'Pohľad ~185° na Fuji. 15:45–16:10 svetlo na hore je zboku sprava; slnko zapadá 64° vpravo od hory, takže „slnko za vrcholom“ nebude. Terasa NLC je ~100 m od promenády.',
  off:'3,9 km od Ubuyagasaki (15–18 min e-bicyklom); 6,8 km zo stanice po trase cez Ubuyagasaki. Hlavná zastávka č. 5.',
  note:'Levanduľa kvitne v lete; v polovici novembra bude popredie hnedé a zlaté. Parkovanie netreba (si na bicykli).',
  gm:'Oishi Park Fujikawaguchiko'},
 {key:'nagasaki',tag:'main',num:6,name:'Nagasaki Park – západ slnka',ll:[35.5218,138.75748],
  light:'Západ slnka 16:41 (~249°), súmrak 17:08. Fuji ~189° (60° vľavo od slnka). Ružové zafarbenie Fuji je možné ~16:30–17:00 pri jasnej oblohe nad západom, nie je zaručené. Výšku západného horizontu som neoveril.',
  off:'1,3 km od Oishi (~6 min bicyklom), 5,5 km späť na stanicu (~22–25 min). Hlavná zastávka č. 6.',
  note:'Fotky 2–3 ukazujú západ a jesenné javory pri jazere (autor Moyan Brenn). Odchod z parku ~17:00, v súmraku jazdi so svetlami.',
  gm:'Nagasaki Park Fujikawaguchiko'},
 {key:'iyashi',tag:'opt',num:null,name:'Saiko Iyashi no Sato Nenba',ll:[35.5049,138.6618],
  light:'Odhad: dedina so slamenými strechami, Fuji nad strechami; v pláne by bol skôr dopoludnia/popoludní. Vstup 500 ¥, 9:00–17:00 (marec–november), posledný vstup 30 min pred zatvorením (zdroj: starší údaj z plánu, neoverené na mieste).',
  off:'Z Aokigahary 5 min (4,6 km), odtiaľ na stanicu 16 min (priamo 12 min) = odbočka +9 min jazdy a 30–45 min na prehliadku. Do hlavného plánu sa nezmestí, ak chceš stihnúť bicykle.',
  note:'Pozícia fotografa je uvedená len pri foto 1 (Sergiy Galyonkin); ostatné sú z dediny bez geotagu (pozícia približná).',
  gm:'Saiko Iyashi no Sato Nenba'},
 {key:'honcho',tag:'opt',num:null,name:'Honcho-dori, Fujiyoshida',ll:[35.4896,138.8025],
  light:'Odhad: ulica smeruje na Fuji (juh). Najlepšie ráno a dopoludnia (menej protislnka, po 9:00 býva dav); v zime/jeseň rýchlo klesá slnko za horu.',
  off:'Zo stanice Kawaguchiko 4 min autom (4,3 km); z Chureito 5 min; z Aokigahary 14 min (+6 min k priamej ceste na stanicu).',
  note:'Foť z chodníka, nie z vozovky (fotenie na ceste je zakázané, premávka). Foto 1–2 sú verejná doména (Vitor Coelho Nisida), 3 panoramio, 4 CC0 DimiTalen.',
  gm:'Honcho-dori Fujiyoshida'},
 {key:'chureito',tag:'opt',num:null,name:'Chureito Pagoda (Arakurayama Sengen)',ll:[35.5015,138.8008],
  light:'Dopoludnia svetlo zboku a spredu, najlepšie ráno kým je Fuji čisté; popoludní protisvetlo a opar. Jesenné lístie do približne polovice novembra (zdroj plánu).',
  off:'Z Aokigahary 18 min, odtiaľ na stanicu 7 min (spolu +13 min k priamej ceste) plus 398 schodov (~15 min hore) a ~45–60 min pobytu. Parkovanie 1 000–1 500 ¥ za 6 h. Nezmestí sa k západu slnka na bicykli.',
  note:'Pozície fotografov sú z geotagov v Commons (60–70 m od bodu pagody); foto 1 je z jari (čerešne), foto 4 z jesene.',
  gm:'Chureito Pagoda'},
 {key:'oshino',tag:'opt',num:null,name:'Oshino Hakkai',ll:[35.459,138.8328],
  light:'Odhad: rybníky sú najpestrejšie okolo poludnia, keď slnko osvetlí vodu do hĺbky (Sokonashi-ike). Fuji je nad dedinou.',
  off:'Z Aokigahary 23 min, odtiaľ na stanicu 12 min (spolu +23 min k priamej ceste) plus ~45 min prehliadky. Vstup do areálu zadarmo (údaj z plánu), do rybníkov nehádzať mince.',
  note:'Foto 1 je z jesene, foto 3 je zasnežená scenéria (zima), nie z novembra.',
  gm:'Oshino Hakkai'},
 {key:'motosu',tag:'opt',num:null,name:'Jazero Motosu – výhľad z bývalej tisícjenovej bankovky',ll:[35.4643,138.5857],
  light:'Podľa plánu najlepšie popoludní; poloha vyhliadky je približná (stred severného brehu, nie presný pin).',
  off:'Z Aokigahary 11 min, odtiaľ na stanicu 22 min (spolu +21 min k priamej ceste) plus ~30 min chôdze do kopca od parkoviska. Nezmestí sa spolu s bicyklami.',
  note:'Foto 1: zrkadlenie pri bezvetrí; foto 4 jesenný javor (rok 2024).',
  gm:'Lake Motosu 1000 yen view'},
 {key:'panorama',tag:'opt',num:null,name:'Yamanaka – Panorama-dai (sunset alternatíva)',ll:[35.41261,138.90946],
  light:'Fuji je zo Panorama-dai na JZ (~251°), slnko zapadá na ~249°: slnko sa pri vrchole dotkne Fuji okolo 15:40 (môj výpočet, oficiálny kalendár uvádza 6. 11. 15:44 a 13. 11. 15:33) a potom je Fuji silueta. Fotka 4 ukazuje podobnú siluetu pri západe.',
  off:'Zo stanice Kawaguchiko 32 min, odtiaľ do Gotemby 33 min (priamo 36 min) – leží skoro na ceste domov (+29 min k priamej ceste). Parkovisko ~7 áut, nestáť pri ceste.',
  note:'Variant C (bez bicyklov) – pozri „Vyber si trasu“. Poloha slnka pri Fuji je moja kalkulácia, over v aplikácii (PhotoPills).',
  gm:'Yamanakako Panorama-dai'}
];

// Možnosti trasy
window.OPTIONS=[
 {id:'A',color:'#d62828',name:'A · Hlavný plán: Fujinomiya + les + bicykle k západu',
  sum:'Vodopády, chodník lávovým lesom, e-bicykle po severnom brehu a západ slnka v Nagasaki Park, potom Gotemba.',
  rows:[['9:30','Odchod z Orixu'],['12:15','Širaito + Otodome (1 h)'],['14:00','Aokigahara chodník (40 min)'],['15:05','E-bicykle zo stanice'],['16:41','Západ v Nagasaki Park'],['17:40','Odchod do Gotemby, ~18:25 príchod']],
  legs:['orix-fuji','fuji-aoki','aoki-station','station-gotemba','gotemba-orix'],
  km:336,min:286,stops:'6 fotospotov + Gotemba',bikes:'Áno (~2 h 30)',gotemba:'~18:25–20:00 (1 h 35)',
  pros:'Všetko z plánu, najlepšie fotky Fuji pri jazere, bicykle sú v čase pred súmrakom.',cons:'Dlhý deň (13 h) a tesné okno na bicykle: odchod z Aokigahary najneskôr 14:40, vrátenie bicyklov pred 18:00.'},
 {id:'B',color:'#2a9d8f',name:'B · Bez Fujinomiye: Chureito + Honcho + Oshino + bicykle',
  sum:'Kratšia cesta autom, tri fotospoty s Fuji na ceste (pagoda, ulica, rybníky), viac času na bicykloch.',
  rows:[['9:30','Odchod z Orixu'],['~11:30','Chureito (45 min, 398 schodov)'],['~12:25','Honcho-dori + obed'],['~13:30','Oshino Hakkai (45 min)'],['~14:30','Stanica, bicykle ~14:45'],['16:41','Západ v Nagasaki Park, 17:40 do Gotemby']],
  legs:['orix-chureito','chureito-honcho','honcho-oshino','oshino-station','station-gotemba','gotemba-orix'],
  km:276,min:262,stops:'3 fotospoty + 6 pri bicykli + Gotemba',bikes:'Áno (~3 h, vyjde na 3-hodinový prenájom)',gotemba:'~18:25–20:00 (1 h 35)',
  pros:'~1 h 20 min menej v aute, viac času pri jazere (bicykle už o 14:45, dá sa pridať Ohashi a Yagizaki), jeseň v Chureito.',cons:'Bez vodopádov a lesa. Chureito/Honcho: dopoludnia dav; jesenné lístie okolo Chureito je tesne po vrchole. Časy po 12:00 sú moje odhady z OSRM (bez premávky).'},
 {id:'C',color:'#7b2cbf',name:'C · Slnko pri Fuji: Fujinomiya + les + Panorama-dai (bez bicyklov)',
  sum:'Zachováš vodopády aj les, ale západ slnka u jazera Yamanaka, kde je Fuji takmer v smere slnka. Žiadne bicykle.',
  rows:[['9:30','Odchod z Orixu'],['12:15','Širaito + Otodome'],['14:00','Aokigahara chodník (40 min)'],['~15:25','Panorama-dai (38 min jazdy + rezerva)'],['~15:40–16:41','Slnko pri Fuji a západ'],['~17:15','Odchod, ~18:00 Gotemba']],
  legs:['orix-fuji','fuji-aoki','aoki-panorama','panorama-gotemba','gotemba-orix'],
  km:340,min:309,stops:'3 fotospoty + Gotemba',bikes:'Nie',gotemba:'~18:00–20:00 (2 h)',
  pros:'Bez rizika s bicyklami a pred 18:00. Viac času v Gotembe. Fuji v smere slnka (silueta).',cons:'Malé parkovisko (~7 áut), jeden bod bez zázemia, nie je záruka, že hora zostane čistá; kalkulácia slnka je neoverená. Zrušíš Oishi/Nagasaki.'}
];
