module.exports = ({
    name: "dox",
    aliases: ["leak"],
    code: `
    $title[Success! $username[$mentioned[1]]'s dox file:]
    $description[Their name is $randomText[Liam;Noah;Olivia;Emma;Oliver;Charlotte;Amelia;Ava;Elijah;Sophia;James;William;Benjamin;Lucas;Henry;Isabella;Mia;Logan;Levi;Theodore;Jack;Evelyn;Alexander;Jackson;Mateo;Mason;Daniel;Michael;Sebastian;Ethan;Owen;Avery;Harper;Samuel;Jacob;Asher;Aiden;Luna;John;Joseph;Wyatt;Camila;David;Carter;Leo;Ezra;Hudson;Luke;Julian;Grayson;Gianna;Matthew;Dylan;Gabriel;Elizabeth;Eleanor;Jayden;Ella;Luca;Abigail;Sofia;Isaac;Lincoln;Anthony;Thomas;Maverick;Riley;Scarlett;Emily;Aria;Penelope;Chloe;Elias;Layla;Mila;Nora;Parker;Josiah;Hazel;Madison;Charles;Caleb;Ellie;Christopher;Ezekiel;Nova;Cameron;Miles;Jaxon;Isaiah;Lily;Andrew;Isla;Grace;Violet;Aurora;Joshua;Nathan;Nolan;Ryan;River;Angel;Adrian;Willow;Zoey;Santiago;Kai] $randomText[Eli;Rowan;Emilia;Aaron;Cooper;Stella;Jordan;Zoe;Victoria;Waylon;Easton;Christian;Landon;Sawyer;Roman;Hannah;Addison;Colton;Axel;Hunter;Brooks;Lucy;Leah;Eliana;Jonathan;Robert;Ivy;Everly;Jameson;Wesley;Everett;Lillian;Ian;Paisley;Elena;Naomi;Greyson;Jeremiah;Charlie;Leonardo;Bennett;Maya;Natalie;Jose;Quinn;Carson;Austin;Kinsley;Silas;Beau;Micah;Nicholas;Weston;Connor;Dominic;Delilah;Xavier;Claire;Jace;Jaxson;Audrey;Declan;Ryder;Emmett;Kayden;Aubrey;Adam;Aaliyah;Ruby;Brooklyn;Genesis;Kennedy;Gael;Alice;Skylar;Autumn;Savannah;Leilani;Valentina;August;Madelyn;Kingston;Josephine;Blake;Bella;Peyton;Sophie;Hayden;Evan;Damian;Emery;Luka;Hailey;Sadie;Natalia;Vincent;Caroline;Myles;Harrison;Allison;Gabriella;Bryson;Anna;Serenity;Nevaeh;Amir;Giovanni]
    Their IP address is $random[1;255].$random[1;254].$random[2;255].$random[2;254]
    Their e-mail address is $randomText[Dabney;Ellice;Banksy;Berkely;Lisha;Laurell;Darrah;Harly;Karmel;Lemmie;Lorren;Korin;Terrie;Ricci;Bevan;Dorsey;Collis;Alvy;Ardell;Bari;Coburn;Doran;Garnett;Romney;Germain;Karel;Karlin;Karman;Lanny;Talbert;Wendall;Royall;Gilly;Hawley;Torry;Zuma;Kerrie;Carmin;Clemmie;Delaine;Evon;Odile;Joli;Felice;Mical;Patrice;Patty;Randie;Roslin;Pascale;Baptiste;Cosme;Pauly;Quanah;Joby;Laverne;Loran;Kristan;Romaine;Vernell;Dory;Stephane;Talbot;Chesleigh;Marlea;Maxie;Sorel;Daryll;Artie;Denys;Farron;Ivon;Paulie;Tama;Marvell;Robbin;Chandra;Toney;Yancey;Clemence].$randomText[Leslee;Riki;Rudie;Lundy;Torrie;Shawnee;Berry;Raynell;Germaine;Gerry;Orel;Terrill;Corley;Selby;Linnie;Laren;Signy;Lyndell;Tobey;Wally;Allyn;Frannie;Jaimie;Julee;Juli;Martie;Ola;Wallis;Jonnie;Linzy;Shanon;Shelley;Arda;Carroll;Crockett;Donell;Fredi;Corry;Vinnie;Sherrod;Darcey;Marti;Rennie;Nuru;Ennis;Gardner;Jonni;Zuni;Lorin;Caron;Torey;Jerri;Joycelynn;Perrie;Chesley;Rama;Rawley;Bradie;Chaney;Shelbie;Fontaine;Jacki;Tandy;Renny;Arliss;Garland;Merril;Lindon;Caroll;Darbey;Gaylen;Avrill;Corliss;Briney;Wallie;Gillan;Jemmy;Darbie;DarcellLannie;Larue]@$randomText[gmail.com;hotmail.com;outlook.com;aol.com;icloud.com]
    Their phone number is +44 7$random[111;999] $random[111111;999999]
    And finally, they live at $random[1;140] $randomText[High Street;Station Road;Main Street;Park Road;Church Road;Church Street;London Road;Victoria Road;Green Lane;Manor Road;Church Lane;Park Avenue;The Avenue;The Crescent;Queens Road;New Road;Grange Road;Kings Road;Kingsway;Windsor Road;Highfield Road;Mill Lane;Alexander Road;York Road;St. John’s Road;Main Road;Broadway;King Street;The Green;Springfield Road;George Street;Park Lane;Victoria Street;Albert Road;Queensway;New Street;Queen Street;West Street;North Street;Manchester Road;The Grove;Richmond Road;Grove Road;South Street;School Lane;The Drive;North Road;Stanley Road;Chester Road;Mill Road] {$randomText[Q;W;E;R;T;Y;U;I;O;P;A;S;D;F;G;H;J;K;L;Z;X;C;V;B;N;M;]$randomText[W;Q;E;R;T;Y;U;I;O;P;A;S;D;F;G;H;J;K;L;Z;X;C;V;B;N;M]$random[1;9]$random[0;9] $randomText[Q;W;E;R;T;Y;U;O;I;A;P;S;D;F;G;H;J;K;L;Z;X;C;V;B;M;N]$randomText[W;Q;R;E;T;Y;U;I;O;P;A;S;D;F;G;H;J;K;L;Z;X;C;V;B;N;M]$random[2;9]}]
    `
})