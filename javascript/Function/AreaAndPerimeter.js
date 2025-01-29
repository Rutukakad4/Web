function rectangleProperties(length,width){
    const area=length*width;
    const perimeter=2*(length+width);
    return {area,perimeter};
}
const {area,perimeter}=rectangleProperties(8,6);
console.log("Area:",area);
console.log("Perimeter:",perimeter);