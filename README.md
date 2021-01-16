# GioTeck.js

GioTeck.js è un bot discord interamente scritto in JavaScript.

Il bot dovrebbe sostituire completamente bot come MEE6,Carl-bot,Dyno e Denky.

Da questo repository si può scaricare il bot e usarlo nel proprio server con tutte le funzioni premium.

#### Come installarlo

Per installare il bot bisogna installare prima [Node.JS](https://nodejs.org) (=>14.x)sul proprio server/PC(sconsigliato).

Poi si deve scaricare il bot (dalla branchia "stable") in formato ZIP, decomprimere l'archivio in una cartella vuota e aprire un terminale.

Recarsi con il terminale dentro la cartella del bot e digitare 

```shell
npm install
```

Atttendere la fine dell'installazione necessari.

Recarsi sul portale [Discord Developer](https://discord.com/developers/applications) creare una nuova applicazione, andare nella sezione bot dell'app e cliccare su "Add bot" o simili per creare il token per il bot.

Creare un file dentro la cartella del bot chiamato "config.json" che deve contenere:

```json
{
    "token":"your token here",
    "clientid":"your clientid here",
    "clientsecret":"your client secret here",
    "publickey":"your publickey here"
}
```

**NON CONDIVIDERE CON NESSUNO IL TOKEN O IL CLIENT SECRET**

Nel caso qualcuno venga a saper euno dei due codici rigenerali immediatamente dal portale.

Nel caso di un leak sul web del token Discord(nella maggior parte dei casi) automaticamente rigenera il token.

Una volta creato il file config.json, digitare nel terminale:

```shell
npm start
```

E con questo è tutto!

Documentazione completa [qui](https://www.notion.so/gioteck/GioTeck-js-1cdab9c83da64f43aa64fd82def0b75e)