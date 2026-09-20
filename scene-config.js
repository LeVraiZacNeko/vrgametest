// ============================================================
// CONFIGURATION DE LA SCÈNE VR
// Modifie ce fichier pour changer le décor et ajouter des modèles 3D.
// Recharge simplement la page après modification.
// ============================================================

export const SCENE_CONFIG = {

  // --- DÉCOR (skybox) ---
  // panorama : UNE SEULE image équirectangulaire à 360° qui couvre tout
  //            autour de toi (horizon, plafond ET sol en une image).
  //            Format attendu : ratio 2:1 (ex: 4096x2048, 2048x1024...).
  //            C'est le format "panorama sphérique" standard, exporté par
  //            la plupart des rendus 360° (Google Street View, rendus
  //            Blender équirectangulaires, photos 360° de type Insta360...).
  //
  // Chemin relatif à ce fichier : mets ton image dans un dossier "assets/"
  // à côté de index.html et scene-config.js, puis référence-la ici.
  // Si l'image est manquante ou introuvable, un dégradé de secours
  // s'affiche automatiquement (aucun crash).
  skybox: {
    panorama: "assets/sky-panorama.jpg"
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
