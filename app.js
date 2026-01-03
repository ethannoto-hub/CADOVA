const PRODUCTS = [
  {
    id: "card-minimal",
    name: "CELEBRATIONS - Boite Cadeau en Metal",
    description: "Parce que Celebrations, c'est du plaisir instantane : des chocolats que tout le monde connait, chacun trouve son prefere, zero risque, sourire garanti des l'ouverture.",
    category: "maison",
    price: 10,
    link: "https://www.amazon.fr/CELEBRATIONS-assortiment-chocolats-SNICKERS-MALTESERS/dp/B074BV39ZG/ref=sr_1_1_sspa?crid=KCN98DUA2WKW&dib=eyJ2IjoiMSJ9.s4wnxP3kN7IOLw7euLqV73u-q_xHnf7EdQrQESJ8rAvErCGG-kelG6XlI46BMy03aU8t9el5WdOsI1T-M3MzgR-veOUWB8isUqOlZjNJ_X3sY46iB3zSiyMq9YQpE0r9lCzOlYrcwgiN1rFDnl_bzBWFe8rqMINnik59ssW8fmUXzzsMRqtf6FLP6mlnneC-54v7Ujz40GVs6TO_IJVrrQixXX1Ezq4B1z2FAwX8xe8B9vkrU4nkdLfzw11kZY4sOLqwFyVtjiogd4_CXgm3MRq4kfB_hDqjKDeGtchk-gI.m8Vib0u_qlCllMReFpHiLOH666OF6B0peEss-YTl3es&dib_tag=se&keywords=celebration%2Bchocolat&qid=1766572469&s=grocery&sprefix=celebra%2Cgrocery%2C620&sr=1-1-spons&aref=bB4e0nXzEA&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1",
    image: "https://m.media-amazon.com/images/I/81TalmiIatL._AC_SX679_.jpg"
  },
  {
    id: "keychain-metal",
    name: "Porte-cles en acier inoxydable grave sur mesure",
    description: "Un porte-cles personnalise qui garde vos plus beaux souvenirs toujours avec vous. Ajoutez une photo qui compte vraiment et un texte au dos pour le rendre unique. Un cadeau discret, elegant et charge d'emotion, parfait pour faire plaisir sans se tromper.",
    category: "mode",
    price: 10,
    link: "https://www.amazon.fr/Porte-cl%C3%A9s-calendrier-personnalis%C3%A9-sp%C3%A9ciale-disponibles/dp/B0B1TFB17K/ref=sr_1_32_sspa?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=3DW5VNP7XUETB&dib=eyJ2IjoiMSJ9.E_Nt42LIFj-nikhDBTq382a-WspW5nKTsLK_G1SdzRuETTodgq6-hPziu6Q5UxLGf_I8jwPHSDr_sq8CaRn8BbwGVpu-VSzb6Xo97rJVYee1TfWpptJKK9RMMPBUko-R4rH-zdJWyA8qP16GQVnE_wpwAE1RbdyGEyFDy-HSYSC1W5-XihQhF6bLq1bFe-2-WfzGqrhFsEOQLfj-WS9ia9E5ILMz09qxjns3KVSD8CncIWpMpT_5iaP8PijFreeIstTtfHDzNDcjn8LvhQT1Neu5hnR8pT5vcZoUwXvhrx8.DZcDUEx1MiJuj9SH54BWMCW0UdsTzp-H25PXKkVSwhk&dib_tag=se&keywords=Porte-cles+metal&qid=1766449134&sprefix=porte-cles+metal%2Caps%2C922&sr=8-32-spons&aref=BNlgFX4P1x&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1",
    image: "https://m.media-amazon.com/images/I/61N3TNz7iDL._AC_SX679_.jpg"
  },
  {
    id: "mini-candle",
    name: "Bougie Parfumee Pivoine et Poire Anjou",
    description: "Une bougie parfumee elegante qui cree instantanement une ambiance douce et chaleureuse. L'association de la pivoine florale et de la poire d'Anjou apporte une senteur fraiche, delicate et apaisante. Un cadeau simple et raffine, parfait pour se detendre ou faire plaisir sans se tromper.",
    category: "bien-etre",
    price: 10,
    link: "https://www.amazon.fr/Bougie-d%C3%A9sodorisant-grenade-bergamote-combustion/dp/B08DJ6WJTQ/ref=pd_bxgy_thbs_d_sccl_2/525-1462363-5219435?pd_rd_w=R3AFN&content-id=amzn1.sym.3241dc27-b429-4dd8-b1d4-32e571df604c&pf_rd_p=3241dc27-b429-4dd8-b1d4-32e571df604c&pf_rd_r=HAMWS6H4ZKBK4R65AAG0&pd_rd_wg=amL0D&pd_rd_r=4f275423-6779-42a8-9e45-dce959c0528f&pd_rd_i=B08DJ6WJTQ&th=1",
    image: "https://m.media-amazon.com/images/I/71eomHxWiHL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "powerbank-12000",
    name: "Batterie externe 12000 mAh affichage numerique",
    description: "Batterie portable 12000 mAh avec ecran digital pour suivre le niveau restant, deux sorties USB pour charger deux appareils a la fois et un format compact a glisser dans un sac pour ne jamais tomber en panne.",
    category: "tech",
    price: 10,
    link: "https://www.amazon.fr/Batterie-12000mAh-Chargeur-Affichage-Num%C3%A9rique/dp/B0F21BJNZK?crid=20ZHP5LD00WL5&dib=eyJ2IjoiMSJ9.scXGXeZBVWbaBHS9xpi_JDM6xrUg4OZV6rcv-I21xuhOQby69JnoHFHdP_5v-P5ZRsfQTkRXpZ05c-apOSlx3lJ3P3KgZly6iEBr0KrdY4H5uEkenzvSogiX55XdGq2meOQdiAiAAvB6rfG0xfRp2o1ZGUTYRsZ58sXhQIMT4dkCFr0ll0Vk0NP_HzFr9alUspVVfQ0VZN3BJ6VyUzgmCOllMM7sIi5WUupy1cb8RRIa8jhpfziFRUmnD75QvYgmZa5SxK_3gSOQzIsYFwuEH3OcHXwP1KiNqhbNWFDUoIQ.FWkjIPg9tadEXgNjaniZbpdWKRERelggxDoN_HHnml4&dib_tag=se&keywords=batterie+externe&qid=1766920194&sprefix=batterie%2Caps%2C242&sr=8-13",
    image: "https://m.media-amazon.com/images/I/51eYoHwlAXL._AC_SY300_SX300_QL70_ML2_.jpg"
  },
  {
    id: "mini-notebook",
    name: "Lot de 3 Carnets Hokusai - Carnet de Notes A6",
    description: "Un lot de carnets elegants inspires des oeuvres emblematiques de Hokusai. Leur format A6 est parfait pour noter des idees, dessiner ou ecrire au quotidien. Un cadeau artistique et pratique, ideal pour les amateurs d'art et de papeterie raffinee.",
    category: "loisirs",
    price: 5,
    link: "https://www.amazon.fr/Kokonote-Carnets-Hokusai-Notebook-Recettes/dp/B0BVGBZP7Z/ref=sr_1_13?dib=eyJ2IjoiMSJ9.yFGYQmgguZU3FUjzNOOCFOOf_2e99BpjChXmsCnZoWchAWCeJrKIzXsn50gZkkTlQnmUwopWhFtibO0pVuvm_uaQf5JJPeUOtqZBldnwqWQFO_waOWFwOY9NKiNGDUxmUMeX5JhrsnPdrFUeRUmkl8SRuALxPCTr9HeoXnkn0Oh5KzXBldVvRodSemSvAk2gq9l2-O_flKpYP5PQv900SKtpqn-KoytJ7S9aYRaqzVrNQd5KvF0k3hn60Yf9uK00GOufxBYGs9ZvMOqnwnVppf1hKpyyNPeLY75enWeFu1M.zXYFAqtxGQdCrCHPLKAzvA6yQs6BahMAFKTCaYXT1kM&dib_tag=se&keywords=Mini+carnet&qid=1766452100&sr=8-13",
    image: "https://m.media-amazon.com/images/I/71EEbCx8XgL._AC_SL1500_.jpg"
  },
  {
    id: "phone-tablet-stand",
    name: "Support reglable smartphone et tablette",
    description: "Support compact en metal, angle reglable, pads antiderapants et passage pour cable : parfait pour poser un telephone ou une petite tablette sans glisser, que ce soit pour une visio, une recette ou charger a cote du bureau.",
    category: "tech",
    price: 5,
    link: "https://www.amazon.fr/t%C3%A9l%C3%A9phone-r%C3%A9glable-dappareil-%C3%A9lectronique-universel/dp/B0FJY36K2G/?_encoding=UTF8&s=bazaar&psc=1&pd_rd_w=9Ln9i&content-id=amzn1.sym.06d08abb-23db-4673-badf-10a16e3fbfef&pf_rd_p=06d08abb-23db-4673-badf-10a16e3fbfef&pf_rd_r=70WP9GM3XGDCK9Z02WKG&pd_rd_wg=YOiPH&pd_rd_r=bb72a887-10c4-44fa-85d5-8ec1d924cd20&pos=ib",
    image: "https://m.media-amazon.com/images/I/51PMPlAo3YL._AC_SX679_.jpg",
    imageFit: "cover"
  },
  {
    id: "finger-snap-box",
    name: "Boite de claques doigts originale",
    description: "Mini boite pleine de petits claques doigts : un gadget nostalgique pour animer une soiree ou glisser une surprise marrante sans se ruiner.",
    category: "loisirs",
    price: 5,
    link: "https://www.amazon.fr/Maelsa%C2%AE-petits-Doigts-Claque-cat%C3%A9gorie/dp/B0C1P2D89P?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1ZN7PT8SVYGGE&dib=eyJ2IjoiMSJ9.6KJr-L2xyJQxTMov3oCjqYTuuub22q4LGga72NvxQH5V4ecTFx8iK9aTXzTgvike7yfFAvXnJ9sZDBgYiJhNJW1KWtTqZ6eLZThi0huzf28AoevS-75LwhClvecebL_6mgxMuN2CGkzcZKl4MyPpwFfEnaTIEfdq6ri-7opG7aqgEO9NE6T58Cb_faEyjqB7M8tXafTxO6brlM6cADTbxN89KipLmp2b_40EUNHZYhcYwV9ysH3C_qaimsF9_SEZ5gCSmQqQi8FTY7d6T-YLCLLP8IMlaMZv0JPUI0uFRm0.JDBj4_75PSJvGkLHFkfbuaU5VUELw56y0MSwewOuHvY&dib_tag=se&keywords=claque%2Bdoigt&qid=1766883064&sprefix=claque%2Bdoigt%2Caps%2C339&sr=8-10&th=1",
    image: "https://m.media-amazon.com/images/I/61PSPyO7+PL._AC_SX300_SY300_QL70_ML2_.jpg"
  },
  {
    id: "cuban-chain",
    name: "bracelet en argent sterling",
    description: "Ajoute une touche de style a ton poignet sans te ruiner. Ce bracelet a maillons cubains donne un look moderne et affirme, parfait pour tous les jours ou pour completer une tenue casual. Leger, facile a porter et propose a seulement 2,20 EUR, c'est le petit accessoire qui a du style sans vider ton porte-monnaie.",
    category: "mode",
    price: 2.2,
    link: "https://www.amazon.fr/dp/B0FKTB7GRQ?ie=UTF8&ref=cm_sw_r_cso_cp_apin_dp_hul_7DFP1XP31RYXYKNWPM2Z&ASIN=B0FKTB7GRQ&s=bazaar&social_share=cm_sw_r_cso_cp_apin_dp_hul_7DFP1XP31RYXYKNWPM2Z&ref_=cm_sw_r_cso_cp_apin_dp_hul_7DFP1XP31RYXYKNWPM2Z",
    image: "https://m.media-amazon.com/images/I/61WRAU8xrsL._AC_SX679_.jpg",
    imageFit: "cover"
  },
  {
    id: "travel-mug",
    name: "UZSPACE Mug Isotherme",
    description: "Un mug isotherme elegant qui garde vos boissons chaudes ou froides pendant des heures. Sa poignee confortable, sa paille integree et son design artistique en font un compagnon parfait au quotidien. Un cadeau pratique et style, ideal pour le cafe, le the ou les boissons fraiches, a la maison comme en deplacement.",
    category: "maison",
    price: 22,
    link: "https://www.amazon.fr/UZSPACE-Mug-Isotherme-avec-Poign%C3%A9e/dp/B0FY2LKQS2/ref=sxin_24_sbv_search_btf?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&content-id=amzn1.sym.e465c033-1722-4c7f-83fa-b78395dac004%3Aamzn1.sym.e465c033-1722-4c7f-83fa-b78395dac004&crid=5GRA54DWKD8R&cv_ct_cx=Mug%2Bisotherme&keywords=Mug%2Bisotherme&pd_rd_i=B0FY2KYH8C&pd_rd_r=503665b2-a363-4326-bc17-c38455f5453b&pd_rd_w=zP7m0&pd_rd_wg=mR43P&pf_rd_p=e465c033-1722-4c7f-83fa-b78395dac004&pf_rd_r=7RRBYC8QFRPQG4Q9BE71&qid=1766452570&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sprefix=mug%2Bisotherme%2Caps%2C470&sr=1-1-07652b71-81e3-41f8-9097-e46726928fb7&th=1",
    image: "https://m.media-amazon.com/images/I/61JX-mptL3L._AC_SX679_.jpg"
  },
  {
    id: "tea-kit",
    name: "Les 2 Marmottes - Grand Coffret",
    description: "Un grand coffret d'infusions et de thes pour savourer des moments de calme et de bien-etre. Une selection variee de recettes naturelles, sans aromes ajoutes, fabriquees en France avec soin. Un cadeau chaleureux et raffine, parfait pour se detendre et faire plaisir a coup sur.",
    category: "bien-etre",
    price: 18,
    link: "https://www.amazon.fr/Marmottes-R%C3%A9coltes-Infusions-Bien-%C3%8Atre-Relaxation/dp/B0CTCZ9ZLC/ref=sxin_15_pa_sp_search_thematic_sspa?content-id=amzn1.sym.a75e204b-30fd-45f8-a56f-102ffd5951f5%3Aamzn1.sym.a75e204b-30fd-45f8-a56f-102ffd5951f5&cv_ct_cx=Coffret%2Bthe&keywords=Coffret%2Bthe&pd_rd_i=B0CTCZ9ZLC&pd_rd_r=e5926224-4b26-4f77-ae49-18142a08a465&pd_rd_w=ceJmQ&pd_rd_wg=2vvsn&pf_rd_p=a75e204b-30fd-45f8-a56f-102ffd5951f5&pf_rd_r=RPP51CMQP0XRAKYDWX49&qid=1766452879&sbo=RZvfv%2F%2FHxDF%2BO5021pAnSA%3D%3D&sr=1-3-1c0bc4f8-9a4b-47e4-b117-3d30b74c13f1-spons&aref=7FnANHgXAh&sp_csd=d2lkZ2V0TmFtZT1zcF9zZWFyY2hfdGhlbWF0aWM&th=1",
    image: "https://m.media-amazon.com/images/I/61wjx5XtJQL._AC_SX679_.jpg",
    imageFit: "cover"
  },
  {
    id: "philips-tah3209bk",
    name: "Philips TAH3209BK",
    description: "Le Philips TAH3209BK, c'est le meilleur casque Bluetooth a ce prix : 25 h d'autonomie, son clair et equilibre, multipoint, USB-C et confort leger, le tout pour moins de 25 EUR.",
    category: "tech",
    price: 25,
    link: "https://www.amazon.fr/Philips-TAH3209BK-Supra-aural-dautonomie-dynamiques/dp/B0D31V9V3X/ref=sr_1_1?dib=eyJ2IjoiMSJ9.zwgTYogb0dwjIkQM3UXLitFNDjQBtVTHv356JkmF7QLhFA2d4cEpos-iqmc2D8RSzYBmiwcaeL5klo0wNyD5r8NGpFbRRcf0LSDVK9R0QOT_jjiK911WWVuGW4Y-CEfmw-Y4WVL5vLS8RXaIJamgAudtdYpGivi4JD1beePU0ouhLR8IFGjf6GZXZflvqVOYFIO9hPkFVUMundSUufNf-Gc_VANCYhvlExGv9W1nossFfJgMAe1NDNtkbvCgMPQ9zhU6e_0brY79SvwkQNHQeCxNbHM42yATg3ruexk_vkM.N6Q1MxDJruC_r7H4sUm3640h0gMw76Lm1v1jIlGF04o&dib_tag=se&keywords=Philips+TAH3209BK&qid=1766438531&sr=8-1",
    image: "https://m.media-amazon.com/images/I/51kE8StHaGL._AC_SY879_.jpg"
  },
  {
    id: "easy-plant",
    name: "Plante d'interieur - Yucca elephantipes",
    description: "Une plante d'interieur elegante et facile a vivre qui apporte instantanement une touche de verdure a votre interieur. Le yucca elephantipes est apprecie pour son allure moderne et sa grande resistance. Un cadeau naturel et decoratif, parfait pour illuminer un espace sans contrainte d'entretien.",
    category: "maison",
    price: 24,
    link: "https://www.amazon.fr/dp/B0G2CSMWTL/ref=sspa_dk_detail_3?pf_rd_p=48016705-69f5-4af0-98de-e97187b24a0b&pf_rd_r=NBM4R288G9GB6JYYK0TQ&pd_rd_wg=t2c9F&pd_rd_w=6V47p&content-id=amzn1.sym.48016705-69f5-4af0-98de-e97187b24a0b&pd_rd_r=39eee778-0bed-4377-821a-bf0b1e989b39&aref=l3Hv2V11Yu&sp_csd=d2lkZ2V0TmFtZT1zcF9kZXRhaWwy&th=1",
    image: "https://m.media-amazon.com/images/I/91vc74QU9vL._AC_SX679_.jpg",
    imageFit: "cover"
  },
  {
    id: "lego-paris",
    name: "LEGO Architecture Paris",
    description: "Set LEGO Architecture qui capture les icones de Paris (Tour Eiffel, Arc de Triomphe, Louvre, Grand Palais, Champs-Elysees). Un montage detaille pour deco moderne et escapade miniature dans la Ville Lumiere.",
    category: "loisirs",
    price: 50,
    link: "https://www.amazon.fr/LEGO-Architecture-Paris-Ville-lAmour/dp/B0FPXJ7MGT?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2GTPL5HSP9WZ3&dib=eyJ2IjoiMSJ9.crEGi9FXf_nh1Slx-kdl5hJe02OQCvf2IrNc7Y12uTQPf6HUiBYKzWO7rWcbjwYs0wz9EnwJ3SHsCwB6ZksmO0M5-GYmmBOM-_EOzc48cRrROuevZnueYBX8n3yr-YOoFl9TW-bPacmb-xo44py9BV2HHL_y5vDUgBKkz-IAz1Tyhm0fQChSfiGhVs3vCxIdP610HHoroo9yFrMt_ppTf6aKgoxhKtt48oN-UF9AQ52-jEmoKINsNrMnGy3FOVbIOFbEJahJBv-_fmQMYb348jH4nIXzRoGkWlQ977BSgl4.yp7JbkSaiAzDeBzkLOO3cifmq_s2txh9GBLTj_V6ZxA&dib_tag=se&keywords=lego&qid=1766881940&refinements=p_36%3A3500-&rnid=389218011&sprefix=lego%2Caps%2C200&sr=8-27",
    image: "https://m.media-amazon.com/images/I/81oWAzSDUPL._AC_SX679_.jpg"
  },
  {
    id: "ghost-of-tsushima",
    name: "Ghost of Tsushima Director's Cut (PS5)",
    description: "Un jeu d'action-aventure en monde ouvert inspire du Japon feodal : combats au katana ultra fluides, infiltration, exploration poetique du pays des vents, extension Iki incluse et mode coop Legendes pour varier les plaisirs.",
    category: "gaming",
    price: 50,
    link: "https://www.amazon.fr/action-aventure-Standard-Physique-Fran%C3%A7ais-PlayStation/dp/B0F6YQYCT3?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1OVEM70EKEJ4K&dib=eyJ2IjoiMSJ9._ctBkQE7nMbxBIlLPJzAsSZUvdjuvB07FMMD7Lppo04bsWkfH-flMx4M3tucYHpLCLOLgJI7UYt_MEeA5hc9iPVjgW88LVxY0U0ABF3uIBoUdau5pEM6Yyh7oeQOyraRlEihCmN93eawNr8UFvshacUDcnL5Eua9wXA26077yCrrqsmqf8BBzZ_boEhP9-vUVdtoRB07Qtk_c57fTqDHk0Ev28-Bt7-EEGTWFt6uh2mQPxF9IUT8J9B3Laah6OKQfUZMFH_nm2f7Kd3ANYNpEfof0YZjFKKXf5dpRJA8zys.-MNzqEOqLRcQZXlHfX3BMv4PuNkNi0dQP9XS8tu2ymM&dib_tag=se&keywords=jeux+video&qid=1766878875&refinements=p_36%3A-7600&rnid=389244011&sprefix=jeux+video%2Caps%2C204&sr=8-22",
    image: "https://m.media-amazon.com/images/I/81tKim8mlAL._AC_SX342_SY445_QL70_ML2_.jpg",
    imageFit: "cover"
  },
  {
    id: "board-game",
    name: "Set d'echecs complet + minuteur",
    description: "Echiquier pliable, pieces magnetiques et timer inclus pour lancer des parties serieuses ou rapides des la sortie de la boite.",
    category: "loisirs",
    price: 49,
    link: "https://www.amazon.fr/DOJA-Barcelona-Echiquier-Minuterie-Magnetique/dp/B09S16KHSF?__mk_fr_FR=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=373XTDHXXHY9W&dib=eyJ2IjoiMSJ9.IS0FJ9R-baphbs9BoMtyDTmEbqfbZhn2vTw1nqtgBhfjMRnuw_ApEXXVxWo5PXVX2aJz0fcVu9RfZs1U0FNtkIWmBF5DZaZaOGpoKzPsqRU7gSvySPn2bPdQB65F60N0MDxZ0WaKKLqVRdSIB1OqWoXVW2FPVZzE2a3sjrXDa5ifrQzntPAbgGP9we-M-oOqHzcg8VHZaXJTh8Gl-3XFJcYOEu7prSEOznPOBcM2WN52ntFaJ76DOXmeAiyPcgFF9pEly2PoNvt_0drAP7x8AE9NpZ9UqSEqfH04jq2AWhI.aPXEGVKlI4rWSwxAHXZyNuJrn5cL-DcEU-8IVtfiKY0&dib_tag=se&keywords=jeu+plus+de+50%E2%82%AC&qid=1766877848&sprefix=jeu+plus+de+50+%2Caps%2C201&sr=8-24",
    image: "https://m.media-amazon.com/images/I/81sI95uzi5L._AC_SX679_.jpg",
    imageFit: "cover"
  },
  {
    id: "echo-spot",
    name: "Amazon Echo Spot",
    description: "Vous ouvrez les yeux, l'heure et la meteo sont deja affichees, votre musique demarre a la voix, vos rappels vous accompagnent toute la journee, et Alexa s'occupe du reste. Compact, elegant, avec un son de vraie qualite, il trouve naturellement sa place sur une table de nuit ou un bureau et devient utile des la premiere minute, sans reglages compliques. Un cadeau moderne, intelligent, qui impressionne sans jamais faire gadget.",
    category: "tech",
    price: 50,
    link: "https://www.amazon.fr/dp/B0C2RSJHS6?ref_=MARS_NAVSTRIPE_desktop_echo_echo_spot&th=1",
    image: "https://m.media-amazon.com/images/I/610vDPZkoEL._AC_SY300_SX300_QL70_ML2_.jpg",
    imageFit: "cover"
  }
];

