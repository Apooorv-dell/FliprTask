import { Prize } from "../service/apiData";

const  categoryList = function (array:Prize[] |null) {
    let categories = new Set();
  
    array?.map((a) => {
      categories.add(a.category);
    });
    return  categories;
  };

  export default categoryList