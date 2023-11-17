import { Prize,  laureates  } from "./apiData";



let NameArray:laureates []=[];

const getDublictes = (arr: Prize[] |null) => {
  arr?.map((a:Prize) => {
         a?.laureates?.map((l:laureates)=>{
            NameArray?.push(l)
         })

  }
  );
  return NameArray;
};

export default getDublictes;
