# Ilmastonmuutosgraafeja Reactilla, ryhmä 3
Tämä on ryhmän numero 3 esittelyteksti kevään 2023 web-ohjelmoinnin sovellusprojektista. Ryhmän jäseniä ovat Tero Rantanen, Janita Kaikkonen, Alisa Kulonpää ja Art Karimäki. Aiheeksi annettiin tehdä React-websovellus, joka sisältää viisi erilaista visualisointia erilaisista ilmastonmuutoksesta kertovista datatauluista. Lisäksi sovelluksessa on kirjautumismahdollisuus, ja käyttäjä voi tallentaa itselleen oman näkymän kaavioista. Sovelluksessa käytettiin Javaa palvelinpuoleen ja ReactJS käyttöliittymään. Sovellus on julkisessa netissä nähtävillä osoitteessa: xxx. 
## Vastuualueet
Ensimmäisillä viikoilla jokaiselle jaettiin ryhmän kesken oma visualisointikaavion koodattavaksi. Sen jälkeen työtehtävät jakautuivat kanban-järjestelmällä sille, jolla omat määrätyt kaaviot olivat valmiina. Kanban-järjestelmä auttaa näkemään, mitä työtehtäviä on kesken ja aloittamatta, ja sieltä on helppo nähdä, mitä kannattaa aloittaa tekemään seuraavaksi. Työtehtävän viereen merkattiin oma nimi sen mukaan mitä asiaa työsti. 

### Teron (*t1rate*) vastuualueet
text text
### Janitan (*saattaja*) vastuualueet
Otin vastuulleni aluksi visualit 1 ja 2. Päädyin tekemään myös julkisen PostgreSQL- tietokannan ja hallinnoimaan sinne laitettavaa dataa, ja lisäksi visual 1 vei aika paljon aikaa, joten Tero otti visual 2 hoidettavakseen. 

Opetetun mallin mukaisesti loin kaaviolle REST logiikan taustalle käyttäen Javaa ohjelmointikielenä. Vuositason datan laitoin yhdelle kaaviolle, ja kuukausitason toiselle. Lisäsin radionapit vuosi- ja kuukausikaavion valintaa varten. Vuosikaaviossa oli myös Temperature reconstruction- data. 

Tein lisäksi käyttöliittymäsuunnitelman, RESTAPI-suunnitelman ja työskentelin .css muotoilujen kanssa, jotta sovelluksesta saatiin yhtenäisen kokonaisuuden näköinen. 
### Alisan (*akulonpa*) vastuualueet
Alkuun alisa teki muistiinpanot, kun pidettiin opettajan kanssa palaveria, mihin kuului mm. mistä projektin teko kannattaa aloittaa. Alisa teki myös teamsiin palaveritaulukon eli miten kenellekkin sopii palaverin pito minäkin päivänä. 

Alisalle tuli vastuualueeksi visuaali 3 eli kaavio maapallon lämpötilan kehityksestä viimeisen kahden miljoonan vuoden aikana, johon sisältyi viivakaavion teko kolmesta eri taulukosta.  
### Artin (*cerveku*) vastuualueet
Visual 4 Bakkari, react, frontti, kokonaisuutena on minun tuotoksia. Lisäksi osallistuin Jakotoiminnallisuuden tekemiseen ja työskentelin, jotta palvelu saataisiin julkiseksi.
## Sovelluksen käyttö
Sovelluksen etusivulla on yksi randomilla arvottu kaavio näkymässä, sekä projektin esittelyteksti. Napista “Log in” pääsee kirjautumaan, “Sign in” pääsee rekisteröitymään käyttäjäksi ja “Show all” näyttää kaikki kaaviot peräkkäin sivulla. Mikäli käyttäjällä ei ole tallennettua “omaa näkymää” tai luodaan uusi käyttäjätunnus, siirtyy sivu oman näkymän luontiin. Samalta näkymältä voi poistaa käyttäjätunnuksen ja oman tallennetun näkymän. 
## Käytetty logiikka, tietokanta, RestAPI
Kaikilla oli aluksi hieman haasteita saada Visual Studio Code yhdistämään luotuun tietokantaan, mutta sekin lopulta onnistui. PostgreSQL- client sovelluksen kautta pystyi suhteellisen kivuttomasti import-työkalulla lisäämään tietokantaan tarvittavien taulujen datan, jos se oli valmiiksi CSV-muodossa. Sarakkeet piti ensin itse nimetä ja määrittää niille datatyypit. Artin visual 4 datassa oli kuitenkin niin paljon sarakkeita ja jonkin verran ylimääräistä dataa, että homma piti hoitaa useammassa osassa SQL-komennoilla. Tietokannan ollessa julkinen, pystyivät kaikki ryhmän jäsenet muokkaamaan ja lisäämään tietokantaan dataa VS Coden Database-lisäosan kautta. 

Frontendinä toimi react, johon kokosimme mm. kaaviot ja sivuston näkymän. Frontendin ja backendin keskutelu toimi helposti ja mutkattomasti. Frontendissä kieli vaihtui Javasta JavaScriptiksi. Kaavioita luodessa käytimme chartjs ja chartjs-2 javascript kirjastoja, joissa oli kaikki tarvittavat työkalut, jotta saimme kaaviomme näkymään verkkosivulla. 
