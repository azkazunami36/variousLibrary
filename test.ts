import SumLibrary from "./dist/sumLibrary.js";

(async () => {
    const e = SumLibrary.externalModules.path.extname("C:\\Users\\kazun\\OneDrive\\Videos\\01 犬の合唱団.mkv");
    console.log(e.replace(".", ""));
})();