const BUDGETS = {
  "5": { label: "5 EUR", min: 0, max: 5 },
  "10": { label: "10 EUR", min: 6, max: 10 },
  "25": { label: "25 EUR", min: 11, max: 25 },
  "50": { label: "50 EUR", min: 26, max: 50 }
};

const FAVORITES_KEY = "cadova_favorites_v2";

function loadFavorites() {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    const parsed = raw ? JSON.parse(raw) : [];
    return new Set(parsed);
  } catch {
    return new Set();
  }
}

function saveFavorites(set) {
  try {
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(Array.from(set)));
  } catch {
    // Storage can be blocked.
  }
}

const favorites = loadFavorites();
let renderFavoritesPage = null;

function filterByBudget(product, budgetKey) {
  if (budgetKey === "all") return true;
  const range = BUDGETS[budgetKey];
  if (!range) return true;
  return product.price >= range.min && product.price <= range.max;
}

function filterByType(product, typeKey) {
  if (typeKey === "all") return true;
  return product.category === typeKey;
}

function matchesQuery(product, query) {
  if (!query) return true;
  const q = query.toLowerCase();
  return (
    product.name.toLowerCase().includes(q) ||
    product.description.toLowerCase().includes(q) ||
    product.category.toLowerCase().includes(q)
  );
}

