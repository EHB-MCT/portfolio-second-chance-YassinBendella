Om de backend op te starten moeten we eerst naar de backend folder gaan cd "Resolum api" en om alle node modules te installeren runnen we "npm install" en om de service op te starten runnen we "npm start" en als we dan naar localhost:3000 gaan runned hier onze backend en vergeet zeker niet de 'IP' en de 'PORT' variabele aan te maken in de .env folder waardat IP = resolum ip en PORT is 3000.

Voor de frontend op te starten moeten we eerst naar de frontend folder gaan cd resolum_frontend en om alle node modules te installeren runnen we "npm install" en om de service op te starten runnen we "npm start" de terminal gaat dan vragen of je de service op een andere poort wilt runnen we confirmeren dit door "y" in de terminal te typen (react runned standaard op poort 3000 maar onze backend runned hier al op) automatisch gaat deze een venster openen, moest dit niet het geval zijn kan je altijd naar localhost:3001 surfen.

Voor de database heb ik geen gebruik gemaakt van docker maar als je lokaal een database opstart met de volgende stukken code.
create schema resolum;
CREATE TABLE `resolum`.`clips2` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `clip_path` VARCHAR(255) NULL,
  `current_active` VARCHAR(255) NULL,
  PRIMARY KEY (`id`));
vergeet dan ook niet in de .env file de volgende variabelen aan te maken
DB_HOST = localhost
DB_USER = 'uw username'
DB_PASSWORD = 'uw password'
DB_SCHEME = resolum 
Als de applicatie gerunned word zonder gebruikt te maken van de database moet lijn 28 in de file Resolum api/app.js in commentaar gezet worden
'layers.insertClipInfo();' want deze lijn zorgt voor de insert query in de database.

Om deze applicatie juist te gebruiken moet ook zeker de Resolum api aanstaan zodat de backend de juiste calls kan maken om da data binnen te halen.