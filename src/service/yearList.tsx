let years:string[] = [];


for (let year = 1900; year <= 2018; year++) {
    years.push(year.toString());
    
}
years.unshift('Year')
export default years;