function createCard(product, options = {}) {
  const card = document.createElement("article");
  card.className = "gift-card";
  card.dataset.id = product.id;

  if (options.badge) {
    const badge = document.createElement("span");
    badge.className = "card-badge";
    badge.textContent = options.badge;
    card.appendChild(badge);
  }

  const media = document.createElement("div");
  media.className = "card-media";
  if (product.imageFit === "cover") {
    media.classList.add("card-media-cover");
  }
  if (product.image) {
    const img = document.createElement("img");
    img.src = product.image;
    img.alt = product.name;
    img.loading = "lazy";
    media.appendChild(img);
  }

  const body = document.createElement("div");
  body.className = "card-body";

  const title = document.createElement("h4");
  title.className = "card-title";
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.className = "card-desc";
  desc.textContent = product.description;

  const actions = document.createElement("div");
  actions.className = "card-actions";

  const cta = document.createElement("a");
  cta.className = "btn btn-primary";
  cta.textContent = "Voir le cadeau";
  cta.href = product.link || "#";
  cta.target = "_blank";
  cta.rel = "nofollow";

  const fav = document.createElement("button");
  fav.className = "fav";
  fav.type = "button";
  fav.innerHTML = "&#9829;";
  fav.dataset.id = product.id;
  fav.setAttribute("aria-label", "Ajouter aux favoris");
  fav.addEventListener("click", () => toggleFavorite(product.id, fav));

  actions.append(cta, fav);
  body.append(title, desc, actions);
  card.append(media, body);

  return card;
}

