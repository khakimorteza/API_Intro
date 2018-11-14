let APIResponse = {
  status: "success",
  message: {
    affenpinscher: [],
    african: [],
    airedale: [],
    akita: [],
    appenzeller: [],
    basenji: [],
    beagle: [],
    bluetick: [],
    borzoi: [],
    bouvier: [],
    boxer: [],
    brabancon: [],
    briard: [],
    bulldog: ["boston", "french"],
    bullterrier: ["staffordshire"],
    cairn: [],
    cattledog: ["australian"],
    chihuahua: [],
    chow: [],
    clumber: [],
    cockapoo: [],
    collie: ["border"],
    coonhound: [],
    corgi: ["cardigan"],
    cotondetulear: [],
    dachshund: [],
    dalmatian: [],
    dane: ["great"],
    deerhound: ["scottish"],
    dhole: [],
    dingo: [],
    doberman: [],
    elkhound: ["norwegian"],
    entlebucher: [],
    eskimo: [],
    frise: ["bichon"],
    germanshepherd: [],
    greyhound: ["italian"],
    groenendael: [],
    hound: ["afghan", "basset", "blood", "english", "ibizan", "walker"],
    husky: [],
    keeshond: [],
    kelpie: [],
    komondor: [],
    kuvasz: [],
    labrador: [],
    leonberg: [],
    lhasa: [],
    malamute: [],
    malinois: [],
    maltese: [],
    mastiff: ["bull", "tibetan"],
    mexicanhairless: [],
    mix: [],
    mountain: ["bernese", "swiss"],
    newfoundland: [],
    otterhound: [],
    papillon: [],
    pekinese: [],
    pembroke: [],
    pinscher: ["miniature"],
    pointer: ["german", "germanlonghair"],
    pomeranian: [],
    poodle: ["miniature", "standard", "toy"],
    pug: [],
    puggle: [],
    pyrenees: [],
    redbone: [],
    retriever: ["chesapeake", "curly", "flatcoated", "golden"],
    ridgeback: ["rhodesian"],
    rottweiler: [],
    saluki: [],
    samoyed: [],
    schipperke: [],
    schnauzer: ["giant", "miniature"],
    setter: ["english", "gordon", "irish"],
    sheepdog: ["english", "shetland"],
    shiba: [],
    shihtzu: [],
    spaniel: [
      "blenheim",
      "brittany",
      "cocker",
      "irish",
      "japanese",
      "sussex",
      "welsh"
    ],
    springer: ["english"],
    stbernard: [],
    terrier: [
      "american",
      "australian",
      "bedlington",
      "border",
      "dandie",
      "fox",
      "irish",
      "kerryblue",
      "lakeland",
      "norfolk",
      "norwich",
      "patterdale",
      "russell",
      "scottish",
      "sealyham",
      "silky",
      "tibetan",
      "toy",
      "westhighland",
      "wheaten",
      "yorkshire"
    ],
    vizsla: [],
    weimaraner: [],
    whippet: [],
    wolfhound: ["irish"]
  }
};

let breedList = [];
let breed = APIResponse.message;

Object.keys(breed).forEach(dog => {
  if (breed[dog].length) {
    breed[dog].forEach(type => {
      breedList.push(
        type.charAt(0).toUpperCase() +
          type.slice(1) +
          " " +
          (dog.charAt(0).toUpperCase() + dog.slice(1))
      );
      // console.log(breedList);
      // console.log(subBreed + " " + dog);
    });
  } else {
    breedList.push(dog.charAt(0).toUpperCase() + dog.slice(1));
    // console.log(dog.charAt(0).toUpperCase() + dog.slice(1));
    // console.log(dog);
  }
  return breedList;
});
document.addEventListener("DOMContentLoaded", () => {
  let button = document.querySelector(".Dog-Picker");
  button.addEventListener("click", () => {
    let picked = document.querySelector(".picked");
    let randomNum = Math.floor(Math.random() * breedList.length);
    picked.innerText = breedList[randomNum];
    button.innerText = "Another One!";
  });
});

// console.log(breedList);

// let myObj = {
//   status: "success",
//   message: {
//     dog: [],
//     cat: ["feral", "house", "tabby"]
//   }
// };
// let arr = [];
// let data = myObj.message;
//
// Object.keys(data).forEach(animal => {
//   if (data[animal].length) {
//     data[animal].forEach(type => {
//       arr.push(type + " " + animal);
//       // console.log(type + " " + animal);
//     });
//   } else {
//     arr.push(animal);
//     // console.log(animal);
//   }
//   return arr;
// });
// console.log(arr);

// let breed = APIResponse.message;d
// let output = [];
//
// Object.keys(breed).forEach(dog => {
//   if (d[animal].length) {
//     data[animal].forEach(type => {
//       // console.log(type + " " + animal);
//     });
//   } else {
//     console.log(animal);
//   }
// });
//
// let breedList = [];
//
// let dogsObj = APIResponse.message;
//
// for (let key in dogsObj) {
//   if (dogsObj[key].length) {
//     console.log(key, "this is the key");
//     dogsObj[key].forEach(dog => {
//       breedList.push(`${dog} ${key}`);
//     });
//     console.log(breedList, "this is the breedlist");
//   } else {
//     breedList.push(key);
//   }
//   return breedList;
// }
// console.log(breadlist);

// });
// });
