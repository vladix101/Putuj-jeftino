/* =====================================================================
   PONUDE PUTOVANJA — Putuj jeftino
   ---------------------------------------------------------------------
   Svaka ponuda je jedan blok između vitičastih zagrada { ... }.
   Blokovi su odvojeni zarezom.

   KAKO DA DODAŠ NOVU PONUDU:
     1. Kopiraj ceo jedan blok { ... }, (zajedno sa zarezom posle njega).
     2. Nalepi ga ispod poslednjeg bloka.
     3. Promeni tekst između navodnika.
     4. Sliku ubaci u folder "images" i upiši njeno ime u polje "slika".

   POLJA:
     id          – kratko ime bez razmaka i slova č/ć/š/ž/đ (npr. "rim-april")
     destinacija – naziv destinacije (npr. "Rim")
     drzava      – država (npr. "Italija")
     kategorija  – "more", "grad" ili "daleko" (koristi se za filtere)
     slika       – putanja do slike (npr. "images/rim.webp")
     datum       – datum putovanja kao tekst (npr. "22–26. april 2027.")
     trajanje    – npr. "4 noćenja"
     cena        – samo broj, u evrima (npr. 259)
     opis        – kratak opis za karticu (1–2 rečenice)
     detalji     – duži opis koji se vidi na "Saznaj više"
     ukljuceno   – lista stavki, svaka u navodnicima, odvojene zarezom
     primer      – true = ponuda je PRIMER (prikazuje oznaku "Primer ponude")
                   false = stvarna, aktivna ponuda

   KADA UBACIŠ PRAVE PONUDE: obriši primere ili im stavi primer: false
   i promeni sve podatke. Ako nijedna ponuda nije primer, obaveštenje o
   primerima iznad kartica automatski nestaje.
   ===================================================================== */

window.KATEGORIJE = {
  more: "More i sunce",
  grad: "Gradska putovanja",
  daleko: "Daleka putovanja"
};

window.PONUDE = [
  {
    id: "santorini-jun",
    destinacija: "Santorini",
    drzava: "Grčka",
    kategorija: "more",
    slika: "images/santorini.webp",
    datum: "14–21. jun 2027.",
    trajanje: "7 noćenja",
    cena: 449,
    opis: "Bele kuće, plave kupole i čuveni zalasci sunca u Iji. Letnji odmor na jednom od najlepših ostrva Egeja.",
    detalji: "Primer letnjeg paketa za Santorini: nedelja dana na ostrvu, smeštaj u blizini Fire i dovoljno slobodnog vremena za plaže, vidikovce i šetnju do Ije.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 7 noćenja", "Transfer aerodrom – smeštaj – aerodrom"],
    primer: true
  },
  {
    id: "barselona-maj",
    destinacija: "Barselona",
    drzava: "Španija",
    kategorija: "more",
    slika: "images/barselona.webp",
    datum: "3–7. maj 2027.",
    trajanje: "4 noćenja",
    cena: 329,
    opis: "Gaudijeva arhitektura, plaže u samom gradu i tapas barovi do kasno u noć. Idealan spoj grada i mora.",
    detalji: "Primer prolećnog putovanja u Barselonu: Sagrada Familija, Park Gelj, Gotska četvrt i popodne na plaži Barseloneta — sve u jednom produženom vikendu.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 4 noćenja", "Doručak"],
    primer: true
  },
  {
    id: "pariz-mart",
    destinacija: "Pariz",
    drzava: "Francuska",
    kategorija: "grad",
    slika: "images/pariz.webp",
    datum: "11–14. mart 2027.",
    trajanje: "3 noćenja",
    cena: 279,
    opis: "Ajfelova kula, Luvr i šetnja Senom. Klasičan city break po ceni koja prija.",
    detalji: "Primer kratkog putovanja u Pariz: tri noći u gradu svetlosti, dovoljno za glavne znamenitosti, Monmartr i večernju šetnju pored Sene.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 3 noćenja", "Ručni prtljag"],
    primer: true
  },
  {
    id: "rim-april",
    destinacija: "Rim",
    drzava: "Italija",
    kategorija: "grad",
    slika: "images/rim.webp",
    datum: "22–26. april 2027.",
    trajanje: "4 noćenja",
    cena: 259,
    opis: "Koloseum, fontana di Trevi i prava italijanska pica. Večni grad u najlepšem delu godine.",
    detalji: "Primer prolećnog putovanja u Rim: antički Rim, Vatikan, trg Navona i Trastevere — uz dovoljno vremena da sve obiđeš svojim tempom.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 4 noćenja", "Doručak"],
    primer: true
  },
  {
    id: "istanbul-februar",
    destinacija: "Istanbul",
    drzava: "Turska",
    kategorija: "grad",
    slika: "images/istanbul.webp",
    datum: "5–9. februar 2027.",
    trajanje: "4 noćenja",
    cena: 219,
    opis: "Grad na dva kontinenta: Aja Sofija, Veliki bazar i vožnja brodom Bosforom.",
    detalji: "Primer zimskog putovanja u Istanbul: istorijsko jezgro Sultanahmet, kula Galata, bazari i obavezna vožnja brodom između Evrope i Azije.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 4 noćenja", "Transfer od aerodroma"],
    primer: true
  },
  {
    id: "dubai-januar",
    destinacija: "Dubai",
    drzava: "Ujedinjeni Arapski Emirati",
    kategorija: "daleko",
    slika: "images/dubai.webp",
    datum: "20–27. januar 2027.",
    trajanje: "7 noćenja",
    cena: 699,
    opis: "Sunce usred zime, Burdž Kalifa, pustinjski safari i plaže na Persijskom zalivu.",
    detalji: "Primer zimskog bega u Dubai: toplo vreme dok je kod nas zima, moderne znamenitosti, šoping i opcioni izlet u pustinju.",
    ukljuceno: ["Povratna avio karta", "Smeštaj 7 noćenja", "Doručak", "Transfer aerodrom – hotel – aerodrom"],
    primer: true
  }
];