function renderCards(container, items, emptyMessage) {
  container.innerHTML = "";
  if (!items.length) {
    if (emptyMessage) {
      const msg = document.createElement("p");
      msg.className = "muted empty-state";
      msg.textContent = emptyMessage;
      container.appendChild(msg);
    }
    return;
  }
  items.forEach(item => container.appendChild(createCard(item)));
  updateFavoriteButtons();
}

function updateFavoriteButtons() {
  document.querySelectorAll(".fav").forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;
    btn.classList.toggle("active", favorites.has(id));
  });
}

function toggleFavorite(id, button) {
  if (favorites.has(id)) {
    favorites.delete(id);
  } else {
    favorites.add(id);
  }
  saveFavorites(favorites);
  updateFavoriteButtons();

  if (button) {
    button.classList.remove("pop");
    void button.offsetWidth;
    button.classList.add("pop");
  }

  if (navigator.vibrate) {
    navigator.vibrate(20);
  }

  if (renderFavoritesPage) {
    renderFavoritesPage(true);
  }
}

function setupHome() {
  const topPicks = document.getElementById("topPicks");
  const buttons = document.querySelectorAll(".budget-card");
  const section = document.getElementById("budgetResults");
  const list = document.getElementById("budgetList");
  const title = document.getElementById("budgetTitle");
  const subtitle = document.getElementById("budgetSubtitle");
  const allList = document.getElementById("allGiftsList");
  const allSection = document.getElementById("allGifts");
  const allMore = document.getElementById("allGiftsMore");
  const searchForm = document.getElementById("homeSearchForm");
  const searchInput = document.getElementById("homeSearch");

  if (topPicks) {
    topPicks.innerHTML = "";
    Object.keys(BUDGETS).forEach(key => {
      const range = BUDGETS[key];
      const pick = PRODUCTS.filter(item => filterByBudget(item, key)).sort((a, b) => b.price - a.price)[0];
      if (pick) {
        topPicks.appendChild(createCard(pick, { badge: range.label }));
      }
    });
    updateFavoriteButtons();
  }

  if (!buttons.length || !section || !list) return;

  const defaultTitle = "Idees pour ce budget";
  const defaultSubtitle = "4 cadeaux maximum.";

  function renderBudget(budgetKey) {
    const range = BUDGETS[budgetKey];
    const filtered = PRODUCTS.filter(item => filterByBudget(item, budgetKey));
    const slice = filtered.slice(0, 4);

    title.textContent = range ? `Idees pour ${range.label}` : "Idees pour ce budget";
    subtitle.textContent = slice.length ? "4 cadeaux maximum." : "Aucun cadeau pour ce budget pour le moment.";

    renderCards(list, slice, "");
    section.classList.add("is-visible");
  }

  buttons.forEach(btn => {
    btn.setAttribute("aria-pressed", "false");
    btn.addEventListener("click", () => {
      if (btn.classList.contains("active")) {
        buttons.forEach(b => {
          b.classList.remove("active");
          b.setAttribute("aria-pressed", "false");
        });
        list.innerHTML = "";
        title.textContent = defaultTitle;
        subtitle.textContent = defaultSubtitle;
        section.classList.remove("is-visible");
        return;
      }
      buttons.forEach(b => b.classList.remove("active"));
      buttons.forEach(b => b.setAttribute("aria-pressed", "false"));
      btn.classList.add("active");
      btn.setAttribute("aria-pressed", "true");
      renderBudget(btn.dataset.budget);
    });
  });

  if (allList && allSection && allMore) {
    let currentQuery = "";
    let showAll = false;

    function getSorted() {
      return PRODUCTS.filter(item => matchesQuery(item, currentQuery)).sort((a, b) => b.price - a.price);
    }

    function setToggleLabel() {
      allMore.textContent = showAll ? "Voir moins" : "Voir plus";
      allMore.setAttribute("aria-expanded", showAll ? "true" : "false");
    }

    function renderAll() {
      const filtered = getSorted();

      if (!filtered.length) {
        allList.innerHTML = "";
        const msg = document.createElement("p");
        msg.className = "muted empty-state";
        msg.textContent = "Aucun cadeau pour cette recherche.";
        allList.appendChild(msg);
        allMore.hidden = true;
        allSection.classList.add("is-visible");
        showAll = true;
        setToggleLabel();
        return;
      }

      allList.innerHTML = "";
      filtered.forEach(item => allList.appendChild(createCard(item)));
      updateFavoriteButtons();
      allSection.classList.add("is-visible");
      allMore.hidden = false;
      showAll = true;
      setToggleLabel();
    }

    function collapseAll() {
      showAll = false;
      allSection.classList.remove("is-visible");
      allList.innerHTML = "";
      allMore.hidden = false;
      setToggleLabel();
    }

    allMore.addEventListener("click", () => {
      if (showAll) {
        collapseAll();
        return;
      }
      renderAll();
    });

    if (searchForm && searchInput) {
      searchForm.addEventListener("submit", event => {
        event.preventDefault();
        currentQuery = searchInput.value.trim();
        renderAll();
      });

      searchInput.addEventListener("input", () => {
        currentQuery = searchInput.value.trim();
        if (!currentQuery && !allSection.classList.contains("is-visible")) {
          return;
        }
        renderAll();
      });
    }

    setToggleLabel();
  }
}

