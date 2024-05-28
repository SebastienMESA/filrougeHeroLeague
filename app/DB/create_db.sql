DROP TABLE IF EXISTS "hero";
DROP TABLE IF EXISTS "review";
DROP TABLE IF EXISTS "service";

CREATE TABLE IF NOT EXISTS "hero" (
    "id" SERIAL PRIMARY KEY,
    "name" TEXT,
    "description" TEXT,
    "description_2" TEXT,
    "profilPicturePath" TEXT
);

SET client_encoding TO 'utf8';

INSERT INTO "hero"("id", "name", "description", "description_2", "profilPicturePath") VALUES
(1, 'Cat Astrophic', 'Avec son ronron, il saura vous réconforter dans n''importe quelle situation.', 'Ne contrôle pas tout à fait sa patte droite, et peut être amené à vous mettre une - plus ou moins petite - tape sur la tête.', '/img/catastrophic.webp'),
(2, 'Carotte Woman', 'Mis à part son apparence de carotte, on ne sait pas bien à quoi elle est forte, mais on va trouver.', 'Attention, elle essaiera souvent de vous faire payer plus que le prix convenu avec Heros League. N''acceptez pas.', '/img/carotte-woman.webp'),
(3, 'Ultraquenarde', 'Peut vous sortir de n''importe quel traquenard.', 'Vous sort du traquenard… Mais il arrive qu''elle vous entraîne dans un autre.', '/img/ultraquenarde.webp'),
(4, 'Poulpy', 'Il a des tentacules gigantesques, super pratique pour les déménagements.', 'Un peu collant', '/img/poulpy.webp'),
(5, 'Orang Wu-Tang Clan.', 'Un gros singe agile, multi-tâche, qui intervient tout en rappant.', 'Peut être amené à vous demander de financer son prochain album, ne pas accepter.', '/img/orang-wu-tang-clan.webp'),
(6, 'Superimé', 'Un feu super-héro qui ne veut pas partir à la retraite.', 'N''a plus de pouvoir mais refuse de l''admettre, peut être amené à vous raconter des histoires de l''époque où il était encore super.', '/img/superime.webp');

CREATE TABLE IF NOT EXISTS "review" (
    "id" SERIAL PRIMARY KEY,
    "author" TEXT NOT NULL,
    "message" TEXT,
    "hero_id" INT,
    "profilPicturePath" TEXT,
    FOREIGN KEY("hero_id") REFERENCES "hero"("id")
);

INSERT INTO "review"("id", "author", "message", "profilPicturePath", "hero_id") VALUES
(1, 'Tombédeu O.', 'Grâce à Heros League, j''ai pu déménager super rapidement. Attention à l''odeur laissée par les tentacules ceci-dit. Merci Poulpy !', '/img/testimony-1.webp', 4),
(2, 'Bob O.', 'Je ne remercierai jamais assez Carotte Woman d''avoir retrouvé mon chat. Apparemment c''est normal s''il est orange et plus noir, elle l''aurait retrouvé dans un produit chimique spécial. Je la crois sur parole !', '/img/testimony-2.webp', 2),
(3, 'Coupéhala H.', 'Superimé a été super, il m''a sortie des bouchons et amenée au travail en un temps record. Par contre j''aimerais bien retrouver ma voiture maintenant.', '/img/testimony-3.webp', 6),
(4, 'Jella N.', 'Ultraquenarde m''a sauvé la vie ! J''allais tout perdre et sur ses conseils j''ai investi dans les bitcoins, affaire à suivre !', '/img/testimony-4.webp', 3);

CREATE TABLE IF NOT EXISTS "service" (
    "id" SERIAL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "description" TEXT,
    "price" NUMERIC,
    "joke" TEXT
);

INSERT INTO "service"("id", "title", "description", "price", "joke") VALUES
(1, 'Super Déménagement', 'Pour des déménagements sans effort et sans casse!', 233, 'Nous ne pouvons malheureusement pas garantir que vos objets fragiles ou votre chat Gribouille survivront à un combat épique entre super-vilains lors du trajet.'),
(2, 'Livraison de Repas', 'Pour des livraisons super-soniques', 12, 'Pour éviter tout dommage à votre porte, merci de la laisser ouverte, certains super-héros n''ont pas conscience de leur force. Vous pouvez souscrire à notre assurance Porte en vrac pour 5€ de plus.'),
(3, 'Z''héro Bouchons', 'Pour les clients pressés!', 1.33, 'Le mode de déplacement peut être différent en fonction de la disponibilité des héros. Merci de préciser à la commande si vous avez le mal des transports soniques.'),
(4, 'Sauvetage de soirée', 'Pour les soirées booooring!', 50, 'Nous ne pouvons malheureusement pas garantir que votre super-héros ne se fera pas la malle si la soirée n''est pas sauvable.'),
(5, 'Moral à Z''héro', 'Pour les jours gris et les coeurs lourds, des héros au moral d''acier.', 100, 'Il peut arriver que le moral de votre héros ne soit pas au beau fixe et vous bassine avec sa défaite de la veille, dans ce cas, nous vous remboursons 50 % de la prestation.');


