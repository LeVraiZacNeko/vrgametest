// ============================================================
// CONFIGURATION DE LA SCÈNE VR
// Modifie ce fichier pour changer le décor et ajouter des modèles 3D.
// Recharge simplement la page après modification.
// ============================================================

export const SCENE_CONFIG = {

  // --- DÉCOR (skybox) ---
  // panorama : image "bande" à 360° qui s'enroule autour de l'horizon
  //            (idéalement une image large, ex: 4096x1024, style panorama)
  // top      : image plaquée au plafond (vue du dessous), ex: un ciel
  // bottom   : image plaquée au sol (vue du dessus), ex: de l'herbe / du sable
  //
  // Chemins relatifs à ce fichier : mets tes images dans un dossier "assets/"
  // à côté de index.html et scene-config.js, puis référence-les ici.
  // Si une image est manquante ou introuvable, un dégradé de secours
  // s'affiche automatiquement (aucun crash).
  skybox: {
    panorama: "assets/sky-panorama.jpg",
    top: "assets/sky-top.jpg",
    bottom: "assets/sky-bottom.jpg"
  },

  // --- MODÈLES 3D ---
  // Chaque entrée charge un fichier .glb (glTF binaire) et le place dans la scène.
  // position : [x, y, z] en mètres (0,0,0 = point de départ du joueur ; y=hauteur)
  // rotation : [x, y, z] en degrés
  // scale    : nombre unique (uniforme) ou [x, y, z]
  // animation: nom exact du clip d'animation à jouer en boucle (optionnel).
  //            Mets true pour jouer le premier clip trouvé, ou omets le champ
  //            pour ne jouer aucune animation (modèle statique).
  //
  // Exemple (décommente et adapte) :
  models: [
    // {
    //   url: "assets/models/robot.glb",
    //   position: [0, 0, -3],
    //   rotation: [0, 180, 0],
    //   scale: 1,
    //   animation: "Idle"
    // },
    // {
    //   url: "assets/models/oiseau.glb",
    //   position: [2, 2.2, -4],
    //   rotation: [0, 0, 0],
    //   scale: 0.5,
    //   animation: true
    // }
  ]

};