function setupExplore() {
  const list = document.getElementById("exploreList");
  const empty = document.getElementById("exploreEmpty");
  const more = document.getElementById("loadMore");
  const budgetSelect = document.getElementById("filterBudget");
  const typeSelect = document.getElementById("filterType");

  if (!list || !budgetSelect || !typeSelect || !more) return;

  const pageSize = 4;
  let showAll = false;

  function getFiltered() {
    return PRODUCTS.filter(product =>
      filterByBudget(product, budgetSelect.value) && filterByType(product, typeSelect.value)
    );
  }

  function renderList(reset) {
    if (reset) showAll = false;
    const filtered = getFiltered();
    const slice = showAll ? filtered : filtered.slice(0, pageSize);

    renderCards(list, slice, "");
    if (empty) empty.hidden = filtered.length > 0;
    more.hidden = filtered.length <= pageSize;
    more.textContent = showAll ? "Voir moins" : "Voir plus";
  }

  budgetSelect.addEventListener("change", () => renderList(true));
  typeSelect.addEventListener("change", () => renderList(true));
  more.addEventListener("click", () => {
    showAll = !showAll;
    renderList(false);
  });

  renderList(true);
}

function setupFavorites() {
  const list = document.getElementById("favoritesList");
  const empty = document.getElementById("favoritesEmpty");
  const more = document.getElementById("favoritesMore");
  const count = document.getElementById("favoritesCount");

  if (!list || !empty || !more || !count) return;

  const pageSize = 4;
  let showAll = false;

  function renderList(reset) {
    if (reset) showAll = false;
    const favItems = PRODUCTS.filter(item => favorites.has(item.id));
    const slice = showAll ? favItems : favItems.slice(0, pageSize);

    renderCards(list, slice, "");
    empty.hidden = favItems.length > 0;
    more.hidden = favItems.length <= pageSize;
    more.textContent = showAll ? "Voir moins" : "Voir plus";
    count.textContent = favItems.length.toString();
  }

  more.addEventListener("click", () => {
    showAll = !showAll;
    renderList(false);
  });

  renderFavoritesPage = renderList;
  renderList(true);
}

document.addEventListener("DOMContentLoaded", () => {
  if (document.body.classList.contains("page-home")) {
    setupHome();
  }

  if (document.body.classList.contains("page-explore")) {
    setupExplore();
  }

  if (document.body.classList.contains("page-favorites")) {
    setupFavorites();
  }

  updateFavoriteButtons();
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("service-worker.js").catch(() => {});
  });
}
