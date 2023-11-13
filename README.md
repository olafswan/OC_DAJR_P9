#### Projet 9 de la formation "Développeur d'application - JavaScript React" par OpenClassrooms

# Débuggez et testez un SaaS RH

### Scénario :

Vous êtes développeur front-end chez Billed, une entreprise qui produit des solutions Saas destinées aux équipes de ressources humaines.

![Logo de Billed](https://user.oc-static.com/upload/2020/08/14/1597396368627_image2.png)


Malheureusement pour Billed, Garance, une collègue de la feature team “note de frais” a quitté l’entreprise avant d’avoir terminé l’application. 
Dans deux semaines, l’équipe doit montrer la solution qui fonctionne à l’ensemble de l’entreprise. Matthieu, Lead Developer de la feature team a 
demandé à être aidé pour tenir les délais et vous avez appris hier lors de la réunion d’équipe que c’est vous qui avez été désigné !

![Interface de l'application Billed](https://user.oc-static.com/upload/2020/08/14/15973967670682_image1.png)




À votre arrivée ce matin, vous avez reçu un e-mail de la part de Matthieu, qui donne plus de détails sur ce qui est attendu de vous.


```bash
Objet : Urgent - Informations sur la mission de renfort au sein de la feature team “note de frais”
De : Matthieu
À : Moi

Bonjour,


Tout d’abord, merci de nous prêter main-forte cette semaine pour la mise en place de tests sur la
fonctionnalité “note de frais”.

Cette fonctionnalité est très attendue sur le marché et le top management a mis la priorité dessus.
L’objectif est de la lancer officiellement auprès de nos clients d’ici 2 semaines. Les délais sont
donc très serrés. La feature team a beaucoup travaillé ces dernières semaines, mais le départ de
Garance n’arrange pas les choses et nous avons besoin de ton aide pour la dernière ligne droite.

 

Présentation de la fonctionnalité :

Pour comprendre son utilité et savoir comment elle marche, lis d’abord la description de la
fonctionnalité.

Comme tu peux le constater, il y a deux parcours utilisateurs : un administrateur RH et un employé. 

 

État d’avancement du projet :

L’essentiel a déjà été développé, je te rassure :

✅ Le back-end des deux parcours est prêt en version alpha. 

🚧 Côté front-end :
↳ Parcours administrateur : il a été testé par Garance, il faut désormais le débugger.

↳ Parcours employé : il faut entièrement le tester et le débugger.

Garance avait utilisé Chrome Debugger, il faudra continuer avec cet outil.

 

Comment accéder à la fonctionnalité ?

Tu devras installer le back-end disponible sur ce repo ainsi que le frontend disponible ici. Suis bien
les instructions des deux README pour comprendre comment faire fonctionner tout ça.

 

Tes missions :

Tout ce que j’attends de toi pour fiabiliser et améliorer le parcours employé est décrit dans ce document.
Il correspond à la description pratique des besoins pour la mise en place de la fonctionnalité. Il faut
que tu le lises très attentivement. 

Tu y trouveras notamment le rapport avec les bugs identifiés (Kanban Notion) ainsi qu’un exemple de plan
de tests End-to-End. 


Voilà, bon courage pour résoudre ces bugs et mettre en place les tests manquants ! On compte sur toi.


Matthieu

Lead Developer @Billed
```
### Pièces jointes :

[Description de la fonctionnalité](https://s3.eu-west-1.amazonaws.com/course.oc-static.com/projects/DA+JSR_P9/Billed+-+Description+des+fonctionnalite%CC%81s.pdf)

[Le back-end disponible sur ce repo](https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back)

[Le frontend sur ce repo](https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front)

[Mise en place de la fonctionnalité “notes de frais” - Description pratique des besoins](https://course.oc-static.com/projects/DA+JSR_P9/Billed+-+Description+pratique+des+besoins+-.pdf)

[Billed bugs and tests TO DO](https://openclassrooms.notion.site/a7a612fc166747e78d95aa38106a55ec?v=2a8d3553379c4366b6f66490ab8f0b90)

[Exemple de plan de tests End-to-End](https://course.oc-static.com/projects/DA+JSR_P9/Billed+-+E2E+parcours+administrateur.docx)


Ça y est, vous avez toutes les informations pour démarrer la correction de cette application. C’est parti !

### Cours :
[Testez l'interface de votre site](https://openclassrooms.com/fr/courses/3504461-testez-linterface-de-votre-site)

[Déboguez l’interface de votre site internet](https://openclassrooms.com/fr/courses/7159296-deboguez-l-interface-de-votre-site-internet)

[Testez vos applications Front End avec JavaScript](https://openclassrooms.com/fr/courses/7159306-testez-vos-applications-front-end-avec-javascript)

### Résultat final lors du passage de la soutenance :
[Lien de la page de connexion Billed](https://google.com)








___




### ReadMe du repo du frontend



#### L'architecture du projet :
Ce projet, dit frontend, est connecté à un service API backend que vous devez aussi lancer en local.

Le projet backend se trouve ici: https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-back

#### Organiser son espace de travail :
Pour une bonne organization, vous pouvez créer un dossier bill-app dans lequel vous allez cloner le projet backend et par la suite, le projet frontend:

Clonez le projet backend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Back.git
```

```
bill-app/
   - Billed-app-FR-Back
```

Clonez le projet frontend dans le dossier bill-app :
```
$ git clone https://github.com/OpenClassrooms-Student-Center/Billed-app-FR-Front.git
```

```
bill-app/
   - Billed-app-FR-Back
   - Billed-app-FR-Front
```

#### Comment lancer l'application en local ?

##### étape 1 - Lancer le backend :

Suivez les indications dans le README du projet backend.

##### étape 2 - Lancer le frontend :

Allez au repo cloné :
```
$ cd Billed-app-FR-Front
```

Installez les packages npm (décrits dans `package.json`) :
```
$ npm install
```

Installez live-server pour lancer un serveur local :
```
$ npm install -g live-server
```

Lancez l'application :
```
$ live-server
```

Puis allez à l'adresse : `http://127.0.0.1:8080/`


#### Comment lancer tous les tests en local avec Jest ?

```
$ npm run test
```

#### Comment lancer un seul test ?

Installez jest-cli :

```
$npm i -g jest-cli
$jest src/__tests__/your_test_file.js
```

#### Comment voir la couverture de test ?

`http://127.0.0.1:8080/coverage/lcov-report/`

#### Comptes et utilisateurs :

Vous pouvez vous connecter en utilisant les comptes:

##### administrateur : 
```
utilisateur : admin@test.tld 
mot de passe : admin
```
##### employé :
```
utilisateur : employee@test.tld
mot de passe : employee
```
