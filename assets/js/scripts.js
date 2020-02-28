// Display Information Modal
$(document).ready(function () {
    $("#myCenterModal").modal('show');
    var latlng = new google.maps.LatLng(38.504669, 9.510865);
    var options = {
        zoom: 2,
        center: latlng,
        gestureHandling: 'cooperative',
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $('#countries').change(function () {
        var op = document.getElementById("countries").getElementsByTagName("option");
        op[0].disabled = true;

        var coordinate = $('select option:selected').val().split(',');
        var selectedText = $('select option:selected').html();
        var latlng = new google.maps.LatLng(coordinate[0], coordinate[1]);
        var options = {
            zoom: parseInt(coordinate[2]),
            center: latlng,
            gestureHandling: 'cooperative',
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById('map'), options);

        var markers = [];
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(coordinate[0], coordinate[1]),
            title: selectedText,
            map: map
        });
        markers.push(marker);

        var info = [
            // [“Afghanistan”, “There is no god but God; Muhammad is the messenger of God.”, “Kabul”, “Pashto, Dari, Pashto”, “38,928,346”, “652,860”, “Afghani(AFN) ”, “UTC+4:30 Solar Calendar”, “assets/img/afghanistan.png”],
            // [“Albania”, “You Albania, give me honor, give me the name Albanian”, “Tirana”, “Albanian”, “2, 877, 797”, “27, 400”, “Lek(ALL) ”, “UTC + 1(CET) ”, “assets / img / albania.png”],
            // [“Algeria”, “By the people and for the people”, “Algiers”, “Arabic, Berber”, “43, 851, 044”, “2, 381, 740”, “Dinar(DZD) ”, “UTC + 1(CET) ”, “assets / img / algeria.png”],
            // [“Andorra”, “Strength united is stronger”, “Andorra la Vella”, “Catalan”, “77, 265”, “470”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / andorra.png”],
            // [“Angola”, “Strength united is stronger”, “Luanda”, “Portuguese”, “32, 866, 272”, “1, 246, 700”, “Kwanza(AOA) ”, “UTC + 1(WAT) ”, “assets / img / angola.png”],
            // [“Antigua and Barbuda”, “Each endeavouring, all achieving”, “St.Johns”, “English”, “97,929”, “440”, “East Caribbean dollar (XCD)”, “UTC-4 (AST)”, “assets/img/antigua-and-barbuda.png”],
            // [“Argentina”, “In union and liberty”, “Buenos Aires”, “None(National Language: Spanish) ”, “45, 195, 774”, “2, 736, 690”, “Peso(ARS) ”, “UTC−3(ART) ”, “assets / img / argentina.png”],
            // [“Armenia”, “One nation, one culture”, “Yerevan”, “Armenian”, “2, 963, 243”, “28, 470”, “Dram(AMD) ”, “UTC + 4(AMT) ”, “assets / img / armenia.png”],
            // [“Australia”, “No official motto”, “Canberra”, “(National Language: English) ”, “25, 499, 884”, “7, 682, 300”, “Australian dollar(AUD) ”, “UTC + 8; +9.5; +10(Various) ”, “assets / img / australia.png”],
            // [“Austria”, “No official motto”, “Vienna”, “German”, “9, 006, 398”, “82, 409”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / austria.png”],
            // [“Azerbaijan”, “The land of fire(Unofficial) ”, “Baku”, “Azerbaijani”, “10, 139, 177”, “82, 658”, “Manat(AZN) ”, “AZT(UTC + 04) ”, “assets / img / azerbaijan.png”],
            // [“Bahamas”, “Forward, Upward, Onward, Together”, “Nassau”, “English”, “393, 244”, “10, 010”, “Bahamian dollar(BSD) ”, “UTC−5(EST) ”, “assets / img / bahamas.png”],
            // [“Bahrain”, “No official motto”, “Manama”, “Arabic”, “1, 701, 575”, “760”, “Bahraini dinar(BHD) ”, “UTC + 3(AST) ”, “assets / img / bahrain.png”],
            // [“Bangladesh”, “No official motto”, “Dhaka”, “Bengali”, “164, 689, 383”, “130, 170”, “Bangladeshi taka(BDT) ”, “UTC + 6(BST) ”, “assets / img / bangladesh.png”],
            // [“Barbados”, “Pride and industry”, “Bridgetown”, “English”, “287, 375”, “430”, “Barbadian dollar(BBD) ”, “UTC−4(AST) ”, “assets / img / barbados.png”],
            // [“Belarus”, “No official motto”, “Minsk”, “Belarusian, Russian”, “9, 449, 323”, “202, 910”, “Belarusian ruble(BYN) ”, “UTC + 3(FET) ”, “assets / img / belarus.png”],
            // [“Belgium”, “Unity gives strength”, “Brussels”, “Dutch, French, German”, “11, 589, 623”, “30, 280”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / belgium.png”],
            // [“Belize”, “Under the shade I flourish”, “Belmopan”, “English”, “397, 628”, “22, 810”, “Belize dollar(BZD) ”, “UTC−6(CST) ”, “assets / img / belize.png”],
            // [“Benin”, “Fellowship, Justice, Labour”, “Porto - Novo”, “French”, “12, 123, 200”, “112, 760”, “West African CFA franc(XOF) ”, “UTC + 1(WAT) ”, “assets / img / benin.png”],
            // [“Bhutan”, “No official motto”, “Thimphu”, “Dzongkha”, “771, 608”, “38, 117”, “Ngultrum(BTN) ”, “UTC + 06(BTT) ”, “assets / img / bhutan.png”],
            // [“Bolivia”, “Unity is strength”, “Sucre, La Paz”, “Spanish and 36 indigenous languages”, “11, 673, 021”, “1, 083, 300”, “Boliviano(BOB) ”, “UTC−4(BOT) ”, “assets / img / bolivia.png”],
            // [“Bosnia and Herzegovina”, “No official motto”, “Sarajevo”, “Bosnian, Serbian, Croatian”, “3, 280, 819”, “51, 000”, “Convertible mark(BAM) ”, “UTC + 01(CET) ”, “assets / img / bosnia - and - herzegovina.png”],
            // [“Botswana”, “Rain”, “Gaborone”, “English, Setswana”, “2, 351, 627”, “566, 730”, “Botswana pula(BWP) ”, “UTC + 2(Central Africa Time) ”, “assets / img / botswana.png”],
            // [“Brazil”, “Order and progress”, “Brasilia”, “Portuguese”, “212, 559, 417”, “8, 358, 140”, “Real(BRL) ”, “UTC−2 to −5(BRT) ”, “assets / img / brazil.png”],
            // [“Brunei”, “Always in service with Gods guidance”, “Bandar Seri Begawan”, “Malay”, “437,479”, “5,270”, “Brunei dollar (BND)”, “UTC+8 (Brunei Darussalam Time)”, “assets/img/brunei.png”],
            // [“Bulgaria”, “Unity makes strength”, “Sofia”, “Bulgarian”, “6, 948, 445”, “108, 560”, “Lev(BGN) ”, “UTC + 2(EET) ”, “assets / img / bulgaria.png”],
            // [“Burkina Faso”, “Unity, progress, justice”, “Ouagadougou”, “French”, “20, 903, 273”, “273, 600”, “West African CFA franc(XOF) ”, “UTC(GMT) ”, “assets / img / burkina - faso.png”],
            // [“Burundi”, “Unity, Work, Progress”, “Bujumbura”, “Kirundi”, “11, 890, 784”, “25, 680”, “Burundian franc(FBu)(BIF) ”, “UTC + 2(CAT) ”, “assets / img / burundi.png”],
            // [“Cabo Verde”, “Unity, Work, Progress”, “Praia”, “Portuguese”, “555, 987”, “4, 030”, “Cape Verdean escudo(CVE) ”, “UTC - 1(CVT) ”, “assets / img / cabo - verde.png”],
            // [“Cambodia”, “Nation religion King”, “Phnom Penh”, “Khmer”, “16, 718, 965”, “176, 520”, “Riel(KHR) ”, “UTC + 7(ICT) ”, “assets / img / cambodia.png”],
            // [“Cameroon”, “Peace, Work, Fatherland”, “Yaoundé”, “English, French”, “26, 545, 863”, “472, 710”, “Central African CFA franc(XAF) ”, “UTC + 1(WAT) ”, “assets / img / cameroon.png”],
            // [“Canada”, “From sea to sea”, “Ottawa”, “English, French”, “37, 742, 154”, “9, 093, 510”, “Canadian dollar(CAD) ”, “UTC−3.5 to −8”, “assets / img / canada.png”],
            // [“Central African Republic”, “Unity, Dignity, Work”, “Bangui”, “French, Sango”, “4, 829, 767”, “622, 980”, “Central African CFA franc(XAF) ”, “UTC + 1(WAT) ”, “assets / img / central - african - republic.png”],
            // [“Chad”, “Unity, Work, Progress”, “NDjamena”, “Arabic, French”, “16,425,864”, “1,259,200”, “Central African CFA franc (XAF)”, “UTC+1 (WAT)”, “assets/img/chad.png”],
            // [“Chile”, “Through reason or by force”, “Santiago”, “Spanish”, “19, 116, 201”, “743, 532”, “Peso(CLP) ”, “UTC−3 and −5(CLT and EAST) ”, “assets / img / chile.png”],
            // [“China”, “Serve the people”, “Beijing”, “Standard Chinese”, “1, 439, 323, 776”, “9, 388, 211”, “Renminbi(CNY) ”, “UTC + 8(China Standard Time) ”, “assets / img / china.png”],
            // [“Colombia”, “Freedom and order”, “Bogotá”, “Spanish, English”, “50, 882, 891”, “1, 109, 500”, “Peso(COP) ”, “UTC−5(COT) ”, “assets / img / colombia.png”],
            // [“Comoros”, “Unity, Solidarity, Development”, “Moroni”, “Comorian, Arabic, French”, “869, 601”, “1, 861”, “Comorian franc(KMF) ”, “UTC + 3(EAT) ”, “assets / img / comoros.png”],
            // [“Congo”, “Unity, Work, Progress”, “Brazzaville”, “French”, “5, 518, 087”, “341, 500”, “Central African CFA franc(XAF) ”, “UTC + 1(WAT) ”, “assets / img / congo.png”],
            // [“Costa Rica”, “No official motto”, “San José”, “Spanish”, “5, 094, 118”, “51, 060”, “Costa Rican colón(CRC) ”, “UTC−6(CST) ”, “assets / img / costa - rica.png”],
            // [“Côte dIvoire”, “Unity, Discipline, Labor”, “Yamoussoukro, Abidjan”, “French”, “26,378,274”, “318,000”, “West African CFA franc (XOF)”, “UTC (GMT)”, “assets/img/cote-d-ivoire.png”],
            // [“Croatia”, “No official motto”, “Zagreb”, “Croatian”, “4, 105, 267”, “55, 960”, “Kuna(HRK) ”, “UTC + 1(CET) ”, “assets / img / croatia.png”],
            // [“Cuba”, “Fatherland or death”, “Havana”, “Spanish”, “11, 326, 616”, “106, 440”, “Peso(CUP), Convertible peso(CUC) ”, “UTC−5(CST) ”, “assets / img / cuba.png”],
            // [“Cyprus”, “No official motto”, “Nicosia”, “Greek, Turkish”, “1, 207, 359”, “9, 240”, “Euro(EUR) ”, “UTC + 2(EET) ”, “assets / img / cyprus.png”],
            // [“Czech Republic(Czechia) ”, “Truth prevails”, “Prague”, “Czech”, “10, 708, 981”, “77, 240”, “Czech koruna(CZK) ”, “UTC + 1(CET) ”, “assets / img / czech - republic.png”],
            // [“Denmark”, “God, King and Fatherland”, “Copenhagen”, “Danish”, “5, 792, 202”, “42, 430”, “Danish krone(DKK) ”, “UTC + 1(CET) ”, “assets / img / denmark.png”],
            // [“Djibouti”, “Unity, Equality, Peace”, “Djibouti”, “Arabic, French”, “988, 000”, “23, 180”, “Djiboutian franc(DJF) ”, “UTC + 3(EAT) ”, “assets / img / djibouti.png”],
            // [“Dominica”, “After God, the earth”, “Roseau”, “English”, “71, 986”, “750”, “East Caribbean dollar(XCD) ”, “UTC–4(Eastern Caribbean) ”, “assets / img / dominica.png”],
            // [“Dominican Republic”, “God, Fatherland, Liberty”, “Santo Domingo”, “Spanish”, “10, 847, 910”, “48, 320”, “Peso(DOP) ”, “UTC - 4: 00(Standard Time Caribbean) ”, “assets / img / dominican - republic.png”],
            // [“DR Congo”, “Justice, Peace, Work”, “Kinshasa”, “French”, “89, 561, 403”, “2, 267, 050”, “Congolese franc(CDF) ”, “UTC + 1 to + 2(WAT and CAT) ”, “assets / img / dr - congo.png”],
            // [“Ecuador”, “God, Homeland, and Freedom”, “Quito”, “Spanish”, “17, 643, 054”, “248, 360”, “United States dollar(USD) ”, “UTC−5 / −6(ECT / GALT) ”, “assets / img / ecuador.png”],
            // [“Egypt”, “No official motto”, “Cairo”, “Arabic”, “102, 334, 404”, “995, 450”, “Egyptian pound(EGP) ”, “UTC + 2(EET) ”, “assets / img / egypt.png”],
            // [“El Salvador”, “God, Union, Liberty”, “San Salvador”, “Spanish”, “6, 486, 205”, “20, 720”, “United States dollara(USD) ”, “UTC−6(CST) ”, “assets / img / el - salvador.png”],
            // [“Equatorial Guinea”, “Unity, Peace, Justice”, “Malabo(current), Ciudad de la Paz(under construction) ”, “Spanish, French, Portuguese”, “1, 402, 985”, “28, 050”, “Central African CFA franc(XAF) ”, “UTC + 1(WAT) ”, “assets / img / equatorial - guinea.png”],
            // [“Eritrea”, “State of Eritrea; also in English”, “Asmara”, “None”, “3, 546, 421”, “101, 000”, “Nakfa(ERN) ”, “UTC + 3(EAT) ”, “assets / img / eritrea.png”],
            // [“Estonia”, “No official motto”, “Tallinn”, “Estonian”, “1, 326, 535”, “42, 390”, “Euro(EUR) ”, “UTC + 2(EET) ”, “assets / img / estonia.png”],
            // [“Eswatini”, “We are a fortress / We are a mystery / We hide ourselves away / We are powerful ones”, “Mhahane, Lobamba”, “Swazi, English”, “1, 160, 164”, “17, 200”, “Swazi lilangeni(SZL), South African rand(ZAR) ”, “UTC + 2(SAST) ”, “assets / img / eswatini.png”],
            // [“Ethiopia”, “No official motto”, “Addis Ababa(Finfinne) ”, “Amharic”, “114, 963, 588”, “1, 000, 000”, “Birr(ETB) ”, “UTC + 3(EAT) ”, “assets / img / ethiopia.png”],
            // [“Fiji”, “Fear God and honour the Queen”, “Suva”, “iTaukei, English, Fiji Hindi”, “896, 445”, “18, 270”, “Fijian dollar(FJD) ”, “UTC + 12(FJT) ”, “assets / img / fiji.png”],
            // [“Finland”, “No official motto”, “Helsinki”, “Finnish, Swedish”, “5, 540, 720”, “303, 890”, “Euro(EUR) ”, “UTC + 2(EET) ”, “assets / img / finland.png”],
            // [“France”, “Liberty, Equality, Fraternity”, “Paris”, “French”, “65, 273, 511”, “547, 557”, “Euro(EUR), CFP franc(XPF) ”, “UTC + 1(Central European Time) ”, “assets / img / france.png”],
            // [“Gabon”, “Union, Travail, Justice”, “Libreville”, “French”, “2, 225, 734”, “257, 670”, “Central African CFA franc(XAF) ”, “UTC + 1(WAT) ”, “assets / img / gabon.png”],
            // [“Gambia”, “Progress, Peace, Prosperity”, “Banjul”, “English”, “2, 416, 668”, “10, 120”, “Dalasi(GMD) ”, “UTC(GMT) ”, “assets / img / gambia.png”],
            // [“Georgia”, “Strength is in unity”, “Tbilisi”, “Georgian(nationwide), Abkhazian(Abkhazian AR) ”, “3, 989, 167”, “69, 490”, “Georgian lari(GEL) ”, “UTC + 4(GET) ”, “assets / img / georgia.png”],
            // [“Germany”, “No official motto”, “Berlin”, “German”, “83, 783, 942”, “348, 560”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / germany.png”],
            // [“Ghana”, “Freedom and justice”, “Accra”, “English”, “31, 072, 940”, “227, 540”, “Ghanaian cedi(GHS) ”, “UTC(GMT) ”, “assets / img / ghana.png”],
            // [“Greece”, “Freedom or death”, “Athens”, “Greek”, “10, 423, 054”, “128, 900”, “Euro(EUR) ”, “UTC + 02: 00(Eastern European Time) ”, “assets / img / greece.png”],
            // [“Grenada”, “Ever conscious of God we aspire, and advance as one people”, “St.Georges”, “English”, “112,523”, “340”, “East Caribbean dollar (XCD)”, “UTC−4”, “assets/img/grenada.png”],
            // [“Guatemala”, “Grow free and fertile”, “Guatemala City”, “Spanish”, “17, 915, 568”, “107, 160”, “Quetzal(GTQ) ”, “UTC−6(CST) ”, “assets / img / guatemala.png”],
            // [“Guinea”, “Work, Justice, Solidarity”, “Conakry”, “French”, “13, 132, 795”, “245, 720”, “Guinean franc(GNF) ”, “UTC(GMT) ”, “assets / img / guinea.png”],
            // [“Guinea - Bissau”, “Unity, Struggle, Progress”, “Bissau”, “Portuguese”, “1, 968, 001”, “28, 120”, “West African CFA franc(XOF) ”, “UTC(GMT) ”, “assets / img / guinea - bissau.png”],
            // [“Guyana”, “One people, one nation, one destiny”, “Georgetown”, “English”, “786, 552”, “196, 850”, “Guyanese dollar(GYD) ”, “UTC - 4(AST) ”, “assets / img / guyana.png”],
            // [“Haiti”, “Liberty, Equality, Fraternity”, “Port - au - Prince”, “French, Haitian Creole”, “11, 402, 528”, “27, 560”, “Haitian gourde(HTG) ”, “UTC−5(EST) ”, “assets / img / haiti.png”],
            // [“Holy See”, “No official motto”, “Vatican City(de facto) ”, “Latin”, “801”, “0”, “Euro(EUR) ”, “GMT + 1”, “assets / img / holy - see.png”],
            // [“Honduras”, “Free, Sovereign and Independent”, “Tegucigalpa”, “Spanish”, “9, 904, 607”, “111, 890”, “Lempira(HNL) ”, “UTC−6(CST) ”, “assets / img / honduras.png”],
            // [“Hungary”, “With the help of God for Homeland and Freedom”, “Budapest”, “Hungarian”, “9, 660, 351”, “90, 530”, “Forint(HUF) ”, “UTC + 1(CET) ”, “assets / img / hungary.png”],
            // [“India”, “Truth alone triumphs”, “New Delhi”, “Hindi, English”, “1, 380, 004, 385”, “2, 973, 190”, “Indian rupee(INR) ”, “UTC + 05: 30(IST) ”, “assets / img / india.png”],
            // [“Indonesia”, “Unity in diversity”, “Jakarta”, “Indonesian”, “273, 523, 615”, “1, 811, 570”, “Indonesian rupiah(IDR) ”, “UTC + 7 to + 9(Various) ”, “assets / img / indonesia.png”],
            // [“Iran”, “Independence, freedom, (the) Islamic Republic”, “Tehran”, “Persian”, “83, 992, 949”, “1, 628, 550”, “Rial(IRR) ”, “UTC + 3: 30(IRST) ”, “assets / img / iran.png”],
            // [“Iraq”, “God is the Greatest”, “Baghdad”, “Arabic, Kurdish”, “40, 222, 493”, “434, 320”, “Iraqi dinar(IQD) ”, “UTC + 3(AST) ”, “assets / img / iraq.png”],
            // [“Ireland”, “No official motto”, “Dublin”, “English, Irish”, “4, 937, 786”, “68, 890”, “Euro(EUR) ”, “Greenwich Mean Time(UTC) ”, “assets / img / ireland.png”],
            // [“Israel”, “No official motto”, “Jerusalem”, “Hebrew”, “8, 655, 535”, “21, 640”, “New shekel(ILS) ”, “UTC + 2(IST) ”, “assets / img / israel.png”],
            // [“Italy”, “No official motto”, “Rome”, “Italian”, “60, 461, 826”, “294, 140”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / italy.png”],
            // [“Jamaica”, “Out of many, one people”, “Kingston”, “English”, “2, 961, 167”, “10, 830”, “Jamaican dollar(JMD) ”, “UTC - 5”, “assets / img / jamaica.png”],
            // [“Japan”, “No official motto”, “Tokyo”, “(National Language: Japanese) ”, “126, 476, 461”, “364, 555”, “Japanese yen(JPY) ”, “UTC + 09: 00(JST) ”, “assets / img / japan.png”],
            // [“Jordan”, “God, Homeland, King”, “Amman”, “Arabic”, “10, 203, 134”, “88, 780”, “Jordanian dinar(JOD) ”, “UTC + 2(EET) ”, “assets / img / jordan.png”],
            // [“Kazakhstan”, “No official motto”, “Nur - Sultan”, “Kazakh(official state language), Russian(co - official) ”, “18, 776, 707”, “2, 699, 700”, “Tenge(KZT) ”, “UTC + 5 / +6(West / East) ”, “assets / img / kazakhstan.png”],
            // [“Kenya”, “All pull together”, “Nairobi”, “English, Swahili”, “53, 771, 296”, “569, 140”, “Kenyan shilling(KES) ”, “UTC + 3(EAT) ”, “assets / img / kenya.png”],
            // [“Kiribati”, “Health, Peace and Prosperity”, “Tarawa”, “English, Gilbertese”, “119, 449”, “810”, “Kiribati dollar, Australian dollar(AUD) ”, “UTC + 12, +13, +14”, “assets / img / kiribati.png”],
            // [“Kuwait”, “No official motto”, “Kuwait City”, “Arabic”, “4, 270, 571”, “17, 820”, “Kuwaiti dinar(KWD) ”, “UTC + 3(AST) ”, “assets / img / kuwait.png”],
            // [“Kyrgyzstan”, “No official motto”, “Bishkek”, “Kyrgyz(official state language), Russian(co - official) ”, “6, 524, 195”, “191, 800”, “Som(KGS) ”, “UTC + 6(KGT) ”, “assets / img / kyrgyzstan.png”],
            // [“Laos”, “Peace, Independence, Democracy, Unity and Prosperity”, “Vientiane”, “Lao”, “7, 275, 560”, “230, 800”, “Kip(LAK) ”, “UTC + 7(ICT) ”, “assets / img / laos.png”],
            // [“Latvia”, “For Fatherland and Freedom”, “Riga”, “Latvian”, “1, 886, 198”, “62, 200”, “Euro(EUR) ”, “UTC + 2(EET) ”, “assets / img / latvia.png”],
            // [“Lebanon”, “We are all for the Country, the Sublime and the Flag”, “Beirut”, “Arabic”, “6, 825, 445”, “10, 230”, “Lebanese pound(LBP) ”, “UTC + 2(EET) ”, “assets / img / lebanon.png”],
            // [“Lesotho”, “Peace, Rain, Prosperity”, “Maseru”, “Sesotho, English”, “2, 142, 249”, “30, 360”, “Lesotho loti(LSL), South African rand(ZAR) ”, “UTC + 2(South African Standard Time) ”, “assets / img / lesotho.png”],
            // [“Liberia”, “The love of liberty brought us here”, “Monrovia”, “English”, “5, 057, 681”, “96, 320”, “Liberian dollar(LRD) ”, “UTC(GMT) ”, “assets / img / liberia.png”],
            // [“Libya”, “Freedom, Socialism, Unity”, “Tripoli”, “Arabic”, “6, 871, 292”, “1, 759, 540”, “Libyan dinar(LYD) ”, “UTC + 2(EET) ”, “assets / img / libya.png”],
            // [“Liechtenstein”, “For God, Prince and Fatherland”, “Vaduz”, “German”, “38, 128”, “160”, “Swiss franc(CHF) ”, “UTC + 01: 00(CET) ”, “assets / img / liechtenstein.png”],
            // [“Lithuania”, “Freedom, Unity, Prosperity”, “Vilnius”, “Lithuanian”, “2, 722, 289”, “62, 674”, “Euro(EUR) ”, “UTC + 2(EET) ”, “assets / img / lithuania.png”],
            // [“Luxembourg”, “We wish to remain what we are”, “Luxembourg City”, “Luxembourgish, French, German”, “625, 978”, “2, 590”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / luxembourg.png”],
            // [“Madagascar”, “Love, Ancestral - land, Progress”, “Antananarivo”, “Malagasy, French”, “27, 691, 018”, “581, 795”, “Malagasy ariary(MGA) ”, “UTC + 3(EAT) ”, “assets / img / madagascar.png”],
            // [“Malawi”, “Unity and Freedom”, “Lilongwe”, “English, Chichewa”, “19, 129, 952”, “94, 280”, “Kwacha(MWK) ”, “UTC + 2(CAT) ”, “assets / img / malawi.png”],
            // [“Malaysia”, “Unity is Strength”, “Kuala Lumpur, Putrajaya(administrative) ”, “Malay”, “32, 365, 999”, “328, 550”, “Ringgit(MYR) ”, “UTC + 8(MST) ”, “assets / img / malaysia.png”],
            // [“Maldives”, “State of the Mahal Dibiyat”, “Malé”, “Dhivehi”, “540, 544”, “300”, “Maldivian rufiyaa(MVR) ”, “UTC + 5(Maldives Time) ”, “assets / img / maldives.png”],
            // [“Mali”, “One people, one goal, one faith”, “Bamako”, “French”, “20, 250, 833”, “1, 220, 190”, “West African CFA franc(XOF) ”, “UTC(GMT) ”, “assets / img / mali.png”],
            // [“Malta”, “Strength and consistency”, “Valletta”, “Maltese, English”, “441, 543”, “320”, “Euro(EUR) ”, “UTC + 1(Central European Time) ”, “assets / img / malta.png”],
            // [“Marshall Islands”, “Accomplishment(Achievement) through Joint Effort”, “Majuro”, “English, Marshallese”, “59, 190”, “180”, “United States dollar(USD) ”, “UTC + 12(MHT) ”, “assets / img / marshall - islands.png”],
            // [“Mauritania”, “Honor, Fraternity, Justice”, “Nouakchott”, “Arabic”, “4, 649, 658”, “1, 030, 700”, “Ouguiya(MRU) ”, “UTC(GMT) ”, “assets / img / mauritania.png”],
            // [“Mauritius”, “Star and key of the Indian Ocean”, “Port Louis”, “None(de jure), English(de facto), French(de facto) ”, “1, 271, 768”, “2, 030”, “Mauritian rupee(MUR) ”, “UTC + 4(MUT) ”, “assets / img / mauritius.png”],
            // [“Mexico”, “The Homeland is First”, “Mexico City”, “None at federal level”, “128, 932, 753”, “1, 943, 950”, “Peso(MXN) ”, “UTC−8 to −5”, “assets / img / mexico.png”],
            // [“Micronesia”, “Peace, Unity, Liberty”, “Palikir”, “English”, “115, 023”, “700”, “United States dollar(USD) ”, “GMT + 11”, “assets / img / micronesia.png”],
            // [“Moldova”, “Our Language is a Treasure”, “Chișinău”, “Romanian”, “4, 033, 963”, “32, 850”, “Leu(MDL) ”, “UTC + 2(EET) ”, “assets / img / moldova.png”],
            // [“Monaco”, “With Gods help”, “Monaco-Ville”, “French”, “39,242”, “1”, “Euro (EUR)”, “UTC+1 (CET)”, “assets/img/monaco.png”],
            // [“Mongolia”, “No official motto”, “Ulaanbaatar”, “Mongolian”, “3, 278, 290”, “1, 553, 560”, “Tögrög(MNT) ”, “UTC + 7 / +8”, “assets / img / mongolia.png”],
            // [“Montenegro”, “No official motto”, “Podgorica, “Montenegrin(national), Serbian, Bosnian, Albanian, Croatian(in official use) ”, “628, 066”, “13, 450”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / montenegro.png”],
            // [“Morocco”, “God, the Country, the King”, “Rabat”, “Arabic, Berber”, “36, 910, 560”, “446, 300”, “Moroccan dirham(MAD) ”, “UTC + 1”, “assets / img / morocco.png”],
            // [“Mozambique”, “Republic of Mozambique”, “Maputo”, “Portuguese”, “31, 255, 435”, “786, 380”, “Mozambican metical(MZN) ”, “UTC + 2(CAT) ”, “assets / img / mozambique.png”],
            // [“Myanmar”, “No official motto”, “Naypyidaw(Nay Pyi Taw) ”, “Burmese”, “54, 409, 800”, “653, 290”, “Kyat(MMK) ”, “UTC + 06: 30(MMT) ”, “assets / img / myanmar.png”],
            // [“Namibia”, “Unity, Liberty, Justice”, “Windhoek”, “English”, “2, 540, 905”, “823, 290”, “Namibian dollar(NAD), South African rand(ZAR) ”, “UTC + 2(CAST) ”, “assets / img / namibia.png”],
            // [“Nauru”, “Gods will first”, “None”, “Nauruan, English”, “10,824”, “20”, “Australian dollar (AUD)”, “UTC+12”, “assets/img/nauru.png”],
            // [“Nepal”, “Mother and motherland are greater than heaven”, “Kathmandu”, “Nepali”, “29, 136, 808”, “143, 350”, “Nepalese rupee Rs(NPR) ”, “UTC + 05: 45(Nepal Standard Time) ”, “assets / img / nepal.png”],
            // [“Netherlands”, “I will maintain”, “Amsterdam”, “Dutch”, “17, 134, 872”, “33, 720”, “Euro(EUR); United States dollar(USD) ”, “UTC + 1(CET), UTC−4(AST) ”, “assets / img / netherlands.png”],
            // [“New Zealand”, “No official motto”, “Wellington”, “English, Māori, NZ Sign Language”, “4, 822, 233”, “263, 310”, “New Zealand dollar(NZD) ”, “UTC + 12(NZST) ”, “assets / img / new- zealand.png”],
            // [“Nicaragua”, “In God We Trust”, “Managua”, “Spanish”, “6, 624, 554”, “120, 340”, “Córdoba(NIO) ”, “UTC−6(CST) ”, “assets / img / nicaragua.png”],
            // [“Niger”, “Fraternity, Work, Progress”, “Niamey”, “French”, “24, 206, 644”, “1, 266, 700”, “West African CFA franc(XOF) ”, “UTC + 1(WAT) ”, “assets / img / niger.png”],
            // [“Nigeria”, “Unity and Faith, Peace and Progress”, “Abuja”, “English”, “206, 139, 589”, “910, 770”, “Naira(NGN) ”, “UTC + 01: 00(WAT) ”, “assets / img / nigeria.png”],
            // [“North Korea”, “No official motto”, “Pyongyang”, “Korean”, “25, 778, 816”, “120, 410”, “Korean Peoples won (KPW)”, “UTC+9 (Pyongyang Time)”, “assets/img/north-korea.png”],
            // [“North Macedonia”, “No official motto”, “Skopje”, “Macedonian, Albanian”, “2, 083, 374”, “25, 220”, “Macedonian denar(MKD) ”, “UTC + 1(CET) ”, “assets / img / north - macedonia.png”],
            // [“Norway”, “No official motto”, “Oslo”, “Norwegian, Sámi”, “5, 421, 241”, “365, 268”, “Norwegian krone(NOK) ”, “UTC + 1(CET) ”, “assets / img / norway.png”],
            // [“Oman”, “No official motto”, “Muscat”, “Arabic”, “5, 106, 626”, “309, 500”, “Rial(OMR) ”, “UTC + 4(GST) ”, “assets / img / oman.png”],
            // [“Pakistan”, “Faith, Unity, Discipline”, “Islamabad”, “English, Urdu”, “220, 892, 340”, “770, 880”, “Pakistani rupee(PKR) ”, “UTC + 5(PST) ”, “assets / img / pakistan.png”],
            // [“Palau”, “Republic of Palau”, “Ngerulmud”, “English, Palauan, Japanese, Sonsorolese, Tobian”, “18, 094”, “460”, “United States dollar(USD) ”, “UTC + 9”, “assets / img / palau.png”],
            // [“Panama”, “For the benefit of the world”, “Panama City”, “Spanish”, “4, 314, 767”, “74, 340”, “Balboa(PAB), United States dollar(USD) ”, “UTC−5(EST) ”, “assets / img / panama.png”],
            // [“Papua New Guinea”, “Unity in diversity”, “Port Moresby”, “English, Hiri Motu, PNG Sign Language, Tok Pisin”, “8, 947, 024”, “452, 860”, “Papua New Guinean kina(PGK) ”, “UTC + 10, +11(AEST) ”, “assets / img / papua - new- guinea.png”],
            // [“Paraguay”, “Peace and justice”, “Asunción”, “Spanish, Guarani”, “7, 132, 538”, “397, 300”, “Guaraní(PYG) ”, “UTC–4(PYT) ”, “assets / img / paraguay.png”],
            // [“Peru”, “Steady and happy for the union”, “Lima”, “Spanish”, “32, 971, 854”, “1, 280, 000”, “Sol(PEN) ”, “UTC - 5(PET) ”, “assets / img / peru.png”],
            // [“Philippines”, “For God, for the people, for nature and for the country”, “Manila”, “Filipino, English”, “109, 581, 078”, “298, 170”, “Peso(PHP) ”, “UTC + 8(PST) ”, “assets / img / philippines.png”],
            // [“Poland”, “No official motto”, “Warsaw”, “Polish”, “37, 846, 611”, “306, 230”, “Polish złoty(PLN) ”, “UTC + 1(CET) ”, “assets / img / poland.png”],
            // [“Portugal”, “No official motto”, “Lisbon”, “Portuguese”, “10, 196, 709”, “91, 590”, “Euro(EUR) ”, “UTC(WET), UTC - 1(Atlantic / Azores) ”, “assets / img / portugal.png”],
            // [“Qatar”, “No official motto”, “Doha”, “Arabic”, “2, 881, 053”, “11, 610”, “Riyal(QAR) ”, “UTC + 3(AST) ”, “assets / img / qatar.png”],
            // [“Romania”, “No official motto”, “Bucharest”, “Romanian”, “19, 237, 691”, “230, 170”, “Romanian leu(RON) ”, “UTC + 2(EET) ”, “assets / img / romania.png”],
            // [“Russia”, “No official motto”, “Moscow”, “Russian”, “145, 934, 462”, “16, 376, 870”, “Russian ruble(RUB) ”, “UTC + 2 to + 12”, “assets / img / russia.png”],
            // [“Rwanda”, “Unity, Work, Patriotism”, “Kigali”, “English, French, Kinyarwanda, Swahili”, “12, 952, 218”, “24, 670”, “Rwandan franc(RWF) ”, “UTC + 2(CAT) ”, “assets / img / rwanda.png”],
            // [“Saint Kitts & Nevis”, “Country above self”, “Basseterre”, “English”, “53, 199”, “260”, “East Caribbean dollar(XCD) ”, “UTC - 4”, “assets / img / saint - kitts - and - nevis.png”],
            // [“Saint Lucia”, “The Land, The People, The Light”, “Castries”, “English”, “183, 627”, “610”, “East Caribbean dollar(XCD) ”, “UTC−4”, “assets / img / saint - lucia.png”],
            // [“Samoa”, “God be the Foundation of Samoa”, “Apia”, “English, Samoan”, “198, 414”, “2, 830”, “Tālā(WST) ”, “UTC + 13(WST) ”, “assets / img / samoa.png”],
            // [“San Marino”, “Liberty”, “San Marino”, “Italian”, “33, 931”, “60”, “Euro(EUR) ”, “UTC + 01(CET) ”, “assets / img / san - marino.png”],
            // [“São Tomé and Príncipe”, “Unity, Discipline, Work”, “São Tomé”, “Portuguese”, “219, 159”, “960”, “Dobra(STN) ”, “UTC(GMT) ”, “assets / img / sao - tome - and - principe.png”],
            // [“Saudi Arabia”, “There is no God other than God and Muhammad is the Messenger of God”, “Riyadh”, “Arabic”, “34, 813, 871”, “2, 149, 690”, “Saudi riyal(SAR) ”, “UTC + 3(AST) ”, “assets / img / saudi - arabia.png”],
            // [“Senegal”, “One people, one goal, one faith”, “Dakar”, “French”, “16, 743, 927”, “192, 530”, “West African CFA franc(XOF) ”, “UTC(GMT) ”, “assets / img / senegal.png”],
            // [“Serbia”, “Only unity saves the Serbs”, “Belgrade”, “Serbian”, “8, 737, 371”, “87, 460”, “Serbian dinar(RSD) ”, “UTC + 1(CET) ”, “assets / img / serbia.png”],
            // [“Seychelles”, “The end crowns the work”, “Victoria”, “English, French, Seychellois Creole”, “98, 347”, “460”, “Seychellois rupee(SCR) ”, “UTC + 4(SCT) ”, “assets / img / seychelles.png”],
            // [“Sierra Leone”, “Unity, Freedom, Justice”, “Freetown”, “English”, “7, 976, 983”, “72, 180”, “Leone(SLL) ”, “UTC(GMT) ”, “assets / img / sierra - leone.png”],
            // [“Singapore”, “Onward Singapore”, “Singapore(City - state) ”, “English, Malay, Mandarin, Tamil”, “5, 850, 342”, “700”, “Singapore dollar(SGD) ”, “UTC + 8(Singapore Standard Time) ”, “assets / img / singapore.png”],
            // [“Slovakia”, “No official motto”, “Bratislava”, “Slovak”, “5, 459, 642”, “48, 088”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / slovakia.png”],
            // [“Slovenia”, “No official motto”, “Ljubljana”, “Slovene”, “2, 078, 938”, “20, 140”, “Euro(EUR) ”, “UTC + 1(CET) ”, “assets / img / slovenia.png”],
            // [“Solomon Islands”, “To lead is to serve”, “Honiara”, “English”, “686, 884”, “27, 990”, “Solomon Islands dollar(SBD) ”, “UTC + 11”, “assets / img / solomon - islands.png”],
            // [“Somalia”, “No official motto”, “Mogadishu”, “Somali, Arabic”, “15, 893, 222”, “627, 340”, “Somali Shilling(SOS) ”, “UTC + 3(EAT) ”, “assets / img / somalia.png”],
            // [“South Africa”, “Diverse people unite or Unity in Diversity”, “Pretoria(executive), Bloemfontein(judicial), Cape Town(legislative) ”, “”, “59, 308, 690”, “1, 213, 090”, “South African rand(ZAR) ”, “UTC + 2(SAST) ”, “assets / img / south - africa.png”],
            // [“South Korea”, “No official motto”, “Seoul”, “Korean(Pyojun - eo), Korean Sign Language”, “51, 269, 185”, “97, 230”, “Korean Republic won(KRW) ”, “UTC + 9(Korea Standard Time) ”, “assets / img / south - korea.png”],
            // [“South Sudan”, “Justice, Liberty, Prosperity”, “Juba”, “English”, “11, 193, 725”, “610, 952”, “South Sudanese pound(SSP) ”, “UTC + 3(East Africa Time) ”, “assets / img / south - sudan.png”],
            // [“Spain”, “Further beyond”, “Madrid”, “Spanish”, “46, 754, 778”, “498, 800”, “Euro(EUR) ”, “UTC⁠±0 to + 1(WET and CET) ”, “assets / img / spain.png”],
            // [“Sri Lanka”, “No official motto”, “Sri Jayawardenepura Kotte”, “Sinhala, Tamil”, “21, 413, 249”, “62, 710”, “Sri Lankan rupee(LKR) ”, “UTC + 5.30(SLST) ”, “assets / img / sri - lanka.png”],
            // [“St.Vincent & Grenadines”, “Peace and justice”, “Kingstown”, “English”, “110, 940”, “390”, “East Caribbean dollar(XCD) ”, “UTC - 4”, “assets / img / saint - vincent - and - the - grenadines.png”],
            // [“State of Palestine”, “No official motto”, “Jerusalem, Ramallah”, “Arabic”, “5, 101, 414”, “6, 020”, “Egytian pound(EGP), Israeli new shekel(ILS), Jordanian dinar(JOD) ”, “UTC + 2(Palestine Standard Time) ”, “assets / img / state - of - palestine.png”],
            // [“Sudan”, “Victory is ours”, “Khartoum”, “Arabic, English”, “43, 849, 260”, “1, 765, 048”, “Sudanese pound(SDG) ”, “UTC + 2(CAT) ”, “assets / img / sudan.png”],
            // [“Suriname”, “Justice, Piety, Loyalty”, “Paramaribo”, “Dutch”, “586, 632”, “156, 000”, “Surinamese dollar(SRD) ”, “UTC - 3(SRT) ”, “assets / img / suriname.png”],
            // [“Sweden”, “No official motto”, “Stockholm”, “Swedish”, “10, 099, 265”, “410, 340”, “Swedish krona(SEK) ”, “UTC + 1(CET) ”, “assets / img / sweden.png”],
            // [“Switzerland”, “One for all, all for one”, “None(de jure), Bern(de facto) ”, “German, French, Italian, Romansh”, “8, 654, 622”, “39, 516”, “Swiss franc(CHF) ”, “UTC + 1(CET) ”, “assets / img / switzerland.png”],
            // [“Syria”, “Unity, Freedom, Socialism”, “Damascus”, “Arabic”, “17, 500, 658”, “183, 630”, “Syrian Pound(SYP) ”, “UTC + 2(EET) ”, “assets / img / syria.png”],
            // [“Tajikistan”, “No official motto”, “Dushanbe”, “Tajik”, “9, 537, 645”, “139, 960”, “Somoni(TJS) ”, “UTC + 5(TJT) ”, “assets / img / tajikistan.png”],
            // [“Tanzania”, “Freedom and unity”, “Dodoma(de jure) ”, “Swahili, English, Arabic(Zanzibar) ”, “59, 734, 218”, “885, 800”, “Tanzanian Shilling(TZS) ”, “UTC + 3(EAT) ”, “assets / img / tanzania.png”],
            // [“Thailand”, “No official motto”, “Bangkok”, “Thai”, “69, 799, 978”, “510, 890”, “Baht(THB) ”, “UTC + 7(ICT) ”, “assets / img / thailand.png”],
            // [“Timor - Leste”, “Unity, Action, and Progress”, “Dili”, “Tetum, Portuguese”, “1, 318, 445”, “14, 870”, “United States dollar(USD) ”, “UTC + 9”, “assets / img / timor - leste.png”],
            // [“Togo”, “Work, Liberty, Homeland”, “Lomé”, “French”, “8, 278, 724”, “54, 390”, “West African CFA franc(XOF) ”, “UTC(GMT) ”, “assets / img / togo.png”],
            // [“Tonga”, “God and Tonga are my Inheritance”, “Nukuʻalofa”, “English, Tongan”, “105, 695”, “720”, “Paʻanga(TOP) ”, “UTC + 13”, “assets / img / tonga.png”],
            // [“Trinidad and Tobago”, “Together we aspire, together we achieve”, “Port of Spain”, “English”, “1, 399, 488”, “5, 130”, “Trinidad and Tobago dollar(TTD) ”, “UTC - 4(AST) ”, “assets / img / trinidad - and - tobago.png”],
            // [“Tunisia”, “Freedom, Order and Justice”, “Tunis”, “Arabic”, “11, 818, 619”, “155, 360”, “Tunisian dinar(TND) ”, “UTC + 1(CET) ”, “assets / img / tunisia.png”],
            // [“Turkey”, “No official motto”, “Ankara”, “Turkish”, “84, 339, 067”, “769, 630”, “Turkish lira(TRY) ”, “UTC + 3(FET) ”, “assets / img / turkey.png”],
            // [“Turkmenistan”, “No official motto”, “Ashgabat”, “Turkmen”, “6, 031, 200”, “469, 930”, “Turkmen new manat(TMT) ”, “”, “assets / img / turkmenistan.png”],
            // [“Tuvalu”, “Tuvalu for the Almighty”, “Funafuti”, “English, Tuvaluan”, “11, 792”, “30”, “Tuvaluan dollar, Australian dollar(AUD) ”, “UTC + 12”, “assets / img / tuvalu.png”],
            // [“Uganda”, “For God and My Country”, “Kampala”, “English, Swahili”, “45, 741, 007”, “199, 810”, “Ugandan Shilling(UGX) ”, “UTC + 3(EAT) ”, “assets / img / uganda.png”],
            // [“Ukraine”, “Liberty, Concord, Goodness”, “Kiev”, “Ukrainian”, “43, 733, 762”, “579, 320”, “Ukrainian hryvnia(UAH) ”, “UTC + 2(EET) ”, “assets / img / ukraine.png”],
            // [“United Arab Emirates”, “God, Nation, President”, “Abu Dhabi”, “Arabic”, “9, 890, 402”, “83, 600”, “UAE dirham(AED) ”, “UTC + 4(GST) ”, “assets / img / united - arab - emirates.png”],
            // [“United Kingdom”, “No official motto”, “London”, “English”, “67, 886, 011”, “241, 930”, “Pound sterling(GBP) ”, “UTC(Greenwich Mean Time, WET) ”, “assets / img / united - kingdom.png”],
            // [“United States”, “In God we trust”, “Washington, D.C.”, “None at federal level”, “331, 002, 651”, “9, 147, 420”, “United States dollar(USD) ”, “UTC - 4 to - 12, +10, +11”, “assets / img / united - states.png”],
            // [“Uruguay”, “Liberty or death”, “Montevideo”, “Spanish”, “3, 473, 730”, “175, 020”, “Uruguayan peso(UYU) ”, “UTC - 3(UYT) ”, “assets / img / uruguay.png”],
            // [“Uzbekistan”, “The Strength is in the Justice”, “Tashkent”, “Uzbek”, “33, 469, 203”, “425, 400”, “Uzbek som(UZS) ”, “UTC + 5(UZT) ”, “assets / img / uzbekistan.png”],
            // [“Vanuatu”, “In God we stand”, “Port Vila”, “Bislama, English, French”, “307, 145”, “12, 190”, “Vanuatu vatu(VUV) ”, “UTC + 11(VUT(Vanuatu Time)) ”, “assets / img / vanuatu.png”],
            // [“Venezuela”, “God and federation”, “Caracas”, “Spanish”, “28, 435, 940”, “882, 050”, “Petro, Bolivar Soberano(VES) ”, “UTC - 4(VET) ”, “assets / img / venezuela.png”],
            // [“Vietnam”, “Independence, Freedom and Happiness”, “Hanoi”, “Vietnamese”, “97, 338, 579”, “310, 070”, “đồng(VND) ”, “UTC + 07: 00(Vietnam Standard Time) ”, “assets / img / vietnam.png”],
            // [“Yemen”, “God, Homeland, Revolution, Unity”, “Sanaa (de jure), Ataq (provisional)”, “Arabic”, “29,825,964”, “527,970”, “Yemeni rial (YER)”, “UTC+3 (AST)”, “assets/img/yemen.png”],
            // [“Zambia”, “One Zambia, one Nation”, “Lusaka”, “English”, “18, 383, 955”, “743, 390”, “Zambian kwacha(ZMW) ”, “UTC + 2(CAT) ”, “assets / img / zambia.png”],
            // [“Zimbabwe”, “Unity, Freedom, Work”, “Harare”, “16 languages: Chewa, Chibarwe, English, Kalanga, Koisan, Nambya, Ndau, Ndebele, Shangani, Shona, Sign Language, Sotho, Tonga, Tswana, Venda, Xhosa”, “14, 862, 924”, “386, 850”, “Zimbabwean dollar(current) ”, “UTC + 2(CAT) ”, “assets / img / zimbabwe.png”]
        ];

        for (i = 0; i < info.length; i++) {
            if (info[i][0] == selectedText) {
                var contentString = '<div id="content">' +
                    '<div id="siteNotice">' +
                    '</div>' +
                    '<h1>' + info[i][0] + '</h1>' + '<hr><br>' +
                    '<img src="' + info[i][8] + '"alt="flag">' +
                    '<div id="bodyContent">' +
                    '<p><b>Motto: </b>' + info[i][1] +
                    '<p><b>Capital: </b>' + info[i][2] +
                    '<p><b>Official Language: </b>' + info[i][3] +
                    '<p><b>Population: </b>' + info[i][4] +
                    '<p><b>Area: </b>' + info[i][5] +
                    '<p><b>Currency: </b>' + info[i][6] +
                    '<p><b>Time Zone: </b>' + info[i][7] +
                    '</p>' +
                    '</div>' +
                    '</div>';

                var infowindow = new google.maps.InfoWindow({
                    content: contentString
                });

                google.maps.event.addListener(marker, 'click', function () {
                    infowindow.open(map, marker);
                });

                google.maps.event.addListener(map, 'click', function () {
                    infowindow.close();
                });
            }
        }
    });
    // initializing the map
    var map = new google.maps.Map(document.getElementById('map'), options);
